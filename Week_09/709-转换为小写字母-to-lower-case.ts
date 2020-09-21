const diff = 'A'.charCodeAt(0) - 'a'.charCodeAt(0); // 'A' - diff = lowercase
const toLowerCase = [
  function toLowerCase(str: string): string {
    let res = '';
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i);
      if (code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0)) {
        res += String.fromCharCode(code - diff);
      } else res += str[i];
    }
    return res;
  },
  /**
   *  使用replace方法
   *  需要注意中间的正则必须为/[A-Z]/g, 不为g的话只会替换第一个
   *  String.fromCharCode 方法将 unicode 码转为字符, 第二个参数可不为 string 类型而是自定义 replace 函数
   */

  function toLowerCase(str: string): string {
    const diff = 'A'.charCodeAt(0) - 'a'.charCodeAt(0); // 'A' - diff = lowercase
    return str.replace(/[A-Z]/g, c => String.fromCharCode(c.charCodeAt(0) - diff));
  },
];
