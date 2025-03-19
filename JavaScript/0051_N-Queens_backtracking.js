/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const ans = [];

    for (let i = 0; i < n; i++) {
        const board = Array.from({ length: n }, () => Array.from({ length: n }, () => "."));
        backtracking(board, 0, i, ans); 
    }

    return ans;
};

const directions = [[-1, -1], [-1, 0], [-1, 1]];

const backtracking = (board, row, col, ans) => {
    // Check attack route
    for (const [x, y] of directions) {
        let mul = 1;
        while (board?.[row + x * mul]?.[col + y * mul]) {
            // Attack
            if (board[row + x * mul][col + y * mul] === "Q") return;
            mul++;
        }
    }

    // Place it.
    board[row][col] = "Q";
    
    if (row === board.length - 1) {
        // Final one.
        ans.push(board.map((e) => e.join("")));
    } else {
        // Find for another row.
        for (let i = 0; i < board.length; i++) {
            backtracking(board, row + 1, i, ans);
        }
    }

    // Backtrack.
    board[row][col] = ".";
}