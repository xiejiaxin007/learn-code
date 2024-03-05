/*
 * @description:
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-02-25 14:04:52
 * @desc: https://leetcode.cn/problems/kth-smallest-element-in-a-bst/description/
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

let node = buildTree([4, 2, 5, null, 3]);
let num = 1;
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let arrs = [];
  function traverse(node, i) {
    if (node == null) {
      return;
    }
    traverse(node.left);
    arrs.push(node.val);
    traverse(node.right);
    return arrs[i - 1];
  }
  return traverse(root, k);
};

console.log(kthSmallest(node, num));
