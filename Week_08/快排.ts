function sort(nums: number[], start = 0, end = nums.length - 1) {
  if (start >= end) return;
  function partition(start: number, end: number): number {
    let pivot = start;
    for (let i = start; i < end; i++) {
      if (nums[i] < nums[end]) {
        [nums[i], nums[pivot]] = [nums[pivot], nums[i]];
        pivot++;
      }
    }
    [nums[pivot], nums[end]] = [nums[end], nums[pivot]];
    return pivot;
  }
  const pivot = partition(start, end);
  sort(nums, start, pivot - 1);
  sort(nums, pivot + 1, end);
}
const arr = [85, 1, 3, 8, 13, 0, 85, 63, 7254, 412];
sort(arr);
console.log(arr);
