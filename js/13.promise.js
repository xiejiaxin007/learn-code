/*
 * @author: xiejiaxin
 * @Date: 2021-10-25 10:40:56
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2021-10-25 13:44:46
 * @description: file content
 */
// 手写一个promise
class Promise {
    constructor(executor) {
        this.value = undefined;
        this.reason = undefined;
        this.resolveCallback = [];
        this.rejectCallback = [];
        // pending、resolve、reject
        this.state = 'pending';
        let resolve = (val) => {
            if (this.state === 'pending') {
                this.state = 'resolve';
                this.value = val;
                // 执行then里面存入的方法
                this.resolveCallback.forEach(cb => cb());
            }
        }
        let reject = (val) => {
            if (this.state === 'pending') {
                this.state = 'reject';
                this.reason = val;
                this.rejectCallback.forEach(cb => cb());
            }
        }
        // 立即执行executor
        try {
            executor(resolve, reject);
        } catch (err) {
            reject(err);
        }
    }
    // 没有链式调用的情况
    // then(onFullCb, onRejectCb) {
    //     if (this.state === 'pending') {
    //         this.resolveCallback.push(onFullCb);
    //         this.rejectCallback.push(onRejectCb);
    //     }
    //     // 链式调用处理
    //     if (this.state === 'resolve') {
    //         onFullCb(this.value)
    //     }
    //     if (this.state === 'reject') {
    //         onRejectCb(this.reason);
    //     }
    //     console.log(this.resolveCallback)
    // }
    // 有链式调用
    then(onFullCb, onRejectCb) {
        onFullCb = typeof onFullCb === 'function' ? onFullCb : v => v;
        onRejectCb = typeof onRejectCb === 'function' ? onRejectCb : err => {throw err};
        let promise2 = new Promise((resolve, reject) => {
            if (this.state === 'resolve') {
                this.resolveCallback.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onFullCb(this.value);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (error) {
                            reject(error);
                        }
                    }, 0);
                })
            }
            if (this.state === 'reject') {
                this.rejectCallback.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onRejectCb(this.reason);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (error) {
                            reject(error);
                        }
                    }, 0);
                })
            }
            if (this.state === 'pending') {
                this.resolveCallback.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onFullCb(this.value);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (error) {
                            reject(error);
                        }
                    }, 0);
                })
                this.rejectCallback.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onRejectCb(this.value);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (error) {
                            reject(error);
                        }
                    }, 0);
                })
            }
        })
        return promise2;
    }
}
// 这个方法主要是用来给链式调用准备的，因为返回的是每一个then后面返回的是promise，所以我们需要用这个方法来定义resolve什么时候执行
// 如果有嵌套，还需要进行递归
const resolvePromise = (promise2, x, resolve, reject) => {
    if (promise2 === x) {
        return reject(new Error('自己等待自己报错'));
    }
    let called;
    if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
        try {
            let then = x.then;
            if (typeof then === 'function') {
                then.call(x, fullParam => {
                    if (called) {
                        return;
                    }
                    called = true;
                    // 递归
                    resolvePromise(promise2, fullParam, resolve, reject);
                }, rejectParam => {
                    if (called) return;
                    called = true;
                    reject(rejectParam)
                })
            } else {
                resolve(x);
            }
        } catch (error) {
            reject(error)
        }
    } else {
        resolve(x);
    }
}

new Promise((resolve, reject) => {
    console.log('start promise!');
    resolve('resolve');
}).then((val) => {
    console.log(val);
    return val;
}).then((val) => {
    console.log(val);
})