/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while(left < right) {
        const current = numbers[left] + numbers[right];
        if (current < target) {
            left++;
        } else if (current > target) {
            right--;
        } else {
            return [left + 1, right + 1];
        }
    }
};