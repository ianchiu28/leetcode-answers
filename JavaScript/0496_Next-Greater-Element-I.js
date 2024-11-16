/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let ans = [];
    for (let i = 0; i < nums1.length; i++) {
        ans[i] = -1;
    }

    for (let i = 0; i < nums1.length; i++) {
        const val = nums1[i];

        let isFound = false;
        for (let j = 0; j < nums2.length; j++) {
            if (isFound && nums2[j] > val) {
                ans[i] = nums2[j];
                break;
            }

            if (nums2[j] === val) {
                isFound = true;
            }
        }
    }

    return ans;
};