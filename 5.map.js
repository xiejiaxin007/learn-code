/*
 * @author: xiejiaxin
 * @Date: 2021-10-12 16:29:32
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2021-10-12 16:56:47
 * @description: file content
 */
// map是进行数组循环的api，会返回一个符合条件的新的数组

Array.prototype._map = function(callback) {
    console.log(this)
}
let arr = [0, 1, 2];
arr._map()