/*
 * @description:
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-02-27 11:23:36
 * @desc: 使用exports进行导出
 */
// ---------------start-----------------------------------------------------------------------------------------------
// ! exports==module.exports
exports.name = `《React进阶实践指南》`;
exports.author = `我不是外星人`;
exports.say = function () {
  console.log(666);
};
// ! exports导出需要注意的是：exports只能单个单个导出的，就像上面的，    而如下则不行
// ---------------end-----------------------------------------------------------------------------------------------

//  ---------------start-----------------------------------------------------------------------------------------------
// ! 如果执行下面导出，则require引入的打印是：{}，这是什么原因呢？
// * require(exports, module, ___filename, __dirname){}
// * 从上可以看出exports是一个形参，你在函数中直接进行了重新赋值，则exports将不会被正常赋值，直接就是初始值{}了
// exports = {
//   name: '《React进阶实践指南》',
//   author: '我不是外星人',
//   say: function () {
//     console.log(666);
//   },
// };
//  ---------------end-----------------------------------------------------------------------------------------------

// ---------------start-----------------------------------------------------------------------------------------------
// ! 如下则可以正常导出，这是因为我们的形参有一个module，你给module.exports设置没问题
module.exports = {
  name: '《React进阶实践指南1》',
  author: '我不是外星人1',
  say: function () {
    console.log(666);
  },
};
// * 如果这个地方既使用exports，同时使用module.exports，则会出现覆盖的情况，并且不管顺序，引入的地方永远是module.exports
exports.name = 'eee'
//  ---------------end-----------------------------------------------------------------------------------------------
