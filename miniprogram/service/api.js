import { TIANXING, APIKEY} from '../config/tianapi'
/**
 *  https://www.tianapi.com/
 * @desc 天行基础get接口
 * @param {apiName} opts
 * apiName: tiangou(舔狗)；caihongpi(彩虹屁)； 
 */
export const api_tianBase = (opts)=> {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${TIANXING}/txapi/${opts.apiName}/index?key=${APIKEY}`,
      data: {
        ...opts.data
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        // resolve(result)
      },
      fail: (err)=>{
        reject(err)
      },
      complete: (res)=>{
        if (res.data.code === 200 && res.data.msg === 'success') {
          resolve(result)
        }
        console.log(res.data.msg)
        wx.showToast({
          title: res.data.msg,
          icon: 'none'
        })
      }
    });
  })
}

// export const api_dreamAnylize = (opts)=> {
//   return new Promise((resolve, reject)=> {
//     wx.request({
//       url: `${TIANXING}/txapi/${opts.apiName}/index?key=${APIKEY}`,
//       data: {
//         ...opts.data
//       },
//       method: 'GET',
//       dataType: 'json',
//       responseType: 'text',
//       success: (result)=>{
//         resolve(result)
//       },
//       fail: (err)=>{
//         reject(err)
//       },
//       complete: ()=>{}
//     });
//   })
// }