// plugins/loading/loading.js

/**
 * loadingShow 暂时有4个值可传入  
 * loading  success  error  warning
 */
Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    loadingShow: String,
    duration: String
  },
  data: {
    // 这里是一些组件内部数据
    animationData: {},
    iconSrc:'',
    loadingText:'',
    textColor:'',
  },
  methods: {
  },
  attached() {
    let loadingShow = this.data.loadingShow;
    let iconSrc = '', loadingText = '', textColor='#fff';
    switch (loadingShow){
      case "loading":
        iconSrc = '/imgs/loading.svg';
        loadingText = '加载中...';
        break;
      case "success":
        iconSrc = '/imgs/success.svg';
        loadingText = '成功';
        textColor = '#1afa29';
        break;
      case "warning":
        iconSrc = '/imgs/warning.svg';
        loadingText = '警告';
        break;
      case "error":
        iconSrc = '/imgs/error.svg';
        loadingText = '错误';
        textColor = '#d81e06';
        break;
      default :
        break;
    };
    this.setData({
      iconSrc,
      loadingText,
      textColor
    })
  },
})