/*
 * @author: xiejiaxin
 * @Date: 2021-10-14 22:05:14
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-06 11:22:56
 * @description: file content
 */
// js是非阻塞性的一种语言，只能进行单线程运行，原因：因为js的运行环境主要是浏览器，而浏览器有很多IO操作，如果是多线程，那同时对一个dom进行新增又删除，那肯定就乱套了
// js中的执行栈和事件队列（栈是先进后出，队列是先进先出）
// 执行栈就是同步执行代码，事件队列一般是异步任务执行结束后，将挂起的函数加入到队列中，eg：执行栈到某一行代码，代码是settimeout，这个时候执行异步的方法会被挂起，知道异步执行完成，callback方法则会进入到事件队列中，等待执行栈执行完成后在推出存在事件队列中的方法

// 如果光靠执行栈和事件队列，对于js运行来说是不够的，任务队列里面还有两种任务：宏任务和微任务
// 宏任务：setTimeout、setInterval、setImmediate
// 微任务：promise.then、mutationObserve

// js事件循环我的理解：
// -- js是单线程的，一次只能做一件事情，所以对于异步操作，如果我们一直听着等异步操作完成再进行下一个操作的话，那肯定是不行的，这样会操作很多时间的浪费
// -- 所以我们的js可以分为同步和异步任务，同步任务的话，其实就是正常进行执行栈，代码一行接一行执行就OK，但是当我们执行过程中如果遇到了异步任务，那这个任务会被挂起，它执行完成后回调函数会被放到异步任务队列中
// -- 异步任务分为宏任务和微任务
// -- -- 宏任务一般指：定时器、IO、事件绑定、setImmediate、script执行
// -- -- 微任务一般指：Promise.then、async await、MutationObserve（async await实际就是一个promise）
// -- 事件循环其实就是：先执行同步任务，执行完成之后，再执行队列中的异步任务，异步任务又要区分宏任务和微任务，每一次同步任务执行完成之后，会执行微任务，微任务中如果还有微任务，那会继续执行，一直到微任务执行完成之后，再执行宏任务，然后再继续，反反复复

// 其实还有node事件循环机制

// https://juejin.cn/post/6844904079353708557#heading-4

let arr = [1, 2, 3];

function fn(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(x * x);
        }, 1000);
    })
}

// 目前原因不知道，只是知道foreach是不可以被中断的，所以是一秒后打印1，4，9，换成for就可以一秒打印一次了
function test() {
    arr.forEach(async (val) => {
        const newArr = await fn(val);
        console.log(newArr);
    });
}
// test();

// for (let i = 0; i < arr.length; i++) {
//     const newArr = await fn(arr[i]);
//     console.log(newArr)
// }

// TODO
const first = () => (new Promise((resolve, reject) => {
    console.log(3);
    let p = new Promise((resolve, reject) => {
        console.log(7);
        setTimeout(() => {
            console.log(5);
            resolve(6);
        }, 0)
        resolve(1);
    });
    resolve(2);
    // ! resolve或者reject后，如果不添加return，则后面的代码会继续执行
    p.then((arg) => {
        console.log(arg);
    });

}));

first().then((arg) => {
    console.log(arg);
});
console.log(4);
// ! 3 7 4 1 2 5

