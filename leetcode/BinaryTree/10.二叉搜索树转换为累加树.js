/*
 * @author: xiejiaxin
 * @Date: 2022-03-08 14:45:38
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2022-03-08 15:37:23
 * @description: https://leetcode-cn.com/problems/convert-bst-to-greater-tree/
 * https://leetcode-cn.com/problems/binary-search-tree-to-greater-sum-tree/
 */
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const node = {
    val: 4,
    left: {
        val: 1,
        left: {
            val: 0,
            left: null,
            right: null,
        },
        right: {
            val: 2,
            left: null,
            right: {
                val: 3,
                left: null,
                right: null
            },
        },
    },
    right: {
        val: 6,
        left: {
            val: 5,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: {
                val: 8,
                left: null,
                right: null
            }
        }
    }
};
/**
 * @param {TreeNode} node
 * @return {TreeNode}
 */
var convertBST = function(root) {
    let sum = 0;
    var transverseCopy = function(node) {
        if (node === null) {
            return null;
        }
        transverseCopy(node.right);
        sum += node.val;
        node.val = sum;
        transverseCopy(node.left);
    }
    transverseCopy(root);
    return root;
}
/**
 * @param {TreeNode} node
 * @return {TreeNode}
 */
var convertBST1 = function(node) {
    let arr = [];
    var transverse = function(root) {
        if (root === null) {
            return null;
        }
        transverse(root.left);
        arr.push(root.val)
        transverse(root.right);
    }
    transverse(node);
    let newArr = [];
    let sum = 0;
    const len = arr.length - 1;
    for (let i = len; i >= 0; i--) {
        sum += arr[i];
        newArr[i] = sum;
    }
    let count = 0;
    var niTransverse = function(root) {
        if (root === null) {
            return null;
        }
        niTransverse(root.left);
        root.val = newArr[count++];
        niTransverse(root.right);
    }
    niTransverse(node);
    return node;
};
console.log(convertBST(node))