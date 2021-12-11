// 从右到左遍历, 比较好理解
function plusOne(digits: number[]): number[] {
  let shoundCarry = true;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (shoundCarry || i === digits.length - 1) {
      if (digits[i] === 9) {
        digits[i] = 0;
        shoundCarry = true;
      } else {
        digits[i] += 1;
        shoundCarry = false;
      }
    }
  }
  if (shoundCarry) digits.unshift(1);
  return digits;
}
export default plusOne;
