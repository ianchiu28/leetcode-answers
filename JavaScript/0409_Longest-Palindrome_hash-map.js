/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const sMap = {};
    for (const char of s) {
        sMap[char] = (sMap[char] || 0) + 1;
    }

    let result = 0;
    let oddPlusValue = 0;
    for (const value of Object.values(sMap)) {
        if (value % 2 === 1) {
            result += value - 1;
            oddPlusValue = 1;
        } else {
            result += value;
        }
    }

    return result + oddPlusValue;
};