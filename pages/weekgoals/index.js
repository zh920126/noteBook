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
    service:[
      {
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
    harvest:[
      {
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
    weeklyPlan:[
      {
        index:1,
        content:'',
        type:'本周目标'
      },
      {
        index:2,
        content:'',
        type:'本周目标'
      },
      {
        index:3,
        content:'',
        type:'本周目标'
      },
      {
        index:4,
        content:'',
        type:'本周目标'
      },
      {
        index:5,
        content:'',
        type:'本周目标'
      },
      {
        index:6,
        content:'',
        type:'本周目标'
      },
      {
        index:7,
        content:'',
        type:'本周目标'
      },
      {
        index:8,
        content:'',
        type:'本周目标'
      },
      {
        index:9,
        content:'',
        type:'本周目标'
      },
      {
        index:10,
        content:'',
        type:'本周目标'
      },
      {
        index:11,
        content:'',
        type:'本周目标'
      },
      {
        index:12,
        content:'',
        type:'本周目标'
      },
      {
        index:13,
        content:'',
        type:'本周目标'
      },
      {
        index:14,
        content:'',
        type:'本周目标'
      },
      {
        index:15,
        content:'',
        type:'本周目标'
      },
      {
        index:16,
        content:'',
        type:'本周目标'
      },
      {
        index:17,
        content:'',
        type:'本周目标'
      }
    ]
  },
  // 更新完成状态
  async handleComplete(e){

  },
  // 创新与收获
  async handleHarvest(e) {
    let {value
    } = e.detail
    let {
      info,
      index
    } = e.currentTarget.dataset
    // 判断是新增还是更新
    let data ={}
    if(info.id){
      data = {
        id: info.id,
        content: value,
        timeSign: this.getTime(),
        type: info.type,
        year: new Date().getFullYear(),
        userid: wx.getStorageSync('userID')
      }
    }else{
      data = {
        content: value,
        timeSign: this.getTime(),
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
      this.onLoad()
    }
  },
  // 客服障碍的更新
  async handleService(e) {
    let {value
    } = e.detail
    let {
      info,
      index
    } = e.currentTarget.dataset
    // 判断是新增还是更新
    let data ={}
    if(info.id){
      data = {
        id: info.id,
        content: value,
        timeSign: this.getTime(),
        type: info.type,
        year: new Date().getFullYear(),
        userid: wx.getStorageSync('userID')
      }
    }else{
      data = {
        content: value,
        timeSign: this.getTime(),
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
      this.onLoad()
    }
  },
  // 未完成目标的原因
  async handleReason(e) {
    let {value
    } = e.detail
    let {
      info,
      index
    } = e.currentTarget.dataset
    // 判断是新增还是更新
    let data ={}
    if(info.id){
      data = {
        id: info.id,
        content: value,
        timeSign: this.getTime(),
        type: info.type,
        year: new Date().getFullYear(),
        userid: wx.getStorageSync('userID')
      }
    }else{
      data = {
        content: value,
        timeSign: this.getTime(),
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
      this.onLoad()
    }
  },
  // 目标完成情况更新
  async handleWeekPerformance(e) {
    let {value
    } = e.detail
    let {
      info,
      index
    } = e.currentTarget.dataset
    // 判断是新增还是更新
    let data ={}
    if(info.id){
      data = {
        id: info.id,
        content: value,
        timeSign: this.getTime(),
        type: info.type,
        year: new Date().getFullYear(),
        userid: wx.getStorageSync('userID')
      }
    }else{
      data = {
        content: value,
        timeSign: this.getTime(),
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
      this.onLoad()
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
  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    // 获取总结数据
    let data = {
      userid: wx.getStorageSync('userID'),
      timeSign: this.getTime(),
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
        weekPerformance,reason,service,harvest
      } = this.data
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].type === '目标完成情况') {
          weekPerformance.unshift(arr[i])
          if (weekPerformance.length > 5) {
            weekPerformance.splice(5,weekPerformance.length - 5)
          } else {
            weekPerformance.length = 5
          }
        }
        if(arr[i].type==='未完成目标的原因及障碍'){
          reason.unshift(arr[i])
          if (reason.length > 3) {
            reason.splice(3,reason.length - 3)
          } else {
            reason.length = 3
          }
        }
        if(arr[i].type==='客服障碍的对策和方法'){
          service.unshift(arr[i])
          if (service.length > 3) {
            service.splice(3,service.length - 3)
          } else {
            service.length = 3
          }
        }
        if(arr[i].type==='本周创新与收获'){
          harvest.unshift(arr[i])
          if (harvest.length > 3) {
            harvest.splice(3,harvest.length - 3)
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
    // 获取周计划数据
    
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