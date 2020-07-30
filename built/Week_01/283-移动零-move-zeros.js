/*
  两个哨兵, 一起从数组开始走,  i哨兵表示依次遍历, head哨兵用于标记从左到右遇到的0
  逐渐将0与遇到的非零数互换
  如 101011
  i = 0   101011
  i = 1   101011
  i = 2   110011
  i = 3   110011
  i = 4   111001
  i = 5   111100
*/
module.exports = function moveZeroes(nums) {
  if (nums.length < 2) return nums;
  let head = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[head], nums[i]] = [nums[i], nums[head]];
      head += 1;
    }
  }
  return nums;
};
// 另一种思路, 更业务代码一些, 比较强调调换0与非零
/*
function moveZeroes(nums) {
  if (nums.length < 2) return nums;
  let zeroIdx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0 && nums[zeroIdx] === 0) {
      nums[zeroIdx] = nums[i];
      nums[i] = 0;
    }
    if (nums[zeroIdx] !== 0) {
      zeroIdx += 1;
    }
  }
  return nums;
}
*/
