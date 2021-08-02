// pages/new/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabCur: 0,
    step: 0,
    emojis: {
      active: 0,
      items: [{
        name:'delighted',
        cnName: '开心',
        id: 0,
        url: 'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v1/delighted.png',
        emojiUrl:'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v2/delighted.png'
      },
      {
        name:'excited',
        cnName: '上头！',
        id: 1,
        url: 'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v1/excited.png',
        emojiUrl:'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v2/excited.png'
      },
      {
        name:'angry',
        cnName: '好气！',
        id: 2,
        url: 'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v1/angry.png',
        emojiUrl:'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v2/angry.png'
      },
      {
        name:'annoyed',
        cnName: '好烦！',
        id: 3,
        url: 'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v1/annoyed.png',
        emojiUrl:'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v2/annoyed.png'
      },
      {
        name:'shameful',
        cnName: '好失败',
        id: 4,
        url: 'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v1/shameful.png',
        emojiUrl:'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v2/shameful.png'
      },
      {
        name:'worried',
        cnName: '担心',
        id: 5,
        url: 'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v1/worried.png',
        emojiUrl:'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v2/worried.png'
      },
      {
        name:'sad',
        cnName: '难过',
        id: 6,
        url: 'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v1/sad.png',
        emojiUrl:'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v2/sad.png'
      },
      {
        name:'tired',
        cnName: '累了',
        id: 7,
        url: 'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v1/tired.png',
        emojiUrl:'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v2/tired.png'
      },
      {
        name:'relaxed',
        cnName: '放松',
        id: 8,
        url: 'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v1/relaxed.png',
        emojiUrl:'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v2/relaxed.png'
      },
      {
        name:'serene',
        cnName: '平静',
        id: 9,
        url: 'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v1/serene.png',
        emojiUrl:'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v2/serene.png'
      }]
    }
  },

  tabSelect(e) {
    this.setData({
      'emojis.active': e.currentTarget.dataset.nameId.id,
      scrollLeft: (e.currentTarget.dataset.nameId.id - 2) * 150
    })
    // console.log(e.currentTarget.dataset.nameId)
  },

  changeView: function (e) {
    console.log(e)
    this.setData({step: 1})
  },

  goBack: function(e) {
    this.setData({step: 0})
  },

  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },

  changeTextValue: function (e) {
    console.log(e.detail.value)
    let post = e.detail.value
    this.setData({post})
  },
  
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