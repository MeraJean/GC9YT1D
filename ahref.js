function ahref() {
    let key = getQueryVariable("k");
    if (!key) {
        document.body.innerText = "Invalid code";
        return;
    }

    const link = decrypt(decodeURIComponent(key), "259291429437704995681848455083")
    if (link.includes("youtu.be")) {
        window.location.replace(link);
        return;
    }

    fetch("./links.json", {
        "referrer": "",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "omit"
    }).then((res) => {
        res.json().then((obj) => {
            window.location.replace(obj[key]);
        });
    });
}

function getQueryVariable(variable) {
    let query = window.location.search.substring(1);
    let vars = query.split('&');
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
}
