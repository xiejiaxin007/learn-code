/*
 * @description:
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-07-02 14:04:52
 * @desc: https://leetcode.cn/problems/remove-element/description/
 */
let val = [0,1,2,2,3,0,4,2]
let k = 2
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if (nums.length === 0) {
        return 0
    }
    let fast = 0, slow = 0
    while(fast < nums.length) {
        if (nums[fast] !== val) {
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }
    return slow
};
console.log(removeElement(val, k))