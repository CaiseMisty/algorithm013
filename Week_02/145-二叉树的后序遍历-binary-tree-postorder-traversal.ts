import { TreeNode } from '$utils/index';

/**
 * 这个思路也适用于N叉树遍历, 下面那个方法虽然时纯粹的按照手写逻辑判断后序遍历, 但对于N叉树很难操作
 *
 * 由于前序输出顺序为  [根,左,右]
 * 后序输出顺序为 [左,右,根]
 *
 * 前序遍历的代码, 首先初始化时, 队列为[root],
 * 1. 当队列不为空, 就从队列头部shift取出一个节点
 * 2. 将这个节点.val push进结果数组
 * 3. 如果这个有右节点, unshift到队列, 接下来有左节点, 也unshift到队列 此时队列为 [左,右]
 * 4. 回到第1步, 重复操作,
 * 这样稍微进行几步后  结果数组的顺序就为 [根, 左, 右]
 *
 * 略微修改前序遍历的代码,
 * 第2步向结果数组中添加元素的api从pop改为unshift, 从队列头部插入, 最后结果数组的顺序将为[右, 左 ,根]
 * 中间的入栈  前序遍历 原本是先放入右节点 后放入左节点, 取出时先左后右, 插入到队列尾部正好是[根, 左, 右]
 * 后序遍历, 就反过来, 先放左节点, 后放右节点, 取出时先右后左, 插入到队列头部, 结果的顺序为 [左, 右, 根]
 * 此时顺序既为后序遍历

 */
function postorderTraversal(root: TreeNode | null) {
  if (!root) return [];
  const res = [];
  const stack = [root];
  while (stack.length) {
    const curr = stack.shift() as TreeNode;
    res.unshift(curr.val);
    if (curr.left) stack.unshift(curr.left);
    if (curr.right) stack.unshift(curr.right);
  }
  return res;
}

// 更偏向纸上书写的思路
// 取跟节点为目标节点，开始遍历
// 1.左孩子入栈 -> 直至左孩子为空的节点
// 2.栈顶节点的右节点为空或右节点被访问过 -> 节点出栈并访问他，将节点标记为已访问
// 3.栈顶节点的右节点不为空且未被访问，以右孩子为目标节点，再依次执行1、2、3
/*
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
*/
export default postorderTraversal;
