/*
 * @description:
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-02-27 11:21:19
 * @desc:
 */
// exports和module.exports解释：
// ? exports==module.exports

// * exports和module.exports的使用场景：
// * 1、exports：导出一个一个数据，最后会汇总成一个对象格式导出
// * 2、module.exports，可以导出任意格式的数据，比如 module.exports = [1,2,3]


// ? 与 exports 相比，module.exports 有什么缺陷 ？
// ? 由于module.exports可以导出函数等非对象属性。在循环引用的情况下，可能会导致某些属性的丢失，比如一个数字，则在引入的时候被修改了，对于源文件仍旧是不会有什么影响的