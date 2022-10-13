const { readFileSync, writeFileSync } = require("fs");
const { random } = require("./encryption");

const input = readFileSync("input.html", "utf-8");
let output = "";

let inTag = false;
let inEncoding = false;
for (const c of input.split("")) {
    switch (c) {
        case "<":
            inTag = true;
            output += c;
            break;

        case ">":
            output += c;
            inTag = false;
            break;

        case "&":
            inEncoding = true;
            output += `<a href="${getLink()}">`;
            output += c;
            break;
        
        case ";":
            output += c;
            output += "</a>";
            inEncoding = false;
            break;

        default:
            if (inTag || inEncoding) {
                output += c;
                continue;
            }

            output += `<a href="${getLink()}">`;
            output += c;
            output += "</a>";

            break;
    }
}

writeFileSync("output.html", output);

function getLink() {
    return "https://merajean.github.io/GC9YT1D/index.html?k=" + encodeURIComponent(generateRandom("https://youtu.be/123456789AB".length));
}

function generateRandom(length) {
    let result = "";
    for (let i = 0; i < length; i++) result += random();
    return result;
}