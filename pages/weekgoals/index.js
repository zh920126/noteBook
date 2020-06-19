// 引入全局封装的myaxios
const app = getApp();
import regeneratorRuntime from '../../lib/runtime';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    weekPerformance: [{
        content: '',
        type: '目标完成情况',
      },
      {
        content: '',
        type: '目标完成情况',
      },
      {
        content: '',
        type: '目标完成情况',
      },
      {
        content: '',
        type: '目标完成情况',
      },
      {
        content: '',
        type: '目标完成情况',
      }
    ],
    reason: [{
        content: '',
        type: '未完成目标的原因及障碍'
      },
      {
        content: '',
        type: '未完成目标的原因及障碍'
      },
      {
        content: '',
        type: '未完成目标的原因及障碍'
      }
    ],
    service: [{
        content: '',
        type: '克服障碍的对策和方法'
      },
      {
        content: '',
        type: '克服障碍的对策和方法'
      },
      {
        content: '',
        type: '克服障碍的对策和方法'
      },
    ],
    harvest: [{
        content: '',
        type: '本周创新与收获'
      },
      {
        content: '',
        type: '本周创新与收获'
      },
      {
        content: '',
        type: '本周创新与收获'
      },
    ],
    weeklyPlan: [{
        content: '',
        type: '本周目标',
        complete: false
      },
      {
        content: '',
        type: '本周目标',
        complete: false
      },
      {
        content: '',
        type: '本周目标',
        complete: false
      },
      {
        content: '',
        type: '本周目标',
        complete: false
      },
      {
        content: '',
        type: '本周目标',
        complete: false
      },
      {
        content: '',
        type: '本周目标',
        complete: false
      },
      {
        content: '',
        type: '本周目标',
        complete: false
      },
      {
        content: '',
        type: '本周目标',
        complete: false
      },
      {
        content: '',
        type: '本周目标',
        complete: false
      },
      {
        content: '',
        type: '本周目标',
        complete: false
      },
      {
        content: '',
        type: '本周目标',
        complete: false
      },
      {
        content: '',
        type: '本周目标',
        complete: false
      },
      {
        content: '',
        type: '本周目标',
        complete: false
      },
      {
        content: '',
        type: '本周目标',
        complete: false
      },
      {
        content: '',
        type: '本周目标',
        complete: false
      },
      {
        content: '',
        type: '本周目标',
        complete: false
      },
      {
        content: '',
        type: '本周目标',
        complete: false
      }
    ],
    otherPlan:[
      {
        type:'学习计划',
        content:'',
        complete:false
      },
      {
        type:'健康计划',
        content:'',
        complete:false
      },
      {
        type:'本周反省',
        content:'',
        complete:false
      }
    ],
    week: '',
    year: new Date().getFullYear()
  },
  // 去首页
  handleToIndex(){
    wx.navigateTo({
      url: '/pages/index/index',
    });
  },
  // 上一周
  handleLastWeek() {
    let {
      week,
      year
    } = this.data
    if (week - 1 === 0) {
      week = 53
      year--
    }
    this.setData({
      week: week - 1,
      year
    })
    this.getUserMsg()
    this.getWeekPlan()
  },
  // 下一周
  handleNextWeek() {
    let {
      week,
      year
    } = this.data
    if (week + 1 === 53) {
      week = 0
      year++
    }
    this.setData({
      week: week + 1,
      year
    })
    this.getUserMsg()
    this.getWeekPlan()
  },
  // 其他目标内容更新
  async handleOtherPlan(e){
    let {
      info
    } = e.currentTarget.dataset
    let {
      value
    } = e.detail
    let data = {
      complete: info.complete,
      content: value,
      timeSign: +('' + this.data.year + this.data.week),
      type: info.type,
      userid: wx.getStorageSync('userID')
    }
    if (info.id) {
      data.id = info.id
    }
    let res = await app.myAxios({
      method: 'post',
      url: '/anonymous/updateWeekPlan',
      data
    })
    if (res.statusCode === 200) {
      this.getWeekPlan()
    }
  },
  // 其他目标完成打钩
  async handleOtherComplete(e){
    let { info} = e.currentTarget.dataset
    let data = {
      complete: !info.complete,
      content: info.content,
      timeSign: +('' + this.data.year + this.data.week),
      type: info.type,
      userid: wx.getStorageSync('userID')
    }
    if (info.id) {
      data.id = info.id
      // 有ID才可以打钩
      // 先对界面进行更新
      let {otherPlan} = this.data
      otherPlan.forEach(v => {
        if (v.id === info.id) {
          v.complete = !v.complete
        }
      })
      this.setData({
        otherPlan
      })
      let res = await app.myAxios({
        method: 'post',
        url: '/anonymous/updateWeekPlan',
        data
      })
    }
  },
  // 本周目标完成打钩
  async handleComplete(e) {
    let { info} = e.currentTarget.dataset
    console.log(info);
    let data = {
      complete: !info.complete,
      content: info.content,
      timeSign: +('' + this.data.year + this.data.week),
      type: info.type,
      userid: wx.getStorageSync('userID')
    }
    if (info.id) {
      data.id = info.id
      // 有ID才可以打钩
      // 先对界面进行更新
      let {weeklyPlan} = this.data
      weeklyPlan.forEach(v => {
        if (v.id === info.id) {
          v.complete = !v.complete
          console.log(v);
        }
      })
      this.setData({
        weeklyPlan
      })
      let res = await app.myAxios({
        method: 'post',
        url: '/anonymous/updateWeekPlan',
        data
      })
    }
  },
  // 更新本周目标
  async handleUpdatePlan(e) {
    let {
      info
    } = e.currentTarget.dataset
    let {
      value
    } = e.detail
    let data = {
      complete: info.complete,
      content: value,
      timeSign: +('' + this.data.year + this.data.week),
      type: info.type,
      userid: wx.getStorageSync('userID')
    }
    if (info.id) {
      data.id = info.id
    }
    let res = await app.myAxios({
      method: 'post',
      url: '/anonymous/updateWeekPlan',
      data
    })
    if (res.statusCode === 200) {
      this.getWeekPlan()
    }
  },
  // 创新与收获
  async handleHarvest(e) {
    let {
      value
    } = e.detail
    let {
      info,
      index
    } = e.currentTarget.dataset
    // 判断是新增还是更新
    let data = {}
    if (info.id) {
      data = {
        id: info.id,
        content: value,
        timeSign: +('' + this.data.year + this.data.week),
        type: info.type,
        year: new Date().getFullYear(),
        userid: wx.getStorageSync('userID')
      }
    } else {
      data = {
        content: value,
        timeSign: +('' + this.data.year + this.data.week),
        type: info.type,
        year: new Date().getFullYear(),
        userid: wx.getStorageSync('userID')
      }
    }
    // console.log(data);
    let res = await app.myAxios({
      method: 'post',
      url: '/anonymous/updateSummarize',
      data
    })
    // 请求完成之后，重新获取数据并渲染页面
    if (res.data.statusCode === 200) {
      this.getUserMsg()
      this.getWeekPlan()
    }
  },
  // 克服障碍的更新
  async handleService(e) {
    console.log(123);
    let {
      value
    } = e.detail
    let {
      info,
      index
    } = e.currentTarget.dataset
    // 判断是新增还是更新
    let data = {}
    if (info.id) {
      data = {
        id: info.id,
        content: value,
        timeSign: +('' + this.data.year + this.data.week),
        type: info.type,
        year: new Date().getFullYear(),
        userid: wx.getStorageSync('userID')
      }
    } else {
      data = {
        content: value,
        timeSign: +('' + this.data.year + this.data.week),
        type: info.type,
        year: new Date().getFullYear(),
        userid: wx.getStorageSync('userID')
      }
    }
    // console.log(data);
    let res = await app.myAxios({
      method: 'post',
      url: '/anonymous/updateSummarize',
      data
    })
    // 请求完成之后，重新获取数据并渲染页面
    if (res.data.statusCode === 200) {
      this.getUserMsg()
      this.getWeekPlan()
    }
  },
  // 未完成目标的原因
  async handleReason(e) {
    let {
      value
    } = e.detail
    let {
      info,
      index
    } = e.currentTarget.dataset
    // 判断是新增还是更新
    let data = {}
    if (info.id) {
      data = {
        id: info.id,
        content: value,
        timeSign: +('' + this.data.year + this.data.week),
        type: info.type,
        year: new Date().getFullYear(),
        userid: wx.getStorageSync('userID')
      }
    } else {
      data = {
        content: value,
        timeSign: +('' + this.data.year + this.data.week),
        type: info.type,
        year: new Date().getFullYear(),
        userid: wx.getStorageSync('userID')
      }
    }
    // console.log(data);
    let res = await app.myAxios({
      method: 'post',
      url: '/anonymous/updateSummarize',
      data
    })
    // 请求完成之后，重新获取数据并渲染页面
    if (res.data.statusCode === 200) {
      this.getUserMsg()
      this.getWeekPlan()
    }
  },
  // 目标完成情况更新
  async handleWeekPerformance(e) {
    let {
      value
    } = e.detail
    let {
      info
    } = e.currentTarget.dataset
    // 判断是新增还是更新
    let data = {}
    if (info.id) {
      data = {
        id: info.id,
        content: value,
        timeSign: +('' + this.data.year + this.data.week),
        type: info.type,
        year: new Date().getFullYear(),
        userid: wx.getStorageSync('userID')
      }
    } else {
      data = {
        content: value,
        timeSign: +('' + this.data.year + this.data.week),
        type: info.type,
        year: new Date().getFullYear(),
        userid: wx.getStorageSync('userID')
      }
    }
    let res = await app.myAxios({
      method: 'post',
      url: '/anonymous/updateSummarize',
      data
    })
    // 请求完成之后，重新获取数据并渲染页面
    if (res.data.statusCode === 200) {
      this.getUserMsg()
      this.getWeekPlan()
    }
  },
  // 时间转换
  getTime() {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let days = date.getDate()
    month = month < 10 ? '0' + month : month
    days = days < 10 ? '0' + days : days
    return year + '-' + month + '-' + days
  },
  // 时间转化为周数
  getWeek() {
    let date = new Date();
    let beginDate = new Date(date.getFullYear(), 0, 1);
    let week = Math.ceil((parseInt((date - beginDate) / (24 * 60 * 60 * 1000)) + 1 + beginDate.getDay()) / 7);
    this.setData({
      week
    })
  },
  // 获取周计划数据
  async getWeekPlan() {
    let data = {
      timeSign: +('' + this.data.year + this.data.week),
      userid: wx.getStorageSync('userID')
    }
    let res = await app.myAxios({
      method: 'post',
      url: '/anonymous/queryWeekPlan',
      data
    })
    if (res.statusCode === 200) {
      let {
        weeklyPlan,otherPlan
      } = this.data
      weeklyPlan = [{
          content: '',
          type: '本周目标',
          complete: false
        },
        {
          content: '',
          type: '本周目标',
          complete: false
        },
        {
          content: '',
          type: '本周目标',
          complete: false
        },
        {
          content: '',
          type: '本周目标',
          complete: false
        },
        {
          content: '',
          type: '本周目标',
          complete: false
        },
        {
          content: '',
          type: '本周目标',
          complete: false
        },
        {
          content: '',
          type: '本周目标',
          complete: false
        },
        {
          content: '',
          type: '本周目标',
          complete: false
        },
        {
          content: '',
          type: '本周目标',
          complete: false
        },
        {
          content: '',
          type: '本周目标',
          complete: false
        },
        {
          content: '',
          type: '本周目标',
          complete: false
        },
        {
          content: '',
          type: '本周目标',
          complete: false
        },
        {
          content: '',
          type: '本周目标',
          complete: false
        },
        {
          content: '',
          type: '本周目标',
          complete: false
        },
        {
          content: '',
          type: '本周目标',
          complete: false
        },
        {
          content: '',
          type: '本周目标',
          complete: false
        },
        {
          content: '',
          type: '本周目标',
          complete: false
        }
      ]
      otherPlan=[
        {
          type:'学习计划',
          content:'',
          complete:false
        },
        {
          type:'健康计划',
          content:'',
          complete:false
        },
        {
          type:'本周反省',
          content:'',
          complete:false
        }
      ]
      let {
        result
      } = res.data
      result.forEach((v, i) => {
        if (v.type === '本周目标') {
          weeklyPlan[i] = v
          weeklyPlan.length = 17
        }
        otherPlan.forEach((value,index)=>{
          if(value.type===v.type){
            otherPlan[index]=v
          }
        })
        
      });
      this.setData({
        weeklyPlan,otherPlan
      })
    }
  },
  // 获取总结数据
  async getUserMsg() {
    // 获取总结数据
    let data = {
      userid: wx.getStorageSync('userID'),
      timeSign: +('' + this.data.year + this.data.week),
      year: new Date().getFullYear()
    }
    let res = await app.myAxios({
      method: 'post',
      url: '/anonymous/querySummarize',
      data
    })
    if (res.data.result) {
      let arr = res.data.result
      let {
        weekPerformance,
        reason,
        service,
        harvest
      } = this.data
      weekPerformance = [{
            content: '',
            type: '目标完成情况',
          },
          {
            content: '',
            type: '目标完成情况',
          },
          {
            content: '',
            type: '目标完成情况',
          },
          {
            content: '',
            type: '目标完成情况',
          },
          {
            content: '',
            type: '目标完成情况',
          }
        ],
        reason = [{
            content: '',
            type: '未完成目标的原因及障碍'
          },
          {
            content: '',
            type: '未完成目标的原因及障碍'
          },
          {
            content: '',
            type: '未完成目标的原因及障碍'
          }
        ],
        service = [{
            content: '',
            type: '克服障碍的对策和方法'
          },
          {
            content: '',
            type: '克服障碍的对策和方法'
          },
          {
            content: '',
            type: '克服障碍的对策和方法'
          },
        ],
        harvest = [{
            content: '',
            type: '本周创新与收获'
          },
          {
            content: '',
            type: '本周创新与收获'
          },
          {
            content: '',
            type: '本周创新与收获'
          },
        ]
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].type === '目标完成情况') {
          weekPerformance.unshift(arr[i])
          if (weekPerformance.length > 5) {
            weekPerformance.splice(5, weekPerformance.length - 5)
          } else {
            weekPerformance.length = 5
          }
        }
        if (arr[i].type === '未完成目标的原因及障碍') {
          reason.unshift(arr[i])
          if (reason.length > 3) {
            reason.splice(3, reason.length - 3)
          } else {
            reason.length = 3
          }
        }
        if (arr[i].type === '克服障碍的对策和方法') {
          service.unshift(arr[i])
          if (service.length > 3) {
            service.splice(3, service.length - 3)
          } else {
            service.length = 3
          }
        }
        if (arr[i].type === '本周创新与收获') {
          harvest.unshift(arr[i])
          if (harvest.length > 3) {
            harvest.splice(3, harvest.length - 3)
          } else {
            harvest.length = 3
          }
        }
      }
      this.setData({
        weekPerformance,
        reason,
        service,
        harvest
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    this.getWeek()
    // let res = this.getWeek()
    // this.setData({
    //   week:res
    // })
    this.getUserMsg()
    this.getWeekPlan()
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