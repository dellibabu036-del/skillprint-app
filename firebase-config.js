/* ============================================================
   Skillprint 8.0 — Firebase Configuration (OPTIONAL)
   ============================================================
   
   Firebase enables REAL cross-device friend chat.
   
   WITHOUT THIS FILE:
   - Friend Chat works in "Local Mode" (messages saved on your
     own device only — good for testing, not for real chat).
   
   WITH THIS FILE:
   - Friend Chat works across devices, in real-time, for FREE.
   
   ═══════════════════════════════════════════════════════════════
   HOW TO GET YOUR FREE FIREBASE CONFIG (10 minutes)
   ═══════════════════════════════════════════════════════════════
   
   1. Go to: https://console.firebase.google.com/
   2. Click "Add project" → name it "skillprint" → Continue
   3. Skip Google Analytics (optional) → Create project
   4. Once created, click the "</>" icon (Web app)
   5. Register app name: "Skillprint" → Register app
   6. You'll see a config object — COPY IT
   7. Paste the values below (apiKey, authDomain, etc.)
   8. In the left sidebar: Build → Realtime Database → Create
   9. Choose "Start in test mode" → Enable
   
   That's it! Save this file, reload index.html, and real chat works.
   
   ═══════════════════════════════════════════════════════════════
   */

window.FIREBASE_CONFIG = {

  /* -----------------------------------------------------------
     PASTE YOUR FIREBASE CONFIG VALUES BELOW
     -----------------------------------------------------------
     Leave them as "PASTE_..." if you haven't set up Firebase yet.
     The app will use Local Mode instead.
  ----------------------------------------------------------- */
  apiKey: "AIzaSyDvwiYfZJP0DgZCVhbKRkUqu4Rjb2yML1o",
  authDomain: "skillprint-c0141.firebaseapp.com",
  databaseURL: "https://skillprint-c0141-default-rtdb.firebaseio.com/",
  projectId: "skillprint-c0141",
  storageBucket: "skillprint-c0141.firebasestorage.app",
  messagingSenderId: "832301191167",
  appId: "1:832301191167:web:7fd8dce5f9e85b3beb21ca"

  /* -----------------------------------------------------------
     EXAMPLE (what your config might look like):
     
     apiKey: "AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
     authDomain: "skillprint-abc12.firebaseapp.com",
     databaseURL: "https://skillprint-abc12-default-rtdb.firebaseio.com",
     projectId: "skillprint-abc12",
     storageBucket: "skillprint-abc12.appspot.com",
     messagingSenderId: "123456789012",
     appId: "1:123456789012:web:abcdef1234567890"
     
     Note: databaseURL is the MOST IMPORTANT one for chat.
     You get it from: Realtime Database → Data tab → top of page.
  ----------------------------------------------------------- */

};

/* ============================================================
   ⚠️ DO NOT EDIT BELOW THIS LINE
   ============================================================
   This loader activates Firebase when config is valid.
   ============================================================ */

(function loadFirebaseIfConfigured(){
  const cfg = window.FIREBASE_CONFIG;
  if(!cfg || !cfg.apiKey || cfg.apiKey.startsWith('PASTE')){
    console.log('💬 Firebase not configured — Friend Chat in Local Mode');
    return;
  }
  console.log('🔥 Firebase config detected — loading SDK...');

  // Load Firebase SDK v9+ (compat mode)
  const scripts = [
    'https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js',
    'https://www.gstatic.com/firebasejs/9.22.0/firebase-database-compat.js'
  ];

  let loaded = 0;
  scripts.forEach(src=>{
    const s = document.createElement('script');
    s.src = src;
    s.onload = ()=>{
      loaded++;
      if(loaded === scripts.length) initFirebaseApp();
    };
    s.onerror = ()=>console.warn('Failed to load', src);
    document.head.appendChild(s);
  });

  function initFirebaseApp(){
    try {
      firebase.initializeApp(cfg);
      window._firebaseDB = firebase.database();
      console.log('✅ Firebase ready — real chat enabled!');
      // Show welcome toast if UI ready
      setTimeout(()=>{
        if(typeof showToast === 'function'){
          showToast('🔥 Real-time chat enabled!', 'success', 4000);
        }
      }, 2000);
    } catch(e){
      console.error('Firebase init error:', e);
    }
  }

  /* -----------------------------------------------------------
     Expose chat function to index.html
     index.html calls window.firebaseSendMessage(friendId, text)
     when a user sends a message. This syncs to Firebase.
  ----------------------------------------------------------- */
  window.firebaseSendMessage = function(friendId, text){
    if(!window._firebaseDB) return;
    const myId = localStorage.getItem('userName') || 'anonymous';
    const ref = window._firebaseDB.ref('chats/' + [myId, friendId].sort().join('_'));
    ref.push({
      from: myId,
      text: text,
      time: Date.now()
    });
  };

  /* -----------------------------------------------------------
     Listen for new messages from the other user
  ----------------------------------------------------------- */
  window.firebaseListenMessages = function(friendId, callback){
    if(!window._firebaseDB) return;
    const myId = localStorage.getItem('userName') || 'anonymous';
    const ref = window._firebaseDB.ref('chats/' + [myId, friendId].sort().join('_'));
    ref.limitToLast(50).on('child_added', snap=>{
      const msg = snap.val();
      if(msg && msg.from !== myId){
        callback(msg);
      }
    });
  };
})();