function isPalindrome(str) {
    let len = str.length
    if (len === 0) {
        return true
    }
    let midIndex = len / 2
    let startStr = '', endStr = ''
    if ((midIndex ^ 0 )=== midIndex) {
        startStr = str.slice(0, midIndex)
        endStr = str.slice(midIndex)
    } else {
        let mid = Math.floor(midIndex)
        startStr = str.slice(0, mid)
        endStr = str.slice(mid + 1)
    }
    if (startStr === endStr.split('').reverse().join('')) {
        return true
    }
    return false
}
console.log(isPalindrome('a car, a man, a maraca'))