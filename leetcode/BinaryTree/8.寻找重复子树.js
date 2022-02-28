/*
 * @author: xiejiaxin
 * @Date: 2022-02-26 14:01:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-02-28 14:36:43
 * @description: https://leetcode-cn.com/problems/find-duplicate-subtrees/
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
const node = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null,
        },
        right: null,
    },
    right: {
        val: 3,
        left: {
            val: 2,
            left: {
                val: 4,
                left: null,
                right: null
            },
            right: null
        },
        right: {
            val: 4,
            left: null,
            right: null
        }
    }
};
/**
 * @param {number[]} postorder
 * @param {number[]} inorder
 * @return {TreeNode} 二叉树序列化！！！！
 */
var findDuplicateSubtrees = function (root) {
    let treeMap = new Map();
    let arr = [];
    var traverse = function(node) {
        if (node === null) {
            return '#';
        }
        const str = traverse(node.left) + ',' + traverse(node.right) + ',' + node.val;
        const num = treeMap.get(str) || 0;
        if (num === 1) {
            // 只能等于1，说明已经有一个了，这是第二次出现，代表重复第一次，放入重复列表中，如果是非1，则代表要么还没出现过，要么已经记录过重复了
            arr.unshift(node);
        }
        treeMap.set(str, num + 1);
        return str;
    }
    traverse(root);
    return arr;
};
// 序列化二叉树(后序遍历)，主要是为了描述一颗二叉树，这样才能方便比较，而不至于一直在进行递归！
// 同样道理，可以计算出一颗二叉树的子树个数！！
var releaseTree = function (node) {
    if (node === null) {
        return '#';
    }
    const left = releaseTree(node.left);
    const right = releaseTree(node.right);
    const str = left + ',' + right + ',' + node.val;
    return str;
}

var findDuplicateSubtrees_my = function(root) {
  // 可以在这个地方定义全局变量！！！
  let res = [];
  let repeateMap = new Map();
  var releaseTree_my = function(node) {
    if (node === null) {
      return '#';
    }
    const str = releaseTree_my(node.left) + ',' + releaseTree_my(node.right) + ',' + node.val;
    const num = repeateMap.get(str) || 0;
    if (num === 1) {
      res.unshift(node)
    }
    repeateMap.set(str, num + 1);
    return str;
  }
  releaseTree_my(root);
  return res;
}
// 序列化一个二叉树
var releaseTree_my = function(root) {
  if (root === null) {
    return '#';
  }
  return releaseTree_my(root.left) + ',' + releaseTree_my(root.right) + ',' + root.val;
}
console.log(findDuplicateSubtrees_my(node))