/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const queue = [];
    let fresh = 0;

    // Iterate through the grid to find all the fresh oranges and rotten oranges
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                fresh++;
            } else if (grid[i][j] === 2) {
                queue.push([i, j]);
            }
        }
    }

    // If there are no fresh oranges, return 0
    if (fresh === 0) return 0;

    // Initialize the directions array
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let round = 0;

    // Process the queue
    while (queue.length > 0) {
        // Process the current round
        const currentRoundSize = queue.length;
        for (let n = 0; n < currentRoundSize; n++) {
            const [i, j] = queue.shift();

            for (const [a, b] of directions) {
                if (grid?.[i + a]?.[j + b] === 1) {
                    grid[i + a][j + b] = 2;
                    fresh--;
                    queue.push([i + a, j + b]);
                }
            }
        }

        round++;

        // If there are no fresh oranges, break
        if (fresh === 0) break;
    }

    return fresh > 0 ? -1 : round;
};