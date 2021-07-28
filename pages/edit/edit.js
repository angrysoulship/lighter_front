// pages/edit/edit.js
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
    const page = this
    wx.request({
      url: `http://localhost:3000/api/v1/posts/${options.id}`,
      success: res => {
        const info = res.data.post
        page.setData({id: info.id, mood:info.mood, text:info.text, date:info.date})
      }
    })
  },

  // sumbit post info
  formSubmit: function(e) {
    console.log(e)
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
      text: e.detail.value.text
    }

    const page = this
    console.log(page.data.id)
    wx.request({
      url: `http://localhost:3000/api/v1/posts/${page.data.id}`,
      method: "PUT",
      data: {post: post},
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