/**
 *  双指针, i满指针, j快指针, 如果i 与 j 数字相同, 则将j后移
 * 如果i 与 j 数字不同, 则将i后面一位的值赋值为j的值
 * 当j 到达数组底时, i的位置则为数组中不重复的最后一项.
 */
function removeDuplicates(nums: number[]): number {
  let i = 0;
  let j = 0;
  while (j < nums.length) {
    if (nums[i] === nums[j]) {
      j++;
    } else {
      nums[++i] = nums[j];
      j++;
    }
  }
  return i + 1;
}
