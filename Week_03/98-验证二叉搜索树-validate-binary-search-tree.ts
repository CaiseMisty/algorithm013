import { TreeNode } from '$utils/index';
const isValidBST = [
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
  },
  /**
   * 改写递归
   */
  function isValidBST(root: TreeNode | null): boolean {
    function judge(node: TreeNode | null, min: number, max: number): boolean {
      if (!node) return true;
      if (node.val >= max || node.val <= min) return false;
      return judge(node.left, min, node.val) && judge(node.right, node.val, max);
    }
    return judge(root, -Infinity, Infinity);
  },
  /**
   * 中序递归遍历
   */
  function isValidBST(root: TreeNode | null): boolean {
    let pre = -Infinity;
    function inorder(node: TreeNode | null): boolean {
      if (!node) return true;
      if (!inorder(node.left)) return false;
      if (node.val > pre) {
        pre = node.val;
      } else {
        return false;
      }
      return inorder(node.right);
    }
    return inorder(root);
  },
];

export default isValidBST[1];
