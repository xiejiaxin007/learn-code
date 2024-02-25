/*
 * @description:
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-02-25 14:04:52
 * @desc: https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-postorder-traversal/description/
 */
// 输入：preorder = [1,2,4,5,3,6,7], postorder = [4,5,2,6,7,3,1]
// 输出：[1,2,3,4,5,6,7]
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
let arr1 = [1, 2, 4, 5, 3, 6, 7],
    arr2 = [4, 5, 2, 6, 7, 3, 1]
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function (preorder, postorder) {
    if (preorder.length === 0 || postorder.length === 0) {
        return null;
    }
    let rootVal = preorder.shift();
    postorder.pop();
    let node = new TreeNode(rootVal);
    // 假如把preorder去掉根节点的第一个作为左子树的根节点
    let leftVal = preorder[0];
    // node.left = new TreeNode(leftVal);
    let index = postorder.indexOf(leftVal);
    let leftArrPo = postorder.slice(0, index + 1);
    let rightArrPo = postorder.slice(index + 1);
    let leftArrPre = preorder.slice(0, leftArrPo.length);
    let rightArrPre = preorder.slice(leftArrPo.length);
    node.left = constructFromPrePost(leftArrPre, leftArrPo);
    node.right = constructFromPrePost(rightArrPre, rightArrPo);
    return node;
};
console.log(constructFromPrePost(arr1, arr2));