import { BaseResponse } from '../../response/baseResponse';
import { requestFunction } from '../../utils/request';

interface IOrder {
	orderNo: string;
	carType: string;
	startTime: string;
	endTime: string;
	amount: number;
	status: number;
	type: string;
	userId: string;
}

interface IOrderDisplay extends IOrder {
	days: number;
	startTimeStr: string;
	endTimeStr: string;
	statusStr: string;
}

Page({
	data: {
		currentTab: 'all', // all, waiting, using, returned
		orders: [] as IOrder[],
		filteredOrders: []
	},
	switchStatus(event: any) {
		wx.navigateTo({
			url:"/pages/orders/index?status="+event.mark.status
		})
	},

	onLoad(options) {
		const type = options.status || 'all';
		this.setData({ currentTab: type });
		this.getOrderList(type);
	},

	onTabChange(e: WechatMiniprogram.TouchEvent) {
		const tab = e.currentTarget.dataset.tab;
		this.setData({ currentTab: tab });
		this.getOrderList(tab);
	},

	async getOrderList(status = 'all') {
		try {
			const user = wx.getStorageSync('user');
			if (!user) {
				return;
			}
			const userId = JSON.parse(user).id;

			const response = await requestFunction<BaseResponse<IOrder[]>>({
				url: `http://localhost:8080/business/find/user/order/${userId}`,
				method: 'GET'
			});
			if (response.code === 200) {
				let orders = response.data;
				if (status !== 'all') {
					orders = orders.filter(order => {
						if (status === 'waiting') return order.status === 2;
						if (status === 'using') return order.status === 1;
						if (status === 'returned') return order.status === 0;
						return true;
					});
				}
				this.setData({ filteredOrders: orders });
			}
		} catch (error) {
			console.error('获取订单列表失败:', error);
			wx.showToast({
				title: '获取订单列表失败',
				icon: 'none'
			});
		}
	},

	filterOrders(type: string) {
		this.setData({ currentTab: type });
		this.getOrderList(type);
	}
}); 