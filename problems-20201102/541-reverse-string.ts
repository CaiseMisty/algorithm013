function reverseStr(s: string, k: number): string {
  let i = 0;
  const str = s.split('');
  while (i < s.length) {
    for (let x = i, y = i + k - 1; x < y; x++, y--) {
      [str[x], str[y]] = [str[y], str[x]];
    }
    i += 2 * k;
  }
  return str.join('');
}
