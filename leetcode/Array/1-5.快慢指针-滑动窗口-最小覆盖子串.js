/*
 * @description:
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-07-17 14:04:52
 * @desc: https://leetcode.cn/problems/minimum-window-substring/description/
 */
let val = 'ADOBECODEBANC'
let key = 'ABC'

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow_my = function(s, t) {
    let sLen = s.length
    let tLen = t.length
    if (sLen < tLen) {
        return ''
    }
    let tMap = new Map()
    for(let i = 0; i < tLen; i++) {
        let cur = tMap.get(t[i]) || 0
        tMap.set(t[i], parseInt(cur + 1))
    }
    var checkStr = function(map1, map2) {
        if (map1.size < map2.size) {
            return false
        }
        let flag = true
        for(let entry of map2) {
            let [key, value] = entry
            let sCur = map1.get(key) || 0
            if (sCur < value) {
                flag = false
                break
            }
        }
        return flag
    }
    let right = 0, left = 0
    let sMap = new Map()
    let len = Infinity
    let start = 0
    while(right < sLen) {
        let cur = s[right]
        let sCur = sMap.get(cur) || 0
        sMap.set(cur, parseInt(sCur + 1))
        right++
        while(checkStr(sMap, tMap)) {
            if (right - left < len) {
                start = left
                len = right - left
            }
            let leftCur = s[left]
            left++
            let lCur = sMap.get(leftCur) || 0
            if (lCur === 1) {
                sMap.delete(leftCur)
            } else {
                sMap.set(leftCur, lCur - 1)
            }
        }
    }
    console.log(start, len)
    let res = len === Infinity ? '' : s.substr(start, len)
    return res
};
var minWindow = function(s, t) {
    let need = new Map();
    let window = new Map();
    for (let i = 0; i < t.length; i++) {
        if (need.has(t[i])) {
            need.set(t[i], need.get(t[i]) + 1);
        } else {
            need.set(t[i], 1);
        }
    }
    let left = 0, right = 0;
    let valid = 0;
    // 记录最小覆盖子串的起始索引及长度
    let start = 0, len = Infinity;
    while (right < s.length) {
        // c 是将移入窗口的字符
        let c = s[right];
        // 扩大窗口
        right++;
        // 进行窗口内数据的一系列更新
        if (need.has(c)) {
            if (window.has(c)) {
                window.set(c, window.get(c) + 1);
            } else {
                window.set(c, 1);
            }
            if (window.get(c) === need.get(c)) {
                valid++;
            }
        }
        // 判断左侧窗口是否要收缩
        while (valid === need.size) {
            // 在这里更新最小覆盖子串
            if (right - left < len) {
                start = left;
                len = right - left;
            }
            // d 是将移出窗口的字符
            let d = s[left];
            // 缩小窗口
            left++;
            // 进行窗口内数据的一系列更新
            if (need.has(d)) {
                if (window.get(d) === need.get(d)) {
                    valid--;
                }
                window.set(d, window.get(d) - 1);
            }
        }
    }
    // 返回最小覆盖子串
    return len === Infinity ? '' : s.substr(start, len);
}
console.log(minWindow_my(val, key))