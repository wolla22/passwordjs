'use strict'
const {readFile, writeFile, hash} = require('./utility')


function makepassword(fileName, encFileName) {
    // read contents of the file
    var passArray = readFile(fileName);
    var encryptArray = passArray.map(v => createPassHash(v));
    writeFile(encryptArray, encFileName);
}

function createPassHash(passArrayElem) {
        let [email, password] = passArrayElem.split(':');
        var hashPass = hash(password);
        var emailHash = email + ":" + hashPass;
        console.log(emailHash);
        return emailHash;
}

if (require.main === module) {
    makepassword('./password.txt', './password.enc.txt');
}

module.exports = {createPassHash, makepassword}





