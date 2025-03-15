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
    let cur = root;

    while (cur || stack.length > 0) {
        if (cur) {
            // Save cur into queue, so that we can process it later
            stack.push(cur);
            cur = cur.left;
        } else {
            const node = stack.pop();

            if (k-- === 1) return node.val;

            // Go to right node to ensure the in-order traversal
            cur = node.right;
        }
    }
};