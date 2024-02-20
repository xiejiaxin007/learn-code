/*
 * @description: 
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-01-26 14:04:52
 * @desc: https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/description/
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
let arr = [1,2,5,3,4,null,6]
let treeArr = buildTree(arr);

/**
 * @param {Node} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
// ? 分解方式
var flatten = function(root) {
  if (root == null) {
    return
  }
  flatten(root.left)
  flatten(root.right)
  // 进行操作
  // !先暂时保存好左侧子树
  let left = root.left
  // !先暂时保存好右侧子树
  let right = root.right
  root.left = null
  root.right = left

  // ! 把右侧的子树拼接到修改后的右侧子树下面
  let p = root
  while(p.right) {
    p = p.right
  }
  p.right = right
};
// flatten(treeArr)
// ? 遍历方式
var flatten1 = function(root) {
  let dun = new TreeNode(-1)
  let p = dun
  function trasverse(node) {
    if (node == null) {
      return
    }
    // 先序遍历
    p.right = new TreeNode(node.val)
    p = p.right
    trasverse(node.left)
    trasverse(node.right)
  }
  trasverse(root)
  return dun.right
}
console.log(flatten1(treeArr))