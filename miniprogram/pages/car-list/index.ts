interface ICarItem {
	id: string;
	name: string;
	desc: string;
	image: string;
	tags: string[];
	features: string[];
	price: number;
	brand: string;
	energy: string;  // 添加可选的能源类型
	seats: string;   // 添加可选的座位数
	showDetail?: boolean;  // 添加显示详情的状态
}

interface IPageData {
	/** 取车地点 */
	location: string;

	/** 取车时间 */
	pickupTime: string;

	/** 还车时间 */
	returnTime: string;

	/** 当前打开的筛选项：'sort'|'brand'|'price'|'more' */
	currentFilter: string;

	/** 当前选中的标签 */
	currentTag: string;

	/** 排序方式：综合排序/价格升序/价格降序 */
	sortType: 'default' | 'lowToHigh' | 'highToLow';

	/** 车辆列表数据 */
	cars: ICarItem[];

	/** 当前选中的品牌类型，'all'表示不限 */
	brandType: string;

	/** 筛选栏显示的已选品牌 */
	selectedBrand: string;

	/** 可选品牌列表 */
	brands: Array<{
		name: string;
	}>;

	/** 原始车辆列表，用于重置筛选 */
	originalCars?: ICarItem[];

	/** 当前选中的价格区间，'all'表示不限 */
	priceRange: string;

	/** 筛选栏显示的已选价格区间 */
	selectedPrice: string;

	/** 当前选中的能源类型，'all'表示不限 */
	energyType: string;

	/** 当前选中的座位数，'all'表示不限 */
	seatsType: string;

	/** 车型配置选项列表及选中状态 */
	carFeatures: Array<{
		name: string;
		selected: boolean;
	}>;

	/** 已选中的更多筛选项 */
	selectedMore: string[];

	/** 快捷标签列表及选中状态 */
	quickTags: Array<{
		name: string;
		selected: boolean;
	}>;

	/** 筛选栏显示的更多筛选状态 */
	'filter-item'?: {
		/** 更多筛选显示文本 */
		more?: string;
	};

	isLogin: boolean;
}

interface IPageCustom {
	onLoad: (options: Record<string, string | undefined>) => void;
	onEditTime: () => void;
	onFilterTap: (e: WechatMiniprogram.TouchEvent) => void;
	onTagTap: (e: WechatMiniprogram.TouchEvent) => void;
	onCloseFilter: () => void;
	onSortSelect: (e: WechatMiniprogram.TouchEvent) => void;
	sortCars: (type: string) => void;
	onBrandSelect: (e: WechatMiniprogram.TouchEvent) => void;
	onReset: () => void;
	onConfirm: () => void;
	filterCarsByBrand: (brand: string) => void;
	onPriceSelect: (e: WechatMiniprogram.TouchEvent) => void;
	onPriceReset: () => void;
	onPriceConfirm: () => void;
	filterCarsByPrice: (range: string) => void;
	onEnergySelect: (e: WechatMiniprogram.TouchEvent) => void;
	onFeatureSelect: (e: WechatMiniprogram.TouchEvent) => void;
	onSeatsSelect: (e: WechatMiniprogram.TouchEvent) => void;
	onMoreReset: () => void;
	onMoreConfirm: () => void;
	getMoreDisplayText: () => string;
	filterCarsByMore: () => void;
	onQuickTagTap: (e: WechatMiniprogram.TouchEvent) => void;
	filterCarsByFeatures: () => void;
	/** 点击查看车辆详情 */
	onCarItemTap: (e: WechatMiniprogram.TouchEvent) => void;
}

Page<IPageData, IPageCustom>({
	data: {
		/** 取车地点 */
		location: '',

		/** 取车时间 */
		pickupTime: '',

		/** 还车时间 */
		returnTime: '',

		/** 当前打开的筛选项：'sort'|'brand'|'price'|'more' */
		currentFilter: '',

		/** 当前选中的标签 */
		currentTag: 'snow',

		/** 排序方式：综合排序/价格升序/价格降序 */
		sortType: 'default',

		/** 车辆列表数据 */
		cars: [
			{
				id: '1',
				name: '日产轩逸',
				desc: '1.6自动 | 三厢 5座',
				image: '/assets/images/cars/nissan.png',
				tags: ['雪地胎'],
				features: ['车龄2年内', '倒车雷达', '蓝牙连接', '雪地胎'],
				price: 123,
				brand: '日产',
				energy: "汽油",
				seats: "5"
			},
			{
				id: '2',
				name: '雪佛兰科鲁泽',
				desc: '1.5自动 | 三厢 5座',
				image: '/assets/images/cars/chevrolet.png',
				tags: ['雪地胎'],
				features: ['车龄2年内', '倒车影像', '倒车雷达', '蓝牙连接'],
				price: 133,
				brand: '雪佛兰',
				energy: "汽油",
				seats: "5"
			},
			{
				id: '3',
				name: '日产劲客',
				desc: '1.5自动 | SUV 5座',
				image: '/assets/images/nissan-suv.png',
				tags: ['雪地胎'],
				features: ['车龄2年内', '倒车影像', '倒车雷达', '蓝牙连接'],
				price: 143,
				brand: '日产',
				energy: "汽油",
				seats: "5"
			},
			{
				id: '4',
				name: '日产霸道',
				desc: '1.5自动 | SUV 5座',
				image: '/assets/images/cars/nissan-suv.png',
				tags: ['雪地胎'],
				features: ['车龄2年内', '倒车影像', '倒车雷达', '蓝牙连接'],
				price: 243,
				brand: '日产',
				energy: "汽油",
				seats: "5"
			},
			{
				id: '5',
				name: '高尔夫',
				desc: '1.5自动 | SUV 5座',
				image: '/assets/images/cars/nissan-suv.png',
				tags: ['雪地胎'],
				features: ['车龄2年内', '倒车影像', '倒车雷达', '蓝牙连接'],
				price: 443,
				brand: '大众',
				energy: "汽油",
				seats: "5"
			},
			{
				id: '6',
				name: '捷达',
				desc: '1.5自动 | SUV 5座',
				image: '/assets/images/cars/nissan-suv.png',
				tags: ['雪地胎'],
				features: ['车龄2年内', '倒车影像', '倒车雷达', '蓝牙连接'],
				price: 243,
				brand: '大众',
				energy: "汽油",
				seats: "5"
			},
			{
				id: '7',
				name: '坦克300',
				desc: '1.5自动 | SUV 5座',
				image: '/assets/images/cars/nissan-suv.png',
				tags: ['雪地胎'],
				features: ['车龄2年内', '倒车影像', '倒车雷达', '蓝牙连接'],
				price: 543,
				brand: '长城',
				energy: "汽油",
				seats: "5"
			},
			{
				id: '8',
				name: '坦克500',
				desc: '1.5自动 | SUV 5座',
				image: '/assets/images/cars/nissan-suv.png',
				tags: ['雪地胎'],
				features: ['车龄2年内', '倒车影像', '倒车雷达', '蓝牙连接'],
				price: 643,
				brand: '长城',
				energy: "汽油",
				seats: "5"
			}
		],

		/** 当前选中的品牌类型，'all'表示不限 */
		brandType: 'all',

		/** 筛选栏显示的已选品牌 */
		selectedBrand: '',

		/** 可选品牌列表 */
		brands: [
			{ name: '大众' },
			{ name: '长城' },
			{ name: '日产' },
			{ name: '雪佛兰' }
		],

		/** 原始车辆列表，用于重置筛选 */
		originalCars: [
			{
				id: '1',
				name: '日产轩逸',
				desc: '1.6自动 | 三厢 5座',
				image: '/assets/images/cars/nissan.png',
				tags: ['雪地胎'],
				features: ['车龄2年内', '倒车雷达', '蓝牙连接', '雪地胎'],
				price: 123,
				brand: '日产',
				energy: "汽油",
				seats: "5"
			},
			{
				id: '2',
				name: '雪佛兰科鲁泽',
				desc: '1.5自动 | 三厢 5座',
				image: '/assets/images/cars/chevrolet.png',
				tags: ['雪地胎'],
				features: ['车龄2年内', '倒车影像', '倒车雷达', '蓝牙连接'],
				price: 133,
				brand: '雪佛兰',
				energy: "汽油",
				seats: "5"
			},
			{
				id: '3',
				name: '日产劲客',
				desc: '1.5自动 | SUV 5座',
				image: '/assets/images/nissan-suv.png',
				tags: ['雪地胎'],
				features: ['车龄2年内', '倒车影像', '倒车雷达', '蓝牙连接'],
				price: 143,
				brand: '日产',
				energy: "汽油",
				seats: "5"
			},
			{
				id: '4',
				name: '日产霸道',
				desc: '1.5自动 | SUV 5座',
				image: '/assets/images/cars/nissan-suv.png',
				tags: ['雪地胎'],
				features: ['车龄2年内', '倒车影像', '倒车雷达', '蓝牙连接'],
				price: 243,
				brand: '日产',
				energy: "汽油",
				seats: "5"
			},
			{
				id: '5',
				name: '高尔夫',
				desc: '1.5自动 | SUV 5座',
				image: '/assets/images/cars/nissan-suv.png',
				tags: ['雪地胎'],
				features: ['车龄2年内', '倒车影像', '倒车雷达', '蓝牙连接'],
				price: 443,
				brand: '大众',
				energy: "汽油",
				seats: "5"
			},
			{
				id: '6',
				name: '捷达',
				desc: '1.5自动 | SUV 5座',
				image: '/assets/images/cars/nissan-suv.png',
				tags: ['雪地胎'],
				features: ['车龄2年内', '倒车影像', '倒车雷达', '蓝牙连接'],
				price: 243,
				brand: '大众',
				energy: "汽油",
				seats: "5"
			},
			{
				id: '7',
				name: '坦克300',
				desc: '1.5自动 | SUV 5座',
				image: '/assets/images/cars/nissan-suv.png',
				tags: ['雪地胎'],
				features: ['车龄2年内', '倒车影像', '倒车雷达', '蓝牙连接'],
				price: 543,
				brand: '长城',
				energy: "汽油",
				seats: "5"
			},
			{
				id: '8',
				name: '坦克500',
				desc: '1.5自动 | SUV 5座',
				image: '/assets/images/cars/nissan-suv.png',
				tags: ['雪地胎'],
				features: ['车龄2年内', '倒车影像', '倒车雷达', '蓝牙连接'],
				price: 643,
				brand: '长城',
				energy: "汽油",
				seats: "5"
			}
		],

		/** 当前选中的价格区间，'all'表示不限 */
		priceRange: 'all',

		/** 筛选栏显示的已选价格区间 */
		selectedPrice: '',

		/** 当前选中的能源类型，'all'表示不限 */
		energyType: 'all',

		/** 当前选中的座位数，'all'表示不限 */
		seatsType: 'all',

		/** 车型配置选项列表及选中状态 */
		carFeatures: [
			{ name: '倒车影像', selected: false },
			{ name: '倒车雷达', selected: false },
			{ name: '蓝牙连接', selected: false },
			{ name: '雪地胎', selected: false }
		],

		/** 已选中的更多筛选项 */
		selectedMore: [],

		/** 快捷标签列表及选中状态 */
		quickTags: [
			{ name: '雪地胎', selected: false },
			{ name: '倒车影像', selected: false },
			{ name: '倒车雷达', selected: false },
			{ name: '蓝牙连接', selected: false }
		],

		/** 筛选栏显示的更多筛选状态 */
		'filter-item': {
			/** 更多筛选显示文本 */
			more: undefined
		},

		isLogin: false
	},

	/** 加载页面初始数据 */
	onLoad(options: any) {
		if (options.params) {
			try {
				const params = JSON.parse(decodeURIComponent(options.params));
				this.setData({
					location: params.location,
					pickupTime: params.pickupTime,
					returnTime: params.returnTime
				});
			} catch (error) {
				console.error('解析参数失败:', error);
			}
		}

		// 检查登录状态
		const token = wx.getStorageSync('token');
		this.setData({
			isLogin: !!token
		});
	},

	/** 返回上一页修改时间 */
	onEditTime() {
		wx.navigateBack();
	},

	/** 点击筛选项展开/收起下拉菜单 */
	onFilterTap(e: WechatMiniprogram.TouchEvent) {
		const type = e.currentTarget.dataset.type;
		this.setData({
			currentFilter: this.data.currentFilter === type ? '' : type
		});
	},

	/** 关闭筛选下拉菜单 */
	onCloseFilter() {
		this.setData({
			currentFilter: ''
		});
	},

	/** 选择排序方式 */
	onSortSelect(e: WechatMiniprogram.TouchEvent) {
		const type = e.currentTarget.dataset.type;
		this.setData({
			sortType: type,
			currentFilter: ''
		});
		// 根据选择的排序方式重新排序车辆列表
		this.sortCars(type);
	},

	/** 根据选择的方式对车辆列表排序 */
	sortCars(type: string) {
		const cars = [...this.data.cars];
		switch (type) {
			case 'lowToHigh':
				cars.sort((a, b) => a.price - b.price);
				break;
			case 'highToLow':
				cars.sort((a, b) => b.price - a.price);
				break;
			default:
				// 综合排序，可以根据需求实现
				break;
		}
		this.setData({ cars });
	},

	/** 点击标签进行筛选 */
	onTagTap(e: WechatMiniprogram.TouchEvent) {
		const { tag } = e.currentTarget.dataset;
		this.setData({
			currentTag: tag
		});
	},

	/** 选择品牌 */
	onBrandSelect(e: WechatMiniprogram.TouchEvent) {
		const type = e.currentTarget.dataset.type;
		this.setData({
			brandType: type
		});
	},

	/** 重置品牌筛选 */
	onReset() {
		this.setData({
			brandType: 'all'
		});
	},

	/** 确认品牌筛选并更新列表 */
	onConfirm() {
		const selectedBrand = this.data.brandType;
		this.setData({
			currentFilter: '',
			selectedBrand: selectedBrand === 'all' ? '' : selectedBrand
		});

		// 根据选中的品牌筛选车辆
		this.filterCarsByBrand(selectedBrand);
	},

	/** 根据品牌筛选车辆列表 */
	filterCarsByBrand(brand: string) {
		if (brand === 'all') {
			// 重置为原始车辆列表
			this.setData({
				cars: this.data.originalCars || this.data.cars
			});
			return;
		}

		// 筛选对应品牌的车辆，使用严格相等进行比较
		const filteredCars = (this.data.originalCars || this.data.cars).filter(car => {
			console.log(car)
			return car.brand.includes(brand)
		})
		this.setData({
			cars: filteredCars
		});
	},

	/** 选择价格区间 */
	onPriceSelect(e: WechatMiniprogram.TouchEvent) {
		const range = e.currentTarget.dataset.range;
		this.setData({
			priceRange: range
		});
	},

	/** 重置价格筛选 */
	onPriceReset() {
		this.setData({
			priceRange: 'all'
		});
	},

	/** 确认价格筛选并更新列表 */
	onPriceConfirm() {
		const selectedRange = this.data.priceRange;
		let displayText = '';

		// 设置显示文本
		switch (selectedRange) {
			case 'all':
				displayText = '不限';
				break;
			case '0-200':
				displayText = '0-200';
				break;
			case '200-300':
				displayText = '200-300';
				break;
			case '300-500':
				displayText = '300-500';
				break;
			case '500+':
				displayText = '500以上';
				break;
			default:
				displayText = '价格';
		}

		this.setData({
			currentFilter: '',
			selectedPrice: displayText
		});

		// 根据选中的价格区间筛选车辆
		this.filterCarsByPrice(selectedRange);
	},

	/** 根据价格区间筛选车辆列表 */
	filterCarsByPrice(range: string) {
		if (range === 'all') {
			this.setData({
				cars: this.data.originalCars || this.data.cars
			});
			return;
		}

		const filteredCars = (this.data.originalCars || this.data.cars).filter(car => {
			const price = car.price;
			switch (range) {
				case '0-200':
					return price >= 0 && price <= 200;
				case '200-300':
					return price > 200 && price <= 300;
				case '300-500':
					return price > 300 && price <= 500;
				case '500+':
					return price > 500;
				default:
					return true;
			}
		});

		this.setData({
			cars: filteredCars
		});
	},

	/** 选择能源类型 */
	onEnergySelect(e: WechatMiniprogram.TouchEvent) {
		const type = e.currentTarget.dataset.type;
		this.setData({
			energyType: type
		});
	},

	/** 选择车型配置 */
	onFeatureSelect(e: WechatMiniprogram.TouchEvent) {
		const index = e.currentTarget.dataset.index;
		const features = this.data.carFeatures;
		features[index].selected = !features[index].selected;
		this.setData({
			carFeatures: features
		});
	},

	/** 选择座位数 */
	onSeatsSelect(e: WechatMiniprogram.TouchEvent) {
		const type = e.currentTarget.dataset.type;
		this.setData({
			seatsType: type
		});
	},

	/** 重置更多筛选项 */
	onMoreReset() {
		this.setData({
			energyType: 'all',
			seatsType: 'all',
			carFeatures: this.data.carFeatures.map(item => ({
				...item,
				selected: false
			}))
		});
	},

	/** 确认更多筛选并更新列表 */
	onMoreConfirm() {
		const selectedFeatures = this.data.carFeatures
			.filter(item => item.selected)
			.map(item => item.name);

		const moreText = this.getMoreDisplayText();

		this.setData({
			currentFilter: '',
			selectedMore: selectedFeatures
		});

		// 更新筛选栏显示
		if (moreText) {
			this.setData({
				'filter-item.more': moreText
			});
		}

		// 根据选中的条件筛选车辆
		this.filterCarsByMore();
	},

	/** 获取更多筛选的显示文本 */
	getMoreDisplayText() {
		const features = this.data.carFeatures.filter(item => item.selected);
		const energy = this.data.energyType !== 'all' ? '汽油' : '';
		const seats = this.data.seatsType !== 'all' ? '5座' : '';

		const texts = [...features.map(f => f.name), energy, seats].filter(Boolean);

		if (texts.length === 0) return '不限';
		if (texts.length === 1) return texts[0];
		return `已选${texts.length}项`;
	},

	/** 根据更多筛选条件筛选车辆列表 */
	filterCarsByMore() {
		// 检查是否有任何筛选条件被选中
		if (this.data.energyType === 'all' &&
			this.data.seatsType === 'all' &&
			!this.data.carFeatures.some(f => f.selected)) {
			// 如果没有选中任何筛选条件，恢复原始列表
			this.setData({
				cars: this.data.originalCars || this.data.cars
			});
			return;
		}

		const filteredCars = (this.data.originalCars || this.data.cars).filter(car => {
			// 能源类型筛选
			if (this.data.energyType === 'gas' && !car.features.includes('汽油')) {
				return false;
			}

			// 座位数筛选
			if (this.data.seatsType !== 'all' && car.seats !== this.data.seatsType) {
				return false;
			}

			// 配置筛选
			const selectedFeatures = this.data.carFeatures
				.filter(f => f.selected)
				.map(f => f.name);

			// 检查车辆是否包含所有选中的特性
			return selectedFeatures.every(feature => 
				car.features.includes(feature)
			);
		});

		this.setData({
			cars: filteredCars
		});
	},

	/** 点击快捷标签进行筛选 */
	onQuickTagTap(e: WechatMiniprogram.TouchEvent) {
		const index = e.currentTarget.dataset.index;
		const tags = this.data.quickTags;
		tags[index].selected = !tags[index].selected;

		// 更新标签状态
		this.setData({
			quickTags: tags
		});

		// 同步更新更多筛选中的配置选项
		const carFeatures = this.data.carFeatures;
		const tagName = tags[index].name;
		const featureIndex = carFeatures.findIndex(f => f.name === tagName);

		if (featureIndex !== -1) {
			carFeatures[featureIndex].selected = tags[index].selected;
			this.setData({
				carFeatures
			});
		}

		// 根据选中的标签筛选车辆
		this.filterCarsByFeatures();
	},

	/** 根据选中的快捷标签筛选车辆列表 */
	filterCarsByFeatures() {
		const selectedTags = this.data.quickTags
			.filter(tag => tag.selected)
			.map(tag => tag.name);

		if (selectedTags.length === 0) {
			this.setData({
				cars: this.data.originalCars || this.data.cars
			});
			return;
		}

		const filteredCars = (this.data.originalCars || this.data.cars).filter(car =>
			selectedTags.every(tag => car.features.includes(tag))
		);

		this.setData({
			cars: filteredCars
		});
	},

	/** 点击查看车辆详情 */
	onCarItemTap(e: WechatMiniprogram.TouchEvent) {
		const { index } = e.currentTarget.dataset;
		const cars = this.data.cars;
		cars[index].showDetail = !cars[index].showDetail;

		this.setData({
			cars
		});
	},

	onBookCar(e: WechatMiniprogram.TouchEvent) {
		const car = e.currentTarget.dataset.car;
		
		// 检查是否登录
		if (!this.data.isLogin) {
			wx.navigateTo({
				url: '/pages/login/index?from=car-list'
			});
			return;
		}

		// TODO: 已登录，跳转到订单确认页
		console.log('预订车辆:', car);
	}
}); 