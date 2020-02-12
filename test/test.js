const assert = require('assert');
const { 
    is_hebrew_letter, 
    split, 
    syllablize 
} = require('../index.js')

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
        },
        {
            input: "הַשָּׁמַיִם",
            output: ["הַ","שָּׁ","מַ","יִ","ם"]
        },
        {
            input: "וַיַּבְדֵּל",
            output: ["וַ","יַּ","בְ","דֵּ","ל"]
        },
        {
            input: "בּרֵאשִׁית",
            output: ["בּ","רֵ","א","שִׁ","י","ת"]
        }
    ]
    tests.forEach((test) => {
        it(`should split "${test.input}" correctly`, function () {
            assert.equal(JSON.stringify(split(test.input)), JSON.stringify(test.output));
        });
    })
});

describe('syllablize()', function () {
    const tests = [
        {
            input: "שָׁלוֹם",
            output: ["שָׁ","לוֹם"]
        },
        {
            input: "יְרוּשָׁלַיִם",
            output: ["יְ","רוּ",,"שָׁ","לַ","יִם",]
        },
        {
            input: "הַשָּׁמַיִם",
            output: ["הַ","שָּׁ","מַ","יִם"]
        },
        {
            input: "וַיַּבְדֵּל",
            output: ["וַ","יַּבְ","דֵּל"]
        },
        {
            input: "בּרֵאשִׁית",
            output: ["בּ","רֵא","שִׁית"]
        }
    ]
    tests.forEach((test) => {
        it(`should syllablize "${test.input}" correctly`, function () {
            assert.equal(JSON.stringify(syllablize(test.input)), JSON.stringify(test.output));
        });
    })
});
