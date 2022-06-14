/**
 * 例如  1234 这个字符
 * 如果最后一个字符可以解析, 或者最后两个字符可以解析  则 f(1234) = f(12)+f(123)
 * 递推表达式为 dp[i] = dp[i-1] + dp[i-2], 但很明显它的最后两个字符34是不符合规则的
 * 因此需要做判断
 * 如果最后一个字符不为0, 那么它就符合规则, dp[i] += dp[i-1]
 * 如果最后两个字符的数字大于等于10小于等于26,  dp[i] += dp[i-2]
 */
function numDecodings(s: string): number {
  if (!s) return 0;
  let len = s.length;
  let dp: number[] = Array(len).fill(0);
  dp[0] = s[0] === '0' ? 0 : 1;
  for (let i = 1; i < len; i++) {
    const s1 = Number(s[i]);
    const s2 = Number(s[i - 1] ?? 0);
    if (s1 !== 0) dp[i] += dp[i - 1];
    if (s2 === 1 || (s2 === 2 && s1 <= 6)) dp[i] += dp[i - 2] ?? 1;
  }
  return dp[len - 1];
}
