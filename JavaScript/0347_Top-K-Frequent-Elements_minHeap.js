/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = {}
    for (const num of nums) {
        map[num] = (map[num] ?? 0) + 1;
    }

    let minHeap = new MinHeap();
    for (const [num, count] of Object.entries(map)) {
        minHeap.insert({ num, count });

        if (minHeap.size() > k) {
            minHeap.extract();
        }
    }

    return minHeap.toArray().map(({ num }) => parseInt(num));
};

class MinHeap {
    constructor () {
        this.heap = [];
    }

    size () {
        return this.heap.length;
    }

    insert (element) {
        // append
        this.heap.push(element);

        // swim
        let idx = this.heap.length - 1;
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            const parentCount = this.heap[parentIdx].count;

            if (parentCount < element.count) break;

            this.heap[idx] = this.heap[parentIdx];
            this.heap[parentIdx] = element;
            idx = parentIdx;
        }
    }

    extract () {
        if (this.heap.length === 0) return;
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];

        // put last one to root
        this.heap[0] = this.heap.pop();

        // sink
        const size = this.heap.length;
        let idx = 0;
        while (true) {
            const currentCount = this.heap[idx].count;
            const leftIdx = idx * 2 + 1;
            const rightIdx = idx * 2 + 2;
            let targetIdx = null;
            let leftCount;
            let rightCount;

            // check left
            if (leftIdx < size) {
                leftCount = this.heap[leftIdx].count;
                if (leftCount < currentCount) {
                    targetIdx = leftIdx;
                }
            }
            
            // check right
            if (rightIdx < size) {
                rightCount = this.heap[rightIdx].count;
                if (
                    (targetIdx === null && rightCount < currentCount) ||
                    (targetIdx !== null && rightCount < leftCount)
                ) {
                    targetIdx = rightIdx;
                }
            }

            if (targetIdx === null) break;

            const tmp = this.heap[idx];
            this.heap[idx] = this.heap[targetIdx];
            this.heap[targetIdx] = tmp;
            idx = targetIdx;
        }

        return root;
    }

    toArray () {
        return this.heap;
    }
}