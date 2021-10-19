/*
 * @author: xiejiaxin
 * @Date: 2021-10-16 17:41:23
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2021-10-19 11:02:52
 * @description: file content
 */
// new操作，实际上就是给实例对象赋值为原型对象的prototype
function myNew(fn, ...arg) {
    let obj = {};
    obj.__proto__ = fn.prototype;
    fn.apply(obj, arg)
    return obj;
}

function Fn() {
    this.name = 'xjx'
}

let a = myNew(Fn);
console.log(a);

// new关键字，其实是帮我们做了四步操作
// -- 1、创建一个空对象
// -- 2、将原型函数的prototype赋值给这个对象的原型上__proto__
// -- 3、调用构造函数，将上下文修改为obj的作用域
// -- 4、返回这个空对象