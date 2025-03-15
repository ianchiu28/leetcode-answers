/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    const visited = new Map();
    const head = dfs(node, visited);
    return head;
};

const dfs = (root, visited) => {
    if (!root) return;
    
    // If we visited before, just return the node
    if (visited.has(root.val)) {
        return visited.get(root.val);
    }
    
    // Make new node and mark it as visited
    const newNode = new _Node(root.val);
    visited.set(root.val, newNode);

    // Iterate all neighbors
    for (const neighbor of root.neighbors) {
        const node = dfs(neighbor, visited);
        if (node) newNode.neighbors.push(node);
    }

    return newNode;
};