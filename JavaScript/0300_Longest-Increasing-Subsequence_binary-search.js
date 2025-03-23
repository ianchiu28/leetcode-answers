/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const ans = [];

    for (let i = 0; i < nums.length; i++) {
        // Push if length = 0 or nums[i] > tail.
        if (ans.length === 0 || ans[ans.length - 1] < nums[i]) {
            ans.push(nums[i]);
            continue;
        }

        // Binary Search for the replace position.
        let left = 0, right = ans.length - 1;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (ans[mid] < nums[i]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        // left will be the position which is greater than nums[i]. Replace it.
        ans[left] = nums[i];
    }

    return ans.length;
};