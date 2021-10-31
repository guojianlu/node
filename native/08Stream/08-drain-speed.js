/**
 * 分批写入
 */

const fs = require('fs')

/* const ws = fs.createWriteStream('test.txt')
ws.write('前端开发') */

const ws = fs.createWriteStream('test.txt', {
    highWaterMark: 3
})

const source = '前端开发'.split('')
let num = 0
let flag = true

function executeWrite() {
    flag = true
    while (num !== source.length && flag) {
        flag = ws.write(source[num++])
    }
}

executeWrite()

ws.on('drain', () => {
    executeWrite()
})