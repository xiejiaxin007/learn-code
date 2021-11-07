/*
 * @author: xiejiaxin
 * @Date: 2021-10-24 20:44:25
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2021-11-07 18:22:00
 * @description: file content
 */
var obj = {
    name: 'xjx',
    getName: function () {
        console.log(this.name)
    }
}

let fn = obj.getName;
// fn.bind(obj)();

// 1、修改this指向
// 2、参数的处理
// 3、如果使用new关键字
// 4、柯里化
Function.prototype.newBind = function (obj) {
    let that = this;
    let args = Array.prototype.slice.call(arguments, 1);

    function newFn() {};

    function fn() {
        const _this = this instanceof fn ? this : obj;
        let newArgs = Array.prototype.slice.call(arguments);
        that.apply(_this, newArgs.concat(args));
    }
    newFn.prototype = this.prototype;
    fn.prototype = new newFn();
    return fn;
}

function add2(...args) {
    return args.length ? function _c(...newArgs) {
        if (newArgs.length) {
            args = [
                ...args,
                ...newArgs
            ]
            return _c;
        } else {
            return args.reduce((a, b) => a + b)
        }
    } : 0;
}

function add1(...arg) {
    let args = arg;
    return function fn(...val) {
        if (val.length) {
            args = args.concat(val);
            return fn
        } else {
            let result = args.reduce((pre, cur) => pre + cur);
            return result;
        }
    }
}
// console.log(add1(1)(2)(3)())


const add = (...args) => args.reduce((a, b) => a + b, 0);
function currying(fn) {
    let args = [];
    return function currentFn(...arg) {
        if (arg.length) {
            args = args.concat(arg);
            return currentFn;
        } else {
            return fn.apply(this, args);
        }
    }
}

























