/*
 * @description: 
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-02-27 15:37:19
 * @desc: 
 */
// ? export直接导出的，在import地方可以直接进行解构
// ? export default导出的，在import地方只能直接用一个变量进行统一的接收，不能直接进行结构接收，会报错的
// * export和default一起import的时候，default不能够进行重命名导入，但是export可以在解构中进行重命名，写法：老名字 as 重命名的名字
// * 直接import 'xxx'表示直接引入运行，不需要导入方法
import defaultVal, { name as names, age, obj, getSex, add } from "./a.mjs";

// ! 导出来的是个引用类型的话，是可以进行修改的
obj.sex = 34
// ! 导出的是一个基本类型的话，不能修改，类似于只读，直接进行修改会抛出错误
// * age = 34

const {name1} = defaultVal
console.log(names, age, obj, getSex(), add, name1)


// ? 动态导入
const defaultVals = import('./a.mjs')
defaultVals.then((val) => {
  console.log(val)
})