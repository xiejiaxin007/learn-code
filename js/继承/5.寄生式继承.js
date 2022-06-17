/*
 * @author: xiejiaxin
 * @Date: 2022-04-11 21:17:50
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2022-04-11 21:49:23
 * @description: 寄生式继承
 */
//! 函数无法重用
//! 引用类型问题仍然存在
function initialFn(o) {
    let fn = Object(o);
    fn.sayHi = function() {
        console.log('father say hi~')
    }
    return fn;
}
let father = {
    name: 'xjx',
    colors: [1,3],
}
let child = initialFn(father)
let child1 = initialFn(father)
child.colors.push(111)
console.log(child.colors, child1.colors) // [1,3,111]  [1,3,111]
child.sayHi()