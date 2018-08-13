import names from '../../../utils/utils.names.js';

let PopAnimate = require('../../../plugins/popBottom/GetAnimate.js')

Page({
  data: {
   imgPathList: [
     "./imgs/1.jpg",
     "./imgs/2.jpg",
     "./imgs/3.jpg"
   ],
   picPathList:[
     "./imgs/pic-1.jpg",
     "./imgs/pic-2.jpg",
     "./imgs/pic-3.jpg",
     "./imgs/pic-4.jpg"
   ],
    commentList:[
      {
        logoPath:"imgs/comment-admin.jpg",
        name:"我是名称",
        time:"2018-12-14",
        comment:"这是我要说的话，话有点多，但是我还是想说，你是最强的malson，相信自己才能相信未来有你！",
        picList: ['imgs/comment-admin.jpg', 'imgs/comment-admin.jpg','imgs/comment-admin.jpg']
      },
      {
        logoPath: "imgs/comment-admin.jpg",
        name: "哈哈哈",
        time: "2112-03-19",
        comment: "我哈哈哈哈",
        picList: ['imgs/comment-admin.jpg',]
      },
      {
        logoPath: "imgs/comment-admin.jpg",
        name: "我是太阳",
        time: "1535-89-65",
        comment: "代表太阳咋地咋地咋地你",
        picList: ['imgs/comment-admin.jpg', 'imgs/comment-admin.jpg', 'imgs/comment-admin.jpg', 'imgs/comment-admin.jpg', 'imgs/comment-admin.jpg', 'imgs/comment-admin.jpg', 'imgs/comment-admin.jpg']
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    title:'',
    showType:1,
    loading:'',
    bottomPopType:''
  },
  comment(e){
    let showType = e.currentTarget.dataset.type;
    this.setData({ showType });
  },
  action(e){
    wx.showActionSheet({
      itemList: ['随便选择A', '随便选择B', '随便选择C'],
      success: function (res) {
        console.log(res.tapIndex)
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },
  onLoad: function (options) {
    let title = names(options.id);
    wx.setNavigationBarTitle({
      title
    });
    this.setData({title})
  },
  onReady(){
    this.cancelLoading();
  },
  error() {
    this.setData({
      bottomPopType: '1'
    })
  },
  warning() {
    this.setData({
      loading: 'warning'
    })
    this.cancelLoading();
  },
  purchase(){
    this.setData({
      loading: 'success'
    })
    this.cancelLoading();
  },
  cancelLoading(){
    setTimeout(() => {this.setData({loading: ''})}, 1000)
  },
  onMyEvent(){
    setTimeout(() => {
      this.setData({
        bottomPopType: ''
      })
    }, 200);
    this.selectComponent("#popBottom").setData({ animationData: PopAnimate('down')})
  }
})
