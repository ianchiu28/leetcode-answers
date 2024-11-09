/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.prefixSumArray = [];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        this.prefixSumArray[i] = sum;
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    if (left === 0) {
        return this.prefixSumArray[right];
    } else {
        return this.prefixSumArray[right] - this.prefixSumArray[left - 1];
    }
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */