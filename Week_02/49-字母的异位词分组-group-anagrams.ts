function groupAnagrams(strs: string[]): string[][] {
  const map: { [key: string]: string[] } = {};
  for (const str of strs) {
    let sortedStr = [...str].sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('');
    if (map[sortedStr]) {
      map[sortedStr].push(str);
    } else {
      map[sortedStr] = [str];
    }
  }
  return Object.values(map);
}
