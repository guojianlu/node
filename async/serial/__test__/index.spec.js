test('callback', done => {
  const { callback } = require('../index')
  callback()
  setTimeout(done, 1000)
})

test('promise', done => {
  const { promise } = require('../index')
  promise()
  setTimeout(done, 1000)
})

test('Generator', done => {
  const { generator } = require('../index')
  generator()
  setTimeout(done, 1000)
})

test('Async/Await', done => {
  const { asyncAwait } = require('../index')
  asyncAwait()
  setTimeout(done, 1000)
})
