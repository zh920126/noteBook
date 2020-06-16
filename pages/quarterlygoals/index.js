// pages/quarterlygoals/index.js
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
            id:2,
            name:'aa'
          },
          {
            id:3,
            name:'bb'
          },
          {
            id:4,
            name:'cc'
          },
          {
            id:5,
            name:'dd'
          },
        ]
      },
      {
        id:6,
        name:'其他目标',
        children:[
          {
            id:7,
            name:'学习计划',
          },
          {
            id:8,
            name:'健康计划',
          },
          {
            id:9,
            name:'本季度反省',
          }
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
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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