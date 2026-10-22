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
  if (!text || text.length < 50) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Text too short' }) };
  }

  try {
    const response = await fetch('https://api.gowinston.ai/v2/plagiarism', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({ text, language: 'en' })
    });

    if (!response.ok) {
      console.error('Winston error:', response.status, await response.text());
      return { statusCode: 502, body: JSON.stringify({ error: 'Plagiarism service unavailable' }) };
    }

    const data = await response.json();

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        plagiarism_percentage: data.score || 0,
        unique_percentage: 100 - (data.score || 0),
        total_words: data.textWordCount || text.split(/\s+/).length,
        sources: (data.sources || []).map(s => ({
          url: s.url || s.sourceUrl || '',
          matched_text: s.severity || s.title || 'Source detected'
        }))
      })
    };
  } catch (e) {
    console.error('Function error:', e);
    return { statusCode: 500, body: JSON.stringify({ error: 'Internal error' }) };
  }
};
