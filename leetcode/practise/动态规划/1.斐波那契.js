/*
 * @author: xiejiaxin
 * @Date: 2021-11-07 21:02:37
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2024-07-31 18:07:24
 * @description: https://leetcode.cn/problems/fibonacci-number/description/
 */

let num = 4
/**
 * @param {number} n
 * @return {number}
 */
var fib_1 = function(n) {
    let arr = new Array(n + 1).fill(0)
    return newFn(arr, n)
};
var newFn = function(arr, n){
    if (n <= 1) {
        return n
    }
    if (arr[n] !== 0) {
        return arr[n]
    }
    arr[n] = newFn(arr, n - 1) + newFn(arr, n - 2)
    return arr[n]
}

var fib = function(n) {
    if (n === 0) {
        return 0
    }
    let dp = new Array(n + 1).fill(0)
    dp[0] = 0; 
    dp[1] = 1;
    for(let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
};

console.log(fib(num))
