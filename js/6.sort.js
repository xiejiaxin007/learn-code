/*
 * @author: xiejiaxin
 * @Date: 2021-10-13 10:08:14
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2021-10-13 11:51:04
 * @description: file content
 */
// https://visualgo.net/zh/sorting
// 冒泡排序
// 动图像是冒泡，实际是把最大的数字放到最后，第二的放倒数第二，以此类推
const arr = [23, 2, 45, 5, 7, 2, 8, 9];
const len = arr.length;
// 方法一
// for(let i = 0; i < len - 1; i++) {
//     for(let j = i + 1; j < len; j ++) {
//         if (arr[i] > arr[j]) {
//             const val = arr[j];
//             arr[j] = arr[i];
//             arr[i] = val;
//         }
//     }
// }

// 方法二
// for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len - 1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//             const val = arr[j + 1];
//             arr[j + 1] = arr[j];
//             arr[j] = val;
//         }
//     }
// }

// 快速排序
// 快速排序：第一层循环，定位好当前索引应该存在的最小值，然后在第二层循环中进行寻找，如果有小于这个值的，记录索引，继续循环，直到找到最小值
var min = 0;
for (let i = 0; i < len - 1; i++) {
    // 默认定义第一个索引所在是最小值
    min = i;
    for (let j = i + 1; j < len; j++) {
        // 找到小于该值的，则记录小于该值的数的索引，直到找到最小值
        if (arr[j] < arr[min]) {
            min = j;
        }
    }
    // 找到最小值后，将该索引对应的值放到当前循环的第几位中（第一次循环，就是放到0索引，第二次就是1）
    const val = arr[i];
    arr[i] = arr[min];
    arr[min] = val;
}
console.log(arr)