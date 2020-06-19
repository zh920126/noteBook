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
            measures:'',
            startTime:'',
            complete:false
          },
          {
            parentType: '事业(工作)目标',
            count:2,
            type:'',
            content:'',
            measures:'',
            startTime:'',
            complete:false
          },
          {
            parentType: '事业(工作)目标',
            count:3,
            type:'',
            content:'',
            measures:'',
            startTime:'',
            complete:false
          },
          {
            parentType: '事业(工作)目标',
            count:4,
            type:'',
            content:'',
            measures:'',
            startTime:'',
            complete:false
          },
          {
            parentType: '事业(工作)目标',
            count:5,
            type:'',
            content:'',
            measures:'',
            startTime:'',
            complete:false
          },
          {
            parentType: '事业(工作)目标',
            count:6,
            type:'',
            content:'',
            measures:'',
            startTime:'',
            complete:false
          },
          {
            parentType: '事业(工作)目标',
            count:7,
            type:'',
            content:'',
            measures:'',
            startTime:'',
            complete:false
          },
        ]
      },
      {
        name: '财富目标',
        children: [
          {
            parentType: '财富目标',
            count:1,
            type:'',
            content:'',
            measures:'',
            startTime:'',
            complete:false
          },
          {
            parentType: '财富目标',
            count:2,
            type:'',
            content:'',
            measures:'',
            startTime:'',
            complete:false
          },
          {
            parentType: '财富目标',
            count:3,
            type:'',
            content:'',
            measures:'',
            startTime:'',
            complete:false
          },
          {
            parentType: '财富目标',
            count:4,
            type:'',
            content:'',
            measures:'',
            startTime:'',
            complete:false
          }
        ]
      },
      {
        name: '家庭生活',
        children: [
          {
            parentType: '家庭生活',
            count:1,
            type:'',
            content:'',
            measures:'',
            startTime:'',
            complete:false
          },
          {
            parentType: '家庭生活',
            count:2,
            type:'',
            content:'',
            measures:'',
            startTime:'',
            complete:false
          },
          {
            parentType: '家庭生活',
            count:3,
            type:'',
            content:'',
            measures:'',
            startTime:'',
            complete:false
          },
          {
            parentType: '家庭生活',
            count:4,
            type:'',
            content:'',
            measures:'',
            startTime:'',
            complete:false
          }
        ]
      },
      {
        name: '学习成长',
        children: [
          {
            parentType: '学习成长',
            count:1,
            type:'',
            content:'',
            measures:'',
            startTime:'',
            complete:false
          },
          {
            parentType: '学习成长',
            count:2,
            type:'',
            content:'',
            measures:'',
            startTime:'',
            complete:false
          },
          {
            parentType: '学习成长',
            count:3,
            type:'',
            content:'',
            measures:'',
            startTime:'',
            complete:false
          },
          {
            parentType: '学习成长',
            count:4,
            type:'',
            content:'',
            measures:'',
            startTime:'',
            complete:false
          }
        ]
      },
      {
        name: '人际关系',
        children: [
          {
            parentType: '人际关系',
            count:1,
            type:'',
            content:'',
            measures:'',
            startTime:'',
            complete:false
          },
          {
            parentType: '人际关系',
            count:2,
            type:'',
            content:'',
            measures:'',
            startTime:'',
            complete:false
          },
          {
            parentType: '人际关系',
            count:3,
            type:'',
            content:'',
            measures:'',
            startTime:'',
            complete:false
          },
          {
            parentType: '人际关系',
            count:4,
            type:'',
            content:'',
            measures:'',
            startTime:'',
            complete:false
          }
        ]
      },
      {
        name: '健康计划',
        children: [
          {
            parentType: '健康计划',
            count:1,
            type:'',
            content:'',
            measures:'',
            startTime:'',
            complete:false
          },
          {
            parentType: '健康计划',
            count:2,
            type:'',
            content:'',
            measures:'',
            startTime:'',
            complete:false
          },
          {
            parentType: '健康计划',
            count:3,
            type:'',
            content:'',
            measures:'',
            startTime:'',
            complete:false
          },
          {
            parentType: '健康计划',
            count:4,
            type:'',
            content:'',
            measures:'',
            startTime:'',
            complete:false
          }
        ]
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
    // console.log(index);
    
    if (index === 0) {
      // 点击主页时，返回到主页页面
      wx.navigateTo({
        url: '/pages/index/index',
      });
    } else if (index === 1) {
      this.setData({
        changeIndex: index
      })
      this.onLoad()
    } else if (index === 2) {
      this.setData({
        changeIndex: index
      })
      let data = {
        completionTime: 5,
        userid: wx.getStorageSync('userID')
      }
      let res = await app.myAxios({
        data,
        method: 'post',
        url: '/anonymous/queryBlueprint'
      })
      let {arr2}=this.data
      if (res.statusCode === 200 && res.data.message === '查询成功') {
        let userBluePrint = res.data.result.content
        // console.log(res);
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

    }else{
      this.setData({
        changeIndex: index
      })
      this.viewBlPrint3()
    }
  },
  // 人生蓝图3，更新视图
  async viewBlPrint3(){
    let res=await app.myAxios({
      method:'post',
      url:'/anonymous/queryBlueprintDetailed',
      data:{
        userid:wx.getStorageSync('userID')
      }
    })
    // console.log(res);
    // 更新视图
    // console.log(res);
    if(res.statusCode===200&&res.data.result.content){
      let content=res.data.result.content
      let {cateList}=this.data
      for(let i=0;i<cateList.length;i++){
        content.forEach(v=>{
          if(cateList[i].name===v.parentType){
            cateList[i]['children'][v.count-1]=v
          }
        })
      }
      // 更新页面视图
      this.setData({
        cateList
      })
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
    data.userid=wx.getStorageSync('userID');
    // 同时需要更新视图层
    // let {cateList}=this.data
    // cateList.forEach(v=>{
    //   if(v.name===data.parentType){
    //     v.children[data.count-1]=data
    //   }
    // })
    // this.setData({
    //   cateList
    // })
    // console.log(data);
    let res=await app.myAxios({
      url:'/anonymous/updateBlueprintDetailed',
      method:'post',
      data
    })
    // console.log(res);
    this.viewBlPrint3()
  },
  // 蓝图3类别更新
  async handleCate(e){
    let {value}=e.detail
    let data=e.currentTarget.dataset.info
    data.type=value
    data.userid=wx.getStorageSync('userID');
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
    // console.log(data);
    let res=await app.myAxios({
      url:'/anonymous/updateBlueprintDetailed',
      method:'post',
      data
    })
    this.viewBlPrint3()
  },
  // 蓝图3目标内容更新
  async handleContent(e){
    let {value}=e.detail
    let data=e.currentTarget.dataset.info
    data.content=value
    data.userid=wx.getStorageSync('userID');
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
    // console.log(data);
    let res=await app.myAxios({
      url:'/anonymous/updateBlueprintDetailed',
      method:'post',
      data
    })
    this.viewBlPrint3()
  },
  // 蓝图3方法措施更新
  async handleMeasures(e){
    let {value}=e.detail
    let data=e.currentTarget.dataset.info
    data.measures=value
    data.userid=wx.getStorageSync('userID');
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
    // console.log(data);
    let res=await app.myAxios({
      url:'/anonymous/updateBlueprintDetailed',
      method:'post',
      data
    })
    // console.log(res);
    this.viewBlPrint3()
  },
  // 蓝图3是否完成
  async handleComplete(e){
    let data=e.currentTarget.dataset.info
    data.complete=!data.complete
    data.userid=wx.getStorageSync('userID');
    // 同时需要更新视图层
    if(data.id){
      let {cateList}=this.data
    cateList.forEach(v=>{
      if(v.name===data.parentType){
        v.children[data.count-1]=data
      }
    })
    this.setData({
      cateList
    })
    // console.log(data);
    let res=await app.myAxios({
      url:'/anonymous/updateBlueprintDetailed',
      method:'post',
      data
    })
    }
    
    // console.log(res);
    // this.viewBlPrint3()
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
    // console.log(res);
    if (res.statusCode === 200 && res.data.message === '查询成功') {
      let userBluePrint = res.data.result.content
      // console.log(res);
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