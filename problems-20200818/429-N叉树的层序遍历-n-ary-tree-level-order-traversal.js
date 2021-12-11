export default levelOrder[2];
const levelOrder = [
  // 没看答案用的暴力解法  类似于BFS
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
  },

  /**
   * BFS解法  其实跟一开始暴力遍历差不多,
   * 只不过利用到了stack每次遍历一层后, 所有元素里都是当前这一层children的总长度,
   * 利用这个长度来for循环可以简化遍历和判断的代码
   */
  function levelOrder(root) {
    const res = [];
    if (!root) return res;
    const queue = [root];
    while (queue.length) {
      const lastLevelChildCount = queue.length;
      const resOfLevel = [];
      for (let i = 0; i < lastLevelChildCount; i++) {
        const node = queue.shift();
        resOfLevel.push(node.val);
        if (node?.children?.length) queue.push(...node.children);
      }
      res.push(resOfLevel);
    }
    return res;
  },

  // 递归实现, DFS
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
  },
];
