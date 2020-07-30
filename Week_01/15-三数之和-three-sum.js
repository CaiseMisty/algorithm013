// 方法一: two-sum的变形  这么做无法通过, 超出运行时间
/*
const threeSum = function (nums) {
  if (nums.length < 3) return [];
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums.length < 2) return [];
    const hash = new Set();
    for (let j = 0; j < nums.length; j++) {
      if (j === i) continue;
      const curr = nums[j];
      const difference = -nums[i] - curr;
      // eslint-disable-next-line no-prototype-builtins
      if (hash.has(difference)) {
        const arr = [difference, curr, nums[i]].sort((a, b) => a - b);
        if (!includeArr(res, arr)) {
          res.push(arr);
        }
      }
      hash.add(curr);
    }
  }
  return res;
};
*/

const threeSum = function (nums) {};

module.exports = threeSum;

function includeArr(outerArr, sub) {
  for (let i = 0; i < outerArr.length; i++) {
    const a = outerArr[i];
    if (a.length !== sub.length) continue;
    let flag = true;
    for (let j = 0; j <= a.length; j++) {
      if (a[j] !== sub[j]) {
        flag = false;
        break;
      }
    }
    if (flag) return true;
  }
  return false;
}
