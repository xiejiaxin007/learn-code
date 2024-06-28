/*
 * @description:
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-04-1 14:04:52
 * @desc: https://leetcode.cn/problems/middle-of-the-linked-list/description/
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
function getListFromArray(a) {
  let dummy = new ListNode();
  let pre = dummy;
  a.forEach((x) => (pre = pre.next = new ListNode(x)));
  return dummy.next;
}
let val1 = getListFromArray([1, 2])
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  if (head == null) {
    return null
  }
  let i = 0
  let dummy = head
  while(head) {
    i++
    head = head.next
  }
  i = Math.floor(i / 2)
  while(i) {
    dummy = dummy.next
    i--
  }
  return dummy
};
console.log(middleNode(val1))