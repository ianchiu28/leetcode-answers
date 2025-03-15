/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        const array = matrix[i];

        if (target < array[0] || array[array.length - 1] < target) continue;

        let left = 0;
        let right = array.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (target === array[mid]) {
                return true;
            } else if (target < array[mid]) {
                // Go left
                right = mid - 1;
            } else {
                // Go right
                left = mid + 1;
            }
        }
    }

    return false;
};