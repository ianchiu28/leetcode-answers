/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let maxArea = -1;

    for (let i = 0; i < heights.length; i++) {
        const cur = heights[i];

        // Find left index
        let leftIndex = i;
        while (leftIndex > 0 && heights[leftIndex - 1] >= cur) {
            leftIndex--;
        }

        // Find right index
        let rightIndex = i;
        while (rightIndex < heights.length - 1 && heights[rightIndex + 1] >= cur) {
            rightIndex++;
        }

        const width = (rightIndex - leftIndex + 1);
        const area = cur * width;

        maxArea = Math.max(maxArea, area);
    }

    return maxArea;
};