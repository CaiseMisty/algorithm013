function combine(n: number, k: number): number[][] {
  const res: number[][] = [];
  if (!n && !k) return res;
  let tempList: number[] = [];
  function add(currN: number) {
    if (tempList.length === k) {
      res.push([...tempList]);
      return;
    }
    for (let i = currN; i <= n; i++) {
      tempList.push(i);
      add(i + 1);
      tempList.pop();
    }
  }
  add(1);
  return res;
}
