/**
 * 递归 + 缓存  时间O(n)  空间O(n)
 */
const memo = new Map<number, number>([
  [1, 1],
  [2, 2],
]);
function climbStairs(n: number): number {
  if (memo.has(n)) return memo.get(n) as number;
  const res = climbStairs(n - 1) + climbStairs(n - 2);
  memo.set(n, res);
  return res;
}
