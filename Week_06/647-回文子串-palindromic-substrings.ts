export default [
  /**
   * n^2 时间复杂度
   */
  function countSubstrings(s: string): number {
    let count = 0;
    const len = s.length;

    const dp = new Array(len);
    for (let i = 0; i < len; i++) {
      dp[i] = new Array(len).fill(false);
    }

    for (let j = 0; j < len; j++) {
      for (let i = 0; i <= j; i++) {
        if (i === j) {
          // 单个字符
          dp[i][j] = true;
          count++;
        } else if (j - i === 1 && s[i] === s[j]) {
          // 两个字符
          dp[i][j] = true;
          count++;
        } else if (j - i > 1 && s[i] === s[j] && dp[i + 1][j - 1]) {
          // 多于两个字符
          dp[i][j] = true;
          count++;
        }
      }
    }
    return count;
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
