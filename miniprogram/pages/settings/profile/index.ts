Page({
  data: {
    isRecommendEnabled: false
  },

  onSwitchChange(e: WechatMiniprogram.SwitchChange) {
    this.setData({
      isRecommendEnabled: e.detail.value
    });
  }
}); 