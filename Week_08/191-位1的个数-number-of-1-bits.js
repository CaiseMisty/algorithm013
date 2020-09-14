/**
 * 公式:
 * x & x-1 每次会将x二进制的最后一位1去除
 */
function hammingWeight(n) {
  let sum = 0;
  while (n) {
    n &= n - 1;
    sum++;
  }
  return sum;
}
