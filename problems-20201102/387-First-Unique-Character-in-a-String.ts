function firstUniqChar(s: string): number {
  const hash: Record<string, number> = {};
  for (const ch of s) {
    if (hash[ch]) hash[ch]++;
    else hash[ch] = 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] === 1) return i;
  }
  return -1;
}
