/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 给定一个二叉树 root ，返回其最大深度。二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。
 */
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
const arr = buildTree([3,9,20,null,null,15,7])

/**
 * @param {TreeNode} root
 * @return {number}
 */
// var maxDepth = function (root) {
//     if (root === null) {
//         return 0
//     }
//     return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
// };
// console.log(maxDepth(arr))
// 其他看起来比较死板的方法
// var res = 0;
// // 记录遍历到的节点的深度
// var depth = 0;

// // 主函数
// function maxDepth(root) {
//     traverse(root);
//     return res;
// }

// // 二叉树遍历框架
// function traverse(root) {
//     if (root == null) {
//         return 0;
//     }
//     // 前序位置
//     depth++;
//     if (root.left == null && root.right == null) {
//         // 到达叶子节点，更新最大深度
//         res = Math.max(res, depth);
//     }
//     traverse(root.left);
//     traverse(root.right);
//     // 后序位置
//     depth--;
// }
// function preorderTraverse(root) {
//     if (root === null) {
//         return []
//     }
//     return [root.val, ...preorderTraverse(root.left), ...preorderTraverse(root.right)]
// }
// console.log(preorderTraverse(arr))

// 如果把根节点看做第 1 层，如何打印出每一个节点所在的层数？
let level = 0
let obj = {}
function traverse1(root) {
    if (root === null) {
        return;
    }
    level++;
    obj[root.val] = level;
    traverse1(root.left)
    traverse1(root.right)
    level--
}
traverse1(arr)
// console.log(obj)

// 2、如何打印出每个节点的左右子树各有多少节点？
function traverse2(root) {
    if (root === null) {
        return 0;
    }
    let left = traverse2(root.left)
    let right = traverse2(root.right)
    console.log(root.val + '有' + (left + right) + '个节点')
    return 1 + left + right
}
traverse2(arr)