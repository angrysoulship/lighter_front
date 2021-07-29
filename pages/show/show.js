// pages/show/show.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  editPost: function(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/edit/edit?id=${id}`,
    })
  },

  deletePost: function(e) {
    const id = e.currentTarget.dataset.id
    wx.request({
      url: `http://localhost:3000/api/v1/posts/${id}`,
      method: 'DELETE',
      success: res => {
        wx.redirectTo({
          url: '/pages/users/users',
        })
      }
    })
  },

  createPost: function(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/new/new?id=${id}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    const page = this
    wx.request({
      url: `http://localhost:3000/api/v1/users/${options.id}`,
      success: res => {
        const info = res.data
        page.setData({name:info.nickname, posts:info.posts, user_id: options.id})
        wx.setNavigationBarTitle({
          title: info.nickname,
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