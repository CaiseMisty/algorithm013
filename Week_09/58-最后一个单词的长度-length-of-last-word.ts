const lengthOfLastWord = [
  function lengthOfLastWord(s: string): number {
    s = s.trim();
    const lastSpaceIdx = s.lastIndexOf(' ');
    if (lastSpaceIdx === -1) return s.length;
    return s.length - lastSpaceIdx - 1;
  },
  function lengthOfLastWord(s: string): number {
    return s.trim().split(' ').pop()?.length ?? 0;
  },
];
