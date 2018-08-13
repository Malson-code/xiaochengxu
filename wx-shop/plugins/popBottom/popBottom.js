// plugins/popBottom/popBottom.js

let GetAnimate  = require('./GetAnimate.js');

Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: String,
    name: String,
    show: Boolean
  },
  data: {
    // 这里是一些组件内部数据
    animationData: {}
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function () { },
    popBottomOut(){
      let animationData = GetAnimate('down');
      this.setData({
        animationData
      })
      setTimeout(()=>{
        this.triggerEvent('myevent', {}, {})
      },200);
    }
  },
  attached(){
  },
  ready(e){
    let show = this.data.show;
    let animationData;
    if (show !== 'hidden'){
      animationData = GetAnimate('up');
    }else{
      animationData = GetAnimate('down');
    }
    this.setData({
      animationData
    })
  }
})