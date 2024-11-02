/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    let queue = [];
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] !== 0) {
                mat[i][j] = Infinity;
            } else {
                queue.push([i, j]);
            }
        }
    }

    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    do {
        const [i, j] = queue.shift();
        const distVal = mat[i][j] + 1;

        for (const [x, y] of directions) {
            if (mat[i + x]?.[j + y] > distVal) {
                mat[i + x][j + y] = distVal;
                queue.push([i + x, j + y]);
            }
        }
    } while (queue.length > 0);

    return mat;
};