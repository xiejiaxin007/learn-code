/*
 * @author: xiejiaxin
 * @Date: 2022-03-20 10:59:54
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-22 16:33:11
 * @description: https://leetcode-cn.com/problems/sort-an-array/
 */
const arr = [-2,3,-5];
/**
 * @param {number[]} nums
 * @return {number[]}
 */
//! 这种方法不行，如果参数足够大，则计算会超出时间！！！
var sortArrayTimeOut1 = function(nums) {
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
var sortArrayTimeOut2 = function(nums) {
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
//? 这个可以了，选择排序
var sortArrayOk = function(nums) {
  for(let i = 0; i < nums.length; i++) {
    let index = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[index]) {
        index = j;
      }
    }
    if (i !== index) {
      let temp = nums[i];
      nums[i] = nums[index];
      nums[index] = temp;
    }
  }
  return nums;
};
//? 并归
var sortArray = function(numsArr) {
  let tempArr = [];
  var sort = function(nums, start, end) {
    if (start == end) {
      return;
    }
    let half = parseInt(start + (end - start) / 2);
    sort(nums, start, half);
    sort(nums, half + 1, end);
    mergeData(nums, start, half, end);
  }
  var mergeData = function(nums, lo, mid, hi) {
    for(let ii = lo; ii <= hi; ii++) {
      tempArr[ii] = nums[ii]
    }
    let i = lo, j = mid + 1;
    for (let p = lo; p <= hi; p++) {
      if (i == mid + 1) {
          // 左半边数组已全部被合并
          nums[p] = tempArr[j++];
      } else if (j == hi + 1) {
          // 右半边数组已全部被合并
          nums[p] = tempArr[i++];
      } else if (tempArr[i] > tempArr[j]) {
          nums[p] = tempArr[j++];
      } else {
          nums[p] = tempArr[i++];
      }
    }
  }
  // 构造递归
  let left = 0, right = numsArr.length - 1;
  sort(numsArr, left, right);
  return numsArr;
};
console.log(sortArray(arr));