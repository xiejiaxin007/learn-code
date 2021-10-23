/*
 * @author: xiejiaxin
 * @Date: 2021-10-23 19:24:53
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2021-10-23 20:36:53
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

let a = 1;
console.log('******************************************************')
console.log(a.constructor === Number, 1); // true
console.log(a.__proto__ === Number.prototype, 2); // true
console.log(Number.__proto__ === Function.prototype, 3) // true
console.log(Number.prototype.constructor === Number, 4) // true
console.log(Number.__proto__.__proto__ === Object.prototype, 5) // true