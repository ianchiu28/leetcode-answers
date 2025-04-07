/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const heap = new MaxHeap();

    for (const point of points) {
        heap.insert(point);

        if (heap.size() > k) {
            heap.extract();
        }
    }
    
    return heap.toArray();
};

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    insert(point) {
        this.heap.push({
            point,
            value: point[0] * point[0] + point[1] * point[1]
        });

        let idx = this.heap.length - 1;

        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);

            if (this.heap[parentIdx].value > this.heap[idx].value) {
                break;
            }

            const tmp = this.heap[parentIdx];
            this.heap[parentIdx] = this.heap[idx];
            this.heap[idx] = tmp;
            idx = parentIdx;
        }
    }

    extract() {
        const { point } = this.heap.shift();

        if (this.heap.length === 0) {
            return point;
        }

        this.heap.unshift(this.heap.pop());
        let idx = 0;

        while (idx < this.heap.length - 1) {
            const leftIdx = idx * 2 + 1;
            const rightIdx = idx * 2 + 2;

            let targetIdx;

            if (this.heap[leftIdx]?.value > this.heap[idx].value) {
                targetIdx = leftIdx;
            }

            if (
                (targetIdx && this.heap[rightIdx]?.value > this.heap[targetIdx].value) ||
                (!targetIdx && this.heap[rightIdx]?.value > this.heap[idx].value)
            ) {
                targetIdx = rightIdx;
            }

            if (!targetIdx) {
                break;
            }

            const tmp = this.heap[targetIdx];
            this.heap[targetIdx] = this.heap[idx];
            this.heap[idx] = tmp;
            idx = targetIdx;
        }

        return point;
    }

    toArray() {
        return this.heap.map((e) => e.point);
    }
}