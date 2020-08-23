function findContentChildren(grid: number[], size: number[]): number {
  if (grid === null || size === null) return 0;
  grid.sort((a, b) => a - b);
  size.sort((a, b) => a - b);
  let gi = 0;
  let si = 0;
  while (gi < grid.length && si < size.length) {
    if (grid[gi] <= size[si]) {
      gi++;
    }
    si++;
  }
  return gi;
}
