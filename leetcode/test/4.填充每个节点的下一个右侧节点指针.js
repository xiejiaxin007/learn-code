// https://leetcode.cn/problems/populating-next-right-pointers-in-each-node/
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
let arr = buildTree([1,2,3,4,5,6,7])
var connect = function(root) {
    if (root === null) {
        return null
    }
    let traverse = function(left, right) {
        if (left === null || right === null) {
            return
        }
        left.next = right
        traverse(left.left, left.right)
        traverse(right.left, right.right)
        traverse(left.right, right.left)
    }
    traverse(root.left, root.right)
    return root
};
console.log(connect(arr))