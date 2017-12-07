var ipDiv = document.getElementById('ip');
if (window.fetch) {
    fetch("http://ip.jsontest.com").then((response) => response.json())
        .then((response) => {
            ipDiv.innerHTML = `Your IP Address is ${response.ip}`;
        });
} else {
    var chromeURL = 'https://www.google.ca/chrome/browser/desktop/index.html?brand=CHBD&gclid=CjwKCAiA6qPRBRAkEiwAGw4Sds1pEH-l4-GW-Pjths88f_Jef172SFuen7uAdueqXD1g8E8FaNlAWhoCYzcQAvD_BwE&gclsrc=aw.ds&dclid=CMzlxpe7-NcCFRGdyAodOWcHeg';
    ipDiv.innerHTML = 'Your browser is not supported, please <a href="'+chromeURL+'" target="_blank">download another one</a>';
}
