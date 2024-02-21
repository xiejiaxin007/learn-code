// https://leetcode.cn/problems/maximum-binary-tree/description/
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
// 生成可以执行的二叉树的数据结构
function buildTree(val_list) {
    // 数组为空
    if (!val_list || val_list.length === 0) {
        return;
    }
    // 根节点
    var root = new TreeNode(val_list.shift());

    var nodeQueue = [root];
    // 对root节点进行操作，更新node
    while (val_list.length > 0) {
        var node = nodeQueue.shift();
        // n = node.level + 1;	// 获取父节点的层级，子节点在该层级上+1
        // 构建：左孩子节点
        if (val_list.length === 0) {
            break;
        }
        var leftVal = val_list.shift();
        if (leftVal != null) {
            node.left = new TreeNode(leftVal);
            nodeQueue.push(node.left);
        }
        // 构建：右孩子节点
        if (val_list.length === 0) {
            break;
        }
        var rightVal = val_list.shift();
        if (rightVal != null) {
            node.right = new TreeNode(rightVal);
            nodeQueue.push(node.right);
        }
    }
    return root;
}
let arr = [3,2,1,6,0,5]

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(num) {
    let max = Math.max(...num);
    const len = num.length;
    let Mindex = num.findIndex(item => item === max);
    let leftArr = [], rightArr = [];
    if (Mindex !== -1 && Mindex > 0 && Mindex < (len - 1)) {
        leftArr = num.slice(0, Mindex);
        rightArr  = num.slice(Mindex + 1);
    }
    console.log(leftArr, rightArr, max)
};
console.log(constructMaximumBinaryTree(arr))