function longestCommonPrefix(strs: string[]): string {
  let commonPrefix = '';
  if (strs.length) {
    for (let i = 0; i < strs[0].length; i++) {
      const curr = strs[0][i];
      for (let j = 0; j < strs.length; j++) {
        if (strs[j][i] !== curr) {
          return commonPrefix;
        }
      }
      commonPrefix += curr;
    }
  }
  return commonPrefix;
}
