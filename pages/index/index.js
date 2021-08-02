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
        console.log('res',res)
        console.log('globaldata', app.globalData)
        this.setData({
          user_info: newUser,
          hasUserInfo: true
        })
        let user_id = app.globalData.user.id
        console.log('user_id', user_id)
        wx.request({
          url: `http://localhost:3000/api/v1/users/${user_id}`,
          method: "PUT",
          data: {
            userinfo: res.userInfo
          },
          success: function (res) {
            console.log('res', res)
          }
        })
      }
    })
  },

  onLoad() {
    const user = wx.getStorageSync('user');
    if (user) this.setData({user})
    console.log('globaldata', app.globalData)
  }

})
