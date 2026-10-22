/* ============================================================
   Skillprint — Configuration File
   ============================================================
   All placeholder slots for your details.
   Fill these in when you're ready — the app works 100%
   without them (features will just show "coming soon").
   ============================================================ */

window.SKILLPRINT_CONFIG = {

  /* ============================================================
     SECTION 1 — YOUR DETAILS (Fill Later)
     ============================================================ */

  // Business name shown in nav and modals
  businessName: "Skillprint",

  // Support email — used in Support page "Email Support" button
  // Replace with your real email when ready
  supportEmail: "support@skillprint.app",

  // Developer name (shown in About section)
  developerName: "Skillprint Team",

  /* ============================================================
     SECTION 2 — UPI PAYMENT (Fill Later)
     ============================================================ */

  // Your real UPI ID (e.g., "yourname@paytm")
  // Leave as-is until you're ready to accept payments
  upiId: "[YOUR-UPI-ID-HERE]",

  // Payee name shown in UPI apps (defaults to businessName if blank)
  upiPayeeName: "",

  // Payment amounts (in ₹) — change if you want different pricing
  proMonthlyPrice: 99,
  proYearlyPrice: 799,

  /* ============================================================
     SECTION 3 — CERTIFICATE DETAILS (Fill Later)
     ============================================================ */

  // Your name/signature printed on certificates
  certificateSignatory: "[YOUR NAME HERE]",

  // Certificate verification base URL
  // When you host the app, put your site URL here (e.g., "https://skillprint.netlify.app")
  // This makes certificate QR codes point to the verification page
  verificationBaseUrl: "",

  // Certificate seal image URL (optional — leave blank to use emoji)
  certificateSealUrl: "",

  /* ============================================================
     SECTION 4 — API KEYS (Optional, Fill Later)
     ============================================================ */

  // Gemini AI key (optional — enables real AI responses in Zipy for Pro users)
  // Free tier at: https://aistudio.google.com/app/apikey
  // Note: Google cut free tier to 20 req/day as of Dec 2025
  geminiApiKey: "",

  // NewsAPI key (optional — RSS feeds work without it)
  newsApiKey: "",

  /* ============================================================
     SECTION 5 — CLOUDFLARE R2 STORAGE (Fill Later for uploads)
     ============================================================ */

  // R2 endpoint URL (e.g., "https://xxxx.r2.cloudflarestorage.com")
  r2Endpoint: "",

  // R2 public bucket URL (e.g., "https://files.skillprint.app")
  r2PublicUrl: "",

  // R2 access key (keep private!)
  r2AccessKey: "",

  /* ============================================================
     SECTION 6 — FIREBASE CLOUD MESSAGING (Fill Later for push)
     ============================================================ */

  // FCM VAPID key (get from Firebase Console → Project Settings → Cloud Messaging)
  fcmVapidKey: "",

  /* ============================================================
     APP INFO (internal — don't change)
     ============================================================ */

  appName: "Skillprint",
  version: "1.0"

};