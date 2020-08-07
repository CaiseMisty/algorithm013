// 没看答案用的暴力解法  类似于BFS
// 看答案应该是用BFS DFS来做
/*
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
*/

/**
 * DFS
 */
/*
function levelOrder(root) {
  const res = [];
  if (!root) return res;
  const queue = [root];
  while (queue.length) {
    const childrenCount = queue.length;
    const level = [];
    for (let i = 0; i < childrenCount; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node?.children?.length) queue.push(...node.children);
    }
    res.push(level);
  }
  return res;
}
*/
function levelOrder(root) {
  const res = [];
  function traverseNode(node, level) {
    if (res.length < level + 1) res.push([]);
    res[level].push(node.val);
    for (const child of node.children) {
      traverseNode(child, level + 1);
    }
  }
  if (root) traverseNode(root, 0);
  return res;
}

export default levelOrder;
