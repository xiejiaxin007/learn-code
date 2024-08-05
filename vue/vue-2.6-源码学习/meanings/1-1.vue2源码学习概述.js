// ! vue2源码概述
// * 从new Vue()开始，实际上就是调用了vue源码中的function Vue了，进行了一系列的操作

// * 初始化
// *    根据初始化，我们可以学习到vue的生命周期
// *        1、new Vue开始，vue会先进行initEvent和initLifecircle函数，这部分完成了，会触发beforeCreate生命周期函数
// ?            这个地方我看过源码，initEvent看起来是在给根节点做一些操作，然后life函数应该是在做一些变量的挂载
// *        2、然后初始化initProps、initData、initComputed等操作，完成后触发created生命周期函数，此时，我们的vm已经初始化完成，所以我们可以直接使用this，在这个地方我们可以进行数据的异步请求了
// ?            这个地方内容可就多了
// ?            1、数据劫持（对象和数组）--这个地方需要注意很多，详情请看源码部分
// ?            1、将data数据代理到this上面，这样可以直接使用this.xxx
// *        3、vue会找el或者是$mount函数的参数，如果有，则会进行下一步，找是否有template，如果没有则使用el获取到的dom的outerHTML作为template，此时触发beforeMount生命周期函数
// ?            做一些判断，如果不对，则会抛出错误
// *        5、开始进行render编译：先将获取到的template，转换成ast，再转换为render字符串，然后再转化成render函数内容，然后转换为虚拟dom，最后转换为真是dom，去替换掉el的内容，此时触发mounted生命周期函数
// ?            compiler/ast/generator
// *    初始化完成后，如果用户更新了data，则会触发模板更新，此时会先触发beforeUpdate生命周期函数，经过一些列的re-render和patch打补丁，然后更新视图，触发updated声明周期函数
// *    在我们销毁vue组件的时候，会先触发beforeDestroy声明周期函数，这个地方可以进行一些定时器的清楚等操作
// *    最后vue会进行一些watcher各种监听的销毁，然后触发destroyed声明周期函数