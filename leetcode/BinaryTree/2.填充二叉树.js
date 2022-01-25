/*
 * @Author: xiejiaxin
 * @Date: 2021-11-17 16:19:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-22 17:04:40
 * @Description: https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/
 * @FilePath: \learn-code\leetcode\12.填充二叉树.js
 */
// 给定一个 完美二叉树 ，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：
// struct Node {
//     int val;
//     Node * left;
//     Node * right;
//     Node * next;
// }
// 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。
// 初始状态下，所有 next 指针都被设置为 NULL。

// const node = {
//   val: 0,
//   left: null,
//   right: null
// }
const node = {
  val: -1,
  left: {
    val: 0,
    left: {
      val: 2,
      left: {
        val: 6,
        left: null,
        right: null
      },
      right: {
        val: 7,
        left: null,
        right: null
      },
    },
    right: {
      val: 3,
      left: {
        val: 8,
        left: null,
        right: null
      },
      right: {
        val: 9,
        left: null,
        right: null
      },
    },
  },
  right: {
    val: 1,
    left: {
      val: 4,
      left: {
        val: 10,
        left: null,
        right: null
      },
      right: {
        val: 11,
        left: null,
        right: null
      },
    },
    right: {
      val: 5,
      left: {
        val: 12,
        left: null,
        right: null
      },
      right: {
        val: 13,
        left: null,
        right: null
      },
    },
  },
};

var connect1 = function (root) {
  if (root === null) {
    return null;
  }
  if (root.left === null || root.right === null) {
    root.next = null;
    return root
  }
  root.next = null;
  root.left.next = root.right;
  root.right.next = null;
  connectNode(root.left, root.right);
  return root
};
// 两个节点合并后指定next，这样
var connectNode1 = function (leftNode, rightNode) {
  if (leftNode.left === null || rightNode.left === null) {
    return
  }
  leftNode.next = rightNode;
  leftNode.left.next = leftNode.right;
  leftNode.right.next = rightNode.left;
  rightNode.left.next = rightNode.right;
  rightNode.right.next = null;
  connectNode(leftNode.left, leftNode.right)
  connectNode(rightNode.left, rightNode.right)
};


var connect = function (root) {
  if (root === null) {
    return null
  }
  connectNode(root.left, root.right)
  return root
}
var connectNode = function (leftNode, rightNode) {
  if (leftNode === null || rightNode === null) {
    return null
  }
  leftNode.next = rightNode
  connectNode(leftNode.left, leftNode.right)
  connectNode(rightNode.left, rightNode.right)
  connectNode(leftNode.right, rightNode.left)
}
console.log(connect(node));
