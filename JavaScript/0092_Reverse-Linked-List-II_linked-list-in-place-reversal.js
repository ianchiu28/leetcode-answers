/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let count = 1;
    let leftPointer = null;
    let rightPointer = head;

    // find start node
    while (count < left) {
        leftPointer = rightPointer;
        rightPointer = rightPointer.next;
        count++;
    }

    // mark start & end position
    const startPointer = leftPointer;
    const endPointer = rightPointer;

    // reverse
    while (count <= right) {
        const tmp = rightPointer.next;
        rightPointer.next = leftPointer;
        leftPointer = rightPointer;
        rightPointer = tmp;
        count++;
    }

    // connect start & end position
    if (startPointer) {
        startPointer.next = leftPointer;
    } else {
        head = leftPointer;
    }
    
    endPointer.next = rightPointer;

    return head;
};