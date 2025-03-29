/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let hold = -prices[0];
    let empty = 0;

    for (let i = 1; i < prices.length; i++) {
        hold = Math.max(hold, empty - prices[i]);
        empty = Math.max(empty, hold + prices[i] - fee);
    }

    return empty;
};