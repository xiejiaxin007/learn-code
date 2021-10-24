// https://leetcode-cn.com/problems/add-two-numbers/

// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
// 请你将两个数相加，并以相同形式返回一个表示和的链表。
// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[7,0,8]
// 解释：342 + 465 = 807

// 输入：l1 = [0], l2 = [0]
// 输出：[0]

// 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// 输出：[8,9,9,9,0,0,0,1]

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var addTwoNumbers_my = function (l1, l2) {
    let res = new ListNode();
    let p = res;
    let arr = [0];
    while (l1 && l2) {
        const sum = (l1.val + l2.val) % 10;
        const sumNew = l1.val + l2.val >= 10
        if (sumNew) {
            arr.push(1);
        } else {
            arr.push(0);
        }
        res.val = sum;
        l2 = l2.next;
        l1 = l1.next;
        // 否则会多加
        if (l2 && l1) {
            res.next = new ListNode();
            res = res.next;
        }
    }
    if (!l1) {
        res.next = l2;
    }
    if (!l2) {
        res.next = l1;
    }
    let count = 0;
    let newP = p;
    // 处理进位
    while (newP) {
        arr[count] = arr[count] ? arr[count] : 0;
        newP.val = newP.val + arr[count];
        if (newP.val >= 10) {
            newP.val = newP.val % 10;
            arr[count + 1] = arr[count + 1] ? arr[count + 1] + 1 : 1;
        } else {
            newP.val = newP.val % 10;
        }
        count++;
        if (newP.next) {
            newP = newP.next;
        } else {
            if (arr[count] > 0) {
                newP.next = new ListNode(1);
                break;
            }
            newP = newP.next;
        }
    }
    return p;
};

var addTwoNumbers_guanfang = function (l1, l2) {
    let res;
    let changeRes;
    let carry = 0;
    while(l1 || l2) {
        let n1 = l1 ? l1.val : 0;
        let n2 = l2 ? l2.val : 0;
        const sum = n1 + n2 + carry;
        const node = new ListNode(sum % 10);
        if (!res) {
            res = changeRes = node;
        } else {
            changeRes.next = node;
            changeRes = changeRes.next;
        }
        carry = Math.floor(sum / 10);
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    if (carry) {
        changeRes.next = new ListNode(carry);
    }
    return res;
}
