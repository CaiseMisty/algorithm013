const coinChange = [
  function coinChange(coins: number[], amount: number): number {
    const dp: number[] = [0];
    for (let i = 1; i <= amount; i++) {
      dp[i] = Math.min(...coins.map(v => dp[i - v] ?? Infinity)) + 1;
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
  },

  function coinChange(coins: number[], amount: number): number {
    if (amount < 1) return 0;
    const memo: any = {};
    function recursive(n: number): number {
      if (n === 0) return 0;
      if (n < 0) return -1;
      if (memo[n]) return memo[n];
      let min = Infinity;
      for (const coin of coins) {
        const res = recursive(n - coin);
        if (res < min && res !== -1) {
          min = res;
        }
      }
      memo[n] = min !== Infinity ? min : -1;
      return memo[n];
    }
    return recursive(amount);
  },
];

coinChange[1]([1, 2, 5], 11);
