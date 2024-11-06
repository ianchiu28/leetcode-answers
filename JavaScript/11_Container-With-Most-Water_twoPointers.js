/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let ans = -Infinity;
    
    while (left < right) {
        const h = Math.min(height[left], height[right]);
        const w = right - left;

        ans = Math.max(ans, h * w);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return ans;
};