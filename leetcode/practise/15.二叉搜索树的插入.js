/*
 * @description:
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-03-6 14:04:52
 * @desc: https://leetcode.cn/problems/insert-into-a-binary-search-tree/description/
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
let vals = 5;
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  if (root == null) {
    return new TreeNode(val);
  }
  if (root.val < val) {
    root.right = insertIntoBST(root.right, val);
  }
  if (root.val > val) {
    root.left = insertIntoBST(root.left, val);
  }
  return root;
};
var insertIntoBSTs = function (roots, vals) {
  if (roots == null) {
    return new TreeNode(vals);
  }
  let node = new TreeNode(roots.val);
  var insertIntoBSTs = function (root, val) {
    if (root == null) {
      return new TreeNode(val);
    }
    if (root.val < val) {
      insertIntoBST(root.right, val);
    } else {
      insertIntoBST(root.left, val);
    }
    return root;
  };
  insertIntoBSTs(roots, vals);
};

console.log(insertIntoBST(node, vals));
