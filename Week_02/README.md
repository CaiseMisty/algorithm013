# Week_02 学习笔记 (哈希表)

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

### Heap实现方式
二叉堆(比较简单, 时间复杂度不如其余的)

斐波那契堆:  find-max(min): O(1)     delete-max(min): O(logn)      insert(create): O(logn) or O(1)

###  TypeScript实现一个二叉堆
```ts
type heapType = 'big' | 'small';
class Heap {
  private static d = 2;
  private static parent(i: number) {
    return Math.floor((i - 1) / Heap.d);
  }

  private static kthChild(i: number, nth: number) {
    return Heap.d * i + nth;
  }

  private heap: number[];
  private heapSize: number;
  private type: heapType;

  public constructor(type: heapType = 'big') {
    this.heapSize = 0;
    this.heap = [];
    this.type = type;
  }

  public isEmpty(): boolean {
    return this.heapSize === 0;
  }

  /**
   * 添加元素
   */
  public add(i: number | number[]) {
    if (typeof i === 'number') {
      this.heap[this.heapSize++] = i;
      this.heapifyUp(this.heapSize - 1);
    } else {
      for (let num of i as number[]) {
        this.add(num);
      }
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
  public peek(i: number) {
    return this.heap[0];
  }

  public findMax(): number | undefined {
    if (this.isEmpty()) return;
    return this.heap[0];
  }

  public toString(): string {
    return this.heap.toString();
  }

  public toArray(): number[] {
    return this.heap;
  }

  // 插入元素, 最坏复杂度O(log N)
  private heapifyUp(i: number) {
    const insertValue = this.heap[i];
    while (i > 0 && this.heapifyUpJudge(insertValue, this.heap[Heap.parent(i)])) {
      this.heap[i] = this.heap[Heap.parent(i)];
      i = Heap.parent(i);
    }
    this.heap[i] = insertValue;
  }

  private heapifyDown(i: number) {
    let maxChildIdx: number;
    let target = this.heap[i];
    while (Heap.kthChild(i, 1) < this.heapSize) {
      maxChildIdx = this.maxChild(i);
      if (this.heapifyDownJudge(target, this.heap[maxChildIdx])) {
        break;
      }
      this.heap[i] = this.heap[maxChildIdx];
      i = maxChildIdx;
    }
    this.heap[i] = target;
  }

  private maxChild(i: number) {
    const leftChild = Heap.kthChild(i, 1);
    const rightChild = Heap.kthChild(i, 2);
    if (rightChild + 1 > this.heapSize) return leftChild;
    return this.heap[leftChild] > this.heap[rightChild] ? leftChild : rightChild;
  }
  private heapifyUpJudge(target: number, parentVal: number) {
    return this.type === 'big' ? target > parentVal : target < parentVal;
  }
  private heapifyDownJudge(target: number, maxChildVal: number) {
    return this.type === 'big' ? target >= maxChildVal : target <= maxChildVal;
  }
}  
```
