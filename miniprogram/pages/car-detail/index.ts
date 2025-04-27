import { BaseResponse } from "../../response/baseResponse";
import { requestFunction } from "../../utils/request";
import type { ICarData } from "../../typings/entity/carProduct"
import { ICarDetail } from "../../typings/entity/carDetail";

interface IOrder {
	orderNo: string
	carType: string;
	startTime: string;
	endTime: string;
	amount: number;
	status: number;
	type: string;
	user: string
	userId: string;
}


interface IPageData {
	car: {
		id: string;
		name: string;
		image: string;
		brand: string;
		fuelOilNumber: string
		desc: string;
		price: number;
		volume: number
		features: string[];
		specifications: {
			energy: string;
			displacement: string;
			seats: string;
			transmission: string;
		};
		configurations: {
			airConditioner: string;  // 空调
			airSystem: string;      // 空气系统
			seats: string;          // 座椅
			drivingAssist: string;  // 驾驶辅助
			phoneConnect: string;    // 手机互联
			sunroof: string;        // 天窗
			radar: string;          // 前/后雷达
			tirePressure: string;   // 胎压监测
			bluetooth: string;       // 蓝牙/充电口
			lights: string;         // 远/近光灯
			parking: string;        // 自动驻车
			startup: string;        // 一键启动
		};
	};
	isLogin: boolean;
	currentPage: number;
}

Page<IPageData>({
	data: {
		car: {
			id: '',
			name: '',
			image: '',
			brand: '',
			desc: '',
			volume: 0,
			price: 0,
			features: [],
			fuelOilNumber: "",
			specifications: {
				energy: '',
				displacement: '',
				seats: '',
				transmission: ''
			},
			configurations: {
				airConditioner: '',
				airSystem: '',
				seats: '',
				drivingAssist: '',
				phoneConnect: '',
				sunroof: '',
				radar: '',
				tirePressure: '',
				bluetooth: '',
				lights: '',
				parking: '',
				startup: ''
			}
		},
		isLogin: false,
		currentPage: 0
	},

	onLoad(options) {
		if (options.id) {
			this.fetchCarDetail(options.id);
		}

		// 检查登录状态
		const userStr = wx.getStorageSync('user');
		const user = userStr ? JSON.parse(userStr) : null;
		this.setData({
			isLogin: !!user && Object.keys(user).length > 0
		});
	},

	async fetchCarDetail(id: string) {
		try {
			const response = await requestFunction<BaseResponse<ICarData>>({
				url: `http://localhost:8080/business/car/${id}`,
				method: 'GET'
			});
			const carDetailResponse = await requestFunction<BaseResponse<ICarDetail>>({
				url: "http://localhost:8080/business/deatil/" + id,
				method: 'GET'
			})
			if (response.code === 200) {
				const carData = response.data;
				if (carDetailResponse.code === 200) {
					// 合并详细配置数据
					Object.assign(carData, carDetailResponse.data);
				}
				this.setData({
					car: this.formatCarData(carData)
				});
			}
		} catch (error) {
			console.error('获取车辆详情失败:', error);
			wx.showToast({
				title: '获取车辆详情失败',
				icon: 'none'
			});
		}
	},

	formatCarData(data: any) {
		return {
			id: data.id,
			name: data.name,
			image: "http://localhost:8080/static/" + data.carImage,
			brand: data.brand,
			fuelOilNumber: data.fuelOilNumber,
			desc: `${data.displacement}|${data.specifications}`,
			price: data.currentPrice,
			volume: data.volume,
			features: [data.firstTag, data.secondTag, data.thirdTag, data.fourthTag].filter(Boolean),
			specifications: {
				energy: data.energy,
				displacement: data.displacement,
				seats: data.seats + '座',
				transmission: data.transmission
			},
			configurations: {
				airConditioner: data.autoAirConditioner,
				airSystem: data.airSystem,
				seats: data.chair,
				drivingAssist: data.driverAssistanceImage ? "有" : "无",
				phoneConnect: data.carPlayer ? "有" : "无",
				sunroof: data.skylight ? "有" : "无",
				radar: data.radar ? "有" : "无",
				tirePressure: data.tirePressureMonitoringFunction,
				bluetooth: data.bluetoothUSB,
				lights: data.nearAndFarLightType,
				parking: data.automaticParking ? "有" : "无",
				startup: data.launchWithOneClick ? "有" : "无"
			}
		};
	},

	async onBookNow() {
		if (!this.data.isLogin) {
			wx.navigateTo({
				url: '/pages/login/index?from=car-detail'
			});
			return;
		}

		const app = getApp();
		const userInfo = JSON.parse(wx.getStorageSync("user"))
		const orderObject: IOrder = {
			amount: this.data.car.price * app.globalData.duration,
			startTime: app.globalData.pickTime,
			endTime: app.globalData.returnTime,
			status: 2,
			userId: userInfo.id,
			type: "本人用车",
			user: userInfo.id,
			carType: this.data.car.name,
			orderNo: Date.now().toString(36) + Math.random().toString(36).substr(2, 5)
		}
		const responseOrder = await requestFunction<BaseResponse<string>>({
			url: `http://localhost:8080/business/order/increament`,
			method: 'POST',
			data: orderObject
		});
		if (responseOrder.code === 200) {
			wx.showToast({
				title: '添加成功',
				icon: 'success'
			});
		} else {
			wx.showToast({
				title: responseOrder.data,
				icon: 'error'
			});
		}
	},

	onScrollChange(e: any) {
		const { scrollLeft } = e.detail;
		const pageWidth = wx.getSystemInfoSync().windowWidth - 108; // 减去padding和margin
		const currentPage = Math.round(scrollLeft / pageWidth);
		this.setData({ currentPage });
	}
}); 