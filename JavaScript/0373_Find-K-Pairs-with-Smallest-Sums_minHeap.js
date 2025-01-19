/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    const size1 = nums1.length;
    const size2 = nums2.length;
    const minHeap = new MinHeap();
    for (let i = 0; i < size1; i++) {
        minHeap.insert({
            sum: nums1[i] + nums2[0],
            idx1: i,
            idx2: 0
        })
    }

    let ans = [];
    while (ans.length < k) {
        const { idx1, idx2 } = minHeap.extract();

        ans.push([nums1[idx1], nums2[idx2]]);

        if (idx2 + 1 < size2) {
            minHeap.insert({
                sum: nums1[idx1] + nums2[idx2 + 1],
                idx1,
                idx2: idx2 + 1
            });
        }
    }

    return ans;
};

class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    swap(aIdx, bIdx) {
        const tmp = this.heap[aIdx];
        this.heap[aIdx] = this.heap[bIdx];
        this.heap[bIdx] = tmp;
    }

    insert(element) {
        // append
        this.heap.push(element);

        // swim
        let idx = this.heap.length - 1;
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);

            if (this.heap[parentIdx].sum < element.sum) break;

            this.swap(idx, parentIdx);
            idx = parentIdx;
        }
    }

    extract() {
        if (this.heap.length === 0) return;
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];

        // put last one onto root
        this.heap[0] = this.heap.pop();

        // sink
        const size = this.size();
        let idx = 0;
        while (true) {
            const currentValue = this.heap[idx].sum;
            const leftIdx = idx * 2 + 1;
            const rightIdx = idx * 2 + 2;
            let leftValue;
            let rightValue;
            let targetIdx;

            if (leftIdx < size) {
                leftValue = this.heap[leftIdx].sum;
                if (leftValue < currentValue) {
                    targetIdx = leftIdx;
                }
            }

            if (rightIdx < size) {
                rightValue = this.heap[rightIdx].sum;
                if (
                    (!targetIdx && rightValue < currentValue) ||
                    (targetIdx && rightValue < leftValue)
                ) {
                    targetIdx = rightIdx;
                }
            }

            if (!targetIdx) break;

            this.swap(idx, targetIdx);
            idx = targetIdx;
        }

        return root;
    }
}