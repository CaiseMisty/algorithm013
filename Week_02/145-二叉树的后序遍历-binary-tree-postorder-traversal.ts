import { TreeNode } from '$utils/index';
// 取跟节点为目标节点，开始遍历
// 1.左孩子入栈 -> 直至左孩子为空的节点
// 2.栈顶节点的右节点为空或右节点被访问过 -> 节点出栈并访问他，将节点标记为已访问
// 3.栈顶节点的右节点不为空且未被访问，以右孩子为目标节点，再依次执行1、2、3
function postorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];
  const result = [];
  const stack: TreeNode[] = [];
  let curr: any = root;
  let last = null;
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack[stack.length - 1];
    if (!curr.right || curr.right === last) {
      curr = stack.pop();
      result.push(curr.val);
      last = curr;
      curr = null; // 继续弹栈
    } else {
      curr = curr.right;
    }
  }
  return result;
}

export default postorderTraversal;
