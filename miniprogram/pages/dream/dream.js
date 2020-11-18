// miniprogram/pages/dream/dream.js
import { api_tianxing } from '../../service/cloudAPI'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: '',
    list: []
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
  searchRes () {
    api_tianxing({
      apiName: 'dream',
      data: {
        num: 10,
        word: `${this.data.text}`
      }
    }).then(res => {
      this.setData({
        list: res.newslist
      })
    })
    // console.log(this.data.text)
  },
  handleInput (event) {
    this.setData({
      text: event.detail.value
    })
  }
})