/*
 * @description:
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-03-21 14:04:52
 * @desc: https://leetcode.cn/problems/partition-list/description/
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
let val1 = getListFromArray([1,4,3,2,5,2]),
  key = 4;

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
// ?分析：1、找到所有大于x的节点，然后再找到这些节点处在最前面的（比如节点a）；2、把所有小于x的节点都挪到前面a节点的前面
var partition = function(head, x) {
  let pres = new ListNode(-1)
  let pre = pres
  // ?将head截取两段
  while(head){
    if(head.val >= x) {
      break
    } else {
      pres.next = new ListNode(head.val)
      pres = pres.next
    }
    head = head.next
  }
  let res = pre
  while(pre.next){
    pre = pre.next
  }
  let ress = res
  let last = new ListNode(-1)
  let duLast = last
  while(head){
    if (head.val < x) {
      pre.next = new ListNode(head.val)
      pre = pre.next
    } else {
      last.next = new ListNode(head.val)
      last = last.next
    }
    head = head.next
  }
  let result = ress
  while(ress.next){
    ress = ress.next
  }
  ress.next = duLast.next
  return result.next
};
var partition1 = function(head, x) {
  let first = new ListNode(-1)
  let firDum = first
  let last = new ListNode(-1)
  let lastDum = last
  while(head){
    if (head.val < x) {
      first.next = new ListNode(head.val)
      first = first.next
    } else {
      last.next = new ListNode(head.val)
      last = last.next
    }
    head = head.next
  }
  // 合并
  let fiDum = firDum
  while(firDum.next){
    firDum = firDum.next
  }
  firDum.next = lastDum.next
  return fiDum.next
}
console.log(partition1(val1, key));
