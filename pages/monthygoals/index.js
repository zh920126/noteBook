// pages/quarterlygoals/index.js
const app = getApp();
import regeneratorRuntime from '../../lib/runtime';

Page({  
  /**
   * 页面的初始数据
   */
  data: {
    table: [{
        id: 1,
        name: '工作指标',
        children: [{
            complete: false,
            content: '',
            importanceLevel: '',
            aimMeasures: '',
            month: '',
            type: '工作指标',
            year: new Date().getFullYear()
          },
          {
            complete: false,
            content: '',
            importanceLevel: '',
            aimMeasures: '',
            month: '',
            type: '工作指标',
            year: new Date().getFullYear()
          },
          {
            complete: false,
            content: '',
            importanceLevel: '',
            aimMeasures: '',
            month: '',
            type: '工作指标',
            year: new Date().getFullYear()
          },
          {
            complete: false,
            content: '',
            importanceLevel: '',
            aimMeasures: '',
            month: '',
            type: '工作指标',
            year: new Date().getFullYear()
          },
          {
            complete: false,
            content: '',
            importanceLevel: '',
            aimMeasures: '',
            month: '',
            type: '工作指标',
            year: new Date().getFullYear()
          },
        ]
      },
      {
        id: 2,
        name: '其他目标',
        children: [{
            complete: false,
            content: '',
            importanceLevel: '学习计划',
            aimMeasures: '',
            month: '',
            type: '其他目标',
            year: new Date().getFullYear()
          },
          {
            complete: false,
            content: '',
            importanceLevel: '健康计划',
            aimMeasures: '',
            month: '',
            type: '其他目标',
            year: new Date().getFullYear()
          },
          {
            complete: false,
            content: '',
            importanceLevel: '本季度反省',
            aimMeasures: '',
            month: '',
            type: '其他目标',
            year: new Date().getFullYear()
          },
        ]
      }
    ],
    reasonArr: [{
        content: '',
        type: '未完成目标的障碍和原因'
      },
      {
        content: '',
        type: '客服障碍的对策和方法'
      },
      {
        content: '',
        type: '本月份创新与收获'
      }
    ],
    quarterlySummary: {
      content: '',
      type: '本月份的目标总结'
    },
    month:new Date().getMonth()+1,
    year:new Date().getFullYear()
  },
  // 返回主页
  handleToIndex(){
    wx.navigateTo({
      url: '/pages/index/index',
    });
  },
  // 日期选择器来获取日期
  bindDateChange(e){
    console.log(e.detail.value);
    let month=new Date(e.detail.value).getMonth()+1
    let year=new Date(e.detail.value).getFullYear()
    // 更新页面数据
    this.setData({
      month,year
    })
    this.geyUserMsg()
    this.getUserSummary()
  },
  // 上月
  handleLastMonth(){
    let {month,year}=this.data
    if(month-1===0){
      month=13
      year--
    }
    this.setData({
      month:month-1,
      year
    })
    this.geyUserMsg()
    this.getUserSummary()
  },
  // 下月
  handleNextMonth(){
    let {month,year}=this.data
    if(month+1===13){
      month=0
      year++
    }
    this.setData({
      month:month+1,
      year
    })
    this.geyUserMsg()
    this.getUserSummary()
  },
  // 重要级别修改
  async handleLevel(e) {
    let {
      value
    } = e.detail
    let {
      info
    } = e.currentTarget.dataset
    console.log(info);
    let data = {
      complete: info.complete,
      content: info.content,
      importanceLevel: value,
      aimMeasures: info.aimMeasures,
      type: info.type,
      month: this.data.month,
      userId: wx.getStorageSync('userID'),
      year: this.data.year
    }
    if (info.id) {
      data.id = info.id
    }
    // console.log(data);
    let res = await app.myAxios({
      method: 'post',
      url: '/anonymous/updateOrInsertAirms',
      data
    })
    if (res.statusCode === 200) {
      // 跟新页面数据
      this.geyUserMsg()
    }
  },
  // 修改目标内容
  async handleContent(e) {
    let {
      value
    } = e.detail
    let {
      info
    } = e.currentTarget.dataset
    // console.log(info);
    let data = {
      complete: info.complete,
      content: value,
      importanceLevel: info.importanceLevel,
      aimMeasures: info.aimMeasures,
      type: info.type,
      month: this.data.month,
      userId: wx.getStorageSync('userID'),
      year: this.data.year
    }
    if (info.id) {
      data.id = info.id
    }
    // console.log(data);
    let res = await app.myAxios({
      method: 'post',
      url: '/anonymous/updateOrInsertAirms',
      data
    })
    if (res.statusCode === 200) {
      // 跟新页面数据
      this.geyUserMsg()
    }
  },
  // 修改方法措施
  async handleMeasures(e) {
    let {
      value
    } = e.detail
    let {
      info
    } = e.currentTarget.dataset
    // console.log(info);
    let data = {
      complete: info.complete,
      content: info.content,
      importanceLevel: info.importanceLevel,
      aimMeasures: value,
      type: info.type,
      month: this.data.month,
      userId: wx.getStorageSync('userID'),
      year: this.data.year
    }
    if (info.id) {
      data.id = info.id
    }
    // console.log(data);
    let res = await app.myAxios({
      method: 'post',
      url: '/anonymous/updateOrInsertAirms',
      data
    })
    if (res.statusCode === 200) {
      // 跟新页面数据
      this.geyUserMsg()
    }
  },
  // 修改完成状态
  async handleComplete(e) {
    let {
      value
    } = e.detail
    let {
      info,index
    } = e.currentTarget.dataset
    let data = {
      complete: !info.complete,
      content: info.content,
      importanceLevel: info.importanceLevel,
      aimMeasures: info.aimMeasures,
      type: info.type,
      month: this.data.month,
      userId: wx.getStorageSync('userID'),
      year: this.data.year
    }
    if (info.id) {
      data.id = info.id
      // 有ID才能打钩，先对页面进行更新，避免发请求过慢导致卡顿
      let {table}=this.data
      console.log(data);
      table.forEach((v,i)=>{
        if(v.name===data.type){
          v.children.forEach(value=>{
            if(value.id===data.id){
              console.log(value);
              value.complete=!value.complete
            }
          })
        }
      })
      this.setData({table})
      let res = await app.myAxios({
        method: 'post',
        url: '/anonymous/updateOrInsertAirms',
        data
      })
    }
    
    
  },
  // 更新月份总结
  async handleQuarterlySummary(e) {
    let {
      value
    } = e.detail
    let {
      info
    } = e.currentTarget.dataset
    // console.log(info);
    let data = {
      content: value,
      month: this.data.month,
      timeSign: this.getTime(),
      type: info.type,
      userid: wx.getStorageSync('userID'),
      year: this.data.year
    }
    if (info.id) {
      data.id = info.id
    }
    // console.log(data);
    let res = await app.myAxios({
      method: 'post',
      url: '/anonymous/updateSummarize',
      data
    })
    // console.log(res);
    if (res.statusCode === 200) {
      this.getUserSummary
    }
  },
  // 更新原因
  async handleReason(e) {
    let {
      value
    } = e.detail
    let {
      info
    } = e.currentTarget.dataset
    let data = {
      content: value,
      month: this.data.month,
      type: info.type,
      userid: wx.getStorageSync('userID'),
      year: this.data.year
    }
    if (info.id) {
      data.id = info.id
    }
    let res = await app.myAxios({
      method: 'post',
      url: '/anonymous/updateSummarize',
      data
    })
    if (res.statusCode === 200) {
      this.getUserSummary
    }
  },
  // 获取用户月份数据
  async geyUserMsg() {
    let res = await app.myAxios({
      method: 'post',
      url: '/anonymous/findAimsByCondition',
      data: {
        month: this.data.month,
        userId: wx.getStorageSync('userID'),
        year: this.data.year
      }
    })
    // console.log(res);
    if (res.statusCode === 200) {
      let {
        workIndex,
        otherTarget
      } = res.data
      // console.log(workIndex);
      // 数据还原处理
      let {
        table
      } = this.data
      table= [{
        id: 1,
        name: '工作指标',
        children: [{
            complete: false,
            content: '',
            importanceLevel: '',
            aimMeasures: '',
            month: '',
            type: '工作指标',
            year: new Date().getFullYear()
          },
          {
            complete: false,
            content: '',
            importanceLevel: '',
            aimMeasures: '',
            month: '',
            type: '工作指标',
            year: new Date().getFullYear()
          },
          {
            complete: false,
            content: '',
            importanceLevel: '',
            aimMeasures: '',
            month: '',
            type: '工作指标',
            year: new Date().getFullYear()
          },
          {
            complete: false,
            content: '',
            importanceLevel: '',
            aimMeasures: '',
            month: '',
            type: '工作指标',
            year: new Date().getFullYear()
          },
          {
            complete: false,
            content: '',
            importanceLevel: '',
            aimMeasures: '',
            month: '',
            type: '工作指标',
            year: new Date().getFullYear()
          },
        ]
      },
      {
        id: 2,
        name: '其他目标',
        children: [{
            complete: false,
            content: '',
            importanceLevel: '学习计划',
            aimMeasures: '',
            month: '',
            type: '其他目标',
            year: new Date().getFullYear()
          },
          {
            complete: false,
            content: '',
            importanceLevel: '健康计划',
            aimMeasures: '',
            month: '',
            type: '其他目标',
            year: new Date().getFullYear()
          },
          {
            complete: false,
            content: '',
            importanceLevel: '本月度反省',
            aimMeasures: '',
            month: '',
            type: '其他目标',
            year: new Date().getFullYear()
          },
        ]
      }
    ],
    
        workIndex.forEach((v, i) => {
          table[0].children[i]=v
          table[0].children.length = 5
        });
      otherTarget.forEach((v, i) => {
        table[1].children[i]=v
        table[1].children.length = 3
      });
      // console.log(table[0].children);
      this.setData({
        table
      })
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
  // 获取用户月份总结
  async getUserSummary() {
    let res = await app.myAxios({
      method: 'post',
      url: '/anonymous/querySummarize',
      data: {
        month: this.data.month,
        userid: wx.getStorageSync('userID'),
        year: this.data.year
      }
    })
    // console.log(res);
    if (res.statusCode === 200) {
      let {
        result
      } = res.data
      let {
        reasonArr,
        quarterlySummary
      } = this.data
      reasonArr= [{
        content: '',
        type: '未完成目标的障碍和原因'
      },
      {
        content: '',
        type: '客服障碍的对策和方法'
      },
      {
        content: '',
        type: '本月份创新与收获'
      }
    ],
    quarterlySummary={
      content: '',
      type: '本月份的目标总结'
    },
      result.forEach(v => {
        if (v.type === '本月份的目标总结') {
          quarterlySummary = v
        }
        for (let i = 0; i < reasonArr.length; i++) {
          if (v.type === reasonArr[i].type) {
            reasonArr[i] = v
          }
        }
      })
      // console.log(reasonArr);
      this.setData({
        quarterlySummary,
        reasonArr
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    this.geyUserMsg()
    this.getUserSummary()
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