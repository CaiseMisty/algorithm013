export default [
  /**
   * n^2 时间复杂度
   * dp[i][j] 表达 s.substring(i, j+1)这个字符串是否为回文串
   * dp[i][j] = dp[i-1][j+1] (当s[i]==s[j]且i-j>1时)
   */
  function countSubstrings(s: string): number {
    const len = s.length;
    const dp: boolean[][] = Array.from({ length: len }, () => Array(len).fill(false));
    let res = 0;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j <= i; j++) {
        if (s[i] === s[j] && (i === j || i === j + 1 || dp[i - 1][j + 1])) {
          dp[i][j] = true;
          res++;
        }
      }
    }
    return res;
  },
  /**
   * 降维
   */
  function countSubstrings(s: string): number {
    const len = s.length;
    let count = 0;
    const dp = new Array(len);

    for (let j = 0; j < len; j++) {
      for (let i = 0; i <= j; i++) {
        if (s[i] === s[j] && (j - i <= 1 || dp[i + 1])) {
          dp[i] = true;
          count++;
        } else {
          dp[i] = false;
        }
      }
    }
    return count;
  },
];
