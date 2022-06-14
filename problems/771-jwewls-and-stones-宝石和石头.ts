function numJewelsInStones(J: string, S: string): number {
  const hash: Record<string, number> = {};
  for (let s of S) {
    if (s in hash) hash[s]++;
    else hash[s] = 1;
  }
  let count = 0;
  for (let j of J) {
    if (j in hash) count += hash[j];
  }
  return count;
}
