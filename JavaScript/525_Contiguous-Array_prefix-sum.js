/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let prefixSumMap = {
        0: -1
    };
    let sum = 0;
    let ans = 0;
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i] === 1 ? 1 : -1;

        if (prefixSumMap[sum] !== undefined) {
            ans = Math.max(ans, i - prefixSumMap[sum]);
        } else {
            prefixSumMap[sum] = i;
        }
    }

    return ans;
};