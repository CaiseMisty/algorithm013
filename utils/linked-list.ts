export class ListNode {
  public val: number;
  public next: ListNode | null;
  public constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export class LinkedList {
  // public static ListNode = ListNode;

  public head: ListNode;
  public constructor(arr: number[]) {
    this.head = new ListNode();
    if (Array.isArray(arr)) {
      let node = this.head;
      let i = 0;
      while (i < arr.length - 1) {
        node.val = arr[i];
        node.next = new ListNode();
        node = node.next;
        i += 1;
      }
      node.val = arr[i];
      node.next = null;
    }
  }
  public toString() {
    let str = '';
    let node = this.head;
    while (node) {
      str += `${node.val}`;
      if (node.next) str += ',';
      node = node.next;
    }
    return `[${str}]`;
  }
}
