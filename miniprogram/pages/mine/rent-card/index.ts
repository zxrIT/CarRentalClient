Page({
  data: {
    cards: []
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
  }
}); 