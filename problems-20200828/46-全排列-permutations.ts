// 套回溯模板
function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  if (!nums || !nums.length) return [[]];
  const memo: Set<number> = new Set();
  function rec(list: number[]) {
    if (list.length === nums.length) {
      res.push([...list]);
      return;
    }
    for (const curr of nums) {
      if (memo.has(curr)) continue;
      list.push(curr);
      memo.add(curr);
      rec(list);
      const del = list.pop() as number;
      memo.delete(del);
    }
  }
  rec([]);
  return res;
}
