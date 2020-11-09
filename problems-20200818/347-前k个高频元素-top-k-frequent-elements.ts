import { Heap } from '$utils/index';

/**
 * 用堆 书写代码的难度不大..  主要的难点是上面引入的这个堆的实现,
 * 这道题不能像老师在视频里讲的那种简单实现 Heap<int> 来做
 * 所以实现了个带泛型, 可以指定是小顶堆大顶堆, 类似java PreorityQueue初始化时传入自定义比较函数
 */

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
