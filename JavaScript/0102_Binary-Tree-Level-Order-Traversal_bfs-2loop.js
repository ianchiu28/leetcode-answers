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
    const queue = [root];
    const ans = [[root.val]];

    // Process the queue
    while (queue.length > 0) {
        // Get the current round size (current level)
        const currentRoundSize = queue.length;
        const items = [];

        // Process the current level
        for (let i = 0; i < currentRoundSize; i++) {
            const node = queue.shift();

            if (node.left) {
                items.push(node.left.val);
                queue.push(node.left);
            }

            if (node.right) {
                items.push(node.right.val);
                queue.push(node.right);
            }
        }

        // If there are items in the current level, push them to the answer
        if (items.length > 0) ans.push(items);
    }

    return ans;
};