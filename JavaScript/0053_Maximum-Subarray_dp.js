/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0];
    let total = 0;
    for (const num of nums) {
        if (total < 0) total = 0;

        total += num;
        max = Math.max(max, total);
    }

    return max;
};