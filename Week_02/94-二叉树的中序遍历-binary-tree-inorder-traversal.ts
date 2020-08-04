import { TreeNode } from '$utils/index';

/*
function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];
  const leftList = inorderTraversal(root.left);
  const rightList = inorderTraversal(root.right);
  return [...leftList, root.val, ...rightList];
}
*/

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
}

export default inorderTraversal;
