/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const originalColor = image[sr][sc];

    // Return image directly when the orignal color is equal to the new color.
    if (originalColor === color) return image;

    dfs(image, sr, sc, color, originalColor);

    return image;
};

const dfs = (image, x, y, color, originalColor) => {
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    // Change root color
    image[x][y] = color;

    // Four directions.
    for (const [a, b] of directions) {
        // Go deep only if the target color is equal to the original color.
        if (image?.[x + a]?.[y + b] === originalColor) {
            dfs(image, x + a, y + b, color, originalColor);
        }
    }
};