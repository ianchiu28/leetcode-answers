/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const maxLength = Math.max(a.length, b.length);

    let output = "";
    let carriedNum = 0;
    for (let i = 0; i < maxLength; i++) {
        const numA = a?.[a.length - i - 1] || 0;
        const numB = b?.[b.length - i - 1] || 0;

        let sum = +numA + +numB + carriedNum;

        if (sum >= 2) {
            sum = sum - 2;
            carriedNum = 1;
        } else {
            carriedNum = 0;
        }

        output = sum.toString() + output;
    }

    output = carriedNum === 0 ? output : "1" + output;

    return output;
};