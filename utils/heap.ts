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
    return this.compareByType(this.heap[leftChild], this.heap[rightChild]) ? leftChild : rightChild;
  }
  private compare(a: T, b: T) {
    return a > b;
  }
  private compareByType(a: T, b: T) {
    return this.type === 'big' ? this.compare(a, b) : !this.compare(a, b);
  }
}
