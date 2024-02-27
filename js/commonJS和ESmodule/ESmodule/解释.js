/*
 * @description: 
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-02-27 15:21:25
 * @desc: 
 */
// !
// * Nodejs 借鉴了 Commonjs 实现了模块化 ，从 ES6 开始， JavaScript 才真正意义上有自己的模块化规范
// * 优势：
// * 1、可以实现tree-shaking
// * 2、实现懒加载


// ? export和import的使用，见：'./main.mjs'


// ? ES module特性：
// ? 静态语法：
// ?---import语句会自动提升到顶层执行，不会放在块级作用域或者是条件语句中
// ?---import导入的变量不能使用字符串或者是进行拼接
// ! 错误写法
// function say(){
//   import name from './a.js'  
//   export const author = '我不是外星人'
// }
// isexport &&  export const  name = '《React进阶实践指南》'
// ? 执行特性：commonJS是同步执行的，而es module是提前进行加载并且执行的
// ? 导出绑定：不能随意修改导入的变量（基本数据类型会报错，引用类型可以修改成功，但是这种操作是比较危险的）