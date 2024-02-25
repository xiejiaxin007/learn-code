/*
 * @description:
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-02-25 14:04:52
 * @desc: https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/
 */
// 输入：inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
// 输出：[3,9,20,null,null,15,7]
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
let arr1 = [9, 3, 15, 20, 7],
    arr2 = [9, 15, 7, 20, 3]
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    if (inorder.length === 0 || postorder.length === 0) {
        return null;
    }
    let rootVal = postorder.pop();
    let index = inorder.indexOf(rootVal);
    let node = new TreeNode(rootVal);
    let leftIn = inorder.slice(0, index);
    let rightIn = inorder.slice(index + 1);
    let leftPo = postorder.slice(0, leftIn.length);
    let rightPo = postorder.slice(leftIn.length);
    node.left = buildTree(leftIn, leftPo);
    node.right = buildTree(rightIn, rightPo);
    return node;
};
console.log(buildTree(arr1, arr2));