// 云函数入口文件
const cloud = require('wx-server-sdk')
const axios = require('axios')
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  // const wxContext = cloud.getWXContext()
  const { apiName, data } = event
  let info = {}
  const TIANXING = 'http://api.tianapi.com'
  const APIKEY = '4ca5dc4f5b11cdb5fc62b477f323cfcd'
  const apiUrl = `${TIANXING}/txapi/${apiName}/index?key=${APIKEY}`
  let res = await axios.get(apiUrl, {
    params: {
      ...data
    }
  })
  info = res.data
  // info = info.data
  return {
    // info,
    info,
    apiUrl
  }
}