const { Duplex } = require('stream')

class MyDuplex extends Duplex {
    constructor(source) {
        super()
        this.source = source
    }
    _read() {
        let data = this.source.shift() || null
        this.push(data)
    }
    _write(chunk, encoding, done) {
        process.stdout.write(chunk)
        process.nextTick(done)
    }
}

let source = ['a', 'b', 'c']
let myDuplex = new MyDuplex(source)

/* myDuplex.on('data', chunk => {
    console.log(chunk.toString())
}) */

/* myDuplex.write('前端开发', 'utf-8', () => {
    console.log('end')
}) */