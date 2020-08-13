function lowestCommonAncestor(root, p, q) {
  let ans;
  function search(root, p, q) {
    if (root === null) return false;
    const lson = search(root.left, p, q);
    const rson = search(root.right, p, q);
    if ((lson && rson) || ((root.val === p.val || root.val === q.val) && (lson || rson))) {
      ans = root;
    }
    return lson || rson || root.val === p.val || root.val === q.val;
  }
  search(root, p, q);
  return ans;
}
