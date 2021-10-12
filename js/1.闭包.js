/*
 * @author: xiejiaxin
 * @Date: 2021-10-12 14:39:01
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2021-10-12 15:01:59
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