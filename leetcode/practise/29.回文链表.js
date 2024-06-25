/*
 * @description:
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-06-25 14:04:52
 * @desc: https://leetcode.cn/problems/palindrome-linked-list/description/
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
let val = getListFromArray([1, 2, 3, 5, 1]);

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindromeEasy = function(head) {
  let str = ''
  while(head){
    str += head.val
    head = head.next
  }
  let reStr = str.split('').reverse()
  if (str == reStr.join('')) {
    return true
  }
  return false
};
var isPalindrome_digui = function(node) {
  let arr1 = []
  let arr2 = []
  let traverse = function(head) {
    if (head == null) {
      return null
    }
    arr1.push(head.val)
    traverse(head.next)
    arr2.push(head.val)
  }
  traverse(node)
  if (arr1.join('') === arr2.join('')) {
    return true
  }
  return false
}
var isPalindrome = function(head) {
  // ! 先找到单链表的中心节点
  // * 这里主要是找到可以进行对比的那一半的链表，所以我们需要注意基数和偶数，如果是基数，需要再往后找一个节点作为分界点
  let slow = head
  let fast = head
  while(fast != null && fast.next != null) {
    slow = slow.next
    fast = fast.next.next
  }
  // * 这个地方判断fast，如果不是null，说明本次链表是奇数节点，所以slow需要再进一步，最中间的那个不会是重复的，我们需要反转部分
  if (fast != null) {
    slow = slow.next
  }
  let traverse = function(node) {
    if (traverse == null) {
      return null
    }
    let pre = null, cur = node, nxt = node
    while(cur){
      nxt = cur.next
      cur.next = pre
      pre = cur
      cur = nxt
    }
    return pre
  }
  let right = traverse(slow)
  let left = head
  while(right){
    if (left.val !== right.val) {
      return false
    }
    left = left.next
    right = right.next
  }
  return true
}
console.log(isPalindrome(val))
// let traverse = function(head) {
//   if (head == null) {
//     return null
//   }
//   let pre = null, cur = head
//   while(cur){
//     let next = cur.next
//     cur.next = pre
//     pre = cur
//     cur = next 
//   }
//   return pre
// }
// console.log(traverse(val))

