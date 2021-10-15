/*
 * @author: xiejiaxin
 * @Date: 2021-10-13 11:01:33
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2021-10-13 15:19:48
 * @description: file content
 */
// 二叉树：节点由三部分组成，数据存储到node的data中，然后有一个左节点、一个右节点，左节点存放小于data的节点，右节点则相反
// 如果子树的data<父级的data，则会被放入到左节点中，反之则放入右节点
// https://www.jianshu.com/p/61f75e0f549f

class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    // 插入
    insert(data, left = null, right = null) {
        if (this.root === null) {
            const node = new Node(data, null, null);
            this.root = node;
            return;
        }
        let tempNode = this.root;
        while(true) {
            if (data < tempNode.data) {
                if (tempNode.left === null) {
                    tempNode.left = new Node(data, left, right);
                    break;
                }
                tempNode = tempNode.left;
            } else {
                if (tempNode.right === null) {
                    tempNode.right = new Node(data, left, right);
                    break;
                }
                tempNode = tempNode.right;
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