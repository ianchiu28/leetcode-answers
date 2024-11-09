/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const size = s.length;
    
    // char's map of string t
    let map = new Map();
    for (const char of t) {
        const cur = map.get(char);
        if (cur) {
            map.set(char, cur + 1);
        } else {
            map.set(char, 1);
        }
    }
    let mapSize = map.size;
    
    let left = 0;
    let right = 0;
    let ans = "";

    while (right < size) {
        const rightChar = s[right];
        const rightCount = map.get(rightChar);
        if (rightCount !== undefined) {
            map.set(rightChar, rightCount - 1);

            if (rightCount === 1) { // rightCount - 1 === 0
                mapSize--;
            }
        }

        // all found by right index
        if (mapSize === 0) {
            // remove unnecessary chars by left index
            while(true) {
                const leftChar = s[left];
                const leftCount = map.get(leftChar);

                if (leftCount >= 0) {
                    break;
                }
                    
                if (leftCount < 0) {
                    map.set(leftChar, leftCount + 1);
                }
                
                left++;
            }

            // final ans
            const newAns = s.slice(left, right + 1);
            if (ans === "") {
                ans = newAns;
            } else {
                ans = ans.length < newAns.length
                ? ans
                : newAns;
            }

            // move left index
            map.set(s[left], map.get(s[left]) + 1);
            mapSize++;
            left++;
        }

        right++;
    }

    return ans;
};