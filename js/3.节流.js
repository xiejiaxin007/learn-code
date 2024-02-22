/*
 * @author: xiejiaxin
 * @Date: 2021-10-12 15:06:49
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-02-22 15:43:00
 * @description: file content
 */
// ! 节流：在一定时间内，只执行一次，场景：scroll、input联想搜素、resize【也可以防抖】

// * 使用定时器写法，delay毫秒后第一次执行，第二次事件停止触发后依然会再一次执行
function throttle(fn, delay) {
  let timer = null;
  return function (...arg) {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, arg);
        clearTimeout(timer);
        timer = null;
      }, delay || 500);
    }
  };
}
const handler = function () {};
// ? 使用方式：监听滚动事件
// ! 这个地方需要注意的是，使用了闭包
// ? 刚开始我的错误理解是：每次scroll出发，就执行一次throttle方法（我就无法理解为啥【timer】这个变量能成为全局的，而不是每次重新声明的），其实不然，在第一次进行绑定的时候，其实就把throttle函数return的内部方法给返回了，
// ? 所以每次scroll，其实调用的内部方法，所以【timer】自然就变成了一个全局变量，也就是不能被回收的变量了
window.addEventListener('scroll', throttle(handler));


// * 使用时间戳写法，事件会立即执行，停止触发后没有办法再次执行
function timeSpanThrottle(fn, delay) {
  let lay = delay || 100;
  let startTime = Date.now();
  return function(...args) {
    let context = this;
    let currentTime = Date.now();
    let flag = lay - (currentTime - startTime)
    if (flag <= 0) {
      fn.apply(context, args);
      currentTime = Date.now();
    }
  }
}


// * 还可以利用时间戳 + 定时器
function newTimespanThrottle(fn, delay) {
  // ! 这个地方专门声明一个定时器
  let timer = null;
  let startTime = Date.now();
  let lay = delay || 100;
  return function(...args) {
    let curTime = Date.now();
    let lastTime = lay - (curTime - startTime);
    let context = this;
    // ! 每次都给清空，这样才能每次做好定时器
    if (timer) clearInterval(timer);
    if (lastTime <= 0) {
      // ! 到达执行时间了，就可以执行一次
      // 执行
      fn.apply(context, args);
      curTime = Date.now();
    } else {
      // ! 根据记录的时间，延迟lastTime后执行一次，这个地方主要是为了特别情况：
      // ! 比如滚动到最底端的时候，时间没到delay，所以不会再执行了，所以我们需要定时器在差lastTime的时间后再次执行一次，比较直观的就是：滚动到底部后一会儿就最后执行一次
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, lastTime);
    }
  }
}

// 节流就是，在一定时间内，只触发一次，不会引起重新计时
