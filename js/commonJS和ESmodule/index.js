/*
 * @description: 
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-02-27 11:12:09
 * @desc: 
 */
//  ! https://juejin.cn/post/6994224541312483336#heading-6 

// ? 为什么会出现commonJs和es module两种模块化规范？
// * 代码量增大，会进行js文件的分割，这种分割就可能会导致相同名字的变量冲突，你可能会发现你的变量在某天，突然出现了不应出现的打印内容
// * 如果多个js文件相互依赖，很容易出现依赖顺序混乱的情况
// * 代码维护性太差

// ? Commonjs 的特性如下
// * CommonJS 模块由 JS 运行时实现。
// * CommonJs 是单个值导出，本质上导出的就是 exports 属性。
// * CommonJS 是可以动态加载的，对每一个加载都存在缓存，可以有效的解决循环引用问题。
// * CommonJS 模块同步加载并执行模块文件。

// ? Es module 的特性如下：
// * ES6 Module 静态的，不能放在块级作用域内，代码发生在编译时。
// * ES6 Module 的值是动态绑定的，可以通过导出方法修改，可以直接访问修改结果。
// * ES6 Module 可以导出多个属性和方法，可以单个导入导出，混合导入导出。
// * ES6 模块提前加载并执行模块文件，
// * ES6 Module 导入模块在严格模式下。
// * ES6 Module 的特性可以很容易实现 Tree Shaking 和 Code Splitting。