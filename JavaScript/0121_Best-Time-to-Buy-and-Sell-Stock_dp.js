/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let left = 0;
    let right = 1;
    let max = 0;
    
    while (right < prices.length) {
        // Update max if prices[right] is greater than prices[left].
        if (prices[left] < prices[right]) {
            max = Math.max(max, prices[right] - prices[left]);
        } else {
            // Move left pointer.
            left = right;
        }

        right++;
    }

    return max;
};