import moment from 'moment';
const OSS = require('ali-oss');

function getError(action, option, xhr) {
  let msg;
  if (xhr.response) {
    msg = `${xhr.response.error || xhr.response}`;
  } else if (xhr.responseText) {
    msg = `${xhr.responseText}`;
  } else {
    msg = `fail to post ${action} ${xhr.status}`;
  }

  const err = new Error(msg);
  err.status = xhr.status;
  err.method = 'post';
  err.url = action;
  return err;
}

function getBody(xhr) {
  const text = xhr.responseText || xhr.response;
  if (!text) {
    return text;
  }

  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}
function getRandomString(num) {
  let chars = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  let res = '';
  for (let i = 0; i < num; i++) {
    let id = Math.ceil(Math.random() * 35);
    res += chars[id];
  }
  return res;
}
// 获取文件的keyName  阿里上传需要
function getFileKeyName(filename,ossData) {
  let date = moment().format('YYYYMMDD'); // 当前时间
  let dateTime = moment().format('YYYYMMDDhhmmss'); // 当前时间
  let randomStr = getRandomString(4); //  4位随机字符串
  let extensionName = filename
    ? filename.substr(filename.lastIndexOf('.'))
    : ''; // 文件扩展名
  let keyName =ossData.dir + date + '/' + dateTime + '_' + randomStr +  extensionName; // 文件名字
  return keyName;
}
export default function upload(option){
  if (typeof OSS === 'undefined') {
    return;
  }
  const client = new OSS(Object.assign({},option.ossData));

  const progress = (p, _checkpoint) => {
    let e = {}
    e.percent = Math.floor(p * 100)
    option.onProgress(e);
  };

  // 开始分片上传。
  async function multipartUpload() {
    try {
      // object-name可以自定义为文件名（例如file.txt）或目录（例如abc/test/file.txt）的形式，实现将文件上传至当前Bucket或Bucket下的指定目录。
      await client.multipartUpload(getFileKeyName(option.file.name,option.ossData), option.file, {
        progress,
      }).then((val) => {
        if (val.res.statusCode === 200) {
          if (val.res.requestUrls[0].indexOf('?') > -1) {
            val.res.requestUrls[0] = val.res.requestUrls[0].split("?")[0];
          }
          // } else {
          //   val.res.requestUrls[0] = option.ossData.dir + val.res.requestUrls[0].split(option.ossData.dir)[1];
          // }
          if (option.onSuccess) {
            option.onSuccess(val.res.requestUrls[0])
          } else {
            console.log('上传成功')
          }
        } else {
          if (option.onError) {
            option.onError('上传失败')
            console.log('上传失败')
          }
        }
      }, err => {
        if (option.onError) {
          option.onError('上传失败')
        } else {
          console.log('上传失败')
        }
      });
    } catch (e) {
      // 捕获超时异常。
      if (e.code === 'ConnectionTimeoutError') {
        console.log('TimeoutError');
        // do ConnectionTimeoutError operation
      }
      console.log(e);
    }
  }

  multipartUpload();
}
