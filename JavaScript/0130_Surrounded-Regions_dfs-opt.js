/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const rows = board.length;
    const cols = board[0].length;

    // We only need to find the Regions on the edge.
    for (let i = 0; i < rows; i++) {
        if (board[i][0] === "O") dfs(board, i, 0);
        if (board[i][cols - 1] === "O") dfs(board, i, cols - 1);
    }
    for (let j = 0; j < cols; j++) {
        if (board[0][j] === "O") dfs(board, 0, j);
        if (board[rows - 1][j] === "O") dfs(board, rows - 1, j);
    }

    for (let m = 0; m < rows; m++) {
        for (let n = 0; n < cols; n++) {
            // Rollback to "O" because it is on the edge.
            if (board[m][n] === "#") {
                board[m][n] = "O";
            }
            // Change to "X" because it isn't on the edge.
            else if (board[m][n] === "O") {
                board[m][n] = "X";
            }
        }
    }
};

const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

const dfs = (board, i, j) => {
    // Change to visited.
    board[i][j] = "#";

    for (const [x, y] of directions) {
        // Region.
        if (board?.[i + x]?.[j + y] === "O") {
            dfs(board, i + x, j + y);
        }
    }
}