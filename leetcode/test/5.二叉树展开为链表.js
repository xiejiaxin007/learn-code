// https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/description/
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
let arr = buildTree([1,2,5,3,4,null,6])
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
// !不能用有返回值的模式，因为上面是void方法
var flatten1 = function(root) {
    let newNode = new TreeNode(-1);
    let p = newNode
    let traverse = function(node) {
        if (node == null) {
            return
        }
        p.right = new TreeNode(node.val)
        p = p.right
        traverse(node.left)
        traverse(node.right)
    }
    traverse(root)
    return newNode.right;
};
var flatten = function(root) {
    if (root === null) {
        return
    }
    // 分解问题
    // 每一棵树，左侧节点放到后侧来，flatten(root.left),flatten(root.right)
    flatten(root.left)
    flatten(root.right)
    // 左子树放到右边作为右子树
    let right = root.right
    let left = root.left;
    root.right = left;
    root.left = null
    // 右子树拼接到左子树的右侧
    // 3、将原先的右子树接到当前右子树的末端
    var p = root;
    while (p.right !== null) {
        p = p.right;
    }
    p.right = right;
}
flatten(arr)
console.log(arr)