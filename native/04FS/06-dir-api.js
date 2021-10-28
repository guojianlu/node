/**
 * access：判断文件或目录是否具有操作权限
 * stat: 获取目录及文件信息
 * mkdir: 创建目录
 * rmdir: 删除目录
 * readdir: 读取目录中内容
 * unlink: 删除指定文件
 */

const fs = require('fs')

// access
/* fs.access('a.txt', err => {
    if (err) {
        // 没有操作权限或当前路径是有问题的
        console.log(err)
    } else {
        console.log('有操作权限')
    }
}) */


// stat
/* fs.stat('a.txt', (err, stat) => {
    console.log(stat.size)
    console.log(stat.isFile())
    console.log(stat.isDirectory())
    console.log(stat)
}) */

// mkdir
/* fs.mkdir('a/b/c', { recursive: true }, err => {
    if (err) {
        console.log(err)
    } else {
        console.log('创建成功')
    }
}) */

//rmdir
/* fs.rmdir('a', { recursive: true }, err => {
    if (err) {
        console.log(err)
    } else {
        console.log('删除成功')
    }
}) */


// readdir
/* fs.readdir('a', (err, files) => {
    console.log(files)
}) */

// unlink
/* fs.unlink('a/a.txt', err => {
    if (!err) {
        console.log('删除成功')
    }
}) */