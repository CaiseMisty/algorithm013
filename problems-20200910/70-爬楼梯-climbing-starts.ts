// f(n) = f(n-1) + f(n-2)
function climbStairs(n: number): number {
  if (n <= 2) return n;
  let n1 = 2;
  let n2 = 1;
  let res = 0;
  for (let i = 3; i <= n; i++) {
    res = n1 + n2;
    n2 = n1;
    n1 = res;
  }
  return res;
}
