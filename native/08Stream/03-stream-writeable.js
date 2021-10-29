const { Writable } = require('stream')

class MyWritable extends Writable {
    constructor() {
        super()
    }
    _write(chunk, encoding, done) {
        process.stdout.write(chunk.toString() + '<---')
        process.nextTick(done)
    }
}

let myWritable = new MyWritable()

myWritable.write('前端开发', 'utf-8', () => {
    console.log('end')
})