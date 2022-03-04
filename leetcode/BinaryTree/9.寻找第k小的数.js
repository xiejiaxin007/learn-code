/*
 * @description:
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2022-03-04 17:14:13
 * @desc: https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/
 */

//! BST：二叉搜索树
//! 搜索二叉树的中旬遍历 === 升序排列每个树的值
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const node = {
  val: 5,
  left: {
      val: 3,
      left: {
          val: 2,
          left: {
            val: 1,
            left: null,
            right: null,
          },
          right: null,
      },
      right: {
        val: 4,
        left: null,
        right: null,
      },
  },
  right: {
      val: 6,
      left: null,
      right: null
  }
};
const k = 3;

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let arr = [];
  var tranverseFn = function(node) {
    if (node === null) {
      return null;
    }
    tranverseFn(node.left);
    arr.push(node.val);
    tranverseFn(node.right);
  }
  tranverseFn(root);
  return arr[k - 1];
};

console.log(kthSmallest(node, 3))
