/**
 * f(n) 为下标n之前数组的最大子序列
 * 状态转移方程为 f(n) = Max(f(n - 1) + nums[n], nums[n]);
 * 遍历时依次求出每个位置的最大子序列和
 * 返回最大的
 */
function maxSubArray(nums: number[]): number {
  let res = -Infinity;
  let prevMax = 0; // 上一个位置的最大和
  for (let num of nums) {
    prevMax = Math.max(num, num + prevMax);
    res = Math.max(res, prevMax);
  }
  return res;
}
