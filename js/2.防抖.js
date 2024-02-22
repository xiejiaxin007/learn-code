/*
 * @author: xiejiaxin
 * @Date: 2021-10-12 14:56:44
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-02-22 15:53:08
 * @description: file content
 */
// ? 防抖：在一定时间内，多次触发，只运行最后一次，适用场景：input搜索--手机号校验、邮箱校验（非联想那种），在输入完成后，才会进行搜索

// ! 定时器写法
function debounce(fn, delay) {
  var timer = null;
  return function (...arg) {
    let context = this;
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, arg);
    }, delay || 500);
  };
}

// ! 时间戳方式----有待商榷，我自己乱写的，但是运行起来好像也没问题
function timeSpanDebounce(fn, delay) {
  let timer = null;
  let lay = delay || 100;
  let startTime = Date.now();
  return function(...args) {
    let currentTime = Date.now();
    let flag = lay - (currentTime - startTime);
    let context = this;
    // ? 在lay时间内再次触发的话，则直接将时间重置到当前，开始重新计算时间
    if (flag <= 0) {
      fn.apply(context, args);
    } else {
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, (flag));
    }
    startTime = Date.now();
  }
}

// ! 立即执行版本，结合版本
// ! 需要注意的是，立即执行，是指每次到时间执行一次后，再次调用函数会立即再次执行一次
function allDebounce(fn, delay, immi) {
  let timer = null;
  let lay = delay || 100;
  return function(...args) {
    let context = this;
    // ? 每次都需要停一次，因为再次进来需要重新计时
    // ! 注意：此时timer !== null
    if (timer) clearTimeout(timer);
    if (immi) {
      // ? 如果需要立即执行，则走这部分代码
      // ! 需要注意的是，立即执行，是指每次到时间执行一次后，再次调用函数会立即再次执行一次
      if (!timer) fn.apply(context, args);
      timer = setTimeout(() => {
        fn.apply(context, args);
        // ! 重置为null后，立即执行会被执行一次
        timer = null;
      }, lay); 
    } else {
      // 如果不是立即执行，则直接设置好定时器即可
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, lay);
    }
  }
}

// 防抖就是，一段时间内，多次执行，则会把前面执行的函数去掉，重新开始计时，知道没有触发后，执行最后一次
