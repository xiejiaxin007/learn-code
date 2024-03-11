/*
 * @description:
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-03-6 14:04:52
 * @desc: https://leetcode.cn/problems/validate-binary-search-tree/description/
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

let node = buildTree([2,2,2]);
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  let flag = true;
  let arr = [];
  var traverse = function (node) {
    if (node == null) {
      return null;
    }
    traverse(node.left);
    arr.push(node.val);
    traverse(node.right);
  };
  traverse(root);
  if (new Set(arr).size < arr.length) {
    return false;
  } else {
    let newArr = JSON.parse(JSON.stringify(arr));
    arr.sort((a, b) => {
      return a - b
    });
    if (JSON.stringify(newArr) == JSON.stringify(arr)) {
      flag = true;
    } else {
      flag = false;
    }
    return flag;
  }
};

console.log(isValidBST(node));
