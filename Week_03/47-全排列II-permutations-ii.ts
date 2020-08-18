/**
 * 类似 46 全排列
 * 但是要再加一层值的缓存来去重
 */
function permuteUnique(nums: number[]): number[][] {
  const res: number[][] = [];
  if (!nums || !nums.length) return [[]];
  const idxMemo: Set<number> = new Set();
  const list: number[] = [];
  function rec(idx: number) {
    const levelValMemo: Set<number> = new Set();
    if (list.length === nums.length) {
      res.push([...list]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      const curr = nums[i];
      if (idxMemo.has(i) || levelValMemo.has(curr)) continue;
      list.push(curr);
      idxMemo.add(i);
      levelValMemo.add(curr);
      rec(i + 1);
      list.pop();
      idxMemo.delete(i);
    }
  }
  rec(0);
  return res;
}
