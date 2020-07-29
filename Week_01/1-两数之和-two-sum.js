/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
module.exports = function twoSum(nums, target) {
  if (nums.length < 2) return [];
  const numMap = {};
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    const difference = target - curr;
    // eslint-disable-next-line no-prototype-builtins
    if (numMap.hasOwnProperty(difference)) {
      const finedIdx = numMap[difference];
      return [finedIdx, i];
    }
    numMap[curr] = i;
  }
  return;
};

/* function twoSum(nums, target) {
  if (nums.length < 2) return [];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};
 */
