/*
 * @author: xiejiaxin
 * @Date: 2021-10-23 14:29:07
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2021-10-23 15:50:58
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
    if (!l1) {
        return l2;
    }
    if (!l2) {
        return l1;
    }
    // 两个都不为nul
    if (!l1 && !l2) {
        return null;
    }
    let newL = new ListNode();
    let nowVal = {};
    do {
        nowVal = JSON.parse(JSON.stringify(nowVal)).next;
        if (l1.val < l2.val) {
            const newNode1 = new ListNode(l1.val);
            nowVal.next = newNode1;
            l1 = l1.next;
        } else {
            const newNode2 = new ListNode(l2.val);
            nowVal.next = newNode2;
            l2 = l2.next;
        }
        newL = nowVal;
    } while (l1 && l2)
    return nowVal.next;
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
console.log(mergeTwoLists_learn(l1, l2));