/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const rollbackList = [];

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            const memory = {
                isOnEdge: false,
                list: []
            };

            // Go deep if the cell is "O".
            if (board[i][j] === "O") {
                dfs(board, i, j, memory);

                // Push memory list into rollback list.
                if (memory.isOnEdge) {
                    rollbackList.push(...memory.list);
                }
            }
        }
    }

    // Rollback.
    for (const [x, y] of rollbackList) {
        board[x][y] = "O";
    }
};

const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

const dfs = (board, i, j, memory) => {
    // Save it into memory.
    memory.list.push([i, j]);

    // Change to visited.
    board[i][j] = "X";

    for (const [x, y] of directions) {
        const cell = board?.[i + x]?.[j + y];
        
        // Edges.
        if (cell === undefined) {
            memory.isOnEdge = true;
        };

        // Region.
        if (cell === "O") {
            dfs(board, i + x, j + y, memory);
        }
    }
}