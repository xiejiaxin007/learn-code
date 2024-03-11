/*
 * @description:
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-03-6 14:04:52
 * @desc: https://leetcode.cn/problems/search-in-a-binary-search-tree/description/
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const buildTree = (arr) => {
  if (!arr || !arr.length) {
    return null;
  }
  let index = 0;
  const queue = [];
  const len = arr.length;
  const head = new TreeNode(arr[index]);
  queue.push(head);

  while (index < len) {
    index++;
    const parent = queue.shift();
    if (arr[index] !== null && arr[index] !== undefined) {
      const node = new TreeNode(arr[index]);
      parent.left = node;
      queue.push(node);
    }

    index++;
    if (arr[index] !== null && arr[index] !== undefined) {
      const node = new TreeNode(arr[index]);
      parent.right = node;
      queue.push(node);
    }
  }
  return head;
};

let node = buildTree([4, 2, 7, 1, 3]);
let vals = 2;
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  let node = null;
  var traverse = function (tree) {
    if (tree == null) {
      return null;
    }
    traverse(tree.left);
    traverse(tree.right);
    if (tree.val === val) {
      node = new TreeNode(tree.val, tree.left, tree.right);
    }
  };
  traverse(root);
  return node;
};

console.log(searchBST(node, vals));
