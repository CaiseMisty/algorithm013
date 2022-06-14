/* eslint-disable no-var */
function findAnagrams(s: string, p: string): number[] {
  const res: number[] = [];
  if (p.length > s.length) return res;
  // initial
  const targetHash: Record<string, number> = {};
  const slideHash: Record<string, number> = {};
  for (let i = 0; i < p.length; i++) {
    const tCh = p[i];
    const sCh = s[i];
    targetHash[tCh] ? targetHash[tCh]++ : (targetHash[tCh] = 1);
    slideHash[sCh] ? slideHash[sCh]++ : (slideHash[sCh] = 1);
  }

  let i = 0;
  let j = p.length - 1;
  while (j < s.length) {
    let flag = true;
    for (let sCh of Object.keys(slideHash)) {
      if (!targetHash[sCh]) {
        flag = false;
        break;
      } else if (slideHash[sCh] !== targetHash[sCh]) {
        flag = false;
        break;
      }
    }
    flag && res.push(i);
    i++;
    j++;
    const prevHead = s[i - 1];
    if (slideHash[prevHead] === 1) {
      delete slideHash[prevHead];
    } else {
      slideHash[prevHead]--;
    }
    if (s[j]) {
      slideHash[s[j]] ? slideHash[s[j]]++ : (slideHash[s[j]] = 1);
    }
  }

  return res;
}
