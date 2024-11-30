const pronouns = ["i", "you", "he", "she", "it", "we", "they"];

function pronoun(str) {
    let result = {};
    let words = str.split(/\s+/).map(word => word.replace(/[.,!?]/g, '').toLowerCase());

    for (let i = 0; i < words.length; i++) {
        if (pronouns.includes(words[i])) {
            if (!result[words[i]]) {
                result[words[i]] = { count: 0, word: [] };
            }

            result[words[i]].count++;

            const nextWord = findNextWord(words.slice(i + 1));
            if (nextWord) {
                result[words[i]].word.push(nextWord);
            }
        }
    }

    return result;
}

function findNextWord(words) {
    for (let i = 0; i < words.length; i++) {
        if (pronouns.includes(words[i])) {
            return;
        } else {
            return words[i];
        }
    }
}