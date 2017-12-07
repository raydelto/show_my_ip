var ipDiv = document.getElementById('ip');
var endpointUrl = 'http://ip.jsontest.com';

function handleResponse(response){
    ipDiv.innerHTML = 'Your IP Address is ' + response.ip;
}

if (window.fetch) {
    fetch(endpointUrl).then(function (response) {return response.json();})
        .then(handleResponse);
} else {
    var legacyFetch;
    legacyFetch = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    legacyFetch.open('GET',endpointUrl, true);
    legacyFetch.onload = function(){
        handleResponse(JSON.parse(legacyFetch.responseText));
    }
    legacyFetch.send();
}
