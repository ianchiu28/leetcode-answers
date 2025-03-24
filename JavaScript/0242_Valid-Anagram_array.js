/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const countArr = new Array(26).fill(0);
    const aCode = "a".charCodeAt();

    for (let i = 0; i < s.length; i++) {
        countArr[s[i].charCodeAt() - aCode]++;
        countArr[t[i].charCodeAt() - aCode]--;
    }

    return countArr.every((e) => e === 0);
};