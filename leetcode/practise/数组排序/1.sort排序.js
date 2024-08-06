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
var sortArray = function(nums) {
    nums.sort((a,b) => a - b)
    return nums
};
console.log(sortArray(arr))