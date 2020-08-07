class Heap {
  private static d = 2;
  private static parent(i: number) {
    return (i - 1) / Heap.d;
  }

  private static kthChild(i: number, nth: number) {
    return Heap.d * i + nth;
  }

  private heap: number[];
  private heapSize: number;

  public constructor(capacity: number) {
    this.heapSize = 0;
    this.heap = new Array(capacity + 1);
  }

  public isEmpty(): boolean {
    return this.heapSize === 0;
  }

  public isFull(): boolean {
    return this.heapSize === this.heap.length;
  }

  public insert(i: number) {
    if (this.isFull()) {
      throw new Error('heap is full');
    }
    this.heap[this.heapSize++] = i;
    this.heapifyUp(this.heapSize - 1);
  }

  public delete(i: number) {
    if (this.isEmpty()) {
      throw new Error('heap is empty');
    }
    const bigElement = this.heap[i];
    this.heapSize--;
    this.heapifyDown(i);
    return bigElement;
  }

  public findMax(): number {
    if (this.isEmpty()) throw new Error('Heap is empty.');
    return this.heap[0];
  }

  // 插入元素, 最坏复杂度O(log N)
  private heapifyUp(i: number) {
    const insertValue = this.heap[i];
    while (i > 0 && insertValue > this.heap[Heap.parent(i)]) {
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
      if (target >= this.heap[maxChildIdx]) {
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
    return this.heap[leftChild] > this.heap[rightChild] ? leftChild : rightChild;
  }
}

const a = 1;
