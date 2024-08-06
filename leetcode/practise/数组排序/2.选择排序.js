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
// ! 先找出最大或者最小的数
var sortArray = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                let t = nums[i]
                nums[i] = nums[j]
                nums[j] = t
            }
        }
    }
    return nums
};
console.log(sortArray(arr))