/*
 * @description:
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-03-21 14:04:52
 * @desc: https://leetcode.cn/problems/merge-k-sorted-lists/description/
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
function getListFromArray(a) {
  let dummy = new ListNode();
  let pre = dummy;
  a.forEach((x) => (pre = pre.next = new ListNode(x)));
  return dummy.next;
}
function getListArrayFromArray(arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    res.push(getListFromArray(arr[i]))
  }
  return res;
}
let val1 = getListArrayFromArray([[1,4,5],[1,3,4],[2,6]])
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let res = new ListNode(-1),
  dummy = res
  
  if (lists.length === 0) {
    return null
  }
  var checkNull = function(arr) {
    return arr.some(item => item)
  }
  var outNullItem = function(arr) {
    return arr.filter(item => item)
  }
  lists = outNullItem(lists)
  while(lists.length > 0) {
    let len = lists.length
    let min = lists[0].val
    let obj = {
      index: 0,
      list: null
    }
    for(let i = 1; i < len; i++) {
      if (lists[i].val <= min) {
        min = lists[i].val
        obj = {
          index: i,
          list: lists[i]
        }
      }
    }
    if (obj.index) {
      res.next = new ListNode(lists[obj.index].val)
      res = res.next
      lists[obj.index] = lists[obj.index].next
    }
    if (obj.index === 0) {
      res.next = new ListNode(lists[obj.index].val)
      res = res.next
      min = lists[obj.index].val
      lists[obj.index] = lists[obj.index].next
    }
    lists = outNullItem(lists)
  }
  return dummy.next
};
console.log(mergeKLists(val1))