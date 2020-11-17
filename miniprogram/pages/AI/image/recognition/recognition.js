// pages/AI/image/recognition/recognition.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  uploadImg (event) {
    const sourceType = event.currentTarget.dataset.type
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: [sourceType],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        const cloudPath = `images/plant/${Date.now()}${tempFilePaths[0].match(/\.[^.]+?$/)}`
        wx.cloud.uploadFile({
          cloudPath,
          filePath: tempFilePaths[0], // 文件路径
        }).then(res => {
          // get resource ID
          wx.navigateTo({
            url: `/pages/AI/image/detail/detail?fileID=${res.fileID}`,
          })
        }).catch(error => {
          console.log(error)
          // handle error
        })
      }
    })
  }
})