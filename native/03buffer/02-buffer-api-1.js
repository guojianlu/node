let buf = Buffer.alloc(6)

// fill
/* buf.fill('123', 1, 3) // [content, start, end]
console.log(buf)
console.log(buf.toString()) */

// write
/* buf.write('123', 1, 4) // [content, start, length]
console.log(buf)
console.log(buf.toString()) */

// toString
/* buf = Buffer.from('前端开发')
console.log(buf)
console.log(buf.toString('utf-8', 3, 9)) // [encoding, start, end] */

// slice
/* buf = Buffer.from('前端开发')
// let b1 = buf.slice()
let b1 = buf.slice(3, 9) // [start, end]
// let b1 = buf.slice(-3)
console.log(b1)
console.log(b1.toString()) */

// indexOf
/* buf = Buffer.from('snail爱前端，爱后端，爱开发')
console.log(buf)
console.log(buf.indexOf('爱', 6)) */

// copy
/* let b1 = Buffer.alloc(6)
let b2 = Buffer.from('前端')

b2.copy(b1, 3, 3, 6) // 将b2拷贝到b1，[dest, dest/start, source/start, source/end]
console.log(b1.toString())
console.log(b2.toString()) */
