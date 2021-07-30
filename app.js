// app.js
App({
  onLaunch() {
    console.log('beginning login')
    wx.login({
      success: (res) => {
        console.log('result are',res.code)
        wx.request({
          url: 'http://localhost:3000/api/v1/login',
          method: 'POST',
          data: { code: res.code },
          success: (res) => {
            console.log('bbuhh',res)
            let user = res.data.currentUser;
            wx.setStorageSync('user', user);
          }
      })
      }
    })
  },

  globalData: {
    userInfo: null
  }
})
