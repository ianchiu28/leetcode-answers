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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root || root.length === 0) return [];

    // Fill root as the first answer
    const queue = [{ node: root, level: 0}];
    const ans = [[root.val]];
    let currentLevel = 0;
    let items = [];

    while (queue.length > 0) {
        const { node, level } = queue.shift();

        // If the current level is different from the previous level, push the items to the answer and reset the items
        if (level !== currentLevel) {
            ans.push(items);
            currentLevel = level
            items = [];
        }

        if (node.left) {
            items.push(node.left.val);
            queue.push({
                node: node.left,
                level: level + 1
            });
        }

        if (node.right) {
            items.push(node.right.val);
            queue.push({
                node: node.right,
                level: level + 1
            });
        }
    }

    return ans;
};