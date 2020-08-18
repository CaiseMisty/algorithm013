function combine(n: number, k: number): number[][] {
  let res: number[][] = [];
  let could: number[] = [];
  if (k === 0) {
    return [[]];
  }
  function dfs(start: number, n: number, k: number) {
    if (could.length === k) {
      res.push(could.slice(0));
      return;
    }
    for (let i = start; i < n + 1; i++) {
      could.push(i);
      dfs(i + 1, n, k);
      could.pop();
    }
    return res;
  }
  dfs(1, n, k);
  return res;
}
