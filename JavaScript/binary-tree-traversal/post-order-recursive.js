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

function postOrderTraversal(root) {
    dfs(root);
}

function dfs(root) {
    if (!root) return;

    dfs(root.left);
    dfs(root.right);

    console.log(root.val);
}

postOrderTraversal(sampleData);