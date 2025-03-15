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

function preOrderTraversal(root) {
    const stack = [root];

    while (stack.length > 0) {
        const node = stack.pop();

        console.log(node.val);

        // Push right node first, so it will be processed last
        if (node.right) stack.push(node.right);

        // Push left node second, so it will be processed first
        if (node.left) stack.push(node.left);
    }
}

preOrderTraversal(sampleData);