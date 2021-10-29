const { Transform } = require('stream')

class MyTransform extends Transform {
    constructor(source) {
        super()
    }
    _transform(chunk, encoding, cb) {
        this.push(chunk.toString().toUpperCase())
        cb(null)
    }
}

let t = new MyTransform()

t.write('a')

t.on('data', chunk => {
    console.log(chunk.toString())
})
