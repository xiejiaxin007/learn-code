/*
 * @Author: xiejiaxin
 * @Date: 2021-11-17 14:19:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-08 16:22:34
 * @Description:
 * @FilePath: \learn-code\leetcode\8.翻转二叉树.js
 */
// 翻转一棵二叉树。

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const node = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },
  right: {
    val: 7,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 9,
      left: null,
      right: null,
    },
  },
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
//! 自己写的
var invertTree = function (root) {
  if (!root && root === null) {
    return null;
  }
  let left = root.left;
  root.left = root.right;
  root.right = left;
  invertTree(root.left);
  invertTree(root.right);
  return root;
};
console.log(invertTree(node));
