/**
 * 首先, 2的幂的二进制具有特征, 只含有一个1, 这个1所在的位数即为2的n次幂
 * 其次利用公式  n & (n-1) 会将最后一个1变为0
 * 如果为2的n次幂, 经过变换后值为0
 */
function isPowerOfTwo(n: number): boolean {
  if (n <= 0) return false;
  return (n & (n - 1)) === 0;
}
