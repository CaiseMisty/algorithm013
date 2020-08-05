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
export default postorder;
