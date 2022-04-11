/*
 * @author: xiejiaxin
 * @Date: 2022-04-11 21:04:21
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2022-04-11 21:41:14
 * @description: 伪构造函数继承（经典继承）
 */
//! 通过call/apply来进行父函数的调用，使得可以复制一份父函数的内部属性
//! 方法必须写在构造函数内部，所以会引起相同函数的内存浪费，也就是没实例化一个函数，都会复制一份一模一样但是保存地址不一样的函数
function Father(name) {
    this.name = name
    this.colors = [1,2]
}
Father.prototype.sayHi = function() {
    console.log('xxxx')
}
function Child(name) {
    Father.call(this, name)
}
let child1 = new Child('xjx')
let child2 = new Child('ls')
child1.colors.push(333)
// child1.sayHi()  // 会报错
console.log(child1.name) // xjx
console.log(child1.colors, child2.colors) // [1,2,333] [1,2]
