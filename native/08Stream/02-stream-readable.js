const { Readable } = require('stream')

// 模拟底层数据
let source = ['front', 'backend', 'client']

// 自定义类继承 Readable
class MyReadable extends Readable {
    constructor(source) {
        super()
        this.source = source
    }
    _read() {
        let data = this.source.shift() || null
        this.push(data)
    }
}

// 实例化
let myReadable = new MyReadable(source)

// 暂停模式
/* myReadable.on('readable', () => {
    let data = null
    while ((data = myReadable.read()) !== null) {
        console.log(data.toString())
    }
}) */

// 流动模式
myReadable.on('data', chunk => {
    console.log(chunk.toString())
})