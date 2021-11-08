/*
 * @author: xiejiaxin
 * @Date: 2021-10-24 20:23:07
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2021-11-08 21:45:10
 * @description: file content
 */
// js执行分为编译阶段和运行阶段
// 首先会进行编译，这个时候会出现变量提升
// -- 会出现变量提升的是变量和函数，函数会比变量提升更靠前，“函数是一等公民”
// -- 函数是整体往上放，而变量的话是声明放上，然后执行到赋值的时候才会赋值
//* -- 所以如果是变量函数和正常函数，则最后会执行变量赋值的那个
// 编译完成后，会直接进行运行
function hoistFunction() {
    foo(); // 2

    var foo = function () {
        console.log(1);
    };

    foo(); // 1
    function foo() {
        console.log(2);
    }

    foo(); // 1
}
hoistFunction();


function setName(obj) {
    obj.name = 'a';
    obj = new Object();
    obj.name = 'b';
}
let person = new Object();
setName(person);
console.log(person.name);