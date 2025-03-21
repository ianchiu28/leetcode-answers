/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 3) return n;

    let pre1 = 2;
    let pre2 = 3;
    for (let i = 3; i < n; i ++) {
        const cur = pre1 + pre2;
        pre1 = pre2;
        pre2 = cur;
    }

    return pre2;


    // if (n <= 3) return n;

    // const dp = [1, 2, 3];
    // for (let i = 3; i < n; i ++) {
    //     dp[i] = dp[i - 1] + dp[i - 2];
    // }

    // return dp[n - 1];
};