const is_hebrew_letter = (letter) => {
    let re = /[א|ב|ג|ד|ה|ו|ז|ח|ט|י|כ|ך|ל|מ|ם|נ|ן|ס|ע|פ|ף|צ|ץ|ק|ר|ש|ת]/
    return re.test(letter)
}

const split = (word) => {
    let syllables = []
    let syllable = ""
    let isFirstLetter = true;
    word.split("").forEach(el => {
        if (isFirstLetter) {
            syllable += el;
            isFirstLetter = false;
        } else {
            if (is_hebrew_letter(el)) {
                syllables.push(syllable);
                syllable = el;
            } else {
                syllable += el;
            }
        }
    });
    syllables.push(syllable);
    return syllables;
}

module.exports = {
    is_hebrew_letter,
    split
}