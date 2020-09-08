// 来源:  https://juejin.im/post/6844904137495150599#comment 中间的一道面试题
function foo(obj: Record<string, any>) {
  const res: Record<string, any> = {};
  function recursive(val: any, str: string) {
    if (!Array.isArray(val) && typeof val !== 'object') {
      res[str] = val;
      return;
    }
    if (Array.isArray(val)) {
      val.forEach((_val, idx) => {
        recursive(_val, `${str}[${idx}]`);
      });
    } else if (typeof val === 'object') {
      Object.entries(val).map(([_key, _val]) => {
        recursive(_val, `${str}.${_key}`);
      });
    }
  }
  Object.entries(obj).map(([key, val]) => {
    recursive(val, key);
  });
  return res;
}
foo({
  a: {
    b: {
      c: {
        d: 1,
      },
    },
  },
  aa: 2,
  c: [1, 2],
});
