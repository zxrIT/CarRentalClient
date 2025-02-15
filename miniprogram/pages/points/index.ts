Page({
  data: {
    userPoints: 0,
    points: [
      {
        amount: 100,
        type: '租车券',
        title: '满1000减100优惠券',
        points: 4399,
        status: '兑换'
      },
      {
        amount: 80,
        type: '租车券',
        title: '满2天减80元优惠券',
        points: 3599,
        status: '兑换'
      },
      {
        amount: 50,
        type: '租车券',
        title: '50元优惠券',
        points: 2299,
        status: '兑换'
      },
      {
        amount: 30,
        type: '租车券',
        title: '30元优惠券',
        points: 1399,
        status: '兑换'
      },
      {
        amount: 10,
        type: '租车券',
        title: '10元优惠券',
        points: 399,
        status: '兑换'
      }
    ]
  },

  onShow() {
    this.getUserPoints();
  },

  getUserPoints() {
    const userInfo = JSON.parse(wx.getStorageSync('user') || '{}');
    if (userInfo) {
      this.setData({
        userPoints: userInfo.points || 789
      });
    }
  },

  exchangePoints(e: WechatMiniprogram.TouchEvent) {
    const index = e.currentTarget.dataset.index;
    const item = this.data.points[index];
    wx.showModal({
      title: '确认兑换',
      content: `确定使用${item.points}积分兑换${item.title}吗？`,
      success: (res) => {
        if (res.confirm) {
          wx.showToast({
            title: '兑换成功',
            icon: 'success'
          });
        }
      }
    });
  }
}); 