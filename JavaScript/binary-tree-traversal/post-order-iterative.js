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
    const stack = [];
    let current = root;
    let lastVisited = null;

    while (current || stack.length > 0) {
        // Go all the way to the left
        while (current) {
            stack.push(current);
            current = current.left;
        }

        // Peak at the last node
        current = stack[stack.length - 1];  

        // If there is no right node or the right node has already been visited, process the current node
        if (!current.right || current.right === lastVisited) {
            console.log(current.val);
            stack.pop();
            lastVisited = current;
            current = null;
        } else {
            // Move to the right node
            current = current.right;
        }
    }
}

postOrderTraversal(sampleData);