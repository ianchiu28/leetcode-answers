/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    // add 0 bar on the right to trigger pop mechanism
    heights.push(0);

    const size = heights.length;
    let monoStack = [];
    let maxArea = 0;

    for (let i = 0; i < size; i++) {
        const cur = heights[i];
        while (monoStack.length && cur < heights[monoStack[monoStack.length - 1]]) {
            const popHeight = heights[monoStack.pop()];
            const leftIdx = monoStack[monoStack.length - 1] ?? -1;
            const width = i - (leftIdx + 1);
            const area = width * popHeight;
            maxArea = Math.max(maxArea, area);
        }
        monoStack.push(i);
    }

    return maxArea;
};