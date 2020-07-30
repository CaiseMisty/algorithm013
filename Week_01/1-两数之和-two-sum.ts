/**
 * hash缓存遍历过的值所在下标
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
module.exports = function twoSum(nums: number[], target: number) {
  if (nums.length < 2) return [];
  const numMap: { [propName: number]: number } = {};
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
  return [];
};

// 暴力遍历
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
