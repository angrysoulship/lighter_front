// pages/splash/splash.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  getUserProfile: function (e) {
    wx.getUserProfile({
      desc: '用于完善会员资料',
      success: (res) => {
        let user = this.data.user;
        let userInfo = res.userInfo
        let newUser = { ...user, ...userInfo}
        // console.log('res',res)
        console.log('globaldata', app.globalData)
        this.setData({
          user_info: newUser,
          hasUserInfo: true
        })
        let user_id = app.globalData.user.id
        // console.log('user_id', user_id)
        wx.request({
          url: `${getApp().globalData.url}/users/${user_id}`,
          method: "PUT",
          data: {
            userinfo: res.userInfo
          },
          success: function (res) {
            console.log('res', res)
          }
        })
        wx.switchTab({
          url: '/pages/index/index',
        })
        // let page = this
        // wx.request({
        //   url: `${getApp().globalData.url}/users/${user_id}`,
        //   method: "GET",
        //   success: function (res) {
        //     let info = res.data
        //     // console.log('res1', res.data)
        //     let posts = info.posts
        //     page.setData({posts: posts})
        //     console.log(posts.length)
        //   }
        // })

      }
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