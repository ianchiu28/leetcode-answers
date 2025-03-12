/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let merged = newInterval;
    let ans = [];

    while (intervals.length) {
        const interval = intervals.shift();

        if (interval[1] < merged[0]) {
            // interval is placed before merged
            ans.push(interval);
        } else if (merged[1] < interval[0]) {
            // merged is placed before interval
            ans.push(merged);
            merged = interval;
        } else {
            // Merge them
            merged = [
                Math.min(merged[0], interval[0]),
                Math.max(merged[1], interval[1])
            ];
        }
    }

    ans.push(merged);

    return ans;
};  