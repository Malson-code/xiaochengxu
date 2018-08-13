// plugins/bg/bg.js
Component({
  properties: {
    
  },
  data: {
    // 这里是一些组件内部数据
    animationData: {}
  },
  methods: {
    // 这里是一个自定义方法
    bgClick(){
      this.triggerEvent('myevent', {}, {})
    }
  },
  attached() {
  },
  ready(e) {
  },
});