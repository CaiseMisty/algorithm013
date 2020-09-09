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
    const memo: any = { 0: 0 };
    function recursive(amount: number): number {
      if (amount < 0) return Infinity;
      if (memo[amount - 1] !== Infinity) return memo[amount];
      let min = Infinity;
      for (const coin of coins) {
        const res = recursive(amount - coin);
        if (res < min && res !== Infinity) {
          min = res;
        }
      }
      memo[amount] = min + 1;
      return min;
    }
    return recursive(amount) === Infinity ? -1 : memo[amount];
  },
];

coinChange[1]([1, 2, 5], 11);
