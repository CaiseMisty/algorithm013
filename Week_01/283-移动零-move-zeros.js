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

// 另一种思路
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
