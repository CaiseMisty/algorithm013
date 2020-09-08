function minPathSum(grid: number[][]): number {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (i === 0 && j > 0) {
        grid[0][j] += grid[0][j - 1];
      }
      if (j === 0 && i > 0) {
        grid[i][0] += grid[i - 1][0];
      }
      if (j > 0 && i > 0) {
        grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
      }
    }
  }
  return grid[grid.length - 1][grid[0].length - 1];
}
