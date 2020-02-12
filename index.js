const is_hebrew_letter = (letter) => {
    let re = /[א|ב|ג|ד|ה|ו|ז|ח|ט|י|כ|ך|ל|מ|ם|נ|ן|ס|ע|פ|ף|צ|ץ|ק|ר|ש|ת]/
    return re.test(letter)
}

const split = (word) => {
    let parts = []
    let chunk = ""
    let isFirstLetter = true;
    word.split("").forEach(el => {
        if (isFirstLetter) {
            chunk += el;
            isFirstLetter = false;
        } else {
            if (is_hebrew_letter(el)) {
                parts.push(chunk);
                chunk = el;
            } else {
                chunk += el;
            }
        }
    });
    parts.push(chunk);
    return parts;
}

const syllablize = (word) => {
    let parts = split(word);
    let is_first_part = true;
    let syllable = "";
    let syllables = [];
    parts.forEach(part => {
        if (is_first_part) {
            syllable += part;
            is_first_part = false;
        } else {
            // if there is a shva then it's the end of a syllable
            if (part.includes("ְ")) {
                syllable += part;
                syllables.push(syllable);
                syllable = ""
            }
        }
    })

    return syllables;
}

module.exports = {
    is_hebrew_letter,
    split,
    syllablize
}