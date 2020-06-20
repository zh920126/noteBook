//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userDream: [{
        name: '人生蓝图',
        url: '/pages/blueprint/index'
      },
      {
        name: '季度目标',
        url: '/pages/quarterlygoals/index'
      },
      {
        name: '月度目标',
        url: '/pages/monthygoals/index'
      },
      {
        name: '周目标',
        url: '/pages/weekgoals/index'
      }
    ],
    userInfo: wx.getStorageSync('userInfo') || {}
  },
  // 路由跳转
  goToelsePage(event) {
    // 路由跳转之前需要先验证用户是否登录
    if (wx.getStorageSync('userID')) {
      let {
        url
      } = event.currentTarget.dataset
      console.log(url);
      wx.navigateTo({
        url
      });
    }
  },
  // 获取用户授权信息
  handleGetUserInfo() {
    wx.getUserInfo({
      withCredentials: 'false',
      lang: 'zh_CN',
      timeout: 10000,
      success: (result) => {
        console.log(result);
        let {
          userInfo
        } = result
        this.setData({
          userInfo
        })
        wx.setStorageSync('userInfo', userInfo);
      },
    });
  },
  onLoad: function () {
    // 将用户登录的code存起来
    if (!wx.getStorageSync('userID')) {
      wx.login({
        timeout: 10000,
        success: (result) => {
          wx.setStorageSync('userID', result.code);
        },
      });
    }
    //   if (app.globalData.userInfo) {
    //     this.setData({
    //       userInfo: app.globalData.userInfo,
    //       hasUserInfo: true
    //     })
    //   } else if (this.data.canIUse){
    //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //     // 所以此处加入 callback 以防止这种情况
    //     app.userInfoReadyCallback = res => {
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   } else {
    //     // 在没有 open-type=getUserInfo 版本的兼容处理
    //     wx.getUserInfo({
    //       success: res => {
    //         app.globalData.userInfo = res.userInfo
    //         this.setData({
    //           userInfo: res.userInfo,
    //           hasUserInfo: true
    //         })
    //       }
    //     })
    //   }
  }
})