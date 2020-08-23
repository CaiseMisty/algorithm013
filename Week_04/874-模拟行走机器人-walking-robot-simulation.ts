/* eslint-disable @typescript-eslint/prefer-for-of */
function robotSim(commands: number[], obstacles: number[][]): number {
  let dx = [0, 1, 0, -1];
  let dy = [1, 0, -1, 0];
  let di = 0;
  let endX = 0;
  let endY = 0;
  let result = 0;
  let hashObstacle: Record<string, boolean> = {};
  for (let r = 0; r < obstacles.length; r++) {
    hashObstacle[obstacles[r][0] + '-' + obstacles[r][1]] = true;
  }
  for (let s = 0; s < commands.length; s++) {
    if (commands[s] === -2) {
      di = (di + 3) % 4;
    } else if (commands[s] === -1) {
      di = (di + 1) % 4;
    } else {
      // 每次走一步
      for (let z = 1; z <= commands[s]; z++) {
        let nextX = endX + dx[di];
        let nextY = endY + dy[di];
        // 判断下一步是否为障碍物
        if (hashObstacle[nextX + '-' + nextY]) {
          break;
        }
        endX = nextX;
        endY = nextY;
        result = Math.max(result, endX * endX + endY * endY);
      }
    }
  }
  return result;
}
