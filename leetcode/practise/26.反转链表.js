/*
 * @description:
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-04-24 14:04:52
 * @desc: https://leetcode.cn/problems/reverse-linked-list/
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
function getListFromArray(a, po) {
  let dummy = new ListNode();
  let pre = dummy;
  let circle = null;
  a.forEach((x, i) => {
    pre.next = new ListNode(x);
    if (po >= 0 && i === po) {
      circle = pre.next;
    }
    pre = pre.next;
  });
  pre.next = circle;
  return dummy.next;
}
let val1 = getListFromArray([1, 2, 3, 4, 5]);

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// ! 循环列表，把val都放入数组中，反转后重新生成NodeList
var reverseList_arr = function (head) {
  if (head == null) {
    return null;
  }
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  arr.reverse();
  let dummy = (newHead = new ListNode(-1));
  arr.forEach((item) => {
    newHead.next = new ListNode(item);
    newHead = newHead.next;
  });
  return dummy.next;
};
// ! 递归
var reverseList = function (head) {
  // ? 相当于需要将链表最后一个节点给返回
  if (head == null || head.next == null) {
    return head
  }
  // ? 拿到最后一个返回节点
  let last = reverseList(head.next)
  head.next.next = head
  head.next = null
  return last
}
let resNode = reverseList(val1)
console.log(resNode);
// var test = function(head) {
//   if (head == null) {
//     return null
//   }
//   console.log(head.val)
//   test(head.next)
// }
// test(val1)
