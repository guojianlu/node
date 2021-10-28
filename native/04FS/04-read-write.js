const fs = require('fs');

// read：所谓的读操作就是将数据从磁盘文件中读取到(写入到) buffer 中
let buf = Buffer.alloc(10)

/**
 * fd 定位当前打开的文件
 * buf 用于表示当前缓存区
 * offset 表示当前从 buf 的那个位置开始执行写入
 * length表示 当前次写入的长度
 * position 表示当前从文件的哪个位置开始读取
 */
/* fs.open('data.txt', 'r', (err, rfd) => {
    console.log(rfd)
    fs.read(rfd, buf, 1, 4, 3, (err, readBytes, data) => {
        console.log(readBytes)
        console.log(data)
        console.log(data.toString())
        console.log(buf)
    })
}) */

// write：将缓存区里的内容写入到磁盘文件中
buf = Buffer.from('123456789')
fs.open('b.txt', 'w', (err, wfd) => {
    fs.write(wfd, buf, 2, 4, 0, (err, written, buffer) => {
        console.log(written)
        fs.close(wfd)
    })
})
