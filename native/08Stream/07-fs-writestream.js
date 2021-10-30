const fs = require('fs')

const ws = fs.createWriteStream('test.txt', {
    flags: 'w',
    mode: 438,
    fd: null,
    encoding: 'utf-8',
    start: 0,
    highWaterMark: 3
})

// 数据格式：字符串或者Buffer
/* ws.write('123456', () => {
    console.log('ok2')
}) */

/* ws.write('前端开发', () => {
    console.log('ok1')
}) */


// 常见事件
ws.on('open', fd => {
    console.log('open', fd)
})

/**
 * 第一次直接写入到磁盘， 第二次开始写入到 Buffer 中
 * 返回一个 Boolean 值，当返回 false 的时候，表示缓存区满了，需要通知可读流暂定数据的读取，当缓存区里的数据都写入到磁盘之后，可写流就会触发 drain 事件，此时，可读流继续将数据往缓存里面读取。
 * 案例：可以通过 ws.write 的返回值，监听 ws 的 drain 事件，rs 流的 pause 和 resume 来模拟实现 rs 的 pipe 方法
 */
ws.write('1')

// close 是在数据写入操作全部完成之后再执行
ws.on('close', () => {
    console.log('文件关闭了')
})

// end 执行之后就意味着数据写入操作完成
ws.end() // end 方法也可以传参

// error
ws.on('error', err => {
    console.log('出错了')
})

// drain
ws.on('drain', () => {
    console.log('数据可以继续写入了')
})

// 注意：不能在 end 之后再执行 write 操作（触发error事件）