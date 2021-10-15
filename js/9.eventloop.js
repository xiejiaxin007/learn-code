/*
 * @author: xiejiaxin
 * @Date: 2021-10-14 22:05:14
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2021-10-15 08:36:15
 * @description: file content
 */
// js是非阻塞性的一种语言，只能进行单线程运行，原因：因为js的运行环境主要是浏览器，而浏览器有很多IO操作，如果是多线程，那同时对一个dom进行新增又删除，那肯定就乱套了
// js中的执行栈和事件队列（栈是先进后出，队列是先进先出）
// 执行栈就是同步执行代码，事件队列一般是异步任务执行结束后，将挂起的函数加入到队列中，eg：执行栈到某一行代码，代码是settimeout，这个时候执行异步的方法会被挂起，知道异步执行完成，callback方法则会进入到事件队列中，等待执行栈执行完成后在推出存在事件队列中的方法

// 如果光靠执行栈和事件队列，对于js运行来说是不够的，任务队列里面还有两种任务：宏任务和微任务
// 宏任务：setTimeout、setInterval、setImmediate
// 微任务：promise.then、mutationObserve