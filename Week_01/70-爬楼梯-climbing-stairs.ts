const memoStep: Record<string, number> = {};
const climbStairs = [
  // 拆解开问题, 实际为斐波那契数列, 递归方法
  function climbStairs(n: number): number {
    if (n <= 2) {
      memoStep[n] = n;
      return n;
    }
    if (n in memoStep) {
      return memoStep[n];
    }
    const steps = climbStairs(n - 1) + climbStairs(n - 2);
    memoStep[n] = steps;
    return steps;
  },

  /*
  累加
  f(3) = f(2) + f(1)
  f(4) = f(3) + f(2)

  f(n) = f(n-1) + f(n-2)
  而f(1), f(0)可直接确定. 所以循环n-2次, 循环前缓存f(n-1) f(n-2)的值, 每次循环中
  下一次的f(n-1) = 本次循环的f(n-1) + f(n-2)
  下一次的f(n-2) = 本次循环的f(n-1)
*/
  function climbStairs(n: number) {
    if (n <= 2) {
      return n;
    }
    let totalSteps;
    let nMinus1Steps = 2;
    let nMinus2Steps = 1;
    for (let i = 0; i < n - 2; i++) {
      totalSteps = nMinus1Steps + nMinus2Steps;
      nMinus2Steps = nMinus1Steps;
      nMinus1Steps = totalSteps;
    }
    return totalSteps;
  },
];
export default climbStairs[1];
