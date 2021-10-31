/*
 * @author: xiejiaxin
 * @Date: 2021-10-31 16:14:52
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2021-10-31 16:44:41
 * @description: file content
 */
// XSS跨站脚本攻击：https://github.com/WindrunnerMax/EveryDay/blob/master/Browser/XSS%E8%B7%A8%E7%AB%99%E8%84%9A%E6%9C%AC%E6%94%BB%E5%87%BB.md
// -- 比较常见的就是在浏览器执行某一段脚本出现的错误，这个脚本可能是用户故意输入的，比如说留言板，故意输入alert，如果前端是直接展示，则浏览器会出现alert弹窗；采用js注入直接用户用户信息
// -- 原理：当动态页面中插入的内容含有这些特殊字符如<时，用户浏览器会将其误认为是插入了HTML标签，当这些HTML标签引入了一段JavaScript脚本时，这些脚本程序就将会在用户浏览器中执行。当这些特殊字符不能被动态页面检查或检查出现失误时，就将会产生XSS漏洞。
// -- 解决：1、进行过滤，比如匹配<、javascript字眼；2、cookie设置httpOnly；3、尽量不要直接渲染某一段字符串（v-html这种）；4、禁止外域提交；5、对于一些不受信任的输入，设置一个长度



// CSRF跨站请求攻击：https://github.com/WindrunnerMax/EveryDay/blob/master/Browser/CSRF%E8%B7%A8%E7%AB%99%E8%AF%B7%E6%B1%82%E4%BC%AA%E9%80%A0.md
// -- 利用同一域名自动带cookie的特性，诱导用户进入某一个页面的时候自定带上了cookie，如果某个用户登录银行网站（http://yinhang.com?a=100）进行转钱，然后他不小心点了一个诱导地址进去，这个地址里面有一个隐藏的图片的src正好就是银行网站的域名(http://yinhang.com?a=100)请求转钱，那就完了，钱转过去
// -- 解决：1、关键动作添加验证码机制；2、关键动作不要使用get方式，很容易被跨域；3、referer设置；4、使用token作为登录验证标识




// SQL注入：https://github.com/WindrunnerMax/EveryDay/blob/master/Browser/SQL%E6%B3%A8%E5%85%A5.md
// -- 提交的参数模拟sql语句，导致数据库遭受攻击，比如直接拼接1=1，那登录查询永久成立，直接破防
// -- 后台对于参数进行过滤；防火墙