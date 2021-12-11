// 递归生成
function generateParenthesis(maxLeft: number): string[] {
  const res: string[] = [];
  if (maxLeft === 0) return [''];
  function generate(leftCount: number, rightCount: number, currStr: string) {
    if (rightCount === maxLeft) {
      res.push(currStr);
      return;
    }
    if (leftCount < maxLeft) generate(leftCount + 1, rightCount, currStr + '(');
    if (rightCount < leftCount) generate(leftCount, rightCount + 1, currStr + ')');
  }
  generate(0, 0, '');
  return res;
}

// generateParenthesis(3);
export default generateParenthesis;
