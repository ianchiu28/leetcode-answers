/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === "1") {
                // It's island.
                count++;
                dfs(grid, i, j);
            }
        }
    }

    return count;
};

const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

const dfs = (grid, x, y) => {
    // Change to visited(2)
    grid[x][y] = "2";

    // Go deep with directions
    for (const [a, b] of directions) {
        if (grid?.[x + a]?.[y + b] === "1") {
            dfs(grid, x + a, y + b);
        }
    }
};