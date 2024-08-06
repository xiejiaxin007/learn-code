/*
 * @description: 
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-8-5 15:09:01
 * @desc: https://leetcode.cn/problems/coin-change/description/
 */

let coins = [2], amount = 3
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var findRank = function(arr, item) {
    const index = arr.findIndex(i => item === i)
    if (index !== -1) {
        return {
            match: true,
            rank: index
        }
    }
    let rank = 0
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] < item) {
            rank++
        }
    }
    return {
        match: false,
        rank: rank - 1
    }
}
var coinChange_error = function(coins, amount) {
    if (amount === 0) {
        return 0
    }
    coins = coins.sort((a, b) => {
        return a - b
    })
    console.log(coins)
    let arr = []
    while(!(amount < coins[0])){
        const {match, rank} = findRank(coins, amount)
        if (match) {
            arr.push(amount)
            return arr.length
        } else {
            arr.push(coins[rank])
            amount = amount - coins[rank]
        }
        console.log(match, rank, arr, amount)
    }
    // console.log(arr)
    // 表示没有匹配的
    return -1
};
let noteArr = []
var dp = function(coins, amount) {
    if (amount === 0) {
        return 0
    }
    if (amount < 0) {
        return -1
    }
    if (noteArr[amount] !== -666) {
        return noteArr[amount]
    }
    let res = Number.MAX_SAFE_INTEGER
    for (let coin of coins) {
        let sub = dp(coins, amount - coin)
        if (sub === -1) {
            continue
        }
        res = Math.min(res, parseInt(1 + sub))
    }
    res = res === Number.MAX_SAFE_INTEGER ? -1 : res
    noteArr[amount] = res
    return noteArr[amount]
}
var coinChange = function(coins, amount){
    noteArr = new Array(amount + 1)
    noteArr.fill(-666)
    return dp(coins, amount)
}
console.log(coinChange(coins, amount))