import { TreeNode } from '$utils/index';

/**
 * 这道题需要注意审题
 * 跟最大深度不太一样, 退出条件为无左右节点, 才算叶子节点
 * 函数一开始判断,
 * 如果为空时深度0
 * 如果无左右根节点, 为叶子节点,  此节点深度为 1
 * 如果存在左或右子节点, 则记录下左右子树最小叶子节点深度
 * 返回当前节点的 左右子树最小叶子节点深度 + 1
 */
function minDepth(node: TreeNode | null): number {
  if (!node) return 0;
  if (!node.left && !node.right) return 1;
  let currDepthMin = Infinity;
  if (node.left) currDepthMin = Math.min(minDepth(node.left), currDepthMin);
  if (node.right) currDepthMin = Math.min(minDepth(node.right), currDepthMin);
  return currDepthMin + 1;
}
