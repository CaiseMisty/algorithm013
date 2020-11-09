let reverseBits = function (n) {
  let pos = 32;
  let res = 0;
  while (pos !== 0) {
    res = (n & 1) + (res << 1);
    pos--;
    n >>= 1;
  }
  return res;
};
