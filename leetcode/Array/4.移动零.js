/*
 * @description:
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-07-02 14:04:52
 * @desc: https://leetcode.cn/problems/move-zeroes/description/
 */
let val = [1]
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if (nums.length === 0) {
        return []
    }
    let slow = 0, fast = 0
    while(fast < nums.length){
        let len = nums.length
        if (nums[fast] != 0) {
            nums[slow] = nums[fast]
            if (slow !== fast) {
                nums[fast] = 0
            }
            slow++
        }
        fast++
    }
    // while(slow < nums.length){
    //     nums[slow] = 0
    //     slow++
    // }
    return nums
};
console.log(moveZeroes(val))