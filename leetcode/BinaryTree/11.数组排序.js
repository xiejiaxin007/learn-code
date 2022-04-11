/*
 * @author: xiejiaxin
 * @Date: 2022-03-20 10:59:54
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2022-03-27 16:54:21
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
//? 选择排序的时间复杂度更低，可以通过
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
//? 并归排序更好
var sortArray_guanfang = function(numsArr) {
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
// 归并排序：在每一个二叉树节点进行一次合并，这个合并的几点，是二叉树后序遍历的时候，也就是左右子节点都确定的时候
var sortArray = function(numsArr) {
  if (numsArr.length === 0) {
    return;
  }
  var sort = function(nums, low, hi){
    let mid = Math.floor((low - hi) / 2);
    sort(nums, low, mid);
    sort(nums, mid + 1, hi);
    mergeNum(nums, low, mid, hi);
  };
  var mergeNum = function(nums, low, mid, hi) {
    var temp = [];
    // 复制一份nums（深拷贝，相互不影响），因为后续需要直接修改nums数组
    for (let i = 0; i < nums.length; i++) {
      temp[i] = nums[i]
    }
    let k = low, j = mid + 1;
    for (let i = 0; i < temp.length; i++) {
      if (i < j) {
        if (temp[i] < temp[j]) {
          nums[i] = temp[k++]
        } else {
          nums[i] = temp[j++]
        }
      }
    }
  }
  let start = 0, end = numsArr.length - 1;
  sort(numsArr, start, end);
  return numsArr;
}
console.log(sortArray(arr));