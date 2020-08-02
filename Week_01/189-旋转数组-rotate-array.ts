/**
 *  解法 1
 *  依次循环, 交替方法, 写起来比较容易出错
 *  需要注意的是: 需要判断这一次交换的下标与上一次的下标是否一致, 如果一致则需要将这一次的下标后移
 *  计算旋转后下标的位置  经过化简  为 ( currIdx + k ) % nums.length
 */
/*
function rotate(nums: number[], k: number): void {
  if (nums.length < 2) return;
  let count = 0;
  for (let i = 0; count < nums.length; i++) {
    let prevNum = nums[i];
    let currIdx = i;
    do {
      const targetIdx = (currIdx + k) % nums.length; // 要将currIdx移动到的下标
      [prevNum, nums[targetIdx]] = [nums[targetIdx], prevNum];
      currIdx = targetIdx;
      count++;
    } while (i !== currIdx);
  }
} */

/**
 * 解法2
 * 先反转整个数组
 * 再反转 0 ~ k - 1 位
 * 再反转 k ~ 最后位, 就会获得答案, 纯是画图观察得出的规律, 背就完了
 */
function rotate(nums: number[], k: number): void {
  k = k % nums.length;
  if (nums.length < 2) return;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
}

function reverse(nums: number[], start: number, end: number): void {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}
export default rotate;
