/**
 * 状态转移方程, f[i][j]为此节点的最小和
 * f[i][j] += f[i+1][j] + f[i+1][j+1]
 */

function minimumTotal(triangle: number[][]): number {
  const temp = [...triangle[triangle.length - 1]];
  for (let i = triangle.length - 2; i >= 0; i--)
    for (let j = 0; j < triangle[i].length; j++) {
      temp[j] = triangle[i][j] + Math.min(temp[j], temp[j + 1]);
    }
  return temp[0];
}
