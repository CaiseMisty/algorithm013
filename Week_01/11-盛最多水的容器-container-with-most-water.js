/**
 * 首先哨兵放在数组左右两侧, 此时如果想在宽度缩小的情况下增大面积, 只能移动短边的哨兵
 * 因为移动哨兵势必导致宽度变小, 如果移动较长边, 长边无论是变长还是变短, 面积都一定会缩小, 所以排除移动长边
 * 移动短边, 面积有可能会增大, 不断的移动, 则会筛选出较优的选择
 */
module.exports = function maxArea(arr) {
  let area = 0;
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    area = Math.max(getArea(arr, left, right), area);
    if (arr[left] < arr[right]) left += 1;
    else right -= 1;
  }
  return area;
};

function getArea(arr, left, right) {
  return Math.min(arr[left], arr[right]) * (right - left);
}
