/*
 * @author: xiejiaxin
 * @Date: 2021-10-16 16:45:25
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2021-10-18 15:07:29
 * @description: file content
 */
// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

/**
 * @param {string} s
 * @return {number}
 */
// 想法歪了写的，是错误的
var lengthOfLongestSubstring_false = function (s) {
    let len = 0;
    const num = s.length;
    let obj = {};
    for (let i = 0; i < num; i++) {
        if (obj[s[i]]) {
            obj[s[i]].push(i);
        } else {
            obj[s[i]] = [i];
        }
    }
    Object.keys(obj).forEach(v => {
        // const s = obj[v].reduce((c, next, index, arr) => {
        //     const i = index < arr.length - 1 ? arr[index + 1] - next : 0;
        //     if (i > c) {
        //         return i;
        //     } else {
        //         return c;
        //     }
        // }, 0)
        // len = Math.max(s, len);
        let flg = 1;
        for (let k = 0; k < obj[v].length - 1; k++) {
            const i = obj[v][k + 1] - obj[v][k];
            if (i > flg) {
                flg = i;
            }
        }
        len = Math.max(flg, len);
    });
    return len;
};

var lengthOfLongestSubstring_normal = function (s) {
    const len = s.length;
    if (len === 0) {
        return 0;
    }
    let res = 0;
    for (let i = 0; i < len; i++) {
        let set = new Set();
        let maxLen = 0;
        let j = i;
        while (j < len && !set.has(s[j])) {
            set.add(s[j]);
            maxLen++;
            j++;
        }
        res = Math.max(res, maxLen);
    }
    return res;
};

var lengthOfLongestSubstring_good = function (s) {
    let len = s.length;
    let result = 0;

    let set = new Set();
    // 左指针用来收缩窗口
    let left = 0;
    // 右指针用来扩张窗口
    let right = 0;

    while (left < len) {
        // 如果不重复，就不断扩张窗口，元素添加到set中
        while (right < len && !set.has(s[right])) {
            set.add(s[right]);
            right++;
        }
        // 到这里说明有元素重复了，先记录子串长度，然后收缩窗口
        result = Math.max(result, right - left);
        // 收缩窗口
        set.delete(s[left]);
        left++;
    }
    return result;
}
// 双指针，滑动解法
var lengthOfLongestSubstring = function (s) {
    const len = s.length;
    if (len <= 1) {
        return len;
    }
    let left = 0, right = 0;
    let set = new Set();
    let maxLen = 0;
    let res = 0;
    while(right < len) {
        // 如果right值已经存在，左指针向右移动
        if (set.has(s[right])) {
            while(left < right - 1) {
                if (set.has(s[left])) {
                    set.delete(s[left]);
                    left++;
                    maxLen--;
                } else { 
                    break;
                }
            }
            set.add(s[right]);
            right++;
        } else {
            // 如果当前没有right
            set.add(s[right]);
            right++;
            maxLen++;
        }
        console.log(set)
        res = Math.max(res, maxLen);
    }
    return res;
}
// pwwkew/abcabcbb/aab/dvdf
console.log(lengthOfLongestSubstring('dvdf'));