import { Heap } from '$utils/index';

function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map();
  for (let num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }
  const heap = new Heap<number>('small', (a, b) => map.get(a) > map.get(b));

  for (let [key] of map) {
    heap.add(key);
    if (heap.size() > k) heap.poll();
  }
  return heap.toArray();
}

export default topKFrequent;
