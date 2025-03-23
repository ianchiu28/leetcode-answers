/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    // Initialize dp array with value 0.
    const dp = Array.from(
        { length: text1.length },
        () => Array.from({ length: text2.length })
    );

    // Iterate through the text1 and text2.
    for (let i = 0; i < text1.length; i++) {
        for (let j = 0; j < text2.length; j++) {
            // If the characters are the same, then the value is the value of the previous diagonal + 1.
            if (text1[i] === text2[j]) {
                dp[i][j] = (dp[i - 1]?.[j - 1] || 0) + 1;
            } else {
                // If the characters are not the same, then the value is the maximum of the value of the previous row or the previous column.
                const top = dp[i - 1]?.[j] || 0;
                const left = dp[i][j - 1] || 0;
                dp[i][j] = Math.max(top, left);
            }
        }
    }

    // Return the value of the last element of the dp array.
    return dp[text1.length - 1][text2.length - 1];
};