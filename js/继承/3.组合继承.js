/*
 * @author: xiejiaxin
 * @Date: 2022-04-11 21:11:52
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2022-04-11 21:44:02
 * @description: 组合继承
 */
//! 融合了原型链继承和经典继承，解决了引用类型和函数重复声明的问题
//! 使用比较广泛
//? Father构造函数会被调用两次，导致实例和子函数的原型上都有属性，造成不需要的浪费和降低运行效率
function Father(name) {
    this.name = name
    this.colors = [1,2]
}
Father.prototype.sayHi = function() {
    console.log('Father say hi~');
}
function Child(name) {
    Father.call(this, name)
}
Child.prototype = new Father('xjx');
let child = new Child('ls')
let child1 = new Child('xx')
console.log(child.name) // ls
child.sayHi() // Father say hi~
child.colors.push(3)
console.log(child.colors, child1.colors) // [1,2,3]  [1,2]
