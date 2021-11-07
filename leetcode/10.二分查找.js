/*
 * @author: xiejiaxin
 * @Date: 2021-11-07 11:05:02
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2021-11-07 11:20:29
 * @description: file content
 */
// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
// 输入: nums = [-1,0,3,5,9,12], target = 9
// 输出: 4
// 解释: 9 出现在 nums 中并且下标为 4

// 输入: nums = [-1,0,3,5,9,12], target = 2
// 输出: -1
// 解释: 2 不存在 nums 中因此返回 -1

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const arr = [-1, 0, 3, 5, 9, 12];
const val = 2;
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let mid = Math.ceil((left + right) / 2);
        if (nums[mid] <= target) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }
    if (nums[left] === target) {
        return left;
    } else {
        return -1;
    }
};

// 如果没有则返回应该插入的位置
var searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let mid = Math.ceil((left + right) / 2);
        if (nums[mid] <= target) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }
    if (nums[left] === target) {
        return left;
    } else if (nums[left] > target) {
        return left - 1 > 0 ? left - 1 : 0;
    } else {
        return left + 1;
    }
};
console.log(searchInsert(arr, val));