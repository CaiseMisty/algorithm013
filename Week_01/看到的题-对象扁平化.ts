// 来源:  https://juejin.im/post/6844904137495150599#comment 中间的一道面试题

const tempObj: Record<string, any> = {};
function foo(obj: Record<string, any>) {
  let str = '';
  for (const key in obj) {
    if (typeof obj[key] !== 'object') {
      tempObj[key] = obj[key];
      return { key, val: obj[key] };
    }
    if (Array.isArray(obj[key])) {
    } else {
      str += `${key}.`;
      const rec = foo(obj[key]);
      // str += rec[key];
    }
  }
}
foo({ a: 1 });
console.log('tempObj', tempObj);
