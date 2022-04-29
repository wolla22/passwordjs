// Make tests when you have sub functions in this module.
// passwordjs() is tested by acceptance tests (acceptance.bat)
const u = require("../src/utility");
const b = require("../src/passwordjs");
const p = require("../src/makepassword");

test("Check login() to check validity of file contents", () => {
    const encFileName = './tests/passwordtest.enc.txt';
    var array = u.readFile(encFileName);
    expect(b.login(array, "sm.cho@hello.com", "123456")).toBe(true);
});



