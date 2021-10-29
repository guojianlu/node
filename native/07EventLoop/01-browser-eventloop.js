/**
 * 完整事件环执行顺序
 * 01 从上至下执行所有的同步代码
 * 02 执行过程中将遇到的宏任务与微任务添加到相应的队列
 * 03 同步代码执行完毕后，执行满足条件的微任务回调
 * 04 微任务队列执行完毕后执行满足条件的宏任务回调
 * 05 循环事件环操作
 * 注意：每执行一个宏任务之后就会立刻检查微任务队列
 */

setTimeout(() => {
    console.log('s1')
    Promise.resolve().then(() => {
        console.log('p2')
    })
    Promise.resolve().then(() => {
        console.log('p3')
    })
})

Promise.resolve().then(() => {
    console.log('p1')
    setTimeout(() => {
        console.log('s2')
    })
    setTimeout(() => {
        console.log('s3')
    })
})

// p1 s1 p2 p3 s2 s3