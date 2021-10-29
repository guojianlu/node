/**
 * Nodejs 中有六个事件队列
 * timers: 执行 setTimeout 与 setInterval 回调
 * pending callbacks: 执行系统操作的回调，例如tcp udp
 * idle,prepare: 只在系统内部进行使用
 * poll: 执行与 I/O 相关的回调
 * check： 执行 setImmediate 中的回调
 * close callbacks: 执行 close 事件的回调
 * 注意：开发中，我们一般只要关心timers poll check这三个队列即可
 */

/**
 * Nodejs 完整事件环
 * 01 执行同步代码，将不同的任务添加至相应的队列
 * 02 所有同步代码执行后会去执行满足条件的微任务
 * 03 所有微任务代码执行后会执行 timers 队列中满足的宏任务
 * 04 timers 中的所有宏任务执行完成后就会依次切换队列
 * 注意：在完成队列切换之前会先清空微任务队列
 */

/**
 * Nodejs 中的微任务有两种：Promise.then 和 process.nextTick
 * Nodejs 中的微任务是有优先级的，Process.then 的优先级比 Promise.resolve 高
 */

setTimeout(() => {
    console.log('s1')
})

Promise.resolve().then(() => {
    console.log('p1')
})

console.log('start')

process.nextTick(() => {
    console.log('tick')
})

setImmediate(() => {
    console.log('setImmediate')
})

console.log('end')

// start end tick p1 s1 setImmediate