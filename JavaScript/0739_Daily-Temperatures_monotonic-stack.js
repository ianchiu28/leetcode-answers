/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const size = temperatures.length;
    let ans = [];
    let monoStack = [];
    for (let i = size - 1; i >= 0; i--) {
        while (monoStack.length > 0 && temperatures[i] >= temperatures[monoStack[monoStack.length - 1]]) {
            monoStack.pop();
        }

        ans[i] = monoStack.length > 0
            ? monoStack[monoStack.length - 1] - i
            : 0;

        // only store index
        monoStack.push(i);
    }

    // store as object
    // for (let i = size - 1; i >= 0; i--) {
    //     while (temperatures[i] >= monoStack[monoStack.length - 1]?.value) {
    //         monoStack.pop();
    //     }

    //     ans[i] = monoStack.length > 0
    //         ? monoStack[monoStack.length - 1].index - i
    //         : 0;

    //     monoStack.push({
    //         value: temperatures[i],
    //         index: i
    //     });
    // }

    return ans;
};