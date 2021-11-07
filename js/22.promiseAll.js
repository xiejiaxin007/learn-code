/*
 * @author: xiejiaxin
 * @Date: 2021-11-07 18:22:45
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2021-11-07 19:40:51
 * @description: file content
 */
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 3000);
});
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2)
    }, 1000);
});
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3)
    }, 2000);
});

function myAll(args) {
    return new Promise((resolve, reject) => {
        try {
            const arr = [];
            let count = 0;
            let curIndex = 0;
            for (let value of args) {
                let resultIndex = curIndex;
                curIndex++;
                Promise.resolve(value).then((res) => {
                    arr[resultIndex] = res;
                    count++;
                    if (count === args.length) {
                        resolve(arr);
                    }
                });
            }
        } catch (error) {
            reject(error);
        }
    });
}
// myAll([p2, p3, p1]).then((res) => {
//     console.log(res);
// });

class myPromise {
    constructor(cb) {
        this.state = 'pending';
        this.resolveFn = [];
        this.rejectFn = [];
        this.value = '';
        this.reason = '';

        let resolve = (val) => {
            if (this.state === 'pending') {
                this.state = 'resolve';
                this.value = val;
                this.resolveFn.forEach(v => v());
            }
        }
        let reject = (val) => {
            if (this.state === 'pending') {
                this.state = 'reject';
                this.reason = val;
                this.rejectFn.forEach(v => v());
            }
        }
        // 立马执行
        try {
            cb(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }
    // then(fillCallBack, rejectCallBack) {
    //     if (this.state === 'pending') {
    //         this.resolveFn.push(fillCallBack);
    //         this.rejectFn.push(rejectCallBack);
    //     }
    //     if (this.state === 'resolve') {
    //         fillCallBack(this.value);
    //     }
    //     if (this.state === 'reject') {
    //         rejectCallBack(this.reason);
    //     }
    // }
    then(fillCallBack, rejectCallBack) {
        let p2 = new myPromise((resolve, reject) => {
            fillCallBack = typeof fillCallBack === 'object' ? fillCallBack : v => v;
            rejectCallBack = typeof rejectCallBack === 'object' ? rejectCallBack : err => {throw err};
            if (this.state === 'resolve') {
                this.resolveFn.push(() => {
                    setTimeout(() => {
                        try {
                            let x = fillCallBack(this.value);
                            resolvePromise(p2, x, resolve, reject);
                        } catch (err) {
                            reject(err)
                        }
                    }, 0);
                });
            }
            if (this.state === 'reject') {
                this.rejectFn.push(() => {
                    setTimeout(() => {
                        try {
                            let x = rejectCallBack(this.reason);
                            resolvePromise(p2, x, resolve, reject);
                        } catch (err) {
                            reject(err)
                        }
                    }, 0);
                })
            }
            if (this.state === 'pending') {
                this.resolveFn.push(() => {
                    setTimeout(() => {
                        try {
                            let x = fillCallBack(this.value);
                            resolvePromise(p2, x, resolve, reject);
                        } catch (err) {
                            reject(err)
                        }
                    }, 0);
                });
                this.rejectFn.push(() => {
                    setTimeout(() => {
                        try {
                            let x = rejectCallBack(this.reason);
                            resolvePromise(p2, x, resolve, reject);
                        } catch (err) {
                            reject(err)
                        }
                    }, 0);
                })
            }
        });
        return p2;
    }
}
let resolvePromise = () => {};
new myPromise((resolve, reject) => {
    try {
        resolve(11)
    } catch (error) {
        reject(error)
    }
}).then(res => {
    console.log(res);
    return 22
}).then(res => {
    console.log(res);
}, err => {
    console.log(err);
});