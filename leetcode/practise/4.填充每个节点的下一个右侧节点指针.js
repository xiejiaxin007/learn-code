/*
 * @description: 
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-01-26 14:04:52
 * @desc: https://leetcode.cn/problems/populating-next-right-pointers-in-each-node/description/
 * 给定一个 完美二叉树 ，其所有叶子节点都在同一层，每个父节点都有两个子节点
 * 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。初始状态下，所有 next 指针都被设置为 NULL。
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
function buildTree(arr) {
  // 若没有参数或数组长度为0，则视为空树
  if (!arr || arr.length === 0) {
    return null;
  }
  // 先将数组第一个元素 设置为根结点
  let root = new TreeNode(arr.shift());
  // 节点队列 陆续从数组中为节点添加左右叶子
  let nodeQueue = [root];
  // 当数组剩余仍有元素，则持续为最近的节点添加叶子
  while (arr.length > 0) {
    // 从节点数组头部取出节点 为了添加叶子备用
    let node = nodeQueue.shift();

    // 若数组中无元素，则视为无叶子可添加,返回即可
    if (!arr.length) {
      break;
    }
    // 先从节点数组中取一个元素 转化为节点 拼接为左叶子
    let left = new TreeNode(arr.shift());
    node.left = left;
    nodeQueue.push(left);
    // 每拼接一片叶子节点 重新判断剩余叶子数量 若无剩余视为拼接完毕
    if (!arr.length) {
      break;
    }
    // 左侧叶子拼完，右边一样的操作
    let right = new TreeNode(arr.shift());
    node.right = right;
    nodeQueue.push(right);
  }
  // 最后返回根结点，通过根结点就能得到整个二叉树的结构
  return root;
}
let arr = [1,2,3,4,5,6,7]
let treeArr = buildTree(arr);

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (root == null) {
    return null
  }
  tranverse(root.left, root.right)
  return root
};
function tranverse(left, right) {
  if (left == null || right == null) {
    return
  }
  left.next = right
  tranverse(left.left, left.right)
  tranverse(right.left, right.right)
  tranverse(left.right, right.left)
}
console.log(connect(treeArr))