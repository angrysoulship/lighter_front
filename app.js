// app.js
App({
  onLaunch() {
    console.log('beginning login')
    let app = this;
    wx.login({
      success: (res) => {
        // console.log('result are',res.code)
        wx.request({
          url: `${getApp().globalData.url}/login`,
          method: 'POST',
          data: { code: res.code },
          success: (res) => {
            // console.log('bbuhh',res)
            let user = res.data.currentUser;
            app.globalData.user = user
            wx.setStorageSync('user', user);
          }
      })
      }
    })
  },
  

  globalData: {
    userInfo: null,
    moodResult: '',
    // url: "http://localhost:3000/api/v1"
    url: "https://lighter-api.wogengapp.cn/api/v1"
    }
})
