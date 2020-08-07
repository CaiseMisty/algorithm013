import { TreeNode } from '$utils/index';
const preorderTraversal = [
  /**
   * 使用optional chain语法, 非常骚的简短递归写法
   */
  function preorderTraversal(root: TreeNode | null): number[] {
    if (!root) return [];
    const leftList = preorderTraversal(root.left);
    const rightList = preorderTraversal(root.right);
    return [root.val, ...leftList, ...rightList];
  },

  /**
   * 另一种迭代的写法, 比较好理解
   */
  function preorderTraversal(root: any) {
    if (!root) return [];
    const res = [];
    const stack = [root];
    while (stack.length) {
      const curr = stack.shift();
      res.push(curr.val);
      if (curr.right) stack.unshift(curr.right);
      if (curr.left) stack.unshift(curr.left);
    }
    return res;
  },

  /**
   *  栈迭代的做法, 比较偏重于手动判断
   */
  function preorderTraversal(root: TreeNode | null): number[] {
    const res = [];
    const stack: TreeNode[] = [];
    let curr: any = root;
    while (curr || stack.length) {
      if (curr) {
        stack.push(curr);
        res.push(curr.val);
        curr = curr.left;
      } else {
        const stackTop = stack.pop() as TreeNode;
        curr = stackTop.right;
      }
    }
    return res;
  },

  /**
   * 常规递归做法 很简单
   */
  function preorderTraversal(root: TreeNode | null): number[] {
    const res: number[] = [];
    function df(node: TreeNode | null): void {
      if (!node) return;
      res.push(node.val);
      df(node.left);
      df(node.right);
    }
    df(root);
    return res;
  },
];

export default preorderTraversal[1];
