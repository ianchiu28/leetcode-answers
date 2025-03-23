/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // Initialize dp array with value 1.
    const dp = new Array(nums.length).fill(1);

    // Start i form index 1 and check all elements before i.
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            // Update the max subsequence length.
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
};