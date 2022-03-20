/*
 * @author: xiejiaxin
 * @Date: 2022-03-20 10:59:54
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2022-03-20 11:31:50
 * @description: https://leetcode-cn.com/problems/sort-an-array/
 */
const arr = [-2,3,-5];
/**
 * @param {number[]} nums
 * @return {number[]}
 */
//! 这种方法不行，如果参数足够大，则计算会超出时间！！！
var sortArrayTimeOut = function(nums) {
    let arr = [];
    while(nums.length) {
        const small = Math.min(...nums);
        arr.push(small);
        const index = nums.findIndex(i => i === small);
        nums.splice(index, 1);
    }
    return arr;
};
//! 这种方法不行，如果参数足够大，则计算会超出时间！！！
var sortArray = function(nums) {
    for (let i = 0; i < nums.length-1; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }
    return nums;
};
console.log(sortArray(arr));