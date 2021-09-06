function isType(type) {
  return function(value) {
    return Object.prototype.toString.call(value) === `[object ${type}]`
  }
}

exports.isObject = isType('Object');
exports.isArray = isType('Array');
exports.isFunction = isType('Function');
exports.isRegExp = isType('RegExp');
exports.isDate = isType('Date');
exports.isFunction = isType('Function');

exports.isNull = isType('Null');
exports.isUndefined = isType('Undefined');
exports.isBoolean = isType('Boolean');
exports.isNumber = isType('Number');
exports.isString = isType('String');
