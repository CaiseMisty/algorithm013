import { ListNode } from '../utils/linked-list';
/*
快慢指针, 慢的走一步, 快的走两步, 如果有环 必相遇
*/
function hasCycle(head: ListNode | null) {
  if (!head || !head.next) return false;
  let slow = head;
  let fast = head.next;
  while (slow !== fast) {
    if (!fast.next) return false;
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
}
export default hasCycle;
