export const api_tianxing = (opst) => {
  return new Promise((resolve,reject) => {
    wx.cloud.callFunction({
      name: 'demo',
      data: {
        apiName: opst.apiName,
        data: {
          ...opst.data
        }
      }
    }).then(res=> {
      if (res.result.info.code === 200 && res.result.info.msg === 'success') {
        resolve(res.result.info)
      } else {
        wx.showToast({
          title: res.data.msg,
          icon: 'none'
        })
      }
    })
  })
}