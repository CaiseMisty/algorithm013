function isPalindrome(s: string): boolean {
  if (!s) return true;
  let i = 0;
  let j = s.length - 1;
  s = s.toLowerCase();
  const reg = /[^a-z0-9]/;
  while (i <= j) {
    while (reg.test(s[i])) i++;
    while (reg.test(s[j])) j--;
    if (s[i] !== s[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}
