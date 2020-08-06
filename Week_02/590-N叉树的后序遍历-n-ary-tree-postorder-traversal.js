// 递归
/*
let postorder = function (root) {
  const res = [];
  function df(node) {
    if (!node) return;
    for (let child of node.children) {
      df(child);
    }
    res.push(node.val);
  }
  df(root);
  return res;
};
*/
export default postorder;

// 迭代, 思路同前序
const postorder = function (root) {
  const res = [];
  const stack = [root];
  while (stack.length) {
    const curr = stack.pop();
    if (curr) {
      res.unshift(curr.val);
      if (curr.children) stack.push(...curr.children);
    }
  }
  return res;
};
