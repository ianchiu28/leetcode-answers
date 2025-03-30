/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const bar = nums.length / 2;
    const map = new Map();

    for (const num of nums) {
        const count = (map.get(num) || 0) + 1;
        if (count > bar) return num;

        map.set(num, count);
    }    
};