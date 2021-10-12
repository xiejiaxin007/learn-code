/*
 * @author: xiejiaxin
 * @Date: 2021-10-12 16:06:55
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2021-10-12 16:28:30
 * @description: file content
 */
// 斐波那契数，指的是这样一个数列：1、1、2、3、5、8、13、21、……在数学上，斐波那契数列以如下被以递归的方法定义：F0=0，F1=1，Fn=Fn-1+Fn-2（n>=2，n∈N*），用文字来说，就是斐波那契数列由 0 和 1 开始，之后的斐波那契数列系数就由之前的两数相加。

// 循环方式---输入需要斐波那契数组的长度
function Fn(num) {
    let res = [1, 1];
    if (num === 0) {
        return [1];
    } else if (num === 1) {
        return res;
    }
    for(let i = 2; i < num; i++) {
        const now = res[i - 1] + res[i - 2];
        console.log(now, res[i - 1], res[i - 2])
        res.push(now);
    }
    return res;
}
// console.log(Fn(10))

// 输入斐波那契数列中任意一个索引，找到对应索引值的数字是多少
function Fn2(num) {
    if (num < 1) {
        return 'error';
    }
    if (num === 1 || num === 2) {
        return 1;
    }
    return Fn2(num - 1) + Fn2(num - 2);
}
console.log(Fn2(30));

// function fibonacci(n) {
//     function fib(n, v1, v2) {
//         if (n == 1)
//             return v1;
//         if (n == 2)
//             return v2;
//         else
//             return fib(n - 1, v2, v1 + v2)
//     }
//     return fib(n, 1, 1)
// }
// console.log(fibonacci(30))

// 其实就是一个递归算法