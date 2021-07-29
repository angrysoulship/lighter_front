// pages/new/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabCur: 0,
    emojis: [{
      name:'delighted',
      id: 0,
      url: 'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v1/delighted.png'
    },
    {
      name:'excited',
      id: 1,
      url: 'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v1/excited.png'
    },
    {
      name:'angry',
      id: 2,
      url: 'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v1/angry.png'
    },
    {
      name:'annoyed',
      id: 3,
      url: 'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v1/annoyed.png'
    },
    {
      name:'shameful',
      id: 4,
      url: 'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v1/shameful.png'
    },
    {
      name:'worried',
      id: 5,
      url: 'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v1/worried.png'
    },
    {
      name:'sad',
      id: 6,
      url: 'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v1/sad.png'
    },
    {
      name:'tired',
      id: 7,
      url: 'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v1/tired.png'
    },
    {
      name:'relaxed',
      id: 8,
      url: 'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v1/relaxed.png'
    },
    {
      name:'serene',
      id: 9,
      url: 'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v1/serene.png'
    },
    ]
  },

  tabSelect(e) {
    // this.setData({
    //   tabCur: e.currentTarget.dataset.nameId,
    //   // scrollLeft: (e.currentTarget.dataset.id - 2) * 200
    // })
    console.log(e.currentTarget.dataset.nameId.name)
  },

  enterPostDetailPage: function(e){
    wx.redirectTo({
      url: './test2',
    })
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

  }
})