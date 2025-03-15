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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const ans = [];
    dfs(root, "", ans);

    return ans;
};

const dfs = (root, path, ans) => {
    if (!root) return;

    path += root.val;

    if (!root.left && !root.right) ans.push(path);

    dfs(root.left, path + "->", ans);
    dfs(root.right, path + "->", ans);
};