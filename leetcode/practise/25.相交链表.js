/*
 * @description:
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-04-22 14:04:52
 * @desc: https://leetcode.cn/problems/intersection-of-two-linked-lists/description/
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
let val1 = getListFromArray([4, 1, 8, 4, 5]);
let val2 = getListFromArray([5, 6, 1, 8, 4, 5]);

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode_my = function (headA, headB) {
  if (headA == null || headB == null) {
    return null;
  }
  var checkB = function (a) {
    let headb = headB
    while (headb) {
      if (a == headb) {
        return headb
      }
      headb = headb.next;
    }
    return null
  };
  while (headA) {
    const resB = checkB(headA, headB)
    if (resB) {
      return resB
    }
    headA = headA.next;
  }
  return null;
};
var getIntersectionNode = function(headA, headB) {
  if (headA == null || headB == null) {
    return null;
  }
  let p1 = headA, p2 = headB
  while(p1 != p2) {
    if (p1) {
      p1 = p1.next
    } else {
      p1 = headB
    }
    if (p2) {
      p2 = p2.next
    } else {
      p2 = headA
    }
  }
  return p1
}
console.log(getIntersectionNode(val1, val2));
