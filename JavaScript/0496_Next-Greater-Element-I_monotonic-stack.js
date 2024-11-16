/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let ansMap = new Map();
    let monoStack = [];
    for (let i = nums2.length - 1; i >= 0; i--) {
        const cur = nums2[i];

        // pop value which is less than current value
        while (monoStack[monoStack.length - 1] < cur) {
            monoStack.pop();
        }

        // set ans
        ansMap.set(cur, monoStack[monoStack.length - 1] || -1);

        // push into monoStack
        monoStack.push(cur);
    }

    for (let j = 0; j < nums1.length; j++) {
        nums1[j] = ansMap.get(nums1[j]);
    }

    return nums1;
};