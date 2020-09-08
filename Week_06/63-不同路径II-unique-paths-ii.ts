const uniquePathsWithObstacles = [
  /**
   * 跟不同路径I比较相似, 新建了dp[][]
   * 这里不再一开始初始化第一行第一列为1 (因为可能存在障碍)
   * 而是一视同仁, 如果第一行第一列的格子可以走, 就从这个位置开始遍历循环, 算出dp的二维数组
   */
  function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    if (obstacleGrid[0][0] === 1) return 0;
    const y = obstacleGrid.length;
    const x = obstacleGrid[0].length;
    const dp = Array.from({ length: y }, () => Array.from({ length: x }, () => 0));
    const get = (x: number, y: number) => dp?.[x]?.[y] ?? 0;
    for (let i = 0; i < y; i++) {
      for (let j = 0; j < x; j++) {
        if (i === 0 && j === 0) dp[i][j] = 1;
        else if (obstacleGrid[i][j] !== 1) dp[i][j] = get(i - 1, j) + get(i, j - 1);
      }
    }
    return dp[y - 1][x - 1];
  },
  // 降维, 其实差不多
  function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    if (obstacleGrid[0][0] === 1) return 0;
    const y = obstacleGrid.length;
    const x = obstacleGrid[0].length;
    const dp = Array.from({ length: x }, () => 0);
    const get = (idx: number) => dp?.[idx] ?? 0;
    dp[0] = 1;
    for (let i = 0; i < y; i++) {
      for (let j = 0; j < x; j++) {
        if (obstacleGrid[i][j] !== 1) dp[j] = dp[j] + get(j - 1);
        else dp[j] = 0;
      }
    }
    return dp[x - 1];
  },
];

uniquePathsWithObstacles[1]([
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
]);
