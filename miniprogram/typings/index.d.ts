/// <reference path="./types/wx/index.d.ts" />

interface IAppOption {
	globalData: {
		isLogin: boolean;
		duration: number;
		pickTime: Date;
		returnTime: Date
		userInfo?: WechatMiniprogram.IUser;
	}
} 