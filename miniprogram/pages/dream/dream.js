// miniprogram/pages/dream/dream.js
import {api_tianBase} from '../../service/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: '',
    list: [{
        "id": 10496,
        "type": "综合类",
        "title": "黄瓜",
        "result": "梦见黄瓜、南瓜结得很多，自己又摘了一大箩背回来，是凶兆。"
      },
      {
        "id": 347,
        "type": "植物类",
        "title": "黄瓜",
        "result": "梦见黄瓜，吉兆，意味着生活富有。病人梦见黄瓜，会很快恢复健康。孕妇梦见黄瓜，会生儿子。"
      }
    ]
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
    console.log(this.data.text)
    api_tianBase({
      apiName: 'dream',
      data: {
        num: 10,
        word: `${this.data.text}`
      }
    }).then(res => {
      if (res.data.code === 200 && res.data.msg === 'success') {
        this.setData({
          list: res.data.newslist
        })
      }
    })
    // console.log(this.data.text)
  },
  handleInput (event) {
    this.setData({
      text: event.detail.value
    })
  }
})