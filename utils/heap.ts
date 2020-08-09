type heapType = 'big' | 'small';
export class Heap {
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
  public peek(i = 0) {
    return this.heap[i];
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
      maxChildIdx = this.chooseChild(i);
      if (this.heapifyDownJudge(target, this.heap[maxChildIdx])) {
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
    if (this.type === 'big') {
      return this.heap[leftChild] > this.heap[rightChild] ? leftChild : rightChild;
    } else {
      return this.heap[leftChild] < this.heap[rightChild] ? leftChild : rightChild;
    }
  }
  private heapifyUpJudge(target: number, parentVal: number) {
    return this.type === 'big' ? target > parentVal : target < parentVal;
  }
  private heapifyDownJudge(target: number, maxChildVal: number) {
    return this.type === 'big' ? target >= maxChildVal : target <= maxChildVal;
  }
}
