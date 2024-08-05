/*
 * @description:
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-07-27 14:04:52
 * @desc: https://leetcode.cn/problems/permutation-in-string/description/
 */
let val = 'ab'
let key = 'eidbaooo'

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// ! 这种超出时间效率限制了
var checkInclusion_todo = function(s1, s2) {
    let s2Len = s2.length
    let s1Len = s1.length
    if (s2.length < s1.length) {
        return false
    }
    // 判断是否是全排列（这里可以直接判断两个字符串里头的字符是不是都一一对应，不在乎顺序）
    var checkStr = function(str1, str2) {
        if (str1.length !== str2.length) {
            return false;
          }
         
          const sortedStr1 = str1.split('').sort().join('');
          const sortedStr2 = str2.split('').sort().join('');
         
          return sortedStr1 === sortedStr2;
    }
    let left = 0, right = 0;
    let slipStr = ''
    while(right < s2Len){
        // 直接将窗口扩大
        slipStr += s2[right]
        right++
        // 缩小窗口
        while(left < right && slipStr.length >= s1Len) {
            if (checkStr(slipStr, s1)) {
                return true
            }
            left++
            slipStr = slipStr.slice(1)
        }
    }
    return false
};
var checkInclusion = function(s1, s2) {
    let s2Len = s2.length
    let s1Len = s1.length
    let window = new Map()
    let need = new Map()
    for(let i = 0; i < s1Len; i++) {
        let sum = need.get(s1[i]) || 0
        need.set(s1[i], sum + 1)
    }

    let left = 0, right = 0;
    let validate = 0
    while(right < s2Len) {
        let c = s2[right]
        right++
        if(need.has(c)) {
            let sum = window.get(c) || 0
            let res = sum + 1
            window.set(c, res)
            if (res === need.get(c)) {
                validate++
            }
        }
        while(right - left >= s1Len) {
            if (validate === need.size) {
                return true
            }
            let pop = s2[left]
            left++
            if (need.has(pop)) {
                if (need.get(pop) === window.get(pop)) {
                    validate--
                }
                window.set(pop, window.get(pop) - 1)
            }
        }
    }
    return false

};
console.log(checkInclusion(val, key))