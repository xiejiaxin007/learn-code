/*
 * @description:
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-06-21 14:04:52
 * @desc: https://leetcode.cn/problems/reverse-nodes-in-k-group/description/
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
let val = getListFromArray([1, 2, 3,4,5]);
let key = 2

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  var reverseBetween = function(head, k, k2) {
    // 先尝试反转整个链表
    var nextNode
    var traverse = function(node, k) {
      if (k === 1) {
        // 保存需要连接的第一个节点
        nextNode = node.next
        return node
      }
      let last = traverse(node.next, k - 1)
      node.next.next = node
      node.next = nextNode
      return last
    }
    if (k === 1) {
      return traverse(head, k2)
    }
    head.next = reverseBetween(head.next, k - 1, k2 - 1)
    return head
  };
  let total = 0
  let p = head
  while(head){
    total++
    head = head.next
  }
  let limit = Math.floor(total / k)
  for(let i = 0; i < limit; i++) {
    let L = i * k + 1;
    let R = (i + 1) * k;
    console.log(L, R)
    p = reverseBetween(p, L, R);
  }
  return p;
}
console.log(reverseKGroup(val, key));

// 反转整个链表
// var reverse = function(head) {
//   if (head == null) {
//     return null
//   }
//   let pre = null, cur = head, nxt = head
//   while(cur){
//     nxt = cur.next
//     cur.next = pre
//     pre = cur
//     cur = nxt
//   }
//   return pre
// }
// console.log(reverse(val))

