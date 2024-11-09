/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    const size = nums.length;

    // sum of first sub array
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    // start from the second sub array
    let left = 1;
    let right = k;
    let max = sum;

    while (right < size) {
        sum = sum - nums[left - 1] + nums[right];
        max = Math.max(max, sum);

        left++;
        right++;
    }

    return max / k;
};