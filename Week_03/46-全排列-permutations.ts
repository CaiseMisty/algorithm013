// 套回溯模板
function permute(nums: number[]): number[][] {
  const list: number[][] = [];
  function backtrack(tempList: number[], nums: number[]) {
    if (tempList.length === nums.length) return list.push([...tempList]);
    for (let i = 0; i < nums.length; i++) {
      if (tempList.includes(nums[i])) continue;
      tempList.push(nums[i]);
      backtrack(tempList, nums);
      tempList.pop();
    }
  }
  backtrack([], nums);
  return list;
}
