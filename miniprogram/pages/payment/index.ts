Page({
  data: {
    creditScore: 650
  },

  onApply() {
    wx.showToast({
      title: '申请成功',
      icon: 'success'
    });
  }
}); 