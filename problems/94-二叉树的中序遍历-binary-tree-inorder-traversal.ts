import { TreeNode } from '$utils';

const inorderTraversal = [
  // 最简洁的递归
  function inorderTraversal(root: TreeNode | null): number[] {
    if (!root) return [];
    const leftList = inorderTraversal(root.left);
    const rightList = inorderTraversal(root.right);
    return [...leftList, root.val, ...rightList];
  },

  // 魔改前序
  function inorderTraversal(root: TreeNode | null): number[] {
    const res = [];
    const stack: TreeNode[] = [];
    let curr: any = root;
    while (curr || stack.length) {
      if (curr) {
        stack.push(curr);
        curr = curr.left;
      } else {
        const stackTop = stack.pop() as TreeNode;
        res.push(stackTop.val);
        curr = stackTop.right;
      }
    }
    return res;
  },
];

export default inorderTraversal[1];
