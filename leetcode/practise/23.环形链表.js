/*
 * @description:
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-04-8 14:04:52
 * @desc: https://leetcode.cn/problems/linked-list-cycle/description/
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
function getListFromArray(a, po) {
  let dummy = new ListNode();
  let pre = dummy;
  let circle = null
  a.forEach((x, i) => {
    pre.next = new ListNode(x)
    if (po >= 0 && i === po) {
      circle = pre.next
    }
    pre = pre.next
  });
  pre.next = circle
  return dummy.next;
}
let val1 = getListFromArray([3, 2, 0, -4], 1);
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head == null) {
      return false
    }
    let first = head, secend = head
    while(secend && secend.next){
      // ! 如果 secend 最终遇到空指针，说明链表中没有环；如果 secend 最终和 first 相遇，那肯定是 secend 超过了 first 一圈，说明链表中含有环
      first = first.next
      secend = secend.next.next
      if (first === secend) {
        return true
      }
    }
    return false
};
console.log(hasCycle(val1));
