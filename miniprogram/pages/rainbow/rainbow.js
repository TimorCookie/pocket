// miniprogram/pages/rainbow/rainbow.js
import { api_tianxing } from '../../service/cloudAPI'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    apiData: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getInfo()
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
  getInfo: function () {
    let options = this.options
    api_tianxing({
      apiName: `${options.type}`
    }).then(res => {
      this.setData({
        apiData: res.newslist[0]
      })
    })
  },
  copyData: function() {
    let data= this.data.apiData.content
    app.wxp.setClipboardData({
      data 
    })
  }
  
})