/*
 * @author: xiejiaxin
 * @Date: 2021-10-31 16:52:57
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2021-10-31 21:10:52
 * @description: file content
 */
// 给定单链表的头节点 head ，请反转链表，并返回反转后的链表的头节点。
// https://leetcode-cn.com/problems/UHnkqh/

// 输入：head = [1,2,3,4,5]
// 输出：[5,4,3,2,1]

// 输入：head = [1,2]
// 输出：[2,1]

// 输入：head = []
// 输出：[]

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
const L1 = [1, 2, 3, 4, 5];
let list = null;
for (let i = L1.length - 1; i >= 0; i--) {
    list = new ListNode(L1[i], list);
}

/** 逆序打印
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList_log = function (head) {
    let node = new ListNode();
    if (!head.next) {
        console.log(head.val)
        return head.val;
    } else {
        console.log(head.val)
        node = new ListNode(reverseList(head.next), node);
    }
};

/** 
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let node = new ListNode();
    let res = node;
    while(head) {
        const current = new ListNode(head.val);
        node.next = current;
        head = head.next;
    }
    return res.next;
};

console.log(reverseList(list))