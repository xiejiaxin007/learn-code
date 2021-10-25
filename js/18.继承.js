/*
 * @author: xiejiaxin
 * @Date: 2021-10-23 20:40:33
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2021-10-24 16:12:17
 * @description: file content
 */
// js中是没有像java那样的继承的，特别是es6之前
// https://github.com/mqyqingfeng/Blog/issues/16

//* 原型链继承
// -- 缺点1：子类实例指向了同一份父类实例，如果里面有引用类型的变量，会使用同一份
// -- 缺点2：无法给父的构造函数传值
function Parent(name) {
    this.name = name || 'xjx';
    this.arr = ['xjx'];
}
Parent.prototype.getName = function () {
    console.log('getName')
}

function Child() {}
// 子类是父类的实例，所以会引用同一份数据
Child.prototype = new Parent();
let child1 = new Child('lee');
let child2 = new Child();
console.log('原型链继承', child1.name)
console.log('原型链继承', child1.getName())


console.log('=========================================')
//* 构造函数继承
// 优点：每个子类可以有自己的数据（引用类型）
// 缺点：每一次实例化都需要重新创建构造函数的各种属性
// 缺点：只能继承父类的实例属性和方法，不能继承原型属性和方法
function Parent1(name) {
    this.name = name || 'xjx';
    this.arr = ['xjx'];
}
Parent1.prototype.getName = function () {
    console.log(this.name)
    console.log('getName')
}

function Child1(name) {
    Parent1.call(this, name)
}
let child11 = new Child1('lee');
console.log('构造函数继承', child11.name);
// console.log('构造函数继承', child11.getName()); //! 会报错


console.log('=========================================')
//* 组合式继承
// 最常见的js继承方式，融合了原型链继承和构造函数继承的优点
function Parent2(name) {
    this.name = name || 'xjx';
    this.arr = ['xjx'];
}

function Child2(name) {
    Parent2.call(this, name);
}
Child2.prototype = new Parent2();
Child2.prototype.constructor = Child2;
let child22 = new Child2('lee1');
let child222 = new Child2('lee2');
child22.arr.push('hah')
console.log(child22.arr);
console.log(child222.arr)


console.log('=========================================')
//* 原型式继承
// 缺点1：跟原型链继承一样的缺点，同一份实例的引用类型会被共享
// 缺点2：传入的需要是对象
// 其实就是Object.create的源码
function createFn(o) {
    function fn() {}
    fn.prototype = o;
    return new fn();
}
let creatFnChild = createFn({
    name: 'createFn',
    arr: [1]
})
// 不可以用这个
function s() {
    this.name = 's2'
}
let creatFnChild1 = createFn(s)
console.log(creatFnChild1.name)
console.log(creatFnChild.name)


console.log('=========================================')
//* 寄生继承
// 缺点和构造函数一样，构造方法需要创建多次
function createFn1(o) {
    let fn = Object.create(o);
    fn.getName = function () {}
    return fn;
}

console.log('=========================================')
//* 寄生组合式继承
function ParentCreate(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}
ParentCreate.prototype.getName = function () {
    console.log(this.name)
    console.log('ParentCreate')
}
function ChildCreate(name, age) {
    ParentCreate.call(this, name);
    this.age = age;
}

ChildCreate.prototype = new ParentCreate();
// ChildCreate.prototype = Object.create(ParentCreate.prototype);
// ChildCreate.prototype.constructor = ChildCreate;
var childCreate = new ChildCreate('kevin', '18');
console.log('寄生组合式继承', childCreate)
console.log('寄生组合式继承')
childCreate.getName()


console.log('=========================================')
//* class继承
// 缺点：兼容性
class Person {
    //调用类的构造方法
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    //定义一般的方法
    showName() {
        console.log("调用父类的方法")
        console.log(this.name, this.age);
    }
}
let p1 = new Person('kobe', 39)
console.log(p1)
//定义一个子类
class Student extends Person {
    constructor(name, age, salary) {
        super(name, age) //通过super调用父类的构造方法
        this.salary = salary
    }
    showName() { //在子类自身定义方法
        console.log("调用子类的方法")
        console.log(this.name, this.age, this.salary);
    }
}
let s1 = new Student('wade', 38, 1000000000)
console.log(s1)
s1.showName()


console.log('***********************************************')