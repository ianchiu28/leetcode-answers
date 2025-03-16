/**
 * This solution use Set to store the word and related information.
 * Also, we try to optimize the time cost by trying to change each character in the current word.
 */

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    // Make a set of the word list
    const wordListSet = new Set(wordList);

    // If the end word is not in the word list, return 0
    if (!wordListSet.has(endWord)) return 0;

    // Process the queue
    const queue = [beginWord];
    let round = 1;
    while (queue.length > 0) {
        // Process the current round
        const currentRoundSize = queue.length;
        for (let i = 0; i < currentRoundSize; i++) {
            const current = queue.shift();

            // If the current word is the end word, return the round
            if (current === endWord) return round;

            // Try changing each character in the current word.
            for (let j = 0; j < current.length; j++) {
                const originalChar = current[j];

                for (let c = 97; c <= 122; c++) { // ASCII 'a' to 'z'
                    const newChar = String.fromCharCode(c);

                    // If the new character is the same as the original character, skip it.
                    if (newChar === originalChar) continue; 

                    const newWord = current.slice(0, j) + newChar + current.slice(j + 1);

                    // If the new word is in the word set, add it to the queue.
                    if (wordListSet.has(newWord)) {
                        queue.push(newWord);
                        wordListSet.delete(newWord);
                    }
                }
            }
        }
        round++;
    }

    return 0;
};

const canTransform = (beginWord, endWord) => {
    let notEqualCount = 0;
    for (let i = 0; i < endWord.length; i++) {
        if (beginWord[i] !== endWord[i]) {
            notEqualCount++;
        }
    }
    return notEqualCount === 1;
};