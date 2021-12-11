function validPalindrome(s: string): boolean {
  let i = 0;
  let j = s.length - 1;
  while (i <= j) {
    if (s[i] === s[j]) {
      i++;
      j--;
    } else {
      return isPalindrome(s, i + 1, j) || isPalindrome(s, i, j - 1);
    }
  }
  return true;
}

// 判断字符串s 下标以i开始以j结束这部分是否回文
function isPalindrome(s: string, i: number, j: number): boolean {
  while (i <= j) {
    if (s[i++] !== s[j--]) {
      return false;
    }
  }
  return true;
}
