var assert = require('assert');
const { is_hebrew_letter, split } = require('../index.js')
describe('is_hebrew_letter()', function() {
    const tests = [
        {
            input: "א",
            output: true
        },
        {
            input: "a",
            output: false
        }
    ]
    tests.forEach((test) => {
        it(`should confirm that "${test.input}" is ${test.output? "" : "not "}a hebrew letter`, function () {
            assert.equal(is_hebrew_letter(test.input), test.output);
        });
    })
});

describe('split()', function () {
    const tests = [
        {
            input: "שָׁלוֹם",
            output: ["שָׁ","ל","וֹ","ם"]
        },
        {
            input: "יְרוּשָׁלַיִם",
            output: ["יְ","ר","וּ","שָׁ","לַ","יִ","ם"]
        }
    ]
    tests.forEach((test) => {
        it(`should split "${test.input}" correctly`, function () {
            assert.equal(JSON.stringify(split(test.input)), JSON.stringify(test.output));
        });
    })
});
