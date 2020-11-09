import { ListNode } from '../utils/linked-list';
/*
快慢指针, 慢的走一步, 快的走两步, 如果有环 必相遇
*/
type node = ListNode | null | undefined;
function hasCycle(head: node) {
  if (!head || !head.next) return false;
  let slow: node = head;
  let fast: node = head.next;
  while (slow !== fast) {
    if (!fast?.next) return false;
    slow = slow?.next;
    fast = fast?.next?.next;
  }
  return true;
}
export default hasCycle;
