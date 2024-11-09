/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const chars = s.split("");
    const size = chars.length;
    
    let left = 0;
    let right = 0;
    let charMap = new Map();
    let ans = 0;

    while (right < size) {
        const nextChar = chars[right];

        while (charMap.get(nextChar)) {
            charMap.delete(chars[left]);
            left++;
        }

        charMap.set(nextChar, 1);
        right++;
        ans = Math.max(ans, right - left);
    }

    return ans;
};