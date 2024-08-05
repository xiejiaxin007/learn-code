/*
 * @description:
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-06-28 14:04:52
 * @desc: https://leetcode.cn/problems/remove-duplicates-from-sorted-array/
 */
let val = [0,0,1,1,1,2,2,3,3,4]
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates_my = function(nums) {
    if (nums.length === 0) {
        return nums
    }
    let obj = new Set()
    let len = nums.length
    for(let i = 0; i < len; i++) {
        if (!obj.has(nums[i])) {
            obj.add(nums[i])
        } else {
            nums.splice(i, 1)
            i--
            len--
        }
    }
    return nums
};
// ? 快慢指针解答
// ! 这里需要注意的是，由于是一个升序排列的，所以只要是重复的，那就一定是挨着的，这点很关键
// ! 本题想要的结果不是nums数组，而是不重复item的个数
// ! 只能操作原数组，不能新建数组
var removeDuplicates = function(nums) {
    if (nums.length == 0) {
        return 0
    }
    // ! 逻辑：双指针表示数组索引，slow是nums的不重复item的索引，走得慢，fast为快指针，每次走一步就跟slow进行对比，由于是升序排列的，所以相当item肯定是挨着的，所以可以直接将slow和fast代表的item进行比较即可
    let fast = 0, slow = 0
    while(fast < nums.length){
        if (nums[slow] !== nums[fast]) {
            slow++
            nums[slow] = nums[fast]
        }
        fast++
    }
    return slow + 1
}
console.log(removeDuplicates(val))