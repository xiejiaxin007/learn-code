/*
 * @description: 
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-8-5 15:09:01
 * @desc: https://leetcode.cn/problems/sort-an-array/description/
 */

let arr = [5,2,3,1];
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var merge = function(left, right){
    let mergeArr = []
    while(left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            mergeArr.push(left.shift())
        } else{
            mergeArr.push(right.shift())
        }
    }
    if (left.length > 0) {
        mergeArr.push(...left)
    }
    if (right.length > 0) {
        mergeArr.push(...right)
    }
    return mergeArr
}
// ! 先拆分，然后合并，采用递归的方式
var sortArray = function(nums) {
    if (nums.length < 2) {
        return nums
    }
    // 拆分
    let mid = Math.floor(nums.length / 2)
    let leftArr = nums.slice(0, mid)
    let rightArr = nums.slice(mid)
    return merge(sortArray(leftArr), sortArray(rightArr))
};
console.log(sortArray(arr))