/*
 * @description:
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-03-27 14:04:52
 * @desc: https://leetcode.cn/problems/remove-nth-node-from-end-of-list/description/
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
let val1 = getListFromArray([1, 2, 3, 4, 5]),
  key = 5;
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (head == null) {
    return null;
  }
  let newHead = head;
  while (n && newHead) {
    newHead = newHead.next;
    n--;
  }
  if (newHead == null && n > 0) {
    return head;
  }
  let first = new ListNode(-1);
  let firstCopy = first;
  while (newHead) {
    newHead = newHead.next;
    first.next = new ListNode(head.val);
    first = first.next;
    head = head.next;
  }
  let res = firstCopy;
  while (firstCopy.next) {
    firstCopy = firstCopy.next;
  }
  first.next = head.next;
  return res.next;
};
var removeNthFromEndBetter = function (head, n) {
  if (head == null) {
    return null;
  }
  let newHead = head;
  while (n && newHead) {
    newHead = newHead.next;
    n--;
  }
  // 如果n大于了整个head的长度，则直接返回当前head即可
  if (newHead == null && n > 0) {
    return head;
  }
  let first = new ListNode(-1);
  let firstCopy = first;
  while (newHead || first.next) {
    if (newHead == null) {
      first = first.next;
    } else {
      newHead = newHead.next;
      first.next = new ListNode(head.val);
      first = first.next;
      head = head.next;
    }
  }
  first.next = head.next;
  // let res = firstCopy
  // while(firstCopy.next){
  //   firstCopy = firstCopy.next
  // }
  // first.next = head.next
  return firstCopy.next;
};
console.log(removeNthFromEnd(val1, key));
