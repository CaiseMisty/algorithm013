function mergeSort(nums: number[], start = 0, end = nums.length - 1) {
  if (start >= end) return;
  const mid = ((end - start) >> 1) + start;
  mergeSort(nums, start, mid);
  mergeSort(nums, mid + 1, end);
  merge(nums, start, mid, end);
}
function merge(nums: number[], start: number, mid: number, end: number) {
  const arr = [];
  let i = start;
  let j = mid + 1;
  while (i <= mid && j <= end) arr.push(nums[i] < nums[j] ? nums[i++] : nums[j++]);
  while (i <= mid) arr.push(nums[i++]);
  while (j <= end) arr.push(nums[j++]);
  nums.splice(start, end - start + 1, ...arr);
}

const arr = [85, 1, 3, 8, 13, 0, 85, 63, 7254, 412];
mergeSort(arr);
console.log(arr);
