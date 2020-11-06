function reverseWords(s: string): string {
  return s
    .split(/\s+/)
    .map(word => word.split('').reverse().join(''))
    .join(' ');
}
