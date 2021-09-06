const { isObject, isArray } = require('./type.js');

module.exports = function deepCompare(target1, target2) {
  if (target1 === target2) {
    return true;
  }

  if (isArray(target1) && isArray(target2)) {
    if (target1.length !== target2.length) {
      return false;
    }
    return JSON.stringify(target1) === JSON.stringify(target2);
  }

  if (isObject(target1) && isObject(target2)) {
    const keys1 = Object.keys(target1);
    const keys2 = Object.keys(target2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (const key in target1) {
      if (Object.hasOwnProperty.call(target1, key)) {
        if (deepCompare(target1[key], target2[key]) === false) {
          return false;
        }
      }
    }

    return true;
  }

  return target1 === target2;
}
