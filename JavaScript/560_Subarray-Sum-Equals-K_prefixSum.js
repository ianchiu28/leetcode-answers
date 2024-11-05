/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const prefixSumMap = new Map();
    prefixSumMap.set(0, 1);

    let sum = 0;
    let ans = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        
        if (prefixSumMap.get(sum - k)) {
            ans += prefixSumMap.get(sum - k);
        }
        
        prefixSumMap.set(sum, (prefixSumMap.get(sum) || 0) + 1);
    }

    return ans;
};
