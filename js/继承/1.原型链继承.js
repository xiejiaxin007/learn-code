/*
 * @author: xiejiaxin
 * @Date: 2022-04-11 20:42:37
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2022-04-11 21:42:25
 * @description: 原型链继承
 */
// 原型链继承
//! 子函数的原型指向父函数的实例
//? 引用类型的属性会被公用，这个缺点不容忽视
function Father() {
    this.name = 'father'
    this.colors = [1,3]
}
Father.prototype.sayHi = function() {
    console.log('Father say Hi~');
}
function Child() {}
Child.prototype = new Father()
let child = new Child()
let child2 = new Child()
child.sayHi();
child.colors.push(2)
console.log(child.colors) // [1,3,2]
console.log(child2.colors) // [1,3,2]
