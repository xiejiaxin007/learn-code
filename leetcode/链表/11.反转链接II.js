/*
 * @description:
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-04-24 14:04:52
 * @desc: https://leetcode.cn/problems/reverse-linked-list-ii/description/
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
let val1 = getListFromArray([1, 2, 3,4,5]);
let keyL = 2,
  keyR = 3;

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetweenMy = function (head, left, right) {
  if (head == null) {
    return null;
  }
  // 找出范围内的list
  let i = 0;
  let currentList = new ListNode(-1);
  let cHead = head;
  let cList = currentList;
  while (head) {
    i++;
    if (i >= left && i <= right) {
      currentList.next = new ListNode(head.val);
      currentList = currentList.next;
    }
    head = head.next;
  }
  // 反转范围内的list
  let s = new ListNode(-1);
  let dummy = s;
  cList = cList.next;
  var tranverse = function (node) {
    if (node == null) {
      return null;
    }
    tranverse(node.next);
    s.next = new ListNode(node.val);
    s = s.next;
    node = node.next;
  };
  tranverse(cList)
  // 组装全部的list
  dummy = dummy.next
  let j = 0
  let cop = new ListNode(-1)
  let resCop = cop
  while(cHead){
    j++
    if (j >= left && j <= right) {
      cop.next = new ListNode(dummy.val)
      dummy = dummy.next
    } else {
      cop.next = new ListNode(cHead.val)
    }
    cop = cop.next
    cHead = cHead.next
  }
  return resCop.next
};
// ! 递归版本（我的）
var reverseBetween_my = function (root, left, right) {
  if (root == null) {
    return null
  }
  let i = 0
  let midHead = new ListNode(-1);
  let midRoot = midHead
  let leftHead = new ListNode(-1)
  let leftRoot = leftHead
  while(root && i < right) {
    i++
    if (i <= right && i >= left) {
      midHead.next = new ListNode(root.val)
      midHead = midHead.next
    } else if (i < left) {
      leftHead.next = new ListNode(root.val)
      leftHead = leftHead.next
    }
    root = root.next
  }
  var newReverse = function(head) {
    if(head == null || head.next == null) {
      return head
    }
  
    let nextRoot = newReverse(head.next)
    head.next.next = head
    head.next = null
    return nextRoot
  }
  let newRoot = newReverse(midRoot.next)
  leftRoot = leftRoot.next
  // console.log(leftRoot, newRoot, root)
  if (leftRoot && newRoot) {
    let concatRoot = leftRoot
    while(leftRoot.next) {
      leftRoot = leftRoot.next
    }
    leftRoot.next = newRoot
    while(leftRoot.next) {
      leftRoot = leftRoot.next
    }
    leftRoot.next = root
    return concatRoot
  } else if (leftRoot && !newRoot) {
    let concatRoot = leftRoot
    while(leftRoot.next) {
      leftRoot = leftRoot.next
    }
    leftRoot.next = root
    return concatRoot
  } else {
    let concatRoot = newRoot
    while(newRoot.next){
      newRoot = newRoot.next
    }
    newRoot.next = root
    return concatRoot
  }
}
// ! 真！ 递归版本
var successor = null;
var reverseN = function(head, n) {
  if (n == 1) {
    successor = head.next
    return head
  }
  let last = reverseN(head.next, n - 1)
  head.next.next = head
  head.next = successor
  return last
}
var reverseBetween = function (root, left, right) {
  // if (root == null) {
  //   return null
  // }
  if (left == 1) {
    return reverseN(root, right)
  }
  root.next = reverseBetween(root.next, left - 1, right - 1)
  return root
}
console.log(reverseBetween(val1, keyL, keyR));
