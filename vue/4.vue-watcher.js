/*
 * @author: xiejiaxin
 * @Date: 2021-10-14 11:34:02
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2024-03-16 11:54:07
 * @description: file content
 */
// vue中有三种watcher：1、render watcher  2、computed watcher、  3、监听的api-watcher
// 统一由Dep进行分发合添加，watcher render主要就是拿来进行更新视图的

// ? watch和computed的区别是啥？---(相同、不同、实际使用场景举例)
// *相同点：
//      1、看过源码，底层实际都是用watcher实例来进行实现的
//      2、大部分情况下，computed能实现的功能，watch也能实现，毕竟俩底层使用了同一个watch类
//      3、功能上来说，computed和watch，都是想要通过监听动作来进行下一步操作
// *不同点：
//      1、computed具有缓存的功能，也就是我们常说的计算属性，如果监听的值通过计算出来没有变化，则computed绑定的方法是不会重复执行的，watch没有缓存功能
//      2、computed实际是通过监听值来进行了一次计算，是根据现有的值来推导出一个新值，所以computed的值不能跟当前vm上已经绑定的值重名，比如说methods上面的方法名等，而watch的话是直接监听已经有的值，如果这个值变化了，则进行对应的操作
// *使用场景
//      如果是根据多个监听值来进行另外一个新值的推导或者计算，则使用computed更好，因为它可以有缓存，可以提高我们的渲染性能
//      如果是需要监听某一个值来进行一些其他操作，则使用watch更好，反正在实际开发中，如果能使用computed，我就优先选择computed