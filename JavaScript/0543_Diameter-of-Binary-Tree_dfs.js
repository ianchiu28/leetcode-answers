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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    const ans = { max: 0 };
    dfs(root, ans);
    return ans.max - 1;
};

const dfs = (root, ans) => {
    if (!root) return 0;

    const left = dfs(root.left, ans);
    const right = dfs(root.right, ans);

    ans.max = Math.max(ans.max, left + right + 1);

    return Math.max(left, right) + 1;
};