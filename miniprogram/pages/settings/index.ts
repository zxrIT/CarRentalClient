interface IPageData {
  isWechatBound: boolean;
}

interface IPageMethods {
  onLogout: () => void;
  navigateTo: (e: WechatMiniprogram.TouchEvent) => void;
}

Page<IPageData, IPageMethods>({
  data: {
    isWechatBound: true
  },

  navigateTo(e: WechatMiniprogram.TouchEvent) {
    const url = e.currentTarget.dataset.url;
    wx.navigateTo({ url });
  },

  onLogout() {
    wx.showModal({
      title: '提示',
      content: '确定要退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          wx.clearStorageSync();
          wx.showToast({
            title: '已退出登录',
            icon: 'success',
            duration: 2000
          });
          setTimeout(() => {
            wx.switchTab({
              url: '/pages/index/index'
            });
          }, 2000);
        }
      }
    });
  }
}); 