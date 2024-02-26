/*
 * @author: xiejiaxin
 * @Date: 2021-10-12 14:39:01
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-02-22 15:54:12
 * @description: file content
 */
// 闭包是什么？？
// 闭包的好处和坏处？？
// 闭包的使用场景？？

/**------------------------------------- */
// 函数中的另外一个函数，会返回，可以做到外部作用域使用某一个函数内部的作用域
// 匿名函数本身就是一个闭包
// 好处：独立的运行环境
// 坏处：容易产生无法释放的空间
// 使用场景：
// 1.模仿块级作用域，比如for循环里面进行一些操作;
// 2.创造私有变量
// 3.单例模式
/**------------------------------------- */

// ? 闭包就看这个例子，你就知道变量没有回收是啥意思了
function myMethod() {
  var num = 6;
  return function () {
    var n = 0;
    console.log(++n, ++num);
  };
}
//! 关键点就是这个地方，先把内部函数取出来，然后再多次执行，就会导致【num】这个变量一直无法回收，并且一直累加着
var myFn = myMethod();
myFn(); // 1 7
// ! num在一直累加中
myFn(); // 1 8


// 函数内部声明变量，如果不使用var或者let，则会变成全局变量
function fn() {
    n = 999;
}
fn();
console.log(n); // 999

var name = "The Window";
var object = {
    name: "My Object",
    getNameFunc: function () {
        return function () {
            return this.name;
        };
    }
};
alert(object.getNameFunc()()); // The Window

// var name = "The Window";
// var object = {
//     name: "My Object",
//     getNameFunc: function () {
//         return function () {
//             var that = this;
//             return that.name;
//         };
//     }
// };
// alert(object.getNameFunc()()); // My Object

