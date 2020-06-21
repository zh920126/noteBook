const app = getApp();
import regeneratorRuntime from '../../lib/runtime';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    days:[
      {
        name:'周一',
      },
      {
        name:'周二',
      },
      {
        name:'周三',
      },
      {
        name:'周四',
      },
      {
        name:'周五',
      },
      {
        name:'周六',
      },
      {
        name:'周日',
      }
    ],
    todayThings:[
      {
        index:1,
        complete:false,
        time:'',
        parentType:'今日事项',
        type:'',
        content:''
      },
      {
        index:2,
        complete:false,
        time:'',
        parentType:'今日事项',
        type:'',
        content:''
      },
      {
        index:3,
        complete:false,
        time:'',
        parentType:'今日事项',
        type:'',
        content:''
      },
      {
        index:4,
        complete:false,
        time:'',
        parentType:'今日事项',
        type:'',
        content:''
      },
      {
        index:5,
        complete:false,
        time:'',
        parentType:'今日事项',
        type:'',
        content:''
      },
      {
        index:6,
        complete:false,
        time:'',
        parentType:'今日事项',
        type:'',
        content:''
      },
      {
        index:7,
        complete:false,
        time:'',
        parentType:'今日事项',
        type:'',
        content:''
      },
      {
        index:8,
        complete:false,
        time:'',
        parentType:'今日事项',
        type:'',
        content:''
      },
      {
        index:9,
        complete:false,
        time:'',
        parentType:'今日事项',
        type:'',
        content:''
      },
      {
        index:10,
        complete:false,
        time:'',
        parentType:'今日事项',
        type:'',
        content:''
      },
      {
        index:11,
        complete:false,
        time:'',
        parentType:'今日事项',
        type:'',
        content:''
      },
      {
        index:12,
        complete:false,
        time:'',
        parentType:'今日事项',
        type:'',
        content:''
      },
      {
        index:13,
        complete:false,
        time:'',
        parentType:'今日事项',
        type:'',
        content:''
      },
      {
        index:14,
        complete:false,
        time:'',
        parentType:'今日事项',
        type:'',
        content:''
      },
      {
        index:15,
        complete:false,
        time:'',
        parentType:'今日事项',
        type:'',
        content:''
      },
      {
        index:16,
        complete:false,
        time:'',
        parentType:'今日事项',
        type:'',
        content:''
      },
      {
        index:17,
        complete:false,
        time:'',
        parentType:'今日事项',
        type:'',
        content:''
      }
    ],
    todaySummary:[
      {
        parentType:'今日总结',
        content:''
      },
      {
        parentType:'今日总结',
        content:''
      },
      {
        parentType:'今日总结',
        content:''
      },
      {
        parentType:'今日总结',
        content:''
      },
      {
        parentType:'今日总结',
        content:''
      },
      {
        parentType:'今日总结',
        content:''
      },
      {
        parentType:'今日总结',
        content:''
      },
      {
        parentType:'今日总结',
        content:''
      },
      {
        parentType:'今日总结',
        content:''
      },
      {
        parentType:'今日总结',
        content:''
      },
      {
        parentType:'今日总结',
        content:''
      },
      {
        parentType:'今日总结',
        content:''
      },
      {
        parentType:'今日总结',
        content:''
      },
      {
        parentType:'今日总结',
        content:''
      },
      {
        parentType:'今日总结',
        content:''
      },
      {
        parentType:'今日总结',
        content:''
      },
      {
        parentType:'今日总结',
        content:''
      }
    ],
    weekDays:[
      {
        type:1,
        day:'周一',
      },
      {
        type:2,
        day:'周二',
      },
      {
        type:3,
        day:'周三',
      },
      {
        type:4,
        day:'周四',
      },
      {
        type:5,
        day:'周五',
      },
      {
        type:6,
        day:'周六',
      },
      {
        type:7,
        day:'周日',
      },
    ],
    day:'周一',
    week:'',
    year:'',
    whichDay:1
  },
  // 上一页
  handleLastDay(){
    let {day,whichDay}=this.data
    whichDay--
    if(whichDay<1){
      wx.navigateTo({
        url: '/pages/weekgoals/index',
      });
      return
    }
    if(whichDay===1){
      day='周一'
    }else if(whichDay===2){
      day='周二'
    }else if(whichDay===3){
      day='周三'
    }else if(whichDay===4){
      day='周四'
    }else if(whichDay===5){
      day='周五'
    }else if(whichDay===6){
      day='周六'
    }else if(whichDay===7){
      day='周日'
    }
    this.setData({
      day,whichDay
    })
    this.getUsePlan()
  },
  // 下一页
  handleNextDay(){
    let {day,whichDay}=this.data
    whichDay++
    if(whichDay>7){
      let {year,week}=this.data
      wx.navigateTo({
        url: `/pages/share/index?year=${year}&week=${week}`,
      });
      return
    }
    if(whichDay===1){
      day='周一'
    }else if(whichDay===2){
      day='周二'
    }else if(whichDay===3){
      day='周三'
    }else if(whichDay===4){
      day='周四'
    }else if(whichDay===5){
      day='周五'
    }else if(whichDay===6){
      day='周六'
    }else if(whichDay===7){
      day='周日'
    }
    this.setData({
      day,whichDay
    })
    this.getUsePlan()
  },
  // 更新总结
  async handleUpdateSummary(e){
    let {info}=e.currentTarget.dataset
    let {value}=e.detail
    let data={
      content:value,
      parentType:info.parentType,
      userId:wx.getStorageSync('userID'),
      week:+this.data.week,
      year:+this.data.year,
      whichDay:+this.data.whichDay
    }
    if(info.id){
      data.id=info.id
    }
    let res=await app.myAxios({
      method:'post',
      url:'/anonymous/updateDayPlan',
      data
    })
    if(res.statusCode===200){
      this.getUsePlan()
    }
  },
  // 更新完成状态
  async handleComplete(e){
    let {info}=e.currentTarget.dataset
    let data={
      complete:!info.complete,
      content:info.content,
      parentType:info.parentType,
      type:info.type,
      time:info.time,
      userId:wx.getStorageSync('userID'),
      week:+this.data.week,
      year:+this.data.year,
      whichDay:+this.data.whichDay
    }
    if(info.id){
      data.id=info.id
      // 有ID才可以打钩
      // 先对界面进行更新
      console.log(data);
      let {todayThings} = this.data
      todayThings.forEach(v => {
        if (v.id === info.id) {
          v.complete = !v.complete
          console.log(v);
        }
      })
      this.setData({
        todayThings
      })
      let res=await app.myAxios({
        method:'post',
        url:'/anonymous/updateDayPlan',
        data
      })
    }
    
  },
  // 更新今日事项内容
  async handleUpdateContent(e){
    let {info}=e.currentTarget.dataset
    let {value}=e.detail
    let data={
      complete:info.complete,
      content:value,
      parentType:info.parentType,
      type:info.type,
      time:info.time,
      userId:wx.getStorageSync('userID'),
      week:+this.data.week,
      year:+this.data.year,
      whichDay:+this.data.whichDay
    }
    if(info.id){
      data.id=info.id
    }
    let res=await app.myAxios({
      method:'post',
      url:'/anonymous/updateDayPlan',
      data
    })
    if(res.statusCode===200){
      this.getUsePlan()
    }
  },
  // 更新起止时间
  async bindDateChange(e){
    let {info}=e.currentTarget.dataset
    let {value}=e.detail
    let data={
      complete:info.complete,
      content:info.content,
      parentType:info.parentType,
      type:info.type,
      time:value,
      userId:wx.getStorageSync('userID'),
      week:+this.data.week,
      year:+this.data.year,
      whichDay:+this.data.whichDay
    }
    if(info.id){
      data.id=info.id
    }
    let res=await app.myAxios({
      method:'post',
      url:'/anonymous/updateDayPlan',
      data
    })
    if(res.statusCode===200){
      this.getUsePlan()
    }
  },
  // 更新计划分类
  async handleChangeType(e){
    let {info}=e.currentTarget.dataset
    let {value}=e.detail
    let data={
      complete:info.complete,
      content:info.content,
      parentType:info.parentType,
      type:value,
      time:info.time,
      userId:wx.getStorageSync('userID'),
      week:+this.data.week,
      year:+this.data.year,
      whichDay:+this.data.whichDay
    }
    if(info.id){
      data.id=info.id
    }
    let res=await app.myAxios({
      method:'post',
      url:'/anonymous/updateDayPlan',
      data
    })
    if(res.statusCode===200){
      this.getUsePlan()
    }
  },
  // 根据年份 周数 周几获取到用户每日计划
  async getUsePlan(){
    let data={
      userId:wx.getStorageSync('userID'),
      week:+this.data.week,
      whichDay:+this.data.whichDay,
      year:+this.data.year
    }
    let res=await app.myAxios({
      method:'post',
      url:'/anonymous/findAimsByConditionForDayPlan',
      data
    })
    console.log(data);
    if(res.statusCode===200&&res.data.result){
      let {result}=res.data
      let {todayThings,todaySummary}=this.data
      // 数据初始化
      todayThings=[
        {
          index:1,
          complete:false,
          time:'',
          parentType:'今日事项',
          type:'',
          content:''
        },
        {
          index:2,
          complete:false,
          time:'',
          parentType:'今日事项',
          type:'',
          content:''
        },
        {
          index:3,
          complete:false,
          time:'',
          parentType:'今日事项',
          type:'',
          content:''
        },
        {
          index:4,
          complete:false,
          time:'',
          parentType:'今日事项',
          type:'',
          content:''
        },
        {
          index:5,
          complete:false,
          time:'',
          parentType:'今日事项',
          type:'',
          content:''
        },
        {
          index:6,
          complete:false,
          time:'',
          parentType:'今日事项',
          type:'',
          content:''
        },
        {
          index:7,
          complete:false,
          time:'',
          parentType:'今日事项',
          type:'',
          content:''
        },
        {
          index:8,
          complete:false,
          time:'',
          parentType:'今日事项',
          type:'',
          content:''
        },
        {
          index:9,
          complete:false,
          time:'',
          parentType:'今日事项',
          type:'',
          content:''
        },
        {
          index:10,
          complete:false,
          time:'',
          parentType:'今日事项',
          type:'',
          content:''
        },
        {
          index:11,
          complete:false,
          time:'',
          parentType:'今日事项',
          type:'',
          content:''
        },
        {
          index:12,
          complete:false,
          time:'',
          parentType:'今日事项',
          type:'',
          content:''
        },
        {
          index:13,
          complete:false,
          time:'',
          parentType:'今日事项',
          type:'',
          content:''
        },
        {
          index:14,
          complete:false,
          time:'',
          parentType:'今日事项',
          type:'',
          content:''
        },
        {
          index:15,
          complete:false,
          time:'',
          parentType:'今日事项',
          type:'',
          content:''
        },
        {
          index:16,
          complete:false,
          time:'',
          parentType:'今日事项',
          type:'',
          content:''
        },
        {
          index:17,
          complete:false,
          time:'',
          parentType:'今日事项',
          type:'',
          content:''
        }
      ],
      todaySummary=[
        {
          parentType:'今日总结',
          content:''
        },
        {
          parentType:'今日总结',
          content:''
        },
        {
          parentType:'今日总结',
          content:''
        },
        {
          parentType:'今日总结',
          content:''
        },
        {
          parentType:'今日总结',
          content:''
        },
        {
          parentType:'今日总结',
          content:''
        },
        {
          parentType:'今日总结',
          content:''
        },
        {
          parentType:'今日总结',
          content:''
        },
        {
          parentType:'今日总结',
          content:''
        },
        {
          parentType:'今日总结',
          content:''
        },
        {
          parentType:'今日总结',
          content:''
        },
        {
          parentType:'今日总结',
          content:''
        },
        {
          parentType:'今日总结',
          content:''
        },
        {
          parentType:'今日总结',
          content:''
        },
        {
          parentType:'今日总结',
          content:''
        },
        {
          parentType:'今日总结',
          content:''
        },
        {
          parentType:'今日总结',
          content:''
        },
        {
          parentType:'今日总结',
          content:''
        }
      ]
      let j=0
      let k=0
        result.forEach((v,i) => {
          if(v.parentType==='今日事项'){
            todayThings[j]=v  
            todayThings.length=17
            j++
          }
          if(v.parentType==='今日总结'){
            todaySummary[k]=v
            todaySummary.length=18
            k++
          }
      })
      // 更新视图
      this.setData({todayThings,todaySummary})
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    let{week,year}=options
    this.setData({
      week,year
    })
    this.getUsePlan()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    
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