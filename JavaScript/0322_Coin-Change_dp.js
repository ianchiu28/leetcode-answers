/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // Initialize dp array.
    let dp = new Array(amount + 1).fill(Infinity);

    // Set dp[0] to 0.
    dp[0] = 0;

    // Make dp array.
    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (i >= coin) {
                // number of coins of ith = number of coins of (i-coin)th + 1
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
};