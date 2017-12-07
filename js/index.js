const getIp = () => {
    fetch("http://ip.jsontest.com").then((response) => response.json())
    .then((response) => {
        const ipDiv = document.getElementById('ip');
        ipDiv.innerHTML = `Your IP Address is ${response.ip}`;
    });
}

getIp();