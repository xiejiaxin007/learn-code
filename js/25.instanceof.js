// ! instanceof原理

// * instanceof是通过找原型链来判断是否返回true的
// * 特点：一级一级寻找原型链，找到了返回true，直到prototype返回null的时候，整个返回false

// ? instanceof和constructor都是通过原型链来判断的，区别是什么呢？
// ?    instanceof主要是用于判断一个对象是否属于另外一个对象的实例的，它通过向上查找原型链prototype来进行匹配，匹配不上的时候就往上继续查找，直到prototype=null的时候停止
// ?    constructor主要是判断当前对象是否指向另外一个对象的构造函数，不会一级一级向上查找的
// ! constructor判断数据类型的时候，如果另外那个对象的prototype被人为修改了，则会出现判断不准确的情况
// ! instanceof和constructor都不能用于判断undefined和null，因为它们两个不算是一个真正的对象，所以无法查找原型链或者构造函数
// * 所以判断数据类型
// *    如果是基本数据类型，可以使用typeof
// *    如果是引用类型，可以用instanceof

// ? 手写一个instanceof函数
function myInstanceof(left, right) {
    let proto = Object.getPrototypeOf(left)
    let ri = right.prototype
    while(true){
        if (!proto) {
            return false
        }
        if (proto === ri) {
            return true
        }
        proto = Object.getPrototypeOf(proto)
    }
}
function Fn(){}
let fn = new Fn()
console.log(myInstanceof(fn, Fn))
console.log(myInstanceof(fn, Object))