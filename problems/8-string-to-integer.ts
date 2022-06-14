function myAtoi(s: string): number {
  const str = s.trim();
  let sign = 1;
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (i === 0) {
      if (ch === '-') {
        sign = -1;
        continue;
      }
      if (ch === '+') {
        continue;
      }
    }
    if (ch === ' ') {
      break;
    }
    const num = Number(ch);
    if (typeof num === 'number' && !Number.isNaN(num)) {
      res = res * 10 + num;
    } else {
      break;
    }
    res = sign === 1 ? Math.min(res, 2 ** 31 - 1) : Math.min(res, 2 ** 31);
  }
  return sign * res;
}
