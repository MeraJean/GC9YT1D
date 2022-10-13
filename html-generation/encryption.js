let characters = [...Array(95).keys()].map(i => String.fromCharCode(i+32))
characters = characters.concat(characters).concat(characters);

function encrypt(text, key) {
    let result = "";
    let keyIdx = 0;

    for (let char of text) {
        result += characters[characters.indexOf(char) + 95 + parseInt(key[keyIdx])];
        keyIdx++;
        if (keyIdx == key.length) keyIdx = 0;
    }

    return result;
}

function decrypt(text, key) {
    let result = "";
    let keyIdx = 0;

    for (let char of text) {
        result += characters[characters.indexOf(char) + 95 - parseInt(key[keyIdx])];
        keyIdx++;
        if (keyIdx == key.length) keyIdx = 0;
    }

    return result;
}

function random() {
    return characters[Math.floor(Math.random() * characters.length)];
}

var isBrowser = (function() {
    try {
      return this === window;
    } catch (e) {
      return false;
    }
  })();
  
if (!isBrowser) {
    module.exports.encrypt = encrypt;
    module.exports.decrypt = decrypt;
    module.exports.random = random;
}

