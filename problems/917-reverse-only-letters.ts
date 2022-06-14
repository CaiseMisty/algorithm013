function reverseOnlyLetters(s: string): string {
  let j = s.length;
  const isNotLetter = /[^A-Za-z]/;
  let res = '';
  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < s.length; i++) {
    if (isNotLetter.test(s[i])) {
      res += s[i];
    } else {
      do {
        j--;
      } while (isNotLetter.test(s[j]));
      res += s[j];
    }
  }
  return res;
}
