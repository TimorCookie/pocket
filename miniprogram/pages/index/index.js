import { baseAdaptation } from '../../config/baseAdaptation'
import {api_tianBase} from '../../service/api'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseList: baseAdaptation(),
    infoOne: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取one语录
    api_tianBase({
      apiName: 'one'
    }).then(res => {
      if (res.data.code === 200 && res.data.msg === 'success') {
        this.setData({
          infoOne: res.data.newslist[0]
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

  },
  handleTap(event) {
    const target = event.currentTarget.dataset.route
    wx.navigateTo({
      url: `${target}`
    })
  }
})