/*
 * @description: 
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-02-26 16:32:18
 * @desc: 
 */
const a = require('./a')
const b = require('./b')

console.log('node 入口文件')
// ? 打印结果：
/**
 * 我是 b 文件
 * 我是 a 文件
 * node 入口文件
 */
// * 涉及知识点：require模块的缓存、require相互引用处理
// ! require会有缓存机制，这个是解决想好引用的关键：如果已经引入过的模块，只会直接取走换成对象（只是拿到exports），不会再次执行
