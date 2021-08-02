// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    objectId:'',
    days:[],
    signUp:[],
    cur_year:0,
    cur_month:0,
    count:0,
    step: 0,
    calendar: [{
      month: '1月',
      dates:'31',
      id: 0
    },
    {
      month: '2月',
      dates:'28',
      id: 1
    },
    {
      month: '3月',
      dates:'31',
      id: 2
    },
    {
      month: '4月',
      dates:'30',
      id: 3
    },
    {
      month: '5月',
      dates:'31',
      id: 4
    },
    {
      month: '6月',
      dates:'30',
      id: 5
    },
    {
      month: '7月',
      dates:'31',
      id: 6
    },
    {
      month: '8月',
      dates:'31',
      id: 7
    },
    {
      month: '9月',
      dates:'30',
      id: 8
    },
    {
      month: '10月',
      dates:'31',
      id: 9
    },
    {
      month: '11月',
      dates:'30',
      id: 10
    },
    {
      month: '12月',
      dates:'31',
      id: 11
    }]
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

  getCalendarView:function (e) {
    console.log(e)
    this.setData({step: 1})
  },

  getListsView:function (e) {
    this.setData({step: 0})
  },

  onLoad: function (options) {
    this.setData({objectId : options.objectId});
    const user = wx.getStorageSync('user');
    if (user) this.setData({user});
    const date = new Date();
    const cur_year = date.getFullYear();
    const cur_month = date.getMonth() + 1;
    const weeks_ch = ['日', '一', '二', '三', '四', '五', '六'];
    this.calculateEmptyGrids(cur_year, cur_month);
    this.calculateDays(cur_year, cur_month);
    this.onGetSignUp();
    this.setData({
      cur_year,
      cur_month,
      weeks_ch
    })
  },

  // 获取当月共多少天
  getThisMonthDays:function(year, month){
    return new Date(year, month, 0).getDate()
  },
    
  // 获取当月第一天星期几
  getFirstDayOfWeek:function(year, month) {
    return new Date(Date.UTC(year, month - 1, 1)).getDay();
  },

  // 计算当月1号前空了几个格子，把它填充在days数组的前面
  calculateEmptyGrids:function(year, month) {
    var that = this;
    //计算每个月时要清零
    that.setData({days:[]});
    const firstDayOfWeek = this.getFirstDayOfWeek(year, month);    
    if (firstDayOfWeek > 0) {
      for (let i = 0; i < firstDayOfWeek; i++) {
        var obj  = {
          date:null,
          isSign:false
        }
        that.data.days.push(obj);
      }
      this.setData({
        days:that.data.days
      });
    //清空
    } else {
      this.setData({
        days: []
      });
    }
  },

  // 绘制当月天数占的格子，并把它放到days数组中
  calculateDays:function(year, month) {
    var that = this;
    const thisMonthDays = this.getThisMonthDays(year, month);
    for (let i = 1; i <= thisMonthDays; i++) {
      var obj = {
        date: i,
        isSign: false
      }
      that.data.days.push(obj);
    }
    this.setData({
      days:that.data.days
    });
  },

  //匹配判断当月与当月哪些日子签到打卡
  onJudgeSign:function(){
    var that = this;
    var signs = that.data.signUp;
    var daysArr = that.data.days;
    for (var i=0; i < signs.length;i++){
      var current = new Date(signs[i].date.replace(/-/g, "/"));
      var year = current.getFullYear();
      var month = current.getMonth()+1;
      var day = current.getDate();
      day = parseInt(day);
      for (var j = 0; j < daysArr.length;j++){
        //年月日相同并且已打卡
        if (year == that.data.cur_year && month == that.data.cur_month && daysArr[j].date == day && signs[i].isSign == "今日已打卡"){
          daysArr[j].isSign = true;
        }
      }
    }
    that.setData({days:daysArr});
  },

  // 切换控制年月，上一个月，下一个月
  handleCalendar:function(e) {
    const handle = e.currentTarget.dataset.handle;
    const cur_year = this.data.cur_year;
    const cur_month = this.data.cur_month;
    if (handle === 'prev') {
      let newMonth = cur_month - 1;
      let newYear = cur_year;
      if (newMonth < 1) {
        newYear = cur_year - 1;
        newMonth = 12;
      }
      this.calculateEmptyGrids(newYear, newMonth);
      this.calculateDays(newYear, newMonth);
      this.onGetSignUp();      
      this.setData({
        cur_year: newYear,
        cur_month: newMonth
      })
    } else {
      let newMonth = cur_month + 1;
      let newYear = cur_year;
      if (newMonth > 12) {
        newYear = cur_year + 1;
        newMonth = 1;
      }
      this.calculateEmptyGrids(newYear, newMonth);
      this.calculateDays(newYear, newMonth);
      this.onGetSignUp();      
      this.setData({
        cur_year: newYear,
        cur_month: newMonth
      })
    }
  },

  //获取当前用户该任务的签到数组
  onGetSignUp:function(){
    var that = this;
    var Task_User = Bmob.Object.extend("task_user");
    var q = new Bmob.Query(Task_User);
    q.get(that.data.objectId, {
      success: function (result) {
        that.setData({
          signUp : result.get("signUp"),
          count : result.get("score")
        });
        //获取后就判断签到情况
        that.onJudgeSign();
      },
      error: function (object, error) {
      }
    });   
  }
})
