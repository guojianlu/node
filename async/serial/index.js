const logTime = name => {
  console.log(`Log...${name} ${new Date().toLocaleDateString()}`)
}

exports.callback = () => {
  setTimeout(() => {
    logTime('callback 1')
    setTimeout(() => {
      logTime('callback 2')
    }, 100)
  }, 100)
}

const promise = (name, delay = 100) => new Promise(resolve => {
  setTimeout(() => {
    logTime(name)
    resolve()
  }, delay)
})

exports.promise = () => {
  promise('Promise 1')
    .then(promise('Promise2'))
    .then(promise('Promise3'))
}

exports.generator = () => {
  const generator = function* generator(name) {
    yield promise(name + 1)
    yield promise(name + 2)
    yield promise(name + 3)
  }

  const co = generator => {
    if (it = generator.next().value) {
      it.then(() => {
        co(generator)
      })
    } else {
      return
    }
  }

  co(generator('Co-Generator'))
}

exports.asyncAwait = async () => {
  await promise('Async/Await 1')
  await promise('Async/Await 2')
  await promise('Async/Await 3')
}

exports.event = () => {
  const asyncFunc = name = event => {
    setTimeout(() => {
      logTime(name)
      event.emit('end')
    }, 100)
    return event
  }

  const list = [
    asyncFunc('event 1'),
    asyncFunc('event 2'),
    asyncFunc('event 3')
  ]

  const { EventEmitter } = require('events')
  const event = new EventEmitter()
  let i = 0
  event.on('end', () => i < list.length && list[i++](event))
  event.emit('end')
}
