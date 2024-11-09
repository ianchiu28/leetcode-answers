/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = height[left];
    let rightMax = height[right];

    let ans = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            left++;
            leftMax = Math.max(leftMax, height[left]);
            ans += leftMax - height[left];
        } else {
            right--;
            rightMax = Math.max(rightMax, height[right]);
            ans += rightMax - height[right];
        }
    }

    return ans;
};