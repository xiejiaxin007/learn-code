/*
 * @author: xiejiaxin
 * @Date: 2021-10-13 11:01:33
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2021-10-13 14:51:45
 * @description: file content
 */
// 二叉树：节点由三部分组成，数据存储到node的data中，然后有一个左节点、一个右节点，左节点存放小于data的节点，右节点则相反
// 如果子树的data<父级的data，则会被放入到左节点中，反之则放入右节点
// https://www.jianshu.com/p/61f75e0f549f

// 我自己写的
class BST {
    constructor() {
        this.root = null;
    }
    // 私有方法
    insert(data, left, right) {
        // 如果当前就是根节点
        if (this.root === null) {
            this.root = {
                data: data,
                left: null,
                right: null
            };
            return
        }
        // 如果当前已经不是根节点，则需要判断放的位置
        // 1、必须是最外层子节点
        // 2、根据data判断是放left还是right
        let tempRoot = this.root;
        while (true) {
            // 判断往左还是往右
            if (tempRoot.data > data) {
                if (tempRoot.left === null) {
                    tempRoot.left = {
                        data: data,
                        left: null,
                        right: null
                    };
                    break;
                }
                tempRoot = tempRoot.left;
            } else {
                if (tempRoot.right === null) {
                    tempRoot.right = {
                        data: data,
                        left: null,
                        right: null
                    };
                    break;
                }
                tempRoot = tempRoot.right;
            }
        }
    }
}

var bst = new BST();
bst.insert(6);
bst.insert(2);
bst.insert(9);
bst.insert(1);
bst.insert(3);
bst.insert(8);
bst.insert(12);
bst.insert(4);
bst.insert(7);
bst.insert(22);
console.log(bst)