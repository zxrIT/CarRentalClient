Page({
  data: {
    activeTab: 0,
    tabs: ['优惠券', '随心租', '活动奖品'],
    coupons: [
      {
        amount: 80,
        title: '延时还车权益',
        validTime: '2024.04.12 - 2025.04.12',
        desc: '点击查看优惠券介绍'
      }
    ]
  },

  onTabChange(e: WechatMiniprogram.TouchEvent) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      activeTab: index
    });
  },

  onHistoryTap() {
    wx.navigateTo({
      url: '/pages/coupon/history/index'
    });
  },

  onPurchaseTap() {
    wx.navigateTo({
      url: '/pages/coupon/purchase/index'
    });
  },

  showCouponDetail() {
    wx.showModal({
      title: '优惠券使用说明',
      content: '此优惠券可用于延时还车，每次最多延长2小时。',
      showCancel: false,
      confirmText: '我知道了'
    });
  }
}); 