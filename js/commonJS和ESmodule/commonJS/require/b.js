/*
 * @description: 
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-02-26 16:32:01
 * @desc: 
 */
const say = require('./a')
const  object = {
   name:'《React进阶实践指南》',
   author:'我不是外星人'
}
// ? 这个地方打印{}
// ! 因为这个地方的say是从缓存里头取过来的，当时a.js还没有执行完成，所以say只能是默认的export={}
console.log(say)
// ? 这个地方打印function
// ! 这个地方由于是下一次的事件循环，所以a.js已经是执行完成了，就是function了
setTimeout(() => {
  console.log('下一次事件循环:', say)
});
console.log('我是 b 文件')
module.exports = function(){
    return object
}
