/*
 * @author: xiejiaxin
 * @Date: 2021-10-13 17:13:07
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2021-10-17 21:10:21
 * @description: file content
 */

// vue核心：observe、compile、watcher、Dep

// diff算法：patch

//! 双向绑定原理
// 从new Vue开始，其实我们就在对传入的option进行一系列操作，其中双向绑定是最重要的，在源码中，双向绑定主要分为两个部分（data劫持、模板的解析），三个类代码（Observe、watcher、Dep）
// 我们先讲data的数据劫持吧，比如我们在使用的时候，为什么可以直接通过this.xx来取数据，就是因为我们使用defineProperty把我们的每一个属性都绑定到了this上面，这个动作是在observejs里面完成的
// 再然后我们this.xx进行修改，怎么通知我们的模板呢？其实也是使用defineProperty的set和get进行了拦截，每一次的修改其实就是触发了set，然后在set函数里面，给每一个watcher进行通知
// 那我们的watcher是什么时候生成的呢？其实就是另外一部分，在进行模板渲染的时候，就会走一次get方法，之所以不在observe主动添加watcher，就是因为这样可以减少监听，也只有template里面的才需要进行双向绑定
// get方法里面，会实例化Dep，并且生成对应watcher，进行依赖添加，等set的时候，我们的dep就可以进行逐一通知了

//! diff算法
// 