/*
 * @description: 
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-02-27 15:25:11
 * @desc: 
 */
let name = 'xjx'
let age = 11
let obj = {
  sex: 1
}
let getSex = function() {
  return obj.sex;
}
// ! export直接导出的，在import地方可以直接进行解构
export {
  name,
  age,
  obj,
  getSex
}
export const add = 'addr'
console.log('查看import的时候是否进行一遍上下文执行：很明显，执行了！')

// ! export default导出的，在import地方只能直接用一个变量进行统一的接收，不能直接进行结构接收，会报错的
export default {
  name1: 'ls',
  age1: 34
}