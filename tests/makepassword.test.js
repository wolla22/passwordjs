// To unit-test the function that generates 'password.enc.txt', you should
//  make sure the unit test does the following check.
// 1. Make sure password.enc.txt does not exist before running the function.
// 2. Make sure password.enc.txt does exist after running the function.
// 3. Make sure the contents of password.enc.txt has correct contents.
// For unit tests, you don't have to have a large input in the beginning.
// Start with smallest input, and add more contents in the input

const p = require('../src/makepassword');
const b = require('../src/passwordjs');
const u = require('../src/utility');
const fs = require('fs');


// Let's say you have a toHash() function in this module

test('Check createPassHash(): if the email:password is converted into email:hashPassword', () => {
    const input = "sm.cho@hello.com:123456";
    const output = "sm.cho@hello.com:8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92";
    expect(p.createPassHash(input)).toBe(output);
});


describe("makepassword should create file", () => {
    test('',() => {
        const fileName = './tests/passwordtest.txt'
        const encFileName = './tests/passwordtest.enc.txt'

        // 1. Make sure password.enc.txt does not exist before running the function.
        if (fs.existsSync(encFileName)) {
            fs.unlinkSync(encFileName);
            console.log("file exists and has been deleted");
        } else {
            console.log("file is not in the directory")
        }
        
        p.makepassword(fileName, encFileName)

        // 2. Make sure password.enc.txt does exist after running the function.
        if (fs.existsSync(encFileName)) {
            console.log("file exists in directory")
        } else {
            console.log("file does not exist in directory")
        }

        // 3. Make sure the contents of password.enc.txt has correct contents.
        var array = u.readFile(encFileName);
        expect(b.login(array, "sm.cho@hello.com", "123456")).toBe(true);
    })
})