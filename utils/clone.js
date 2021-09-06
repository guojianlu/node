function isType(type) {
  return function(value) {
    return Object.prototype.toString.call(value) === `[object ${type}]`
  }
}

const isObject = isType('Object');

exports.deepClone = function deepClone(obj) {
  if (isObject(obj) || isArray(obj)) {
    const target = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        target[key] = deepClone(obj[key]);
      }
    }
  
    return target;
  }

  return obj;
}
