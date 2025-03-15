/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let min = nums[0];

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[left] <= nums[mid]) {
            // Left part is sorted
            min = Math.min(min, nums[left]);

            // Check right part
            left = mid + 1;
        } else {
            // Right part is sorted
            min = Math.min(min, nums[mid]);

            // Check left part;
            right = mid - 1;
        }
    }

    return min;
};