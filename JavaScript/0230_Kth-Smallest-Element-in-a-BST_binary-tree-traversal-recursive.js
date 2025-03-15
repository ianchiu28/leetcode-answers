/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const ans = [];
    dfs(root, ans);

    return ans[k - 1];
};

const dfs = (root, ans) => {
    if (!root) return;

    // Go left
    dfs(root.left, ans);
    
    // Add val
    ans.push(root.val);

    // Go right
    dfs(root.right, ans);
}