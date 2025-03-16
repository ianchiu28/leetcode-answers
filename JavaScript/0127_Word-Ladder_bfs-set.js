/**
 * This solution use Set to store the word and related information.
 * However, it's much faster than the Node Structure, because we don't need to generate the wordMap.
 * But it's not the best solution, because it's still cost too much time to make sure two word is transformable.
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

            // Process the next words
            for (const word of wordListSet.values()) {
                if (canTransform(current, word)) {
                    queue.push(word);
                    wordListSet.delete(word);
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