/*
 * @description:
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-03-18 14:04:52
 * @desc: https://leetcode.cn/problems/merge-two-sorted-lists/
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
let val1 = getListFromArray([1, 2, 4]),
  val2 = getListFromArray([1, 3, 4]);

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let res = new ListNode(-1);
  let p = res;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      res.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      res.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    res = res.next;
  }
  if (list1) {
    res.next = list1
  }
  if (list2) {
    res.next = list2
  }
  return p.next;
};
console.log(mergeTwoLists(val1, val2));
