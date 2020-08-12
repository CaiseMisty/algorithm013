import { TreeNode } from '$utils/index';
/**
 * 递归
 * 第一次做错了, 只判断了当前的节点与根节点, 没有遵循所有子树节点小于/大于根节点这个设定
 * 改为递归传入当前节点应属于的范围值
 */
function isValidBST(root: TreeNode | null): boolean {
  let res = true;
  function judge(node: TreeNode | null, max: number, min: number) {
    if (!node || !res) return;
    if (node.val >= max || node.val <= min) {
      res = false;
    }
    judge(node.left, node.val, min);
    judge(node.right, max, node.val);
  }
  judge(root, Infinity, -Infinity);
  return res;
}
export default isValidBST;
