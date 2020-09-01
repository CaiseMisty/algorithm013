/*
 假设纵向m, 横向n
 每个格子的步数= 它左面步数+它下面步数
 dp[m][n] = dp[m-1][n] + dp[m][n-1]
*/
const uniquePaths = [
  function uniquePaths(m: number, n: number): number {
    const dp: number[][] = Array.from({ length: m }, () => Array.from({ length: n }));
    for (let i = 0; i < m; i++) dp[i][0] = 1;
    for (let i = 0; i < n; i++) dp[0][i] = 1;
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
    return dp[m - 1][n - 1];
  },
  function uniquePaths(m: number, n: number): number {
    const dp: number[] = new Array(n).fill(1);
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        dp[j] = dp[j] + dp[j - 1];
      }
    }
    return dp[n - 1];
  },
];
