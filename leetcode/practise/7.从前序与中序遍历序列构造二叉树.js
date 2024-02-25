/*
 * @description:
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-02-22 14:04:52
 * @desc: https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
let arr1 = [3, 9, 20, 15, 7],
  arr2 = [9, 3, 15, 20, 7];
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// ! 想要通过先序和中旬遍历生成二叉树，则需要根据两个数组的生成规则来判断如果生成二叉树
// ! 首先我们先找到根节点，然后再找到左边子树和右边子树，然后以此类推即可
// ? 先序遍历的第一个，根据就是根节点，所以根节点是【3】
// ? 然后根据中序遍历，来找根节点所在位置，则能区分出根节点所在位置的左边都属于左边子树，右边都属于右边子树了：[9]、[15, 20, 7]，此时【中序】遍历的左边子树和右边子树已经确定了
// ? 切割出【先序】遍历的左边子树和右边子树：根据中序的左边子树的长度，直接在先序数组里头取相同长度的作为左边子树，那剩下来的就是右边子树了
// ? 然后形成一个递归，则可以生成一个二叉树了
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) {
    return null;
  }
  let rootVal = preorder.shift();
  let node = new TreeNode(rootVal)
  const index = inorder.indexOf(rootVal);
  // 切割中序遍历中的左边子树和右边子树
  let leftArrIn = inorder.slice(0, index);
  let rightArrIn = inorder.slice(index + 1);
  // 找出先序遍历的左边子树和右边子树
  let leftArrPre = preorder.slice(0, leftArrIn.length);
  let rightArrPre = preorder.slice(leftArrIn.length);
  node.left = buildTree(leftArrPre, leftArrIn);
  node.right = buildTree(rightArrPre, rightArrIn);
  return node;
};

console.log(buildTree(arr1, arr2));
