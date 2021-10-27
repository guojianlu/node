// 1 资源：cpu 内存
// console.log(process.memoryUsage())
// console.log(process.cpuUsage())

// 2 运行环境：运行目录，node环境，cpu架构，用户环境，系统平台
// console.log(process.cwd())
// console.log(process.version)
// console.log(process.versions)
// console.log(process.arch)
// console.log(process.env.NODE_ENV)
// console.log(process.env.PATH)
// console.log(process.env.USERPROFILE)
// console.log(process.platform)

// 3 运行状态：启动参数，PID，运行时间
// console.log(process.argv)
// console.log(process.argv0) // execArgv
// console.log(process.pid) // ppid
// console.log(process.uptime()) // 运行时间

// 4 事件
// process.on('beforeExit', (code) => { // 回调函数里面可以写异步代码
//     console.log('beforeExit ' + code)
// })

// process.on('exit', (code) => { // 回调函数里面不支持写入异步代码
//     console.log('exit ' + code)
//     setTimeout(() => {
//         console.log(123)
//     }, 1000)
// })

// process.exit()
// console.log('代码执行完了')

// 5 标准输出 输入 错误
// console.log = function (data) {
//     process.stdout.write('---' + data + '\n')
// }
// console.log(11)
// console.log(22)

// const fs = require('fs')
// fs.createReadStream('test.txt').pipe(process.stdout)

// process.stdin.pipe(process.stdout)

// process.stdin.setEncoding('utf-8')
// process.stdin.on('readable', () => {
//     let chunk = process.stdin.read()
//     if (chunk !== null) {
//         process.stdout.write('data ' + chunk)
//     }
// })
