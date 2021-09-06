
exports.eachFlat = function eachFlat(arr = [], depth = 1) {
  const result = []; // 缓存递归结果
  // 开始递归
  (function flat(arr, depth) {
    // forEach 会自动去除数组空位
    arr.forEach((item) => {
      // 控制递归深度
      if (Array.isArray(item) && depth > 0) {
        // 递归数组
        flat(item, depth - 1)
      } else {
        // 缓存元素
        result.push(item)
      }
    })
  })(arr, depth)
  // 返回递归结果
  return result;
}

exports.flatDeep = function flatDeep(arr, d = 1) {
  return d > 0
            ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
            : arr.slice();
};

exports.flatReduce = function flatReduce(arr) {
  return arr.reduce((res, item) => res.concat(Array.isArray(item) ? flatReduce(item) : item), []);
}