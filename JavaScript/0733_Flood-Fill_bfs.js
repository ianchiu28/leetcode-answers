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

    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const queue = [[sr, sc]];

    while (queue.length > 0) {
        // Process current round.
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const [x, y] = queue.shift();

            // Change color.
            image[x][y] = color;
            
            // Four directions.
            for (const [a, b] of directions) {
                // Push into queue only if the target color is equal to the original color.
                if (image?.[x + a]?.[y + b] === originalColor) {
                    queue.push([x + a, y + b]);
                }
            }
        }
    }

    return image;
};