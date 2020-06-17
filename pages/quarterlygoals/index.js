// pages/quarterlygoals/index.js
const app= getApp();
import regeneratorRuntime from '../../lib/runtime';

Page({

  /**
   * 页面的初始数据
   */ 
  data: {
    tabs:[
      {
        id:1,
        name:'主页'
      },
      {
        id:2,
        name:'第一季度'
      },
      {
        id:1,
        name:'第二季度'
      },
      {
        id:1,
        name:'第三季度'
      },
      {
        id:1,
        name:'第四季度'
      }
    ],
    table:[
      {
        id:1,
        name:'工作计划',
        children:[
          {
            complete:false,
            content:'',
            importanceLevel:'0',
            measures:'',
            quarter:'',
            quarterOrMonthFlag:'quarter',
            type:'工作计划',
            year:new Date().getFullYear()
          },
          {
            complete:false,
            content:'',
            importanceLevel:'',
            measures:'',
            quarter:'',
            quarterOrMonthFlag:'quarter',
            type:'工作计划',
            year:new Date().getFullYear()
          },
          {
            complete:false,
            content:'',
            importanceLevel:'',
            measures:'',
            quarter:'',
            quarterOrMonthFlag:'quarter',
            type:'工作计划',
            year:new Date().getFullYear()
          },
          {
            complete:false,
            content:'',
            importanceLevel:'',
            measures:'',
            quarter:'',
            quarterOrMonthFlag:'quarter',
            type:'工作计划',
            year:new Date().getFullYear()
          },
        ]
      },
      {
        id:2,
        name:'其他目标',
        children:[
          {
            complete:false,
            content:'',
            importanceLevel:'学习计划',
            measures:'',
            quarter:'',
            quarterOrMonthFlag:'quarter',
            type:'其他目标',
            year:new Date().getFullYear()
          },
          {
            complete:false,
            content:'',
            importanceLevel:'健康计划',
            measures:'',
            quarter:'',
            quarterOrMonthFlag:'quarter',
            type:'其他目标',
            year:new Date().getFullYear()
          },
          {
            complete:false,
            content:'',
            importanceLevel:'本季度反省',
            measures:'',
            quarter:'',
            quarterOrMonthFlag:'quarter',
            type:'其他目标',
            year:new Date().getFullYear()
          },
        ]
      }
    ],
    reasonArr:[
      {
        id:1,
        name:'未完成目标的障碍和原因:'
      },
      {
        id:2,
        name:'客服障碍的对策和方法:'
      },
      {
        id:3,
        name:'本季度创新与收获:'
      }
    ],
    changeIndex:1
  },
  // tab栏切换
  changeIndex(e){
    let {index}=e.currentTarget.dataset
    this.setData({
      changeIndex:index
    })
    if(index===0){
      // 点击主页就进行跳转
      wx.navigateTo({
        url: '/pages/index/index',
      });
    }
  },
  // 重要级别修改
  async handleLevel(e){
    let {value}=e.detail
    let {info}=e.currentTarget.dataset
    let data={
      complete:info.complete,
      content:info.content,
      importanceLevel:value,
      measures:info.measures,
      quarter:this.data.changeIndex,
      userId:wx.getStorageSync('userID'),
      year:info.year
    }
    let res=await app.myAxios({
      method:'post',
      url:'/anonymous/updateOrInsertAirms',
      data
    })
    console.log(res);
  },
  // 目标内容修改
  async handleContent(e){
    let {value}=e.detail
    let {info}=e.currentTarget.dataset
    let data={
      complete:info.complete,
      content:value,
      importanceLevel:info.importanceLevel,
      measures:info.measures,
      quarter:this.data.changeIndex,
      userId:wx.getStorageSync('userID'),
      year:info.year
    }
    let res=await app.myAxios({
      method:'post',
      url:'/anonymous/updateOrInsertAirms',
      data
    })
    console.log(res);
  },
  // 方法和措施修改
  async handleMeasures(e){
    let {value}=e.detail
    let {info}=e.currentTarget.dataset
    let data={
      complete:info.complete,
      content:info.content,
      importanceLevel:info.importanceLevel,
      measures:value,
      quarter:this.data.changeIndex,
      userId:wx.getStorageSync('userID'),
      year:info.year
    }
    let res=await app.myAxios({
      method:'post',
      url:'/anonymous/updateOrInsertAirms',
      data
    })
    console.log(res);
  },
  // 获取用户季度数据
  async geyUserMsg(){
    let res=await app.myAxios({
      method:'post',
      url:'/anonymous/findAimsByCondition',
      data:{
        userId:wx.getStorageSync('userID'),
        quarter:this.changeIndex,
        year:new Date().getFullYear()
      }
    })
    console.log(res);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    this.setData({
      changeIndex:1
    })
    // 加载就需要获取index为1的数据
    let res=await app.myAxios({
      method:'post',
      url:'/anonymous/findAimsByCondition',
      data:{
        userId:wx.getStorageSync('userID'),
        quarter:this.changeIndex,
        year:new Date().getFullYear()
      }
    })
    console.log(res);
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
    this.onLoad()
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