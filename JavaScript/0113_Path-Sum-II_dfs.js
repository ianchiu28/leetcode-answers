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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const paths = [];

    dfs({
        root,
        currentPath: [],
        paths,
        targetSum
    });
    
    return paths;
};

const dfs = ({ root, currentPath, paths, targetSum }) => {
    if (!root) return;

    currentPath.push(root.val);

    if (!root.left && !root.right && targetSum === root.val) {
        paths.push([...currentPath]);
    } else {
        targetSum -= root.val;
        dfs({
            root: root.left,
            currentPath,
            paths,
            targetSum
        });
        dfs({
            root: root.right,
            currentPath,
            paths,
            targetSum
        });
    }

    return currentPath.pop();
};