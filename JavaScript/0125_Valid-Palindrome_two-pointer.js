/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const parsedString = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

    let left = 0, right = parsedString.length - 1;
    while (left <= right) {
        if (parsedString[left] !== parsedString[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};