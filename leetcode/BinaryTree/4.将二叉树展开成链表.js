/*
 * @description: 
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2022-01-25 15:54:36
 * @desc: https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/
 */

// 给定一个二叉树，找出其最大深度。
// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
// 说明: 叶子节点是指没有子节点的节点。
// 示例：
// 给定二叉树 [3,9,20,null,null,15,7]

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const node = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: null,
      right: null
    }
  },
  right: {
    val: 5,
    left: null,
    right: {
      val: 6,
      left: null,
      right: null
    }
  }
};

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
//! 官方
var flatten = function(root) {
  if (root === null) {
    return
  }
  flatten(root.left)
  flatten(root.right)
  let flagRight = root.right;
  let flagLeft = root.left;
  root.left = null;
  root.right = flagLeft;
  let newRoot = root;
  while(newRoot.right) {
    newRoot = newRoot.right
  }
  newRoot.right = flagRight
  return root
};
console.log(flatten(node));

//! 这个是我的方法，我总是没办法把一个公共的变量搞成局部的。。。
let res = new TreeNode(-1);
let res1 = res;
// 先序遍历是这样的
var forNode = function(root) {
  if (root === null) {
    return
  }
  res.right = new TreeNode(root.val, null, null);
  res = res.right
  forNode(root.left);
  forNode(root.right);
}
// forNode(node)
// console.log(res1.right)