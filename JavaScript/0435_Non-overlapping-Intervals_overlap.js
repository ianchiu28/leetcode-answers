/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    // Sort by "end" because we want to remove the longest interval.
    intervals.sort((a, b) => a[1] - b[1]);
    let ans = 0;
    let preEnd = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        if (preEnd <= intervals[i][0]) {
            // Not overlapped. Update the previos end
            preEnd = intervals[i][1];
        } else {
            // Overlapped. Should remove it.
            ans++;
        }
    }

    return ans;
};