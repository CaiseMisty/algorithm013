import { mkdir } from 'fs/promises';

function lemonadeChange(bills: number[]): boolean {
  if (bills[0] !== 5) return false;
  let m5 = 0;
  let m10 = 0;
  for (let item of bills) {
    switch (item) {
      case 5: {
        m5++;
        break;
      }
      case 10: {
        m10++;
        m5--;
        break;
      }
      case 20:
        if (m10 > 0) {
          m10--;
          m5--;
        } else {
          m5 -= 3;
        }
        break;
    }
    if (m5 < 0) {
      return false;
    }
  }
  return true;
}
