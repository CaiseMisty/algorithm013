import { TreeNode } from '$utils/index';
/**
 * 递归, 很简单, 没什么好说的
 */

function invertTree(node: TreeNode | null): TreeNode | null {
  if (!node) return null;
  [node.left, node.right] = [node.right, node.left];
  invertTree(node.left);
  invertTree(node.right);
  return node;
}
export default invertTree;
