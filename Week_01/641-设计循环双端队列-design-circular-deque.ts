class MyCircularDeque {
  private capacity: number;
  private arr: number[];
  private front: number;
  private rear: number;
  public constructor(k: number) {
    this.capacity = k + 1;
    this.arr = new Array(this.capacity);
    this.front = 0; //  插入时，先减，再赋值 //删除时，索引 +1
    this.rear = 0; //  插入时，先赋值，再加 // 删除时，索引 -1
  }
  public insertFront(value: number) {
    if (this.isFull()) {
      return false;
    }
    this.front = (this.front - 1 + this.capacity) % this.capacity;
    this.arr[this.front] = value;
    return true;
  }
  public insertLast(value: number) {
    if (this.isFull()) {
      return false;
    }
    this.arr[this.rear] = value;
    this.rear = (this.rear + 1) % this.capacity;
    return true;
  }
  public deleteFront() {
    if (this.isEmpty()) {
      return false;
    }
    this.front = (this.front + 1) % this.capacity;
    return true;
  }
  public deleteLast() {
    if (this.isEmpty()) {
      return false;
    }
    this.rear = (this.rear - 1 + this.capacity) % this.capacity;
    return true;
  }
  public getFront() {
    if (this.isEmpty()) {
      return -1;
    }
    return this.arr[this.front];
  }
  public getRear() {
    if (this.isEmpty()) {
      return -1;
    }
    // 当 rear 为 0 时防止数组越界, rear指向的是下一个插入的元素的位置，元素为空，需要-1；
    return this.arr[(this.rear - 1 + this.capacity) % this.capacity];
  }
  public isEmpty() {
    return this.front === this.rear;
  }
  public isFull() {
    return (this.rear + 1) % this.capacity === this.front;
  }
}
export default MyCircularDeque;
