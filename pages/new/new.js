// pages/new/new.js
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
    console.log(options)
  },

formSubmit: function (e) {

  this.setData({
    loading: !this.data.loading
  });

  wx.showToast({
    title: 'Sending...',
    icon: 'loading',
    duration: 1500
  });

  let post = {
    mood: e.detail.value.mood,
    text: e.detail.value.text,
    date: e.detail.value.date,
    user_id: this.options.id
  }

  const page = this
  wx.request({
    url: `http://localhost:3000/api/v1/users/${page.options.id}/posts`,
    method: "POST",
    data: {posts: post},
    success: res => {
      console.log(res)
      wx.redirectTo({
        url: '/pages/users/users',
      });
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