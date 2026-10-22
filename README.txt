╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║           SKILLPRINT 8.0 — SETUP GUIDE                       ║
║                                                              ║
║           Welcome! Your super app is ready.                  ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝

📁 YOUR FILES
═══════════════════════════════════════════════════════════════

  Skillprint/
  ├── index.html            ← Main app (just double-click to open!)
  ├── config.js             ← Optional API keys
  ├── firebase-config.js    ← Optional real-time chat
  └── README.txt            ← This file


🚀 HOW TO RUN
═══════════════════════════════════════════════════════════════

  1. Double-click index.html
  2. It opens in your browser
  3. That's it — everything works!

  No installation, no server, no internet required (except for
  image generation, news, and Firebase chat).


✅ WHAT WORKS OUT OF THE BOX (No setup needed)
═══════════════════════════════════════════════════════════════

  ✓ 7 full courses with detailed lessons
  ✓ 3 quiz levels (Beginner, Intermediate, Advanced)
  ✓ 8 exam preparations with mock tests
  ✓ 9 PhD Scholar tools (Plagiarism, AI Detector, SPSS Analyzer...)
  ✓ Daily News (curated links)
  ✓ Friend Chat (Local Mode — messages stay on your device)
  ✓ Support ticket system
  ✓ Daily Challenge
  ✓ XP, Levels, Badges, Leaderboard
  ✓ Certificates (printable PDF)
  ✓ AI Image Generator (via Pollinations.ai — FREE)
  ✓ Zipy AI chatbot (with file upload + image generation)


🔑 OPTIONAL SETUP #1 — Real Friend Chat (Firebase)
═══════════════════════════════════════════════════════════════

  Want friends to chat ACROSS devices? Setup takes 10 min, FREE:

  1. Go to: https://console.firebase.google.com/
  2. Click "Add project" → name it → Continue → Create project
  3. Click the "</>" icon (Add web app)
  4. Register app → copy the config values
  5. Paste them into firebase-config.js
  6. Left sidebar: Build → Realtime Database → Create Database
  7. Choose "Start in test mode" → Enable
  8. Save firebase-config.js → reload index.html

  ✅ Done! Real-time chat is now live.


🔑 OPTIONAL SETUP #2 — Live News (NewsAPI)
═══════════════════════════════════════════════════════════════

  1. Go to: https://newsapi.org/register
  2. Sign up free → copy your API key
  3. Paste into config.js as newsApiKey
  4. Save → reload


🔑 OPTIONAL SETUP #3 — Better Image Generation (Gemini)
═══════════════════════════════════════════════════════════════

  Default image gen uses Pollinations.ai (free, no key needed).
  For higher quality, add a Google Gemini key:

  1. Go to: https://aistudio.google.com/app/apikey
  2. Create free API key → copy
  3. Paste into config.js as imageApiKey
  4. Set imageProvider to "gemini"
  5. Save → reload


💰 SETTING UP PAYMENTS (UPI)
═══════════════════════════════════════════════════════════════

  1. Open config.js
  2. Find: upiId: "[YOUR-UPI-ID-HERE]"
  3. Replace with your real UPI ID (e.g., "yourname@paytm")
  4. Save

  When users click "Go Pro" → "Upgrade", they'll see your UPI ID.


🆘 SUPPORT EMAIL
═══════════════════════════════════════════════════════════════

  1. Open config.js
  2. Find: supportEmail: "support@skillprint.app"
  3. Replace with your real email
  4. Save


❓ COMMON QUESTIONS
═══════════════════════════════════════════════════════════════

  Q: Do I need a server?
  A: No! Everything runs in the browser.

  Q: Can I share this app with friends?
  A: Yes! Zip the folder and send it. Or host it for free on
     Netlify, Vercel, or GitHub Pages.

  Q: How do I host it online for free?
  A: 3 easy options:
     1. Netlify: drag the folder to netlify.com/drop
     2. Vercel: vercel.com → import folder
     3. GitHub Pages: upload to a repo → Settings → Pages

  Q: How do users find each other for Friend Chat?
  A: After Firebase setup, users enter their name. Chat rooms are
     automatically created between any two users. You can add a
     "share my invite link" feature later.

  Q: Is my data private?
  A: Yes! Everything is stored in the user's own browser
     (localStorage + IndexedDB). Nothing is uploaded anywhere
     except Firebase chat messages (if you enable it).


📞 NEED HELP?
═══════════════════════════════════════════════════════════════

  Open the app → 🆘 Support → Chat with Zipy
  Or raise a ticket → developer will reply


🎉 ENJOY YOUR SUPER APP!
═══════════════════════════════════════════════════════════════

  Built with ❤️  — Skillprint Team
  Version 8.0