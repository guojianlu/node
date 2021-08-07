module.exports = function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      args.push(function (err, data) {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
      fn.apply(null, args)
    })
  }
}