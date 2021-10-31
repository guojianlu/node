/**
 * 背压机制
 */
const fs = require('fs')

const rs = fs.createReadStream('test.txt', {
    highWaterMark: 4 // 默认值64K
})

const ws = fs.createWriteStream('test1.txt', {
    highWaterMark: 1 // 默认值 16K
})

let flag = true

/* rs.on('data', chunk => {
    flag = ws.write(chunk, () => {
        console.log('写完了')
    })
    if (!flag) {
        rs.pause()
    }
})

ws.on('drain', () => {
    rs.resume()
}) */

rs.pipe(ws)