function sort(nums: number[], start = 0, end = nums.length - 1) {
  if (start >= end) return;
  function partition(start: number, end: number) {
    let povit = start;
    for (let i = 0; i < end; i++) {
      if (nums[i] < nums[end]) {
        [nums[povit], nums[i]] = [nums[i], nums[povit]];
        povit++;
      }
    }
    [nums[povit], nums[end]] = [nums[end], nums[povit]];
    return povit;
  }
  const povit = partition(start, end);
  sort(nums, 0, povit - 1);
  sort(nums, povit + 1, end);
}
const nums = [3, 4, 5, 2, 1];
sort(nums);
console.log(nums);
