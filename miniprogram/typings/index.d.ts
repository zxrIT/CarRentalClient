/// <reference path="./types/wx/index.d.ts" />

interface IAppOption {
  globalData: {
    isLogin: boolean;
    userInfo?: WechatMiniprogram.IUser;
  }
} 