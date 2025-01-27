interface IPageData {
  isLogin: boolean;
  userInfo: WechatMiniprogram.UserInfo | null;
}

Page<IPageData>({
  data: {
    isLogin: false,
    userInfo: null
  },

  onShow() {
    // 每次显示页面时检查登录状态
    this.checkLoginStatus();
  },

  checkLoginStatus() {
    const token = wx.getStorageSync('token');
    const userInfo = wx.getStorageSync('userInfo');
    
    this.setData({
      isLogin: !!token,
      userInfo: userInfo || null
    });
  },

  handleLogin() {
    if (!this.data.isLogin) {
      wx.navigateTo({
        url: '/pages/login/index?from=mine'
      });
    }
  },

  navigateTo(e: WechatMiniprogram.TouchEvent) {
    const url = e.currentTarget.dataset.url;
    if (!this.data.isLogin) {
      wx.navigateTo({
        url: '/pages/login/index?from=mine'
      });
      return;
    }
    wx.navigateTo({ url });
  }
}); 