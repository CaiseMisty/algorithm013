/*
  最优解: 双指针 要注意这道题的思维方式
  首先将数组排序, 使操作更便捷
  从左向右, 依次选择一个基准数, 基准数右侧部分, 取最左最右两位置
  基准数如果大于0, 则不可能相加得零, 直接退出
  基准数+左+右的和 如果小于0,左位置右移  如果大于0,右位置左移
  这里在移动左右位置时, 要注意移动到不重复的值
  和等于0的 纪录为一个三元组
*/
enum Direction {
  right,
  left,
}
const threeSum = function (nums: number[]) {
  if (nums.length < 3) return [];
  nums = nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    const benchMark = nums[i];
    if (benchMark > 0) break;
    if (benchMark === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = benchMark + nums[left] + nums[right];

      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        res.push([benchMark, nums[left], nums[right]]);
        while (nums[right] === nums[right - 1]) right--;
        while (nums[left] === nums[left + 1]) left++;
        left++;
        right--;
      }
    }
  }
  return res;
};

export default threeSum;

// two-sum的变形  做得不对, 超出运行时间
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
*/
