/*
 * @description: 
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2023-12-29 15:09:01
 * @desc: 两数字之和
 */
// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
// 你可以按任意顺序返回答案。

// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
// [3,2,4],target = 6
// let arr = [3, 3];
// let arr = [3, 2, 4];
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const len = nums.length;
  for (let i = 0; i < len - 1; i++) {
    const res = target - nums[i];
    if (res >= 0) {
      for (j = 0; j < len -1; j++) {
        if (res === nums[j] && i !== j) {
          return [i, j]
        }
      }
    }
  }
};
console.log(twoSum([2,7,11,15]))