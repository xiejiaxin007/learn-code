/*
 * @author: xiejiaxin
 * @Date: 2022-04-11 21:18:31
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2022-04-11 21:54:31
 * @description: 原型式继承
 */
//! 类似于ES5的Object.create()方法
//! 传入的是个对象，所以相当于给prototype换了一个原型对象，所以跟原型继承很像，也是有引用类型的问题
//? 仍旧会重复
function initialFn(o) {
    function fn() {}
    fn.prototype = o
    return new fn()
}
let Obj = {
    name: 'xjx',
    colors: [1,3],
    sayHi: function() {
        console.log('father say hi~')
    }
}
let child = initialFn(Obj)
let child2 = initialFn(Obj);
console.log(child.name) // xjx
child.colors.push('222')
child.sayHi() // father say hi~
console.log(child2.colors, child.colors) // [1,3,'222']  [1,3,'222']