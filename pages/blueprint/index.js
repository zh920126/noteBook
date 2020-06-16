// 引入全局封装的myaxios
const app = getApp();
import regeneratorRuntime from '../../lib/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [{
        name: '主页'
      },
      {
        name: '人生蓝图一'
      },
      {
        name: '人生蓝图2'
      },
      {
        name: '人生蓝图3'
      },
    ],
    arr: [{
        name: '事业'
      },
      {
        name: '财富'
      },
      {
        name: '家庭生活'
      },
      {
        name: '学习成长'
      },
      {
        name: '人际关系'
      },
      {
        name: '健康计划'
      }
    ],
    arr2: [{
        name: '事业'
      },
      {
        name: '财富'
      },
      {
        name: '家庭生活'
      },
      {
        name: '学习成长'
      },
      {
        name: '人际关系'
      },
      {
        name: '健康计划'
      }
    ],
    cate: [{
        name: ''
      },
      {
        name: '类别'
      },
      {
        name: '序号'
      },
      {
        name: '目标内容'
      },
      {
        name: '方法和措施'
      },
      {
        name: '起止时间'
      },
      {
        name: '完成打√'
      },
    ],
    cateList: [{
        name: '事业(工作)目标',
        children: [
          {
            parentType: '事业(工作)目标',
            count:1,
            type:'',
            content:'',
            id:'',
            measures:'',
            startTime:''
          },
          {
            parentType: '事业(工作)目标',
            count:2,
            type:'',
            content:'',
            id:'',
            measures:'',
            startTime:''
          },
          {
            parentType: '事业(工作)目标',
            count:3,
            type:'',
            content:'',
            id:'',
            measures:'',
            startTime:''
          },
          {
            parentType: '事业(工作)目标',
            count:4,
            type:'',
            content:'',
            id:'',
            measures:'',
            startTime:''
          },
          {
            parentType: '事业(工作)目标',
            count:5,
            type:'',
            content:'',
            id:'',
            measures:'',
            startTime:''
          },
          {
            parentType: '事业(工作)目标',
            count:6,
            type:'',
            content:'',
            id:'',
            measures:'',
            startTime:''
          },
          {
            parentType: '事业(工作)目标',
            count:7,
            type:'',
            content:'',
            id:'',
            measures:'',
            startTime:''
          },
        ]
      },
      {
        name: '财富目标',
        children: 4
      },
      {
        name: '家庭生活',
        children: 4
      },
      {
        name: '学习成长',
        children: 4
      },
      {
        name: '人际关系',
        children: 4
      },
      {
        name: '健康计划',
        children: 4
      },
    ],
    changeIndex: 1,
    completionTime: 3
  },
  // 点击顶部tab切换
  async handleClick(e) {
    let {
      index
    } = e.currentTarget.dataset
    console.log(index);
    this.setData({
      changeIndex: index
    })
    if (index === 0) {
      // 点击主页时，返回到主页页面
      wx.navigateTo({
        url: '/pages/index/index',
      });
    } else if (index === 1) {
      this.onLoad()
    } else if (index === 2) {
      let data = {
        completionTime: 5,
        userid: wx.getStorageSync('userID')
      }
      let res = await app.myAxios({
        data,
        method: 'post',
        url: '/anonymous/queryBlueprint'
      })
      // 数据还原
      let {arr2}=this.data
      if (res.statusCode === 200 && res.data.message === '查询成功') {
        let userBluePrint = res.data.result.content
        console.log(res);
        for (let i = 0; i < arr2.length; i++) {
          userBluePrint.forEach(v => {
            if (arr2[i].name === v.type) {
              arr2[i].content = v.content
              arr2[i].id = v.id
            }
          });
        }
        this.setData({
          arr2
        })
      } else {
        wx.showToast({
          title: '获取蓝图信息失败,请重试',
          icon: 'none'
        });
      }

    }
  },
  // 失去焦点时,更新目标信息
  async handleUpdate3(e) {
    let {
      index
    } = e.currentTarget.dataset
    let {
      value
    } = e.detail
    let {
      arr,
      completionTime
    } = this.data
    // 新增数据的参数completionTime
    let data = {
      completionTime: 3,
      type: arr[index].name,
      content: value,
      userid: wx.getStorageSync('userID')
    }
    // console.log(completionTime, arr[index].name, );
    // 如果哪一项有ID，则修改数据，没有则为新增数据
    if (arr[index].id) {
      data.id = arr[index].id
    }
    let res = await app.myAxios({
      method: 'post',
      url: '/anonymous/updateBlueprint',
      data
    })
    // console.log(res);
    // if(res.data.message==='更新蓝图成功'||res.data.message==='新增蓝图成功'){
    //   wx.showToast({
    //     title: res.data.message,
    //     icon: 'success'
    //   });
    // }else{
    //   wx.showToast({
    //     title: res.data.message,
    //     icon: 'none'
    //   });
    // }
  },
  async handleUpdate5(e) {
    let {
      index
    } = e.currentTarget.dataset
    let {
      value
    } = e.detail
    let {
      arr2,
      completionTime
    } = this.data
    // 新增数据的参数completionTime
    let data = {
      completionTime: 5,
      type: arr2[index].name,
      content: value,
      userid: wx.getStorageSync('userID')
    }
    // 如果哪一项有ID，则修改数据，没有则为新增数据
    if (arr2[index].id) {
      data.id = arr2[index].id
    }
    let res = await app.myAxios({
      method: 'post',
      url: '/anonymous/updateBlueprint',
      data
    })
    // console.log(res);
    // if(res.data.message==='更新蓝图成功'||res.data.message==='新增蓝图成功'){
    //   wx.showToast({
    //     title: res.data.message,
    //     icon: 'success'
    //   });
    // }else{
    //   wx.showToast({
    //     title: res.data.message,
    //     icon: 'none'
    //   });
    // }
  },
  // 蓝图3时间选择
  async bindDateChange(e){
    let {value}=e.detail
    let data=e.currentTarget.dataset.info
    data.startTime=value
    // 同时需要更新视图层
    let {cateList}=this.data
    cateList.forEach(v=>{
      if(v.name===data.parentType){
        v.children[data.count-1]=data
      }
    })
    this.setData({
      cateList
    })
    console.log(data);
    let res=await app.myAxios({
      url:'/anonymous/updateBlueprintDetailed',
      method:'post',
      data
    })
    console.log(res);
  },
  // 蓝图3类别更新
  async handleCate(e){
    let {value}=e.detail
    let data=e.currentTarget.dataset.info
    data.type=value
    // 同时需要更新视图层
    let {cateList}=this.data
    cateList.forEach(v=>{
      if(v.name===data.parentType){
        v.children[data.count-1]=data
      }
    })
    this.setData({
      cateList
    })
    console.log(data);
    let res=await app.myAxios({
      url:'/anonymous/updateBlueprintDetailed',
      method:'post',
      data
    })
    console.log(res);
  },
  // 蓝图3目标内容更新
  async handleContent(e){
    let {value}=e.detail
    let data=e.currentTarget.dataset.info
    data.content=value
    // 同时需要更新视图层
    let {cateList}=this.data
    cateList.forEach(v=>{
      if(v.name===data.parentType){
        v.children[data.count-1]=data
      }
    })
    this.setData({
      cateList
    })
    console.log(data);
    let res=await app.myAxios({
      url:'/anonymous/updateBlueprintDetailed',
      method:'post',
      data
    })
    console.log(res);
  },
  // 蓝图3方法措施更新
  async handleMeasures(e){
    let {value}=e.detail
    let data=e.currentTarget.dataset.info
    data.measures=value
    // 同时需要更新视图层
    let {cateList}=this.data
    cateList.forEach(v=>{
      if(v.name===data.parentType){
        v.children[data.count-1]=data
      }
    })
    this.setData({
      cateList
    })
    console.log(data);
    let res=await app.myAxios({
      url:'/anonymous/updateBlueprintDetailed',
      method:'post',
      data
    })
    console.log(res);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    let {
      arr
    } = this.data
    let data = {
      completionTime: 3,
      userid: wx.getStorageSync('userID')
    }
    let res = await app.myAxios({
      data,
      method: 'post',
      url: '/anonymous/queryBlueprint'
    })
    // 数据还原
    console.log(data);
    if (res.statusCode === 200 && res.data.message === '查询成功') {
      let userBluePrint = res.data.result.content
      console.log(res);
      for (let i = 0; i < arr.length; i++) {
        userBluePrint.forEach(v => {
          if (arr[i].name === v.type) {
            arr[i].content = v.content
            arr[i].id = v.id
          }
        });
      }
      this.setData({
        arr
      })
    } else {
      wx.showToast({
        title: '获取蓝图信息失败,请重试',
        icon: 'none'
      });
    }
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
    // 初始化数据
    this.setData({
      changeIndex: 3,
      completionTime: 3
    })
    // 页面数据刷新
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