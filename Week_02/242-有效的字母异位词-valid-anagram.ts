function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const map: { [key: string]: number } = {};
  for (let i of s) {
    if (!map[i]) map[i] = 1;
    else map[i]++;
  }
  for (let i of t) {
    if (!map[i]) return false;
    else map[i]--;
  }
  return Object.values(map).every(val => !val);
}
export default isAnagram;
