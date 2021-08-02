Page({
  data: {

  },

  login: function () {
    wx.login({
      success (res) {
        if (res.code) {
          // Send a network request
          wx.request({
            url: 'https://test.com/onLogin',
            data: {
              code: res.code
            }
          })
        } else {
          console.log('Login failed' + res.errMsg)
        }
      }
    })
  },

  onLoad: function () {
    wx.login({
      success (res) {
        console.log(res);
        if (res.code) {
          wx.request({
            url: 'http://localhost:3000/api/v1/',
            data: {
              code: res.code
            }
          })
        } else {
          console.log('Login failed' + res.errMsg)
        }
      }
    })
  }
})