const fs = require('fs');
const { createHash } = require('crypto');

function readFile(fileName) {
    if (!fs.existsSync(fileName)) {
        throw `${fileName} does not exist!`
    }
    else {
        try {
            let text = fs.readFileSync(fileName).toString('utf-8');
            let textByLine = text.split("\n");
            return textByLine;
        } catch (err) {
            console.log(err)
        }
    }
}

function writeFile(ar, fileName) {
    if (fs.existsSync(fileName)) {
        fs.unlinkSync(fileName);
        try {
            let res = ar.join("\n")
            fs.writeFileSync(fileName, res)
        } catch (err) {
            console.log(err)
        }
    }
    else {
        try {
            let res = ar.join("\n")
            fs.writeFileSync(fileName, res)
        } catch (err) {
            console.log(err)
        }
    }
}

function hash(input) {
    return createHash('sha256').update(input).digest('hex'); // never use md5
}

module.exports = {readFile, writeFile, hash};