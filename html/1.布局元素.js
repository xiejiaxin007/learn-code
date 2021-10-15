

// 内联元素：a、input、span、br、i、em、b。。。
// -- 不能设置宽高
// -- 宽高由内部决定
// -- 从左到右排列
// -- 可以设置内外间距
// -- 不可以嵌套内块状元素

// 块状元素：div、h1、ul、li、table、form
// -- 可以设置宽高
// -- 上下布局，一个块状元素占一行

// 内联块状
// -- 上面二者集合，不自动换行

// 减少dom：用伪类代替dom、减少dom嵌套、按需加载dom、合理使用语意化标签
// 优化大量dom操作：使用fragment、对dom进行缓存、使用虚拟dom、用innerHtml代替append操作

// html5新特性：语意化标签（header、footer、nav）、video、audio、拖拽、本地化存储、websocket等
// 区分：html和html5的文档类型声明不一样--!doctype html

// 搜索引擎：爬虫机制-会根据很多关键字进行爬取，如果想要优化seo，则需要做如下：
// -- 使用语义化的标签（footer、header、section等）
// -- keywords、description、title的合理利用
// -- 重要的内容放html上方，因为解析是从上到下的
// -- 尽量少使用iframe、flash，因为爬虫爬不到
// -- 加载速度优化

// meta：charset--决定当前html的字符编码；htto-equiv（可以做一些http代理）、name（表示元数据）、content