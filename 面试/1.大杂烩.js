/*
 * @description: 
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2024-03-19 14:40:35
 * @desc: 只是为了能够记忆一下
 */


// ? 1、浏览器请求方式
//    get（获取资源）、post（提交资源）、delete（删除某个资源）、options（预请求）、put（跟post比较像，但是这个是指定了服务器的位置）、head、trace、connect

// ? 2、从输入url——>页面显示的过程？
//  1、url需要对应的dns解析（大致版本）
//    dns解析需要分为两种情况：命中缓存（在过期时间内/未在过期时间内）、未命中缓存
//      如果是命中缓存了，则需要判断是否是在有效期内，如果在有效期内的话，则可以直接进行读取，如果已经过期了，则需要重新进行请求并且进行再次缓存（是否缓存可能还需要看文件的设置情况）
//      判断是否在有效期内：expires和cache-control