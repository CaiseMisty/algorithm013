/**
 * 递归, 类似于二叉树前序
 */
/*
let preorder = function (root) {
  const res = [];
  function df(node) {
    if (!node) return;
    res.push(node.val);
    for (let child of node.children) {
      df(child);
    }
  }
  df(root);
  return res;
};
*/
export default preorder;

/**
 * 迭代法, 跟之前写的二叉树迭代略有不同
 * 核心是维护一个stack, 每次shift()取出头部, 对这个节点的children全部unshift到stack中
 */
function preorder(root) {
  if (!root) return [];
  const res = [];
  const queue = [root];
  while (queue.length) {
    const curr = queue.shift();
    res.push(curr.val);
    if (curr.children) queue.unshift(...curr.children);
  }
}
