/*
 * @author: xiejiaxin
 * @Date: 2021-10-12 16:29:32
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2021-10-12 17:51:02
 * @description: file content
 */
// map是进行数组循环的api，会返回一个符合条件的新的数组

const arr = ['a', 'b', 'c'];
// const arr1 = arr.map((val, index, array, thisArg) => {
//     console.log(val, index, array, thisArg);
// });

Array.prototype._map = function(callback) {
    // this表示调用这个api的数组
    const len = this.length;
    let newArr = [];
    if (this.length <= 0) {
        return newArr;
    }
    for(let i = 0; i < len; i++) {
        newArr.push(callback.call(this, this[i], i, this))
    }
    // newArr = this.reduce((nowVal, afterVal, index, array) => {
    //     return callback.call(this, afterVal, index, this);
    // }, []);
    return newArr;
}
const arr2 = arr._map((val, index, array, thisArg) => {
    console.log(val, index, array, thisArg);
    return val + '333'
})
console.log(arr2)