/*
 * @author: xiejiaxin
 * @Date: 2021-10-12 14:56:44
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2021-10-12 15:51:15
 * @description: file content
 */
// 防抖：在一定时间内，多次触发，只运行最后一次，适用场景：input远程搜索，在输入完成后，才会进行搜索

function debounce (fn, delay) {
    var timer = null;
    return function (...arg) { 
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arg);
        }, delay || 500);
    }
}

// 防抖就是，一段时间内，多次执行，则会把前面执行的函数去掉，重新开始计时，知道没有触发后，执行最后一次