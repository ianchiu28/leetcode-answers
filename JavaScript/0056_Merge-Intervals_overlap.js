/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const sorted = intervals.sort((a, b) => a[0] - b[0]);
    const ans = [];
    let pre = sorted[0];
    for (let i = 1; i < sorted.length;i++) {
        let cur = sorted[i];

        if (pre[1] >= cur[0]) {
            // Merge
            pre[1] = Math.max(pre[1], cur[1]);
        } else {
            // Push pre into ans
            ans.push(pre);

            // Let cur become pre
            pre = cur;
        }
    }

    // Push last one
    ans.push(pre);

    return ans;
};