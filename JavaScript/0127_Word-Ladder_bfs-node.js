/**
 * This solution use Node Structure to store the word and related information.
 * However, it's not quite good, because it's too slow to generate the wordMap.
 */

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const wordMap = new Map();

    // Prepare for word list
    for (const word of wordList) {
        const node = new Node(word);
        for (const nextWord of wordList) {
            if (canTransform(word, nextWord)) node.next.push(nextWord);
        }
        wordMap.set(word, node);
    }

    // Prepare for begin word
    const root = new Node(beginWord, true);
    for (const nextWord of wordList) {
        if (canTransform(beginWord, nextWord)) root.next.push(nextWord);
    }

    // Process the queue
    const queue = [root];
    let round = 1;
    while (queue.length > 0) {
        // Process the current round
        const currentRoundSize = queue.length;
        for (let i = 0; i < currentRoundSize; i++) {
            const node = queue.shift();

            // If the current word is the end word, return the round
            if (node.word === endWord) return round;

            // Process the next words
            for (const next of node.next) {
                const nextNode = wordMap.get(next);

                // If the next word is not visited, push it to the queue
                if (nextNode) {
                    queue.push(nextNode);
                    wordMap.delete(next);
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

class Node {
    constructor(word, visited = false) {
        this.word = word;
        this.next = [];
    }
}