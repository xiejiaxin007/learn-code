/*
 * @author: xiejiaxin
 * @Date: 2021-11-07 21:02:37
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2021-11-08 20:44:24
 * @description: file content
 */
// https://leetcode-cn.com/problems/valid-parentheses/
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。

// 输入：s = "()"
// 输出：true

// 输入：s = "()[]{}"
// 输出：true

// 输入：s = "(]"
// 输出：false

// 输入：s = "([)]"
// 输出：false

// 输入：s = "{[]}"
// 输出：true

const s = '((';
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let flag = true;
    const validMap = {
        '{': '}',
        '[': ']',
        '(': ')'
    };
    const len = s.length;
    let arr = [];
    for(let i = 0; i < len; i++) {
        if (i > 0 && (validMap[arr[arr.length - 1]] == s[i])) {
            // 括号匹配成功
            arr.pop();
        } else {
            arr.push(s[i]);
        }
    }
    if (arr.length > 0) {
        flag = false;
    }
    return flag;
};

console.log(isValid(s));