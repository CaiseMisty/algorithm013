import { Heap } from '$utils/index';
// 使用大顶堆
function getLeastNumbers(arr: number[], k: number): number[] {
  if (!k) return [];
  const heap = new Heap('big');
  for (let i = 0; i < k; i++) {
    heap.add(arr[i]);
  }
  for (let i = k; i < arr.length; i++) {
    const max = heap.peek();
    if (arr[i] >= max) continue;
    else {
      heap.poll();
      heap.add(arr[i]);
    }
  }
  return heap.toArray();
}
export default getLeastNumbers;
