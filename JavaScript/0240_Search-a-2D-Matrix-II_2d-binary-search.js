/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // Choose top-right as the start point
    // Or we can choose bottom-left as the start point, then we should change the algorithm
    let row = 0;
    let col = matrix[0].length - 1;

    while (row < matrix.length && col >= 0) {
        if (target === matrix[row][col]) {
            return true;
        } else if (target < matrix[row][col]) {
            // Go left
            col--;
        } else {
            // Go down
            row++;
        }
    }

    return false;
};