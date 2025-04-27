interface IGlobalData {
	isLogin: boolean;
	duration: number;
	userInfo: WechatMiniprogram.UserInfo | null;
}

App<IAppOption>({
	globalData: {
		isLogin: false,
		duration: 0,
		userInfo: undefined
	},

	async checkLoginStatus(): Promise<boolean> {
		try {
			const token = wx.getStorageSync('token');
			if (!token) {
				this.globalData.isLogin = false;
				return false;
			}

			// TODO: 验证 token 有效性
			this.globalData.isLogin = true;
			return true;
		} catch (error) {
			console.error('检查登录状态失败:', error);
			this.globalData.isLogin = false;
			return false;
		}
	},

	onLaunch() {
		// 启动时检查登录状态
		this.checkLoginStatus();
	}
}) 