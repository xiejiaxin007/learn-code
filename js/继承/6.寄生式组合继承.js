/*
 * @author: xiejiaxin
 * @Date: 2022-04-11 21:33:02
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2022-04-11 21:47:07
 * @description: 寄生式组合继承
 */
//! 融合了组合式和寄生式的特点
//! 解决组合式重复执行父级构造函数的问题，提高运行效率
//! 解决了寄生式函数无法重用的问题
function Father(name) {
    this.name = name
    this.colors = [1,2]
}
Father.prototype.sayHi = function() {
    console.log('father say hi~')
}
// 把内部属性拿到
function Child(name) {
    Father.call(this, name);
}
// 把prototype上的属性拿到
function initialFn(fatherFn, childFn) {
    // 保留父函数的副本
    let prototype = Object(fatherFn.prototype);
    // 还原子函数的构造函数指向
    prototype.constructor = childFn;
    childFn.prototype = prototype;
}
initialFn(Father, Child);
let child = new Child('xjx')
let child1 = new Child('ls')
child.colors.push(1122)
console.log(child.colors, child1.colors) // [1,2, 1122] [1,2]
child.sayHi() // father say hi~