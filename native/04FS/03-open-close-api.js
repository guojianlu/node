const fs = require('fs');
const path = require('path');

// open
/* fs.open(path.resolve('data.txt'), 'r', (err, fd) => {
    // fd：文件描述符，一般从3开始，0、1、2已经被标准输入、输出、错误占用
    console.log(fd)
}) */

// close
fs.open('data.txt', 'r', (err, fd) => {
    console.log(fd)
    fs.close(fd, err => {
        console.log('关闭成功')
    })
})