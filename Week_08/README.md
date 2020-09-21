学习笔记

# 常见排序

### 归并排序

要点:

- `mergeSort`函数的格式死记硬背即可, 此函数递归到最后, 左半部分和右半部分会分隔为[0, 0][1, 1]这样的区间(只包含两个元素)
- `merge`会将两个数组都从头开始遍历, 将两数组之间最小的元素依次放进新数组中. 由于一开始构建的部分只包含两个元素, 所以可以保证`merge`后的数组是有序的, 因此接下来在递归到上层`merge`时可以确保当前的两段区间皆为有序.
- 对两个有序数组合并的小技巧: 见下方代码注释

```ts
function mergeSort(nums: number[], start = 0, end = nums.length - 1) {
  if (start >= end) return;
  const mid = ((end - start) >> 1) + start;
  mergeSort(nums, start, mid);
  mergeSort(nums, mid + 1, end);
  merge(nums, start, mid, end);
}
function merge(nums: number[], start: number, mid: number, end: number) {
  const arr = [];
  let i = start; // 保证左边区间为 [start, mid]  右边区间为 [mid + 1, end]
  let j = mid + 1;
  while (i <= mid && j <= end) arr.push(nums[i] < nums[j] ? nums[i++] : nums[j++]); // 循环结束时, 左右区间中有一个已经全部归位完毕
  while (i <= mid) arr.push(nums[i++]);
  while (j <= end) arr.push(nums[j++]); // 这两行将还剩元素的那个区间, 剩余元素全部依次放入arr后
  nums.splice(start, end - start + 1, ...arr); // 替换原数组中[start, end]区间的值为合并完有序后的值. 注意 Array.splice 第二个参数为要删除多少个值, 不是要删除到哪个下标之前
}

const arr = [85, 1, 3, 8, 13, 0, 85, 63, 7254, 412];
mergeSort(arr);
console.log(arr);
```

### 快排

要点:

- 调用 `partition` 函数来对 `start`~`end` 这个区间的数组进行整理, 最后返回`povit`
- 下方递归调用 sort
- `partition` 函数内部处理时, 直接选最后一位为基准数, 再设置`povit`变量为`start`, 循环区间, 将所有小于基准数的值放在`povit`的位置上, 每次放置后`povit`加一.
- 上述循环结束后, 将最后的基准数与当前`povit`的值互换

```ts
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
const nums = [3, 4, 5, 2, 1];
sort(nums);
```
