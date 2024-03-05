/*
 * @description:
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-02-25 14:04:52
 * @desc: https://leetcode.cn/problems/convert-bst-to-greater-tree/description/?utm_source=LCUS&utm_medium=ip_redirect&utm_campaign=transfer2china
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

let node = buildTree([4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]);
// ! 看起来意思是将node的值应该等于左侧子树node的和，然后再整体将二叉树反转一下
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
  // ? 先反转一遍二叉树
  let newNode = transferTree(root);
  let sum = 0;
  var convertNode = function (node) {
      if (node == null) {
          return null;
      }
      convertNode(node.left);
      sum += node.val;
      node.val = sum;
      convertNode(node.right);
      return node;
  }
  let curNode = convertNode(newNode);
  return transferTree(curNode);
};
// 反转二叉树
var transferTree = function(root) {
  if (root == null) {
    return null;
  }
  let left = transferTree(root.left);
  let right = transferTree(root.right);
  root.right = left
  root.left = right
  return root;
}

// ! 更简单，原来左右子树可以换一个顺序就能更改执行顺序了！！！！！
// ! 更改遍历的right和left顺序，实际就是从升序变成了降序遍历了
var convertBST_better = function(root) {
  // ? 先反转一遍二叉树
  let sum = 0;
  var convertNode = function(node) {
    if(node == null) {
      return null;
    }
    convertNode(node.right);
    sum += node.val;
    node.val = sum;
    convertNode(node.left);
    return node;
  }
  let curNode = convertNode(root);
  return curNode;
};

console.log(convertBST(node));
