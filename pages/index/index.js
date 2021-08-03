// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    emojis: {
      active: 0,
      items: [{
        name:'delighted',
        cnName: '开心',
        id: 0,
        url: 'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v1/delighted.png',
        emojiUrl:'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v2/delighted.png'
      },
      {
        name:'excited',
        cnName: '上头！',
        id: 1,
        url: 'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v1/excited.png',
        emojiUrl:'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v2/excited.png'
      },
      {
        name:'angry',
        cnName: '好气！',
        id: 2,
        url: 'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v1/angry.png',
        emojiUrl:'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v2/angry.png'
      },
      {
        name:'annoyed',
        cnName: '好烦！',
        id: 3,
        url: 'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v1/annoyed.png',
        emojiUrl:'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v2/annoyed.png'
      },
      {
        name:'shameful',
        cnName: '好失败',
        id: 4,
        url: 'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v1/shameful.png',
        emojiUrl:'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v2/shameful.png'
      },
      {
        name:'worried',
        cnName: '担心',
        id: 5,
        url: 'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v1/worried.png',
        emojiUrl:'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v2/worried.png'
      },
      {
        name:'sad',
        cnName: '难过',
        id: 6,
        url: 'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v1/sad.png',
        emojiUrl:'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v2/sad.png'
      },
      {
        name:'tired',
        cnName: '累了',
        id: 7,
        url: 'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v1/tired.png',
        emojiUrl:'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v2/tired.png'
      },
      {
        name:'relaxed',
        cnName: '放松',
        id: 8,
        url: 'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v1/relaxed.png',
        emojiUrl:'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v2/relaxed.png'
      },
      {
        name:'serene',
        cnName: '平静',
        id: 9,
        url: 'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v1/serene.png',
        emojiUrl:'https://projectlighter.oss-cn-shenzhen.aliyuncs.com/emoji_v2/serene.png'
      }]
    },
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
          url: `http://localhost:3000/api/v1/users/${user_id}`,
          method: "PUT",
          data: {
            userinfo: res.userInfo
          },
          success: function (res) {
            console.log('res', res)
          }
        })
        
        let page = this
        wx.request({
          url: `http://localhost:3000/api/v1/users/${user_id}`,
          method: "GET",
          success: function (res) {
            let info = res.data
            // console.log('res1', res.data)
            let posts = info.posts
            page.setData({posts: posts})
          }
        })
      }
    })
  },

  getCalendarView:function (e) {
    console.log(e)
    this.setData({step: 1})
  },

  getListsView:function (e) {
    this.setData({step: 0})
  },

  onLoad: function () {
    console.log('LOADDDD')

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('Readddy')
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let page = this
    wx.request({
      url: `http://localhost:3000/api/v1/users/${app.globalData.user.id}`,
      method: "GET",
      success: function (res) {
        let info = res.data
        // console.log('res1', res.data)
        let posts = info.posts
        page.setData({posts: posts})
      }
    })
  },

  deletePost: function(e) {
    const id = e.currentTarget.dataset.id
    wx.request({
      url: `http://localhost:3000/api/v1/posts/${id}`,
      method: 'DELETE',
      success: res => {
        wx.showToast({
          title: '删除成功',
        })
      }
    })
    let page = this
    wx.request({
      url: `http://localhost:3000/api/v1/users/${app.globalData.user.id}`,
      method: "GET",
      success: function (res) {
        let info = res.data
        // console.log('res1', res.data)
        let posts = info.posts
        page.setData({posts: posts})
      }
    })
  },
})
