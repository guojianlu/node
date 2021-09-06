module.exports = function instanceOf(obj, ctor) {
  let proto = obj.__proto__;
  while (proto) {
    if (proto === ctor.prototype) {
      return true;
    }
    proto = proto.__proto__;
  }
  return false;
};
