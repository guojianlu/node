const fs = require('fs')

let rs = fs.createReadStream('test.txt', {
    flags: 'r',
    encoding: null,
    fs: null,
    mode: 438,
    autoClose: true,
    start: 0,
    // end: 3,
    highWaterMark: 2
})

// 流动模式
/* rs.on('data', chunk => {
    console.log(chunk.toString())
    rs.pause() // 流动模式也可以暂停
    setTimeout(() => {
        rs.resume() // 恢复
    }, 1000)
}) */

// 暂停模式
/* rs.on('readable', () => {
    let data
    while ((data = rs.read(1)) !== null) {
        console.log(data.toString())
        console.log('------', rs._readableState.length)
    }
}) */

// 文件可读流常见的事件
rs.on('open', fd => {
    console.log(fd, '文件打开了')
})

rs.on('close', () => {
    console.log('文件关闭了')
})

let bufferArr = []
rs.on('data', chunk => {
    // console.log(chunk)
    bufferArr.push(chunk)
})

rs.on('end', () => {
    // console.log('当数据清空之后')
    console.log(Buffer.concat(bufferArr).toString())
})

rs.on('error', () => {
    console.log('出错了')
})