/*
 * @author: xiejiaxin
 * @Date: 2021-10-15 10:37:03
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2021-10-17 10:33:38
 * @description: file content
 */
// https://leetcode-cn.com/problems/palindrome-number/
// 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
// 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。

// 输入：x = 121
// 输出：true

// 输入：x = -121
// 输出：false
// 解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。

var isPalindrome = function(x) {
    let flag = false;
    let afterStr = x.toString().split('').reverse().join('').toString();
    flag = afterStr === x.toString();
    return flag;
};
console.log(isPalindrome(212))