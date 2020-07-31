const { LinkedList } = require('.');

export default class LinkedList {
  constructor(arr) {
    this.head = new LinkedList.ListNode(null);
    if (Array.isArray(arr)) {
      let node = this.head;
      let i = 0;
      while (i < arr.length - 1) {
        node.val = arr[i];
        node.next = new LinkedList.ListNode(null);
        node = node.next;
        i += 1;
      }
      node.val = arr[i];
      node.next = null;
    }
  }
  toString() {
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
LinkedList.ListNode = class {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
};
