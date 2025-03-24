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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    dfs(root);
    return root;
};

const dfs = (root) => {
    if (!root) return;

    const tmp = root.left;
    root.left = root.right;
    root.right = tmp;

    dfs(root.left);
    dfs(root.right);
};