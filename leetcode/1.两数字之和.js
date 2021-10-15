/*
 * @author: xiejiaxin
 * @Date: 2021-10-15 10:10:12
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2021-10-15 10:35:27
 * @description: file content
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
let arr = [2, 7, 11, 15];
var twoSum = function (nums, target) {
    const len = nums.length;
    let rel = [];
    for (let i = 0; i < len; i++) {
        const del = target - nums[i];
        const index = nums.findIndex(x => x === del);
        if (index !== -1 && i !== index) {
            rel = [i, index];
            return rel;
        }
    }
    return rel;
};

var twoSum1 = function (nums, target) {
    const len = nums.length;
    let rel = [];
    let obj = {};
    for (let i = 0; i < len; i++) {
        const del = target - nums[i];
        if (obj[nums[i]] !== '' && obj[nums[i]] !== undefined && obj[nums[i]] !== i) {
            return [obj[nums[i]], i];
        }
        obj[del] = i;
    }
    return rel;
};

console.log(twoSum1(arr, 9))