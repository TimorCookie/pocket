// 云函数入口文件
const cloud = require('wx-server-sdk')
var AipImageClassifyClient = require("baidu-aip-sdk").imageClassify;

// 设置APPID/AK/SK
var APP_ID = "22992537";
var API_KEY = "Z3ahEhtf7kEP9CfgXjo8Ozan";
var SECRET_KEY = "TK6jeFMrNbMyaxnizuohPWGAdviHm8qr";

// 新建一个对象，建议只保存一个对象调用服务接口
var client = new AipImageClassifyClient(APP_ID, API_KEY, SECRET_KEY);
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const {
    fileID
  } = event;
  //通过fileID取这张图片

  const res = await cloud.downloadFile({
    fileID
  })

  const buffer = res.fileContent;
  let image = buffer.toString("base64");

  const info = await client.plantDetect(image, {
    baike_num: 5
  })
  return {
    info
  }
}