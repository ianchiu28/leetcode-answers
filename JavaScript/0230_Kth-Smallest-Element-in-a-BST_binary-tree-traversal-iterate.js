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
    const stack = [];
    let current = root;

    while (current || stack.length > 0) {
        // Go all the way to the left
        while (current) {
            stack.push(current);
            current = current.left;
        }

        // Process it
        const node = stack.pop();
        if (k-- === 1) return node.val;

        // Go to right
        current = node.right;
    }
};