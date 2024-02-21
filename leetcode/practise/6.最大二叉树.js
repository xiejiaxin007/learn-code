/*
 * @description:
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-01-26 14:04:52
 * @desc: https://leetcode.cn/problems/maximum-binary-tree/description/
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
let arr = [3, 2, 1, 6, 0, 5];
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTreeMy = function (num) {
  if (num.length === 0) {
    return null;
  }
  let root = new TreeNode(-1);
  function matchStr(node, arr, type) {
    if (arr.length === 0) {
      return null;
    }
    let maxNum = Math.max(...arr);
    node[type] = new TreeNode(maxNum);
    let index = arr.findIndex((item) => item === maxNum);
    let leftArr = [],
      rightArr = [];
    if (arr.length === 1) {
      leftArr = [];
      rightArr = [];
    } else {
      if (index === 0) {
        arr.shift();
        rightArr = arr;
        leftArr = [];
      } else if (index === arr.length - 1) {
        arr.pop();
        leftArr = arr;
        rightArr = [];
      } else {
        leftArr = arr.slice(0, index);
        rightArr = arr.slice(index + 1);
      }
    }
    if (leftArr.length !== 0 && rightArr.length !== 0) {
      matchStr(node[type], leftArr, 'left');
      matchStr(node[type], rightArr, 'right');
    } else if (leftArr.length !== 0) {
      matchStr(node[type], leftArr, 'left');
    } else if (rightArr.length !== 0) {
      matchStr(node[type], rightArr, 'right');
    }
  }
  matchStr(root, num, 'right');
  return root.right;
};
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// ! 这个是别人的解答，简单多了啊！！！！！
var constructMaximumBinaryTree = function (arr) {
  if (arr.length === 0) {
    return null;
  }
  let root;
  let maxNum = Math.max(...arr);
  root = new TreeNode(maxNum);
  let index = arr.findIndex((item) => item === maxNum);
  let leftArr = [],
    rightArr = [];
  if (arr.length === 1) {
    leftArr = [];
    rightArr = [];
  } else {
    if (index === 0) {
      arr.shift();
      rightArr = arr;
      leftArr = [];
    } else if (index === arr.length - 1) {
      arr.pop();
      leftArr = arr;
      rightArr = [];
    } else {
      leftArr = arr.slice(0, index);
      rightArr = arr.slice(index + 1);
    }
  }
  root.left = constructMaximumBinaryTree(leftArr);
  root.right = constructMaximumBinaryTree(rightArr);
  return root;
};
console.log(constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]));
