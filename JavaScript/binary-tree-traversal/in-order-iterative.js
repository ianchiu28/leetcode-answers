class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

/**
 *        1
 *       / \
 *      2   3
 *     / \ / \
 *    4  5 6  7
 */
const sampleData = new TreeNode(
    1,
    new TreeNode(
        2,
        new TreeNode(4),
        new TreeNode(5)
    ),
    new TreeNode(
        3,
        new TreeNode(6),
        new TreeNode(7)
    )
);

function inOrderTraversal(root) {
    const stack = [];
    let current = root;

    while (current || stack.length > 0) {
        // Go all the way to the left
        while (current) {
            stack.push(current);
            current = current.left;
        }

        // Process current node
        current = stack.pop();
        console.log(current.val);

        // Move to right node
        current = current.right;
    }
}

inOrderTraversal(sampleData);