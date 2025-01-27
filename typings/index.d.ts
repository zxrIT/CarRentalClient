/// <reference path="./types/wx/index.d.ts" />

interface IAppOption {
  globalData: {
    isLogin: boolean;
    userInfo: WechatMiniprogram.UserInfo | null;
  }
  checkLoginStatus: () => Promise<boolean>;
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback
}

interface IVantDatetimePickerEvent {
  detail: number;
}

interface IVantPopupEvent {
  detail: {
    value: boolean;
  }
}

interface ITimePickerProps {
  show: boolean;
  type: 'pickup' | 'return';
  currentTime: string;
}

interface ITimePickerData {
  currentDate: number;
  minDate: number;
  maxDate: number;
}

interface ITimeSelectEvent {
  detail: {
    type: 'pickup' | 'return';
    time: string;
    timestamp: number;
  }
}