// 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
// 你可以假设除了整数 0 之外，这个整数不会以零开头。

// 输入：digits = [1,2,3]
// 输出：[1,2,4]
// 解释：输入数组表示数字 123。

// 输入：digits = [4,3,2,1]
// 输出：[4,3,2,2]
// 解释：输入数组表示数字 4321。

// 输入：digits = [0]
// 输出：[1]

// 输入：digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
// 输入：[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]

// 输入：digits = [9]
// 输入：[1,0]

/**
 * @param {number[]} digits
 * @return {number[]}
 */
// 会出现内存溢出
var plusOne_1 = function (digits) {
    let str = digits.join('');
    let num = +str + 1;
    return num.toString().split('')
};

// 官方
var plusOne_guanfang = function (digits) {
    const len = digits.length;
    for (let i = len - 1; i >= 0; i--) {
        digits[i]++;
        digits[i] %= 10;
        if (digits[i] != 0)
            return digits;
    }
    digits = [...Array(len + 1)].map(_ => 0);;
    digits[0] = 1;
    return digits;
}

// success
var plusOne = function (digits) {
    if (digits.length === 0) {
        return [1];
    }
    let last = digits[digits.length - 1] + 1;
    if (last > 9) {
        // 说明需求往前进一位
        let newArr = digits.slice();
        newArr.pop()
        let news = plusOne(newArr);
        news.push(0)
        return news;
    } else {
        digits[digits.length - 1] = last;
    }
    return digits;
};

let arr = [1, 9];
console.log(plusOne(arr));