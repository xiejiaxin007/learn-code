/*
 * @description: 
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2022-01-08 15:54:36
 * @desc: https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
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
const arr = [3,9,20,null,null,15,7];
let node = null
node = new TreeNode(3)
node.left = new TreeNode(9)
node.right = new TreeNode(20)
node.right.left = new TreeNode(15)
node.right.right = new TreeNode(7)

/**
 * @param {TreeNode} root
 * @return {number}
 */
//? 使用全局变量来存储每次循环深度增加的结果，则可以发现最大深度
//? 这个地方是两个全局变量，一个记录每次递归进去的深度，一个记录到叶子节点时候，深度的最大值即可
// let deepLen = 0; 
// let max = 0;
var maxDepth_my = function(root) {
  if (root === null) {
    max = Math.max(max, deepLen)
    return null
  }
  deepLen += 1
  console.log(deepLen, root.val)
  maxDepth_my(root.left)
  maxDepth_my(root.right)
  //! 为什么需要减一？因为遍历是一直往里头，深度每次都需要往回一次
  deepLen--
};
// console.log(maxDepth_my(node))

//! 解答