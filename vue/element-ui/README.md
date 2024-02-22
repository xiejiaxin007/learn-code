> A Vue.js 2.0 UI Toolkit for Web.
## Version
- v1.0.0 (fork element ui v2.13.2) 
- v1.0.1 (fixed tab切换阴影问题 --涉及到tab组件) 
- v1.0.2 upload组件增加on-input-change事件
- v1.0.3 upload组件on-input-change兼容拖拽
- v1.1.0 新增虚拟DOM表格（在原有el-table表格基础上二次开发）
- v1.1.1 虚拟DOM表格支持多选操作
- v1.1.2——v1.1.9 虚拟DOM表格---修复bug
- v1.1.10 虚拟DOM表格-修复bug：有横向滑动条时高度计算问题


## Install
```shell
npm install jl-element-ui -S
```

## Quick Start
``` javascript
import Vue from 'vue'
import Element from 'jl-element-ui'
import 'jl-element-ui/lib/theme-chalk/index.css';

Vue.use(Element)

// or
import {
  Select,
  Button
  // ...
} from 'jl-element-ui'

Vue.component(Select.name, Select)
Vue.component(Button.name, Button)
```
For more information, please refer to [Quick Start](http://element.eleme.io/#/en-US/component/quickstart) in our documentation.

## Browser Support
Modern browsers and Internet Explorer 10+.


## LICENSE
[MIT](LICENSE)
