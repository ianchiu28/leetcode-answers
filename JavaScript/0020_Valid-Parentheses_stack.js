/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const bracketMap = {
        "}": "{",
        "]": "[",
        ")": "("
    };

    for (const char of s) {
        const top = stack[stack.length - 1] || null;

        // Push if left bracket (no bracket map).
        if (!bracketMap[char]) {
            stack.push(char);
        } else {
            // Pop if matched.
            if (top === bracketMap[char]) {
                stack.pop();
            } else {
                // Early return if wrong matched.
                return false;
            }
        }
    }

    return stack.length === 0;
};