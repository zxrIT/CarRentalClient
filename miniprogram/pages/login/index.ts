import { BaseResponse } from "../../response/baseResponse";
import { ILoginResponse, ISubmitLogin } from "../../response/login";
import { requestFunction } from "../../utils/request";

interface IPageData {
	userInfo: WechatMiniprogram.IUser
	isAgreed: boolean;
	from: string;
	carId?: string;
}

Page<IPageData>({
	data: {
		userInfo: {},
		isAgreed: false,
		from: '',
		carId: ''
	},

	onLoad(options) {
		if (options.from) {
			this.setData({ 
				from: options.from,
				carId: options.carId || ''
			});
		}
	},

	// 处理协议勾选
	onAgreementChange(e: WechatMiniprogram.CheckboxGroupChange) {
		this.setData({
			isAgreed: e.detail.value.length > 0
		});
	},

	async handleWechatLogin() {
		try {
			if (!this.data.isAgreed) {
				wx.showToast({
					icon: 'none',
					title: "请先勾选协议后再登录"
				})
				return;
			}
			wx.getUserProfile({
				desc: "必须授权才能使用",
				success: (result) => {
					const submitUser: ISubmitLogin = {
						username: result.userInfo.nickName,
						avatarUrl: result.userInfo.avatarUrl
					}
					requestFunction<BaseResponse<ILoginResponse>>({
						url: "http://localhost:8080/role/login",
						method: "POST",
						data: submitUser
					}).then(response => {
						if (response.code === 200) {
							wx.setStorageSync("user", JSON.stringify(response.data))
							this.setData({
								userInfo: response.data
							})
							wx.showToast({
								title: "登录成功",
								icon: "success",
								duration: 2000
							})
							if (this.data.from === 'car-list' && this.data.carId) {
								wx.navigateTo({
									url: `/pages/car-detail/index?id=${this.data.carId}`
								})
							} else {
								wx.navigateBack()
							}
							return
						}
						wx.showToast({
							title: response.message,
							icon: "error",
							duration: 2000
						})
					})
				}
			})
		} catch (error) {
			console.error('登录失败:', error);
			wx.showToast({
				title: error instanceof Error ? error.message : '登录失败',
				icon: 'none',
				duration: 2000
			});
		}
	},
	skipLogin() {
		if (this.data.from === 'car-list') {
			wx.navigateBack();
		} else {
			wx.switchTab({
				url: '/pages/index/index'
			});
		}
	},
}); 