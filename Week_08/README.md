学习笔记

# 常见排序

### 归并排序

```js
//归并排序
function mergeSort(arr) {
  let len = arr.length;
  if (len < 2) {
    return arr;
  }
  //首先将无序数组划分为两个数组
  let mid = Math.floor(len / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid, len);
  return merge(mergeSort(left), mergeSort(right)); //递归分别对左右两部分数组进行排序合并
}
//合并
function merge(left, right) {
  let result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      //如果左边的数据小于右边的数据，将左边数据取出，放在新数组中
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result;
}
let arr = [3, 44, 38, 5, 47, 15, 36, 26];
mergeSort(arr);
```

### 快排

要记住的几个特殊点:

- 调用 `partition` 函数来对 `start`~`end` 这个区间的数组进行整理, 最后返回`povit`
- 下方递归调用 sort
- `partition` 函数内部处理时, 直接选最后一位为基准数, 再设置`povit`变量为`start`, 循环区间, 将所有小于基准数的值放在`povit`的位置上, 每次放置后`povit`加一.
- 上述循环结束后, 将最后的基准数与当前`povit`的值互换

```ts
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
```
