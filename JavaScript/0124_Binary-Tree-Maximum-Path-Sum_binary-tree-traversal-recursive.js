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
var maxPathSum = function(root) {
    // Define max as an object to make sure we can pass by reference
    const globalMax = { max: -Infinity };
    dfs(root, globalMax);

    return globalMax.max;
};

const dfs = (root, globalMax) => {
    if (!root) return 0;

    const left = dfs(root.left, globalMax);
    const right = dfs(root.right, globalMax);

    // Calculate max with current node
    const adjustedLeft = left < 0 ? 0 : left;
    const adjustedRight = right < 0 ? 0 : right;
    const currentMax = root.val + adjustedLeft + adjustedRight;
    globalMax.max = Math.max(globalMax.max, currentMax);

    // Return the max value of branches
    const childMax = Math.max(adjustedLeft, adjustedRight);
    return root.val + childMax;
};