/*
 * @author: xiejiaxin
 * @Date: 2021-10-28 21:03:40
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2021-10-28 22:34:25
 * @description: file content
 */
// 给定正整数 N ，我们按任何顺序（包括原始顺序）将数字重新排序，注意其前导数字不能为零。
// 如果我们可以通过上述方式得到 2 的幂，返回 true；否则，返回 false。
// 输入：1
// 输出：true
// 输入：10
// 输出：false
// 输入：46
// 输出：true
// 输入：24
// 输出：false
/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function (val) {
    // 任意顺序的话，那就是全排列，并且不能以0为开头
    if (typeof val !== 'number') {
        return false;
    }
    val = val.toString().split('');
    let arr = []
    let set = new Set();
    function quanpailie(n) {
        const len = n.length;
        for (let i = 0; i < len; i++) {
            arr.push(n[i]);
            const newN = n.slice(0);
            newN.splice(i, 1);
            if (newN.length === 0) {
                set.add(arr)
                console.log(arr)
            } else {
                quanpailie(newN);
            }
            arr.pop();
        }
    }
    quanpailie(val);
};
let val = 123;
console.log(reorderedPowerOf2(val))