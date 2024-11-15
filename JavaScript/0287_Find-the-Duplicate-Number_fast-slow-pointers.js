/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // find the index of meet point in cycle
    let slow = 0;
    let fast = 0;
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);
    
    // reset slow to index 0, find the start index in cycle
    slow = 0;
    do {
        slow = nums[slow];
        fast = nums[fast];
    } while (slow !== fast);

    return slow;
};