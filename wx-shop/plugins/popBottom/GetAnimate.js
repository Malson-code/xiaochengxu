// 获取  公共animate方法

module.exports = function( type = 'down'){
  let animation = wx.createAnimation({
    duration: 200,
    timingFunction: 'linear',
  })
  let bottom = "";
  if(type === 'down'){
    bottom = '-700rpx';
  }
  else if (type === 'up') {
    bottom = 0;
  }
  animation.bottom(bottom).step();
  return animation.export();
}