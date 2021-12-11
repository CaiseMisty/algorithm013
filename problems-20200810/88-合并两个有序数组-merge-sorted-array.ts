/**
 * 从两数组的末尾向前查看
 * 正确位置指针correctIdx指向 m + n -1
 * 指针m指向数组1末尾  指针n指向指针2末尾
 * 选择更大的数, 放在correctIdx上,  correct - 1, 赋值操作时的指针位置也减1
 * 需要注意  循环结束时, 有可能数组a遍历完了, 数组a的元素已经归位, 但b数组还剩一些元素没归位
 * 将b数组此时的指针位置, 到0之间的元素, 替换掉a数组
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let correctIdx = m + n - 1;
  m--;
  n--;
  while (m >= 0) {
    if (nums1[m] < nums2[n]) {
      nums1[correctIdx--] = nums2[n--];
    } else {
      nums1[correctIdx--] = nums1[m--];
    }
  }
  nums1.splice(0, n + 1, ...nums2.slice(0, n + 1));
}
export default merge;
