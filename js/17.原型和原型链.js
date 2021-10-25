/*
 * @author: xiejiaxin
 * @Date: 2021-10-23 19:24:53
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2021-10-24 20:42:19
 * @description: file content
 */

// https://juejin.cn/post/6844903937024213006

// prototype、__proto、constructor
// Function、Object

// 原型链怎么说？
// -- 每一个对象拥有一个原型对象，通过__proto__指向它上一个对象的原型prototype，并从中继承属性和方法，而这个原型对象可能也有自己的原型，这个原型可能是另外一个实例的__proto__的指向，然后就这样一层链一层，一直到指向null为止

//* constructor肯定对应的是构造函数，而不是什么原型，比如fn.constructor === Fn, fn.prototype.constructor === fn
//* 除了undefined和null，其他每一个类型都具有__proto__属性，函数另外还有单独具有prototype
//* 某一个函数new出来的实例，是没有prototype的
//* 所有的构造函数，会指向Function.prototype，比如Fn.__proto__，另外，Number、Object等都是可以使用new来创建实例，所以他们都会指向Function.prototype
//* 构造函数prototype的__proto__会指向上一层的原型

function Fn() {};

let fn = new Fn();

console.log(fn.__proto__ === Fn.prototype, 1); // true
console.log(fn.__proto__.__proto__ === Object.prototype, 2) // true
console.log(fn.__proto__.__proto__.__proto__ === null, 3) // true
console.log(fn.constructor === Fn, 4); // true
console.log(fn.prototype, 5) // 没有这个属性了，因为它是一个实例
console.log(Fn.prototype.constructor === Fn, 6) // true
console.log(Fn.__proto__ === Function.prototype, 7) // true
console.log(Fn.constructor === Function, 8) // true
console.log(Function.__proto__ === Function.prototype, 9) //true
console.log(Function.prototype.__proto__ === Object.prototype, 10) //true
console.log(Object.__proto__ === Function.prototype, 11) //true
console.log(Object.prototype.__proto__ === null, 12) // true

console.log('******************************************************')
let a = 1;
console.log(a.constructor === Number, 1); // true
console.log(a.__proto__ === Number.prototype, 2); // true
console.log(Number.__proto__ === Function.prototype, 3) // true
console.log(Number.prototype.constructor === Number, 4) // true
console.log(Number.__proto__.__proto__ === Object.prototype, 5) // true

console.log('******************************************************')
// https://cloud.tencent.com/developer/article/1332827
function Parent() {
    this.a = 1;
    this.b = [1, 2, this.a];
    this.c = {
        demo: 5
    };
    this.show = function () {
        console.log(this.a, this.b, this.c.demo);
    }
}

function Child() {
    this.a = 2;
    this.change = function () {
        this.b.push(this.a);
        this.a = this.b.length;
        this.c.demo = this.a++;
    }
}
Child.prototype = new Parent();
var parent = new Parent();
var child1 = new Child();
var child2 = new Child();
child1.a = 11;
child2.a = 12;
parent.show(); // 1,[1,2,1],5
child1.show(); // 11,[1,2,1],5
child2.show(); // 12,[1,2,1],5
child1.change();
//! child1和child2相互影响，因为Child构造函数是继承自Parent，也就是child1和child2的__proto__实际是指向Parent的实例（同一个），导致引用是一样的！！！
child2.change();
parent.show(); // 1,[1,2,1],5
child1.show(); // 5,[1,2,1,11,12],5
child2.show(); // 6,[1,2,1,22,12],5


console.log('***********************************************')
//! 理解原型链
function Foo() {
    // 实际上就是在window环境下修改了getName方法
    getName = function () {
        console.log(1)
    }
    return this;
}
//! 构造函数直接创建的函数，只能通过构造函数来执行，不能通过加()或者是new
//! 类似一个私有属性，实例是无法访问的
Foo.getName = function () {
    console.log(2)
}
//! 只能通过new的实例来进行访问
Foo.prototype.getName = function () {
    console.log(3)
}
// 这里会进行变量提升
var getName = function () {
    console.log(4)
}
// 在浏览器环境下，直接报错，所以直接调用getName，走的是变量的方法
function getName() {
    console.log(5)
}
// Foo.getName(); // 2
// getName(); // 4
// Foo().getName(); // 1，需要在浏览器环境进行运行
// getName(); // 1
// new Foo.getName(); // 2
// new Foo().getName(); // 3
// new new Foo().getName(); // 3
function Cat(name) {
    this.name = name
    this.move = function () {
        console.log('移动')
    }
    this.eat = function () {
        console.log(`${this.name}爱吃鱼`)
    }
    return this
}
Cat.prototype.getName = function() {
    console.log(this.name)
}
//给Cat构造函数添加静态方法
Cat.eat = function () {
    console.log(`${this.name}爱吃鱼`)
}
let cat = new Cat('tom')
Cat.eat() //Cat爱吃鱼  //这是静态方法
//   Cat.move() //Cat.move is not a function
//   cat.eat()  //tom爱吃鱼  //这是实例方法
//   cat.move()  //移动     //这是实例方法