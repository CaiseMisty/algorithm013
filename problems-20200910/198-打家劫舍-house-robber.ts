function rob(nums: number[]): number {
  if (!nums.length) return 0;
  const dp: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    dp[i] = Math.max(nums[i] + (dp[i - 2] ?? 0), dp[i - 1] ?? 0);
  }
  return dp[nums.length - 1];
}
