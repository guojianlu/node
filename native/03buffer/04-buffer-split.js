ArrayBuffer.prototype.split = function (sep) {
    let len = Buffer.from(sep).length
    let ret = []
    let start = 0
    let offset = 0

    while (offset = this.indexOf(sep, start) !== -1) {
        ret.push(this.slice(start, offset))
        start = offset + len
    }
    ret.push(this.slice(start))

    return ret
}

let buf = 'snail吃鸡，吃鸭，吃牛吃'
let bufArr = buf.split('吃')
console.log(bufArr)
