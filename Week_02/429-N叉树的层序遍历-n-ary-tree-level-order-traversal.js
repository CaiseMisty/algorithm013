// 暴力解法  没什么章法
// 看答案应该是用BFS DFS来做
function levelOrder(root) {
  if (!root) return [];
  const res = [[root.val]];
  let curr = [root.children];
  while (curr.length) {
    const aLevelResult = curr.reduce((prev, children) => {
      if (children) {
        const childrenVals = children.map(child => child.val);
        prev.push(...childrenVals);
      }
      return prev;
    }, []);

    if (aLevelResult.length) {
      res.push(aLevelResult);
    }

    curr = curr.reduce((prev, children) => {
      const childrenGroup = children.reduce((childAccu, val) => {
        if (val.children?.length) {
          childAccu.push(val.children);
        }
        return childAccu;
      }, []);
      prev.push(...childrenGroup);
      return prev;
    }, []);
  }
  return res;
}
export default levelOrder;
