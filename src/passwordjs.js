'use strict'
const {readFile, hash} = require('./utility')


function passwordjs() {
    if (process.argv.length != 5) return 'false';

    var filename = process.argv[2]
    var email = process.argv[3]
    var password = process.argv[4]
    var file = readFile(filename);
    var checkLogin = login(file, email, password);
    return checkLogin;
}

function login(fileArray, emailInput, passwordInput) {
    for(var i=0;i<fileArray.length;i++) {
        let [ emailVerify, passwordVerify ] = fileArray[i].split(':');
        var passwordInputHash = hash(passwordInput);
        if (emailVerify === emailInput && passwordInputHash === passwordVerify) {
            return true;
        }
    }
    return false;
}

if (require.main === module) {
    console.log(passwordjs()) // print out true or false
}

module.exports = { login }
