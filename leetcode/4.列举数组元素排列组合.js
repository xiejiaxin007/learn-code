/*
 * @author: xiejiaxin
 * @Date: 2021-10-19 20:04:55
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2021-10-19 21:07:54
 * @description: file content
 */
// 给定一个简单数组，里面没有重复元素，请列举出数组中元素的所有排列组合
// https://leetcode-cn.com/problems/permutations/solution/dai-ma-sui-xiang-lu-dai-ni-xue-tou-hui-s-mfrp/
var arr = [1, 2, 3];
// 临时变量，用于输出
var temp = [];

function n(arr) {
    for (var i = 0; i < arr.length; i++) {
        // 插入第i个值
        temp.push(arr[i]);
        // 复制数组
        var copy = arr.slice();
        // 删除复制数组中的第i个值，用于递归
        copy.splice(i, 1);
        if (copy.length == 0) {
            // 如果复制数组长度为0了，则打印变量
            console.log(temp);
        } else {
            // 否则进行递归
            n(copy);
        }
        // 递归完了之后删除最后一个元素，保证下一次插入的时候没有上一次的元素
        temp.pop();
    }
}
// n(arr);

function quanpailie(arrVal) {
    for (let i = 0; i < arrVal.length; i++) {
        const currentVal = arrVal[i];
        temp.push(currentVal);
        let otherArr = arrVal.slice(0);
        otherArr.splice(i, 1);
        if (otherArr.length === 0) {
            console.log(temp);
        } else {
            quanpailie(otherArr);
        }
        temp.pop();
    }
}
quanpailie(arr);