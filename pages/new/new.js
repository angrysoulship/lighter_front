// pages/new/new.js
Page({

  data: {

  },

  onLoad: function (options) {
    this.setData({'user.id': options.id})
  },

  formSubmit: function (e) {
    this.setData({
      loading: !this.data.loading
    });

    wx.showLoading({ title: 'loading...' })

    // wx.showToast({
    //   title: 'Sending...',
    //   icon: 'loading',
    //   duration: 1500
    // });

    let post = {
      mood: e.detail.value.mood,
      text: e.detail.value.text,
      date: e.detail.value.date,
      user_id: this.data.user.id
    }

    wx.request({
      url: `http://localhost:3000/api/v1/users/${this.data.user.id}/posts`,
      method: "POST",
      data: {posts: post},
      success: res => {
        // console.log(res)
        wx.hideLoading();
        wx.switchTab({
          url: '/pages/users/users',
        });
      }
    })
  },

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