// 函数的扁平化处理
// compose函数主要是用于多个函数连续调用的合并
// 经常使用于工具类的封装库中

// 例子：
const a = x => x + 10
const b = x => x - 10
const c = x => x * 10
const d = x => x / 10
// console.log(d(c(b(a(100))))) // 100
// 以上例子就是多个函数按顺序调用后的结果
// 而我们想要做到的是能够有一个函数传入我们想要输入的值以及要执行的函数，则直接返回最后按顺序调用的结果

// ! 这是我自己乱写的哦！！！！
const compose = (...args) => {
    const arg = args;
    if (arg.length === 0) {
        return
    }
    return function (x) {
        let str = typeof arg[0] === 'function' ? arg[0](x) : ''
        for(let i = 1; i < arg.length; i++) {
            if (typeof arg[i] !== 'function') {
                continue
            }
            str = arg[i](str)
        }
        return str
    }
}
console.log(compose(a, b ,c, d)(100))
console.log(compose(d, b, c, a)(100))

// ! 跟着人家学着优化一下呢---reduce
const compose1 = (...args) => {
    return function(x) {
        // ! reduce如果给定初始值，则index可以从0开始，如果不给的话，index从1开始，并且第一个previous的值是数组的第一个元素
        return args.reduce((previous, current, index) => {
            if (index === 0) {
                return current(x)
            }
            return current(previous)
        }, 0)
    }
}
console.log(compose1(c, a, b ,c, d)(100))
console.log(compose1(d, b, c, a)(100))