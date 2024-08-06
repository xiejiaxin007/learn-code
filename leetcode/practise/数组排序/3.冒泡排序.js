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
// ! 相邻两个数的比较
var sortArray = function(nums) {
    for(let i = 0; i < nums.length - 1; i++) {
        for (let j = 0; j < nums.length - i; j++) {
            if (nums[j] > nums[j + 1]) {
                let t = nums[j]
                nums[j] = nums[j + 1]
                nums[j + 1] = t
            }
        }
    }
    return nums
};
console.log(sortArray(arr))