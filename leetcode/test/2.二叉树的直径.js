// 给你一棵二叉树的根节点，返回该树的 直径 。
// 二叉树的 直径 是指树中任意两个节点之间最长路径的 长度 。这条路径可能经过也可能不经过根节点 root 。
// 两节点之间路径的 长度 由它们之间边数表示。
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
let arr = buildTree([3,2,1])

/**
 * @param {TreeNode} root
 * @return {number}
 */

//! 中序遍历，遍历每一颗数的中旬遍历，错误！！！
var diameterOfBinaryTree1 = function(rot) {
    let arr1 = [];
    let arr2 = []
    const traverse = (root) => {
        if (root === null) {
            // 叶子节点
            return
        }
        traverse(root.left)
        traverse(root.right)
        arr1.push(root.val)
        if ((root.right ===null && root.left) || (root.right&& root.left) ===null  ) {
            // 中间节点，比较一次直径大小
            if (arr2.length < arr1.length) {
                arr2 = JSON.parse(JSON.stringify(arr1))
                // arr2.shift(0)
            }
        } else if (root.right && root.left) {
            if (arr2.length < arr1.length) {
                arr2 = JSON.parse(JSON.stringify(arr1))
                arr2.shift(0)
            }
        }
    }
    traverse(rot)
    return arr2.length - 1
};

//? 二叉树直径===二叉树俩节点之间的最长距离===每一个节点左右两个子树的最大深度之合！！！！！
var diameterOfBinaryTree = function(rot) {
    let dep = 0;
    const traverse = (root) => {
        if (root === null) {
            return 0
        }
        const left = traverse(root.left)
        const right = traverse(root.right)
        dep = Math.max(dep, left + right)
        return Math.max(left, right) + 1
    }
    traverse(rot)
    return dep
}
console.log(diameterOfBinaryTree(arr))