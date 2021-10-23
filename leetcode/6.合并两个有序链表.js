/*
 * @author: xiejiaxin
 * @Date: 2021-10-23 14:29:07
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2021-10-23 16:54:52
 * @description: file content
 */
// https://leetcode-cn.com/problems/merge-two-sorted-lists/
// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

// 输入：l1 = [1,2,4], l2 = [1,3,4]
// 输出：[1,1,2,3,4,4]

// 输入：l1 = [], l2 = []
// 输出：[]

// 输入：l1 = [], l2 = [0]
// 输出：[0]

//! 两个对象指向同一片内存，比如obj=obj1，如果obj = obj.x
//! 这个时候分两种情况，如果obj.x仍旧是一个引用类型，则如果修改obj.x，则obj1也会跟着变化
//! 如果obj.x是一个值类型，则修改obj.x，obj1不会变化

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let L1 = [1, 2, 4],
    L2 = [1, 3, 4];

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
let l1 = null;
let l2 = null;
for (let i = L1.length - 1; i >= 0 ; i--) {
    l1 = new ListNode(L1[i], l1);
}
for (let i = L2.length - 1; i >= 0 ; i--) {
    l2 = new ListNode(L2[i], l2);
}
// 我自己的
console.log('***************************************')
var mergeTwoLists_my = function (l1, l2) {
    // 判断两个链表是否有空的，如果有，直接等于不为空的即可
    if (l1 === null) {
        return l2;
    }
    if (l2 === null) {
        return l1;
    }
    // 两个都不为nul
    if (l1 === null && l2 === null) {
        return null;
    }
    let p = new ListNode();
    let newL = p;
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            newL.next = l1;
            l1 = l1.next;
        } else {
            newL.next = l2;
            l2 = l2.next;
        }
        newL = newL.next
        console.log(newL, p)
    }
    return p.next;
};
// 看了解体思路的
var mergeTwoLists_learn = function (l1, l2) {
    // 判断两个链表是否有空的，如果有，直接等于不为空的即可
    if (l1 === null) {
        return l2;
    }
    if (l2 === null) {
        return l1;
    }
    // 两个都不为nul
    if (l1 === null && l2 === null) {
        return null;
    }
    if (l1.val >= l2.val) {
        l2.next = mergeTwoLists_learn(l1, l2.next)
        return l2;
    } else {
        l1.next = mergeTwoLists_learn(l1.next, l2)
        return l1;
    }
}
console.log(mergeTwoLists_my(l1, l2));