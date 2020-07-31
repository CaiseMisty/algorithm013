import { ListNode } from '../utils/linked-list';
type Node = ListNode | null;
function reverseList(head: Node): Node {
  if (!head || !head.next) return head;
  let pre = head;
  let cur = head.next;
  pre.next = null;
  while (cur) {
    const tmp: Node = cur.next;
    cur.next = pre;
    pre = cur;
    if (tmp) cur = tmp;
    else break;
  }
  return cur;
}
export default reverseList;
