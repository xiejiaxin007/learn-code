/*
 * @description:
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-03-13 14:04:52
 * @desc: https://leetcode.cn/problems/delete-node-in-a-bst/description/
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

let node = buildTree([5,3,6,2,4,null,7]);
let vals = 5;
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (root.val === key) {
    // 进行一波删除操作
  // ? 如果key正好是叶子节点，则直接进行删除即可
  // ? 如果key是非叶子节点，则需要把该节点删除后，又将其左右节点根据搜索二叉树的规律进行拼接（左边的节点必须小于当前节点，右边的则大于当前节点）
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key)
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  }
  return root;
};

console.log(deleteNode(node, vals));
