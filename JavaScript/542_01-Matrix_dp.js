/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const width = mat.length;
    const height = mat[0].length;

    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            if (mat[i][j] != 0) {
                mat[i][j] = Infinity;
            }
        }
    }

    // left-top
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j ++) {
            if (mat[i][j] !== 0) {
                if (mat[i][j] > mat[i - 1]?.[j]) {
                    mat[i][j] = mat[i - 1][j] + 1;
                }
                if (mat[i][j] > mat[i]?.[j - 1]) {
                    mat[i][j] = mat[i][j - 1] + 1;
                }
            }
        }
    }

    // right-bottom
    for (let i = width - 1; i >= 0; i--) {
        for (let j = height - 1; j >= 0; j--) {
            if (mat[i][j] !== 0) {
                if (mat[i][j] > mat[i + 1]?.[j]) {
                    mat[i][j] = mat[i + 1][j] + 1;
                }
                if (mat[i][j] > mat[i]?.[j + 1]) {
                    mat[i][j] = mat[i][j + 1] + 1;
                }
            }
        }
    }

    return mat;
};