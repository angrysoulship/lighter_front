import * as echarts from '../../components/ec-canvas/echarts';
const app = getApp()

function initPieChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  var option = {
    // backgroundColor: "#ffffff",
    series: [{
      label: {
        normal: {
          fontSize: 14
        }
      },
      type: 'pie',
      center: ['50%', '50%'],
      radius: ['20%', '40%'],
      data:  app.globalData.moodResult
    }]
  };

  chart.setOption(option);
  return chart;
}

function initLineChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    legend: {
      data: ['A', 'B', 'C'],
      top: 50,
      left: 'center',
      // backgroundColor: 'red',
      z: 100
    },
    grid: {
      containLabel: true
    },
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      // show: false
    },
    yAxis: {
      x: 'center',
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
      // show: false
    },
    series: [{
      name: 'A',
      type: 'line',
      smooth: true,
      data: [18, 36, 65, 30, 78, 40, 33]
    }, {
      name: 'B',
      type: 'line',
      smooth: true,
      data: [12, 50, 51, 35, 70, 30, 20]
    }, {
      name: 'C',
      type: 'line',
      smooth: true,
      data: [10, 30, 31, 50, 40, 20, 10]
    }]
  };

  chart.setOption(option);
  return chart;
}

Page({
  data: {
    ecPie: {
      onInit: initPieChart
    },
    ecLine: {
      onInit: initLineChart
    },
    tabCur: 0,
    step: 0,
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
    }
  },
  

  onLoad: function () {
    this.setData({
      user: app.globalData.user
    })

    let page = this
    wx.request({
      url: `https://lighter-api.wogengapp.cn/api/v1/users/${app.globalData.user.id}`,
      method: "GET",
      success: function (res) {
        let info = res.data
        // console.log('res1', res.data)
        let posts = info.posts
        page.setData({posts: posts})
        const dirtyData = page.data.posts
        const mood = ['开心', '上头', '好气！', '好烦！', '好失败!', '担心', '难过', '累了', '放松', '平静']
        const moodCount = [0,0,0,0,0,0,0,0,0,0,0]
        const moodResult = []
        for (let index in dirtyData) {
          for (var i = 0; i < 11; ++i) {
            if (dirtyData[index].mood === String(i)) {
              moodCount[i] += 1;
              const cleanMoodCount = {
                name: mood[i],
                value: moodCount[i]
              }
              moodResult.push(cleanMoodCount)
            }
          }
        }
        page.setData({
          moodResult
        })
        app.globalData.moodResult = moodResult
      }
    })
  },



  onShow: function () {
    let page = this
    wx.request({
      url: `https://lighter-api.wogengapp.cn/api/v1/users/${app.globalData.user.id}`,
      method: "GET",
      success: function (res) {
        let info = res.data
        // console.log('res1', res.data)
        let posts = info.posts
        page.setData({posts: posts})
        const dirtyData = page.data.posts
        const mood = ['开心', '上头', '好气！', '好烦！', '好失败!', '担心', '难过', '累了', '放松', '平静']
        const moodCount = [0,0,0,0,0,0,0,0,0,0,0]
        const moodResult = []
        for (let index in dirtyData) {
          for (var i = 0; i < 11; ++i) {
            if (dirtyData[index].mood === String(i)) {
              moodCount[i] += 1;
              const cleanMoodCount = {
                name: mood[i],
                value: moodCount[i]
              }
              moodResult.push(cleanMoodCount)
            }
          }
        }
        page.setData({
          moodResult
        })
        console.log(page.data.moodResult)
        app.globalData.moodResult = moodResult
      }
    })

    this.setData({
      user: app.globalData.user
    })


  }

  
})



