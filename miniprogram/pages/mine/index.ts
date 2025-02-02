interface IPageData {
	isLogin: boolean;
	userInfo: WechatMiniprogram.IUser;
}

interface IPageMethods {
	onShow: () => void;
	checkLoginStatus: () => void;
	handleLogin: () => void;
	navigateTo: (e: WechatMiniprogram.TouchEvent) => void;
}

Page<IPageData, IPageMethods>({
	data: {
		isLogin: false,
		userInfo: {} as WechatMiniprogram.IUser
	},

	onShow() {
		this.checkLoginStatus();
	},

	checkLoginStatus() {
		const userInfo = JSON.parse(wx.getStorageSync('user'));
		this.setData({
			isLogin: Object.keys(userInfo).length > 0,
			userInfo: userInfo || {}
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