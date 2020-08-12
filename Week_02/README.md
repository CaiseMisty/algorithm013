<<<<<<< HEAD
# Week_02 学习笔记 (哈希表  树  堆)
=======
# Week_02 学习笔记 (哈希表 树 堆)
>>>>>>> 2b2ee4f78903e460e9d2172bfca0907fd63f92f2

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
<<<<<<< HEAD
```
=======
```
>>>>>>> 2b2ee4f78903e460e9d2172bfca0907fd63f92f2
