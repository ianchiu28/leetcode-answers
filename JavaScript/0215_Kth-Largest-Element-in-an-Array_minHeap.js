/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let minHeap = new MinHeap();

    for (const num of nums) {
        minHeap.insert(num);

        if (minHeap.size() > k) {
            minHeap.extract();
        }
    }
    
    return minHeap.extract();;
};

class MinHeap {
    constructor () {
        this.heap = [];
    }

    size () {
        return this.heap.length;
    }

    insert (num) {
        // append
        this.heap.push(num);

        // swim
        let idx = this.heap.length - 1;
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            const parent = this.heap[parentIdx];

            if (parent < num) break;

            this.heap[parentIdx] = num;
            this.heap[idx] = parent;
            idx = parentIdx;
        }
    }

    extract () {
        if (this.heap.length === 0) return;

        const max = this.heap[0];
        
        // put last one to root
        this.heap[0] = this.heap.pop();

        // sink
        let idx = 0;
        while (true) {
            const size = this.heap.length;
            const current = this.heap[idx];
            const leftIdx = idx * 2 + 1;
            const rightIdx = idx * 2 + 2;
            
            let targetIdx;

            if (leftIdx < size) {
                if (this.heap[leftIdx] < current) {
                    targetIdx = leftIdx;
                }
            }

            if (rightIdx < size) {
                if ((!targetIdx && this.heap[rightIdx] < current) ||
                    (targetIdx && this.heap[rightIdx] < this.heap[targetIdx])) {
                    targetIdx = rightIdx;
                }
            }

            if (!targetIdx) break;
            
            const tmp = this.heap[idx];
            this.heap[idx] = this.heap[targetIdx];
            this.heap[targetIdx] = tmp;
            idx = targetIdx;
        }

        return max;
    }
}