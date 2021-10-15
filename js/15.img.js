/*
 * @author: xiejiaxin
 * @Date: 2021-10-15 16:06:32
 * @LastEditors: xiejiaxin
 * @LastEditTime: 2021-10-15 16:12:47
 * @description: file content
 */
// js加载图片
const imgUrl = 'https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/8/3/1706626a996d717c9d424646578813c2~tplv-t2oaga2asx-watermark.awebp';

function createImg(url) {
    return new Promise((resolve, reject) => {
        try {
            let img = document.createElement('img');
            img.src = url;
            img.alt = '默认图片';
            resolve(img)
        } catch (error) {
            reject(error)
        }
    });
}

createImg(imgUrl).then((value) => {
    document.body.appendChild(value);
});