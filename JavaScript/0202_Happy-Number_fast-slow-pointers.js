/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let slow = n;
    let fast = cal(n);

    do {
        if (slow === 1 || fast === 1) {
            return true;
        } 

        slow = cal(slow);
        fast = cal(cal(fast));
    } while (slow !== fast);

    return false;
};

function cal(num) {
    let sum = 0;
    while (num >= 10) {
        const n = num % 10;
        sum += n * n;
        num = Math.floor(num / 10);
    }

    return sum + num * num;
}