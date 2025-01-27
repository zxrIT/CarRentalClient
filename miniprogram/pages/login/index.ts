interface IPageData {
  isAgreed: boolean;
  from: string;  // 来源页面
}

interface ILoginResponse {
  code: number;
  message: string;
  data: {
    token: string;
    userInfo: {
      id: number;
      openid: string;
      nickname: string | null;
      avatarUrl: string | null;
      phoneNumber: string;
      token: string;
      createTime: string;
      updateTime: string;
    }
  }
}

Page<IPageData>({
  data: {
    isAgreed: false,
    from: ''
  },

  onLoad(options) {
    if (options.from) {
      this.setData({ from: options.from });
    }
  },

  // 处理协议勾选
  onAgreementChange(e: WechatMiniprogram.CheckboxGroupChange) {
    this.setData({
      isAgreed: e.detail.value.length > 0
    });
  },

  // 处理获取手机号
  async handleGetPhoneNumber(e: WechatMiniprogram.GetPhoneNumberEvent) {
    try {
      if (!this.data.isAgreed) {
        wx.showToast({
          title: '请先同意服务协议',
          icon: 'none'
        });
        return;
      }

      // 用户拒绝授权
      if (!e.detail.code) {
        wx.showToast({
          title: '需要授权手机号才能登录',
          icon: 'none'
        });
        return;
      }

      // 1. 获取手机号码凭证
      const phoneCode = e.detail.code;
      console.log('获取手机号码凭证成功:', phoneCode);

      // 2. 获取登录凭证
      const loginRes = await wx.login();
      if (!loginRes.code) {
        throw new Error('微信登录失败');
      }

      // 3. 发送凭证到后端换取token和手机号
      const tokenRes = await wx.request<ILoginResponse>({
        url: 'http://localhost:8080/api/wx/login',
        method: 'POST',
        data: {
          code: loginRes.code,
          phoneCode: phoneCode
        },
        header: {
          'content-type': 'application/json'
        }
      });

      console.log('后端返回数据:', tokenRes);

      // 4. 处理响应
      if (tokenRes.statusCode !== 200 || tokenRes.data.code !== 200) {
        throw new Error(tokenRes.data.message || '登录失败');
      }

      const { token, userInfo } = tokenRes.data.data;

      // 5. 保存登录状态
      wx.setStorageSync('token', token);
      if (userInfo) {
        const wxUserInfo: WechatMiniprogram.UserInfo = {
          nickName: userInfo.nickname || '',
          avatarUrl: userInfo.avatarUrl || '',
          gender: 0,
          country: '',
          province: '',
          city: '',
          language: 'zh_CN'
        };
        wx.setStorageSync('userInfo', wxUserInfo);
        this.setData({ userInfo: wxUserInfo });
      }

      // 6. 更新全局状态
      getApp().globalData.isLogin = true;
      getApp().globalData.userInfo = userInfo;

      // 7. 显示成功提示并返回
      wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 1500,
        success: () => {
          setTimeout(() => {
            if (this.data.from === 'car-list') {
              wx.navigateBack();
            } else if (this.data.from === 'mine') {
              wx.navigateBack();
            } else {
              wx.switchTab({
                url: '/pages/index/index'
              });
            }
          }, 1500);
        }
      });

    } catch (error) {
      console.error('登录失败:', error);
      wx.showToast({
        title: error instanceof Error ? error.message : '登录失败',
        icon: 'none',
        duration: 2000
      });
    }
  },

  // 切换手机号
  switchPhone() {
    // TODO: 实现切换手机号逻辑
    wx.showToast({
      title: '切换手机号',
      icon: 'none'
    });
  },

  // 跳转到服务协议
  navigateToAgreement() {
    wx.navigateTo({
      url: '/pages/agreement/index'
    });
  },

  // 暂不登录
  skipLogin() {
    if (this.data.from === 'car-list') {
      wx.navigateBack();
    } else {
      wx.switchTab({
        url: '/pages/index/index'
      });
    }
  },

  // 登录成功后的处理
  handleLoginSuccess() {
    wx.showToast({
      title: '登录成功',
      icon: 'success',
      duration: 1500,
      success: () => {
        setTimeout(() => {
          if (this.data.from === 'car-list') {
            wx.navigateBack();
          } else if (this.data.from === 'mine') {
            wx.navigateBack();
          } else {
            wx.switchTab({
              url: '/pages/index/index'
            });
          }
        }, 1500);
      }
    });
  }
}); 