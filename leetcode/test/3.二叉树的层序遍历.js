// 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。
// 输入：root = [3,9,20,null,null,15,7]
// 输出：[[3],[9,20],[15,7]]

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
let arr = buildTree([3,9,20,null,null,15,7])

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// !错误方法----后来又调整正确了
var levelOrder = function(root) {
    let index = 0;
    let obj = {}
    let dep = 0
    let arr2 = []
    let resArr = [];
    let newArr = []
    const tranverse = function(node) {
        if (node === undefined) {
            newArr = [[]]
            return
        }
        if (node === null) {
            return
        }
        index++
        let tep = Math.random() * 100000000 + '~' + node.val
        obj[tep] = index;
        arr2.push(node.val + '')
        tranverse(node.left)
        tranverse(node.right)
        dep = Math.max(dep, index)
        index--
    }
    tranverse(root)
    for(let i = 1; i <= dep; i++) {
        let arr1 = []
        Object.keys(obj).forEach(element => {
            if (obj[element] === i) {
                let it = element.split('~')[1]
                arr1.push(it)
            }
        });
        resArr.push(arr1)
    }
    resArr.forEach(item => {
        let j1 = []
        arr2.forEach(j => {
            if (item.includes(j)) {
                j1.push(j)
            }
        })
        newArr.push(j1)
    })
    return resArr
};
var levelOrderRight = function(root) {
    const ret = [];
    if (!root) {
        return ret;
    }

    const q = [];
    q.push(root);
    while (q.length !== 0) {
        const currentLevelSize = q.length;
        ret.push([]);
        for (let i = 1; i <= currentLevelSize; ++i) {
            const node = q.shift();
            ret[ret.length - 1].push(node.val);
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
    }
        
    return ret;
}
console.log(levelOrderRight(arr))