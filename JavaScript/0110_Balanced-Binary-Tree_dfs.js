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
 * @return {boolean}
 */
var isBalanced = function(root) {
    const depth = dfs(root);
    return depth !== -1;
};

const dfs = (root) => {
    if (!root) return 0;

    const left = dfs(root.left);
    if (left === -1) return -1;

    const right = dfs(root.right);
    if (right === -1) return -1;

    if (Math.abs(left - right) > 1) return -1;
    
    return Math.max(left, right) + 1;
};