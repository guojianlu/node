const add = (x, y) => x + y;
const square = z => z * z;

const compose = (...fns) => {
  if (fns.length === 0) {
    return arg => arg;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return fns.reduce((a, b) => (...args) => a(b(...args)));
}

console.log(compose(square, add)(1, 2));

function KoaCompose(middlewares) {
  return function(ctx) {
    return dispatch(0)

    function dispatch(i) {
      let fn = middlewares[i]

      if (!fn) {
        return Promise.resolve()
      }

      return Promise.resolve(fn(ctx, function next() {
        return dispatch(i + 1)
      }))
    }
  }
}

module.exports = KoaCompose;