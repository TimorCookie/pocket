// miniprogram/pages/rainbow/rainbow.js
import {api_tianBase} from '../../service/api'
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
    api_tianBase({
      apiName: `${options.type}`
    }).then(res => {
      if (res.data.code === 200 && res.data.msg === 'success') {
        this.setData({
          apiData: res.data.newslist[0]
        })
      }
    })
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

  }
})