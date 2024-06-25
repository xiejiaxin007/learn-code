// https://blog.csdn.net/weixin_43972437/article/details/130686728
// ! 正则表达式的一些方法介绍
// * 1、test
// *    完全根据正则表达式来进行一个匹配，如果匹配上了，则返回true，匹配失败就返回false

// * 2、match/matchAll
// *    match匹配的是第一个获取上的，如果没有g全局关键字，则返回的是一个数组，索引0是匹配上的值，1是捕获项目，后面还有group、索引、还有源字符串等，如果有g关键字，会匹配所有能匹配上的，但是不会有捕获项目，比如我们要比配{a}里头的值，那a就是捕获项，这个缺陷，需要matchAll
// *    matchAll，直接匹配上所有的，并且捕获项也在
// ! match返回的是一个数组，这个数组比较特别，它还有index和group属性

// * 3、exec
// *    和match返回的内容是一致的
// *    关键区别是exec拥有lastIndex属性，每次只会匹配上一个，返回match类似数组，此时lastIndex的值为下一次匹配的开始，然后再次执行，则会继续往后匹配，知道匹配不上了，则返回null
// *    常用于while中进行顺序匹配
// 返回的数组
let m = null;
while((m = reg.exec(str)) != null){
  // 每次匹配返回的结果
  console.log(m);
  // 每次匹配返回的lastIndex
  console.log(reg.lastIndex);
}
// 最终为0
console.log(reg.lastIndex);

// * 4、replace/replaceAll
// *    replace表示替换：https://www.jb51.net/article/272061.htm
// *    第一个参数可以是字符串，也可以是正则
// *    第二个参数可以是字符串，也可以是一个函数，函数的用法比较高阶，一般可能出现在源码里头
// *    函数用法：
// *        简单正则：arguments[0]是匹配到的子字符串、arguments[1]是匹配到的子串的索引位置、arguments[2]是源字符串本身
// *        复杂正则（比如分组）：arguments[0]是匹配到的子字符串、arguments[1]是匹配到的第1个分组项、arguments[2]是匹配到的第2个分组项、arguments[3]是匹配到的字符串的索引位置、arguments[4]是源字符串本身

// * 5、search
// *    如果匹配成功，则返回正则表达式在字符串中首次匹配项的索引；否则，返回-1

// ! 正则表达式写法。。。