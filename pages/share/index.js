const app = getApp();
import regeneratorRuntime from '../../lib/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shareArray1:[
      {
        type:'1',
        content:''
      },
      {
        type:'1',
        content:''
      },
      {
        type:'1',
        content:''
      },
    ],
    shareArray2:[
      {
        type:'2',
        content:''
      },
      {
        type:'2',
        content:''
      },
      {
        type:'2',
        content:''
      },
    ],
    shareArray3:[
      {
        type:'3',
        content:''
      },
      {
        type:'3',
        content:''
      },
      {
        type:'3',
        content:''
      },
    ],
    year:'',
    week:''
  },
  // 返回上一页
  handleBack(){
    wx.navigateBack({
      delta: 1
    });
  },
  // 更新数据
  async handleUpdateSummary(e){
    let {value}=e.detail
    let {info}=e.currentTarget.dataset
    let data={
      content:value,
      type:info.type,
      timeSign:+('' + this.data.year + this.data.week),
      userid:wx.getStorageSync('userID')
    }
    if(info.id){
      data.id=info.id
    }
    console.log(data);
    let res=await app.myAxios({
      method:'post',
      url:'/anonymous/updateShare',
      data
    })
    console.log(res);
    if(res.statusCode===200){
      this.getWeekShare()
    }
  },
  // 获取本周分享数据
  async getWeekShare(){
    let data={
      timeSign: +('' + this.data.year + this.data.week),
      userid:wx.getStorageSync('userID')
    }
    let res=await app.myAxios({
      method:'post',
      url:'/anonymous/queryShare',
      data
    })
    if(res.statusCode===200){
      let {result}=res.data
      let {shareArray1,shareArray2,shareArray3}=this.data
      // shareArray1=[
      //   {
      //     type:'1',
      //     content:''
      //   },
      //   {
      //     type:'1',
      //     content:''
      //   },
      //   {
      //     type:'1',
      //     content:''
      //   },
      // ],
      // shareArray2=[
      //   {
      //     type:'2',
      //     content:''
      //   },
      //   {
      //     type:'2',
      //     content:''
      //   },
      //   {
      //     type:'2',
      //     content:''
      //   },
      // ],
      // shareArray3=[
      //   {
      //     type:'3',
      //     content:''
      //   },
      //   {
      //     type:'3',
      //     content:''
      //   },
      //   {
      //     type:'3',
      //     content:''
      //   },
      // ]
      let j=0;
      let k=0;
      let g=0;
      result.forEach(v => {
        if(v.type==='1'){
          shareArray1[j]=v
          shareArray1.length=3
          j++
        }
        if(v.type==='2'){
          shareArray2[k]=v
          shareArray2.length=3
          k++
        }
        if(v.type==='3'){
          shareArray3[g]=v
          shareArray3.length=3
          g++
        }
      });
      this.setData({
        shareArray1,shareArray2,shareArray3
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let {year,week}=options
    this.setData({
      year,week
    })
    this.getWeekShare()
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