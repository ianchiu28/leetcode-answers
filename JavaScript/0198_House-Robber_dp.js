/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    /**
     * When it comes to robbing houses, we can either rob the current house or not.
     * If we rob the current house, we cannot rob the previous house.
     * If we do not rob the current house, we can rob the previous house.
     * 
     * So, for the nth house:
     * 1. rob the nth house, then the profit is nums[n] + profit of (n-2)th house
     * 2. do not rob the nth house, then the profit is equal to the profit of (n-1)th house
     * 
     * maxProfit(n) = max(nums[n] + maxProfit(n-2), maxProfit(n-1))
     */
    const dp = [];
    for (let i = 0; i < nums.length; i++) {
        const robProfit = nums[i] + (dp[i - 2] || 0);
        const notRobProfit = dp[i - 1] || 0;
        dp[i] = Math.max(robProfit, notRobProfit);
    }

    return dp[nums.length - 1];
};