# Week_01 学习笔记 (数组 链表 栈 队列)

## 改写 Deque

```java
Deque<String> deque = new LinkedList<String>();

deque.addLast("a");
deque.addLast("b");
deque.addLast("c");
System.out.println(deque);

String str = deque.peekFirst();
System.out.println(str);
System.out.println(deque);

while (deque.size() > 0) {
  System.out.println(deque.removeLast());
}
System.out.println(deque);
```
## 阅读源码

本人不写java, 读了也用不上api, 略了.

## 课前 - 第 1 课

### 五毒神掌

> 想掌握一道题, 至少要做五遍. 学习算法最大的误区就是只做一遍.

所谓五毒神掌, 是老师总结的快速刻意练习算法的五遍刷题法.

分清优先级, 时间是根据个人的优先级分配出来的.

过遍数比花大量时间在一道题上更加重要.

多过遍数, 多看解法, 多死记硬背, 杜绝死磕 AC.

#### 第一遍 初遇题

- 最多 15 分钟读题思考
- 没思路直接看解法. 注意多看不同解法, 切换 leetcode 国内外的站点, 看 high vote disguss, 对比不同解法优劣. 有思路则正常开始写代码.
- 背诵, 默写好的解法. 这一步非常重要.

#### 第二遍 初遇题

- 第一遍结束后, 立刻闭卷, 不看答案, 自己写.
- LeetCode 提交 -> debug -> accept
- 自己写出其他解法, 体会不同解法的执行时间, 直到不同解法也通过.

#### 第三遍 24 小时后

- 24 小时后, 重复做前一天的.
- 比较不同解法的熟练程度, 对不熟练的进行专项练习
- 如果工作较忙 时间不够, 课程学习时可以只进行第三遍, 将第四遍推迟. 且将第三遍第四遍简化为快速(例如 10 分钟 15 分钟)写出关键伪代码.

#### 第四遍 一周后

- 一周后, 返回练习.
- 对不熟练的进行专项练习

#### 第五遍 面试前

- 第五遍为面试前的恢复训练

### 初遇一道题的做题步骤

- 反复审题
- 列出所有能想出的可能解 (无论暴力, 非暴力, 甚至不符合题目细节要求的可能解)
- 对比可能解的时间空间复杂度, 寻找优化方式
- 写代码
- 写测试样例

### 当懵逼时

常用思维: 空间换时间, 升维, 寻找最小子问题.
如果想了一阵还是没思路, 直接看答案.

### 时间复杂度排序

- O(1)
- O(log n)
- O(n)
- O(n log n)
- O(n^2)
- O(2^n)
- O(n!)


## 第 3 课 - 数组 链表 跳表

### 数组

连续的内存空间:

|     | 时间复杂度 |
| --- | ---------- |
| 增  | O(n)       |
| 删  | O(n)       |
| 改  | O(1)       |
| 查  | O(1)       |

### 链表

- 单链表
- 双向链表
- 循环链表

|     | 时间复杂度 |
| --- | ---------- |
| 增  | O(1)       |
| 删  | O(1)       |
| 改  | O(n)       |
| 查  | O(n)       |

### 跳表

升维, 空间换时间.

### deque

双向队列, js 里的数组就是双向队列, 比较熟, 不废话.

- 插入, 删除 O(1)
- 查询 O(n)

### 优先队列(Priority Queue)

实现的具体结构较为多样复杂: heap, bst, treap

- 插入 O(1)
- 取出 O(log n)

## 课件中的题

### 283-移动零

此处只记录一次遍历解法的思路. 两者实现上其实差距不大.

思路 1 为严谨的找到 0 与非零两个值后再交换.  
思路 2 稍微抽象一些, 从头到尾遍历, i 逢非 0 就与 head 交换, head 逢交换则后移.

#### 思路 1

遍历数组, 下标为`i`, 新增`zeroIdx`用于保存遍历时遇到 0 的下标.

遍历时, 如果`zeroIdx`不指向 0, 则让`zeroIdx`后移.

当`i`指向非零 且`zeroIdx`指向 0 时, 将`zeroIdx`的值改为`i`的值, `i`位置的值改为 0. (相当于交换两者值)

```js
function moveZeroes(nums) {
  if (nums.length < 2) return nums;
  let zeroIdx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0 && nums[zeroIdx] === 0) {
      nums[zeroIdx] = nums[i];
      nums[i] = 0;
    }
    if (nums[zeroIdx] !== 0) {
      zeroIdx++;
    }
  }
  return nums;
}
```

#### 思路 2

同上, 遍历数组, 下标为`i`, 新增`head` 用于保存有待于互换的下标, 循环时`i`基本上会走的比`head`更快.

遍历时, `i`不断后移直到遇到非零值, 则`i`与`head`上的值互换, 此时有可能`head`与`i`指向同一位置, 但并不会影响结果. 当位置互换后, `head`后移一位.

```js
function moveZeroes(nums) {
  if (nums.length < 2) return nums;
  let head = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[head], nums[i]] = [nums[i], nums[head]];
      head++;
    }
  }
  return nums;
}
```

### 11-盛最多水的容器

首先哨兵放在数组左右两侧.
此时如果想在宽度缩小的情况下增大面积, 只能移动短边的哨兵

因为移动哨兵势必导致宽度变小, 如果移动较长边, 长边无论是变长还是变短, 面积都一定会缩小, 所以排除移动长边

移动短边, 面积有可能会增大, 不断的移动, 则会筛选出较优的选择

```js
export default function maxArea(arr) {
  let area = 0;
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    area = Math.max(getArea(arr, left, right), area);
    if (arr[left] < arr[right]) left++;
    else right--;
  }
  return area;
}

function getArea(arr, left, right) {
  return Math.min(arr[left], arr[right]) * (right - left);
}
```

### 1-两数之和

比较简单, hash 缓存遍历过的值所在下标, 则可以用空间换时间节省一轮遍历.

# 该死...

> 看来每道题都写题解, 时间根本不够用, 算了算了, 以后就在每道题上方的注释大概写一下思路吧



# Week_02 学习笔记 (哈希表 树 堆)

## 哈希表

通过`hash function`, 计算出`key value`, 从而加块访问速度, 存放记录的数组叫哈希表/散列表.

`hash function`计算出的值可能会重复, 称为哈希碰撞, 此时在重复的下标这个位置要存多个元素: 使用链表在这个下标存储多个元素.
O(1 查询位置, 如果链表中过于重复, 时间复杂度会退化到 O(n), 但如果哈希函数设计得好, 碰撞概率很小.

可认为平均时刻哈希表 search, insertion, deletion 时间复杂度都为 O(1). 在最坏情况下都是 O(n)

HashMap 的 put 和 get, 总结.

## 树

树是特殊的图, 链表是特殊的树.

递归遍历. 前中后序遍历.

迭代遍历.

## 堆

- 可以迅速找到一堆数中的最大值或者最小值的数据结构

- 根节点最大的为大顶堆
- 根节点最小的为小顶堆

### Heap 实现方式

二叉堆(比较简单, 时间复杂度不如其余的)

斐波那契堆: find-max(min): O(1) delete-max(min): O(logn) insert(create): O(logn) or O(1)

### TypeScript 实现一个二叉堆

初始化时可选为小顶堆 / 大顶堆, 默认为大顶. 类型不限制为 int.

可传入自定义比较函数.

文件位于`根目录/utils/`中, 用这个堆完成的 40, 347 题.

```ts
type heapType = 'big' | 'small';

export class Heap<T> {
  private static d = 2;
  private static parent(i: number) {
    return Math.floor((i - 1) / Heap.d);
  }

  private static kthChild(i: number, nth: number) {
    return Heap.d * i + nth;
  }

  private heap: T[];
  private heapSize: number;
  private type: heapType;
  // private compare: (a: T, b: T) => boolean;

  public constructor(type: heapType = 'big', compare?: (a: T, b: T) => boolean) {
    this.heapSize = 0;
    this.heap = [];
    this.type = type;
    if (compare) this.compare = compare;
  }

  public isEmpty(): boolean {
    return this.heapSize === 0;
  }

  /**
   * 添加元素
   */
  public add(i: T | T[]) {
    if (Array.isArray(i)) {
      for (let num of i as T[]) {
        this.add(num);
      }
    } else {
      this.heap[this.heapSize++] = i;
      this.heapifyUp(this.heapSize - 1);
    }
  }

  /**
   * 弹出根元素
   */
  public poll(i = 0) {
    if (this.isEmpty()) return;
    const rootElement = this.heap[i];
    this.heap[i] = this.heap[this.heapSize - 1];
    this.heapSize--;
    this.heap.length--;
    this.heapifyDown(i);
    return rootElement;
  }

  /**
   * 获取根元素的值
   */
  public peek(i = 0) {
    return this.heap[i];
  }

  public size() {
    return this.heapSize;
  }

  public findMax(): T | undefined {
    if (this.isEmpty()) return;
    return this.heap[0];
  }

  public toString(): string {
    return this.heap.toString();
  }

  public toArray(): T[] {
    return this.heap;
  }

  // 插入元素, 最坏复杂度O(log N)
  private heapifyUp(i: number) {
    const insertValue = this.heap[i];
    while (i > 0 && this.compareByType(insertValue, this.heap[Heap.parent(i)])) {
      this.heap[i] = this.heap[Heap.parent(i)];
      i = Heap.parent(i);
    }
    this.heap[i] = insertValue;
  }

  private heapifyDown(i: number) {
    let maxChildIdx: number;
    let target = this.heap[i];
    while (Heap.kthChild(i, 1) < this.heapSize) {
      maxChildIdx = this.chooseChild(i);
      if (this.compareByType(target, this.heap[maxChildIdx])) {
        break;
      }
      this.heap[i] = this.heap[maxChildIdx];
      i = maxChildIdx;
    }
    this.heap[i] = target;
  }

  private chooseChild(i: number) {
    const leftChild = Heap.kthChild(i, 1);
    const rightChild = Heap.kthChild(i, 2);
    if (rightChild + 1 > this.heapSize) return leftChild;
    return this.compareByType(this.heap[leftChild], this.heap[rightChild]) ? leftChild : rightChild; // this.heap[leftChild] > this.heap[rightChild]
  }
  private compare(a: T, b: T) {
    return a > b;
  }
  private compareByType(a: T, b: T) {
    return this.type === 'big' ? this.compare(a, b) : !this.compare(a, b);
  }
}

```


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
