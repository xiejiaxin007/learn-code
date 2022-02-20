/*
 * @author: xiejiaxin
 * @Date: 2022-02-13 16:43:17
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2022-02-20 10:53:55
 * @description: https://leetcode-cn.com/problems/maximum-binary-tree/
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
const params = [3,2,1,6,0,5];
/** 看起来是个中序遍历
 * @param {number[]} nums
 * @return {TreeNode}
 */
let node = {}
var constructMaximumBinaryTree = function(nums) {
    if (nums.length === 0) {
        return null;
    }
    if (nums.length === 1) {
        return new TreeNode(nums[0])
    }
    const max = Math.max(...nums);
    let root = new TreeNode(max);
    const index = nums.findIndex(i => i === max);
    const leftArr = nums.slice(0, index);
    const rightArr = nums.slice(index + 1);
    root.left = constructMaximumBinaryTree(leftArr)
    root.right = constructMaximumBinaryTree(rightArr);
    return root
};
// 中序遍历模板
function forFn(root) {
    if (root === null) {
        return
    }
    forFn(root.left)
    console.log(root)
    forFn(root.right)
}
console.log(constructMaximumBinaryTree(params))