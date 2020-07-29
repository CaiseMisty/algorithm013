/**
 * @param {number[]} arr
 * @return {number}
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
