/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);

    let ans = [];

    const size = nums.length;
    for (let i = 0; i < size - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicate elements

        let left = i + 1;
        let right = size - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum < 0) {
                left++;
            } else if (sum > 0) {
                right--;
            } else {
                ans.push([nums[i], nums[left], nums[right]]);

                while(left < right && nums[left] === nums[left + 1]) left++; // skip duplicate elements
                while(left < right && nums[right] === nums[right - 1]) right--; // skip duplicate elements
                left++; // move to next element
                right--; // move to next element
            }
        }
    }

    return ans;
};