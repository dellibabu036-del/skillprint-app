exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const apiKey = process.env.PLAGIARISM_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ error: 'API key missing' }) };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON' }) };
  }

  const { text } = payload;
  
  // 1. Validation FIRST (Prevents crashes if text is empty)
  if (!text || text.trim().length < 50) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Text too short (50+ chars required)' }) };
  }

  // 2. Truncate text to save credits (Max 1250 words)
  const MAX_WORDS = 1250;
  let words = text.trim().split(/\s+/);
  const truncatedText = words.length > MAX_WORDS 
    ? words.slice(0, MAX_WORDS).join(' ') 
    : text;

  try {
    const response = await fetch('https://api.gowinston.ai/v2/plagiarism', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      // 3. USE truncatedText HERE (This was missing in your file!)
      body: JSON.stringify({ text: truncatedText, language: 'en' })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Winston error:', response.status, data);
      return { statusCode: 502, body: JSON.stringify({ error: data.description || 'Plagiarism service unavailable' }) };
    }

    // 4. Parse the v2 response correctly
    const score = data.result?.score ?? 0;
    const wordCount = data.result?.textWordCounts ?? truncatedText.split(/\s+/).length;
    const sources = data.sources || [];

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        plagiarism_percentage: score,
        unique_percentage: 100 - score,
        total_words: wordCount,
        sources: sources.map(s => ({
          url: s.url || s.sourceUrl || '',
          matched_text: s.title || s.severity || 'Source detected'
        }))
      })
    };
  } catch (e) {
    console.error('Function error:', e);
    return { statusCode: 500, body: JSON.stringify({ error: 'Internal error' }) };
  }
};
