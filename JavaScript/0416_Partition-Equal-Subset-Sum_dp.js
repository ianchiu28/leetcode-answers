/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    // Should be false if nums only has one element.
    if (nums.length === 1) return false;

    const sum = nums.reduce((pre, cur) => pre + cur, 0);

    // Should be false if sum is not even.
    if (sum % 2 !== 0) return false;

    // Target will be sum / 2.
    const target = sum / 2;

    // Create a dp set to store the possible sum form 0 ~ i
    let dp = new Set([0]);
    for (let i = 0; i < nums.length; i++) {
        // Must use a new set to store the new sum.
        newDp = new Set();
        for (const item of dp) {
            const possibleSum = nums[i] + item;

            // Return true if we found a possible = target.
            if (possibleSum === target) return true;

            // Save it.
            newDp.add(possibleSum);
        }

        // After a full run, add new possible sum into dp set.
        dp = new Set([...dp, ...newDp])
    }

    return false;
};