学习笔记
这周公司开发任务比较忙整天都精疲力尽的题做得少, 下周把这周的题补一补..

## 二分查找的模板

```ts
function find(arr: number[], target: number) {
  let left = 0;
  let right = arr.length - 1;
  let mid = -1;
  while (left <= right) {
    mid = Math.floor(right / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return mid;
}
```

这里需要看一下69.二分查找这道题. 33. 搜索旋转排序数组
