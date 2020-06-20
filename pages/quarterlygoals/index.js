// pages/quarterlygoals/index.js
const app = getApp();
import regeneratorRuntime from '../../lib/runtime';

Page({
  /** 
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: 1,
        name: '第一季度'
      },
      {
        id: 2,
        name: '第二季度'
      },
      {
        id: 3,
        name: '第三季度'
      },
      {
        id: 4,
        name: '第四季度'
      }
    ],
    table: [{
        id: 1,
        name: '工作指标',
        children: [{
            complete: false,
            content: '',
            importanceLevel: '',
            aimMeasures: '',
            quarter: '',
            quarterOrMonthFlag: 'quarter',
            type: '工作指标',
            year: new Date().getFullYear()
          },
          {
            complete: false,
            content: '',
            importanceLevel: '',
            aimMeasures: '',
            quarter: '',
            quarterOrMonthFlag: 'quarter',
            type: '工作指标',
            year: new Date().getFullYear()
          },
          {
            complete: false,
            content: '',
            importanceLevel: '',
            aimMeasures: '',
            quarter: '',
            quarterOrMonthFlag: 'quarter',
            type: '工作指标',
            year: new Date().getFullYear()
          },
          {
            complete: false,
            content: '',
            importanceLevel: '',
            aimMeasures: '',
            quarter: '',
            quarterOrMonthFlag: 'quarter',
            type: '工作指标',
            year: new Date().getFullYear()
          },
          {
            complete: false,
            content: '',
            importanceLevel: '',
            aimMeasures: '',
            quarter: '',
            quarterOrMonthFlag: 'quarter',
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
            quarter: '',
            quarterOrMonthFlag: 'quarter',
            type: '其他目标',
            year: new Date().getFullYear()
          },
          {
            complete: false,
            content: '',
            importanceLevel: '健康计划',
            aimMeasures: '',
            quarter: '',
            quarterOrMonthFlag: 'quarter',
            type: '其他目标',
            year: new Date().getFullYear()
          },
          {
            complete: false,
            content: '',
            importanceLevel: '本季度反省',
            aimMeasures: '',
            quarter: '',
            quarterOrMonthFlag: 'quarter',
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
        type: '本季度创新与收获'
      }
    ],
    quarterlySummary: {
      content: '',
      type: '本季度的目标总结'
    },
    changeIndex: 1
  },
  // tab栏切换
  changeIndex(e) {
    let {
      index
    } = e.currentTarget.dataset
      this.setData({
        changeIndex: index
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
      quarter: this.data.changeIndex,
      userId: wx.getStorageSync('userID'),
      year: info.year
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
    console.log(info);
    let data = {
      complete: info.complete,
      content: value,
      importanceLevel: info.importanceLevel,
      aimMeasures: info.aimMeasures,
      type: info.type,
      quarter: this.data.changeIndex,
      userId: wx.getStorageSync('userID'),
      year: info.year
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
    console.log(info);
    let data = {
      complete: info.complete,
      content: info.content,
      importanceLevel: info.importanceLevel,
      aimMeasures: value,
      type: info.type,
      quarter: this.data.changeIndex,
      userId: wx.getStorageSync('userID'),
      year: info.year
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
    console.log('我点击了完成状态');
    let {
      value
    } = e.detail
    let {
      info
    } = e.currentTarget.dataset
    console.log(info);
    let data = {
      complete: !info.complete,
      content: info.content,
      importanceLevel: info.importanceLevel,
      aimMeasures: info.aimMeasures,
      type: info.type,
      quarter: this.data.changeIndex,
      userId: wx.getStorageSync('userID'),
      year: info.year
    }


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
  // 更新季度总结
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
      quarter: this.data.changeIndex,
      timeSign: this.getTime(),
      type: info.type,
      userid: wx.getStorageSync('userID'),
      year: new Date().getFullYear()
    }
    if (info.id) {
      data.id = info.id
    }
    console.log(data);
    let res = await app.myAxios({
      method: 'post',
      url: '/anonymous/updateSummarize',
      data
    })
    // console.log(res);
    if (res.statusCode === 200) {
      this.getUserSummary()
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
      quarter: this.data.changeIndex,
      timeSign: this.getTime(),
      type: info.type,
      userid: wx.getStorageSync('userID'),
      year: new Date().getFullYear()
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
      this.getUserSummary()
    }
  },
  // 获取用户季度数据
  async geyUserMsg() {
    let res = await app.myAxios({
      method: 'post',
      url: '/anonymous/findAimsByCondition',
      data: {
        quarter: this.data.changeIndex,
        userId: wx.getStorageSync('userID'),
        year: new Date().getFullYear()
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
      table = [{
            id: 1,
            name: '工作指标',
            children: [{
                complete: false,
                content: '',
                importanceLevel: '',
                aimMeasures: '',
                quarter: '',
                quarterOrMonthFlag: 'quarter',
                type: '工作指标',
                year: new Date().getFullYear()
              },
              {
                complete: false,
                content: '',
                importanceLevel: '',
                aimMeasures: '',
                quarter: '',
                quarterOrMonthFlag: 'quarter',
                type: '工作指标',
                year: new Date().getFullYear()
              },
              {
                complete: false,
                content: '',
                importanceLevel: '',
                aimMeasures: '',
                quarter: '',
                quarterOrMonthFlag: 'quarter',
                type: '工作指标',
                year: new Date().getFullYear()
              },
              {
                complete: false,
                content: '',
                importanceLevel: '',
                aimMeasures: '',
                quarter: '',
                quarterOrMonthFlag: 'quarter',
                type: '工作指标',
                year: new Date().getFullYear()
              },
              {
                complete: false,
                content: '',
                importanceLevel: '',
                aimMeasures: '',
                quarter: '',
                quarterOrMonthFlag: 'quarter',
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
                quarter: '',
                quarterOrMonthFlag: 'quarter',
                type: '其他目标',
                year: new Date().getFullYear()
              },
              {
                complete: false,
                content: '',
                importanceLevel: '健康计划',
                aimMeasures: '',
                quarter: '',
                quarterOrMonthFlag: 'quarter',
                type: '其他目标',
                year: new Date().getFullYear()
              },
              {
                complete: false,
                content: '',
                importanceLevel: '本季度反省',
                aimMeasures: '',
                quarter: '',
                quarterOrMonthFlag: 'quarter',
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
      console.log(table[1].children);
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
  // 获取用户季度总结
  async getUserSummary() {
    let res = await app.myAxios({
      method: 'post',
      url: '/anonymous/querySummarize',
      data: {
        quarter: this.data.changeIndex,
        timeSign: this.getTime(),
        userid: wx.getStorageSync('userID'),
        year: new Date().getFullYear()
      }
    })
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
        type: '本季度创新与收获'
      }
    ],
    quarterlySummary={
      content: '',
      type: '本季度的目标总结'
    },
      result.forEach(v => {
        if (v.type === '本季度的目标总结') {
          quarterlySummary = v
        }
        for (let i = 0; i < reasonArr.length; i++) {
          if (v.type === reasonArr[i].type) {
            reasonArr[i] = v
          }
        }
      })
      console.log(reasonArr);
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
    this.setData({
      changeIndex: 1
    })
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