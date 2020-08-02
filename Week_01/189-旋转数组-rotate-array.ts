/**
 *  依次循环, 交替方法, 写起来比较容易出错
 *  需要注意的是: 需要判断这一次交换的下标与上一次的下标是否一致, 如果一致则需要将这一次的下标后移
 *  计算旋转后下标的位置  经过化简  为 ( currIdx + k ) % nums.length
 */
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
}
export default rotate;
