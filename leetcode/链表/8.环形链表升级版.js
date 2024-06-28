/*
 * @description:
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-04-8 14:04:52
 * @desc: https://leetcode.cn/problems/linked-list-cycle-ii/description/
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
// let val1 = getListFromArray([-1,-7,7,-4,19,6,-9,-5,-2,-5], 9);
let val1 = getListFromArray([1], 0);
// let val1 = getListFromArray([3, 2, 0, -4], 1);

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// ! 一个慢指针（走k步），一个快指针（走2k步），两个相遇的时候，那k肯定就是环的长度了（这个地方需要注意的是，相遇的地方不一定是环的入口，很可能已经路过了环入口了）
// ! 假设入口地方离环入口m步，那剩余环就是m-k，仔细思考可以得出从head走到环入口，也是需要m-k步
// ! 这样的话，fast指针，从相遇点开始走k步可以转回到相遇点，那走 k - m 步肯定就走到环起点了
// * 这个地方比较难理解，可以根据图解来进行学习才行：
// * https://labuladong.online/algo/essential-technique/linked-list-skills-summary-2/#%E5%88%A4%E6%96%AD%E9%93%BE%E8%A1%A8%E6%98%AF%E5%90%A6%E5%8C%85%E5%90%AB%E7%8E%AF
var detectCycle = function (head) {
  if (head == null) {
    return null;
  }
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      break;
    }
  }
  if (fast == null || fast.next == null) {
    // fast 遇到空指针说明没有环
    return null;
  }
  slow = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
};
console.log(detectCycle(val1));
