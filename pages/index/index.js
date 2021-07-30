// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
  },

  getUserProfile: function (e) {
    wx.getUserProfile({
      desc: '用于完善会员资料',
      success: (res) => {
        let user = this.data.user;
        let userInfo = res.userInfo
        let newUser = { ...user, ...userInfo}
        console.log('all user',newUser)
        this.setData({
          user: newUser,
          hasUserInfo: true
        })
      }
    })
  },

  onLoad() {
    const user = wx.getStorageSync('user');
    if (user) this.setData({user})
  }

})
