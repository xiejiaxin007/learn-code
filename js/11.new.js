/*
 * @author: xiejiaxin
 * @Date: 2021-10-16 17:41:23
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-02-19 09:48:30
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

// ! Reflect.construct()相当于new 操作符
// ! Reflect.apply 相当于 Function.prototype.apply
// ! Reflect.construct允许你使用可变的参数来调用构造函数，这和使用new 操作符搭配对象展开符调用一样----------(new.target[专属于构造函数内部的])
// ? var obj = new Foo(...args);
// ? var obj = Reflect.construct(Foo, args);
// https://blog.51cto.com/u_12304260/6025328
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/construct