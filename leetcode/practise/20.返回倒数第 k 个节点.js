/*
 * @description:
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-03-25 14:04:52
 * @desc: https://leetcode.cn/problems/kth-node-from-end-of-list-lcci/description/
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
let val1 = getListFromArray([]),
  key = 1
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function(head, k) {
  if (head == null) {
    return -1
  }
  let i = 0
  let arr = []
  while(head){
    arr.push(head.val)
    i++
    head = head.next
  }
  console.log(i, k)
  return arr[i - k]
};
console.log(kthToLast(val1, key))