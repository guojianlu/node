const fs = require('fs')

let buf = Buffer.alloc(10)

// 01 打开指定的文件
/* fs.open('a.txt', 'r', (err, rfd) => {
    // 03 打开 b 文件，用于执行数据写入操作
    fs.open('b.txt', 'w', (err, wfd) => {
        // 02 从打开的文件中读取数据
        fs.read(rfd, buf, 0, 10, 0, (err, readBytes, buffer) => {
            fs.write(wfd, buf, 0, 10, 0, (err, written, buffer) => {
                console.log('写入成功')
            })
        })
    })
}) */


// 02 数据的完全拷贝
const BUFFER_SIZE = buf.length
let readOffset = 0

fs.open('a.txt', 'r', (err, rfd) => {
    fs.open('b.txt', 'a+', (err, wfd) => {
        function next() {
            fs.read(rfd, buf, 0, BUFFER_SIZE, readOffset, (err, readBytes) => {
                if (!readBytes) {
                    // 如果条件成立，说明内容已经读取完毕
                    fs.close(rfd, () => {})
                    fs.close(wfd, () => {})
                    console.log('拷贝完成')
                    return
                }
                readOffset += readBytes
                fs.write(wfd, buf, 0, readBytes, (err, written, buffer) => {
                    next()
                })
            })
        }
        next()
    })
})
