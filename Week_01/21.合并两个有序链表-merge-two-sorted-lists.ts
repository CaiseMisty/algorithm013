import { ListNode } from '../utils/linked-list';

// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4

/**
 * 遍历解法
 */
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const res: ListNode = new ListNode();
  let prev = res;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }
  prev.next = l1 ? l1 : l2;
  return res.next;
}
/**
 * 递归解法
 */
/*
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1) return l2;
  if (!l2) return l1;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
}
*/
export default mergeTwoLists;
