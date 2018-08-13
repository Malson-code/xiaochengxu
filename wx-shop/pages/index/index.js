//index.js
//获取整个应用实例
const app = getApp()

Page({
  data: {
    middleBtns:[
      { title: '手机', iconPath:"../../imgs/home/mi.png" },
      { title: '电视', iconPath: "../../imgs/home/TV.png" },
      { title: '电脑', iconPath: "../../imgs/home/computer.png" },
      { title: '路由器', iconPath: "../../imgs/home/route.png" },
      { title: '新品', iconPath: "../../imgs/home/zuanshi.png" },
    ],
    imgUrls: [
      '../../imgs/home/1.jpg',
      '../../imgs/home/2.jpg',
      '../../imgs/home/3.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval:3000
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 产品跳转
  product(e){
    let dataset = e.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/index/product/product?id=' + dataset.type
    })
  },
  middleTap(e){
    let id = e.target.id;
    wx.navigateTo({
      url: '/pages/cart/cart?id=1'
    })
  },
  search(){
    wx.navigateTo({
      url: '/pages/index/search/search'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
