/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    /**
     * When we climb stairs, we can either take 1 step or 2 steps.
     * So, if we want to climb to nth step, we can:
     * 1. climb 1 step from (n - 1)th step
     * 2. climb 2 steps from (n - 2)th step
     * 
     * Therefore, climb to the nth step = climb to the (n - 1)th step + climb to the (n - 2)th step.
     * f(n) = f(n-1) + f(n-2)
     */
    
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