function jump(nums: number[]) {
  let curr = 0;
  let stepCount = 0;

  while (curr < nums.length - 1) {
    let maxIdx = curr + 1;
    let max = maxIdx + nums[maxIdx];
    if (nums[curr] + curr >= nums.length - 1) {
      return stepCount + 1;
    }
    for (let i = curr + 1; i <= curr + nums[curr]; i++) {
      if (i + nums[i] > max) {
        max = nums[i] + i;
        maxIdx = i;
      }
    }
    curr = maxIdx;
    stepCount++;
  }

  return stepCount;
}
