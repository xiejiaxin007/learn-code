/*
 * @author: xiejiaxin
 * @Date: 2021-10-23 16:55:38
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2021-10-23 17:05:19
 * @description: file content
 */
// es module和node的commonjs的区别
// -- es module其实在说，export default和import
// -- node的commonjs其实就是exports和require
// -- -- 相同点：都是模块引入的方式
// -- -- 不同点：
// -- -- -- 1、import会被提到文档最上面，而require不会，require是执行到它的时候才会引入
// -- -- -- 2、import实际上是对模块的引用，而require是对模块的拷贝，也就是说，如果已经执行引入后，修改模块的内容，import的会被修改，但是require的不会
// -- -- -- 3、如果出现循环加载，import直接动态引用使用即可，而require是返回当前已经执行的内容
// -- -- -- 4、import的this是undefined，require的this指模块本身

// https://www.jianshu.com/p/c2931bb2966d
