/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const ans = [];

    dfs(nums, ans);

    return ans;
};

const dfs = (nums, ans, path = []) => {
    // End of the path.
    if (nums.length === 0) {
        ans.push([...path]);
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        // Push into path.
        path.push(nums[i]);

        // Find the rest.
        const rest = [...nums];
        rest.splice(i, 1);

        // Go deep.
        dfs(rest, ans, path);

        // Backtrack.
        path.pop();
    }
};