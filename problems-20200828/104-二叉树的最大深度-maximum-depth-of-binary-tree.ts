import { TreeNode } from '$utils';
const maxDepth = [
  function maxDepth(root: TreeNode | null): number {
    let depth = 0;
    function dfs(node: TreeNode | null, prevDepth: number) {
      if (!node) return;
      depth = Math.max(depth, prevDepth + 1);
      dfs(node.left, prevDepth + 1);
      dfs(node.right, prevDepth + 1);
    }
    dfs(root, 0);
    return depth;
  },
  // 改进后 非常简短的递归
  function maxDepth(node: TreeNode | null): number {
    if (!node) return 0;
    return Math.max(maxDepth(node.left) + 1, maxDepth(node.right) + 1);
  },
];
export default maxDepth[1];
