// baike_info:
// baike_url: "http://baike.baidu.com/item/%E7%8E%AB%E7%91%B0/63206"
// description: "玫瑰(学名：Rosa rugosa Thunb.)：原产地中国。属蔷薇目，蔷薇科落叶灌木，枝杆多针刺，奇数羽状复叶，小叶5-9片，椭圆形，有边刺。花瓣倒卵形，重瓣至半重瓣，花有紫红色、白色，果期8-9月，扁球形。枝条较为柔弱软垂且多密刺，每年花期只有一次，因此较少用于育种，近来其主要被重视的特性为抗病性与耐寒性。玫瑰作为经济作物时，其花朵主要用于食品及提炼香精玫瑰油，玫瑰油应用于化妆品、食品、精细化工等工业。在欧洲诸语言中，蔷薇、玫瑰、月季都是使用同一个词，如英语是rose，德语是Die Rose。玫瑰是英国的国花。通俗意义中的“玫瑰”已成为多种蔷薇属植物的通称。且事实上杂交玫瑰也是由蔷薇属下各物种杂交选育所产生。此内容请看“玫瑰花”一词。"
// image_url: "https://bkimg.cdn.bcebos.com/pic/21a4462309f7905297c355730bf3d7ca7acbd59a"
// __proto__: Object
// name: "玫瑰"
// score: 0.8049185872077942
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: '',
    info: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {
      fileID
    } = options
    this.setData({
      imgUrl:fileID
    })
    wx.cloud.callFunction({
      name: 'baiduAI',
      data: {
        fileID
      }
    }).then(res=> {
      const info = res.result.info.result
      this.setData({
        info
      })
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