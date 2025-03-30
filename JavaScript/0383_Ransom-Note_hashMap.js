/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const charArr = new Array(26).fill(0);
    const codeA = "a".charCodeAt();
    for (const char of magazine) {
        charArr[char.charCodeAt() - codeA]++;
    }

    for (const char of ransomNote) {
        const curCode = char.charCodeAt() - codeA;
        if (charArr[curCode] === 0) return false;
        charArr[curCode]--;
    }

    return true;
};