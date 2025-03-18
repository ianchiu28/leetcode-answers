/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    // nums should be the first answer.
    const ans = [nums];

    // Start from length - 1
    let count = nums.length - 1;
    while (count > 0) {
        backtracking(nums, ans, count);
        count--;
    }

    // Add empty array as final answer.
    ans.push([]);

    return ans;
};

const backtracking = (nums, ans, size, path = []) => {
    if (size === 0) {
        ans.push([...path]);
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        // Push in path.
        path.push(nums[i]);

        // Find the rest nums.
        const rest = [...nums].slice(i + 1);

        // Go deep.
        backtracking(rest, ans, size - 1, path);

        // Backtrack.
        path.pop();
    }
};