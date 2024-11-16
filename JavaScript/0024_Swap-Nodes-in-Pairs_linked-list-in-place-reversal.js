/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    const dummyNode = new ListNode(0, head);
    head = dummyNode;

    let pre = head;
    let cur = pre?.next;
    let next = cur?.next;

    while (cur && next) {
        // change linked list
        cur.next = next.next;
        next.next = cur;
        pre.next = next;

        // move pointer
        pre = cur;
        cur = pre?.next;
        next = cur?.next;
    }

    return head.next;    
};