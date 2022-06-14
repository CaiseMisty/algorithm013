/**
 * 贪心
 * 代码很简单, 思路不好想
 * pos 代表了每次能跳到的最远位置
 * 从前往后挨个位置看, 依次更新最远位置
 * 如果当前的下标大于了最远位置, return false
 * 如果最远位置大于了数组长度, return true;
 */
function canJump(nums: number[]): boolean {
  let pos = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > pos) return false;
    pos = Math.max(i + nums[i], pos);
  }
  return true;
}
