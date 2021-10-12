/*
 * @author: xiejiaxin
 * @Date: 2021-10-12 15:06:49
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2021-10-12 16:03:47
 * @description: file content
 */
// 节流：在一定时间内，只执行一次，场景：scroll、resize

// 利用定时器
function throttle(fn, delay) {
    let timer = null;
    return function(...arg) {
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, arg);
                clearTimeout(timer);
            }, delay || 500);
        }
    }
}
// 还可以利用时间戳

// 节流就是，在一定时间内，只触发一次，不会引起重新计时