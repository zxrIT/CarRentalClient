type DataType = {
  pickupTime: string;
  returnTime: string;
  currentFilter: 'all' | 'brand' | 'price' | 'more';
  tags: Array<{
    id: string;
    name: string;
    active: boolean;
  }>;
  cars: Array<{
    id: string;
    name: string;
    desc: string;
    image: string;
    tags: string[];
    features: string[];
    price: number;
    totalPrice: number;
  }>;
}

interface IPageCustom {
  // 自定义方法
  onEditTime: () => void;
  onFilterTap: (e: WechatMiniprogram.TouchEvent) => void;
  onTagTap: (e: WechatMiniprogram.TouchEvent) => void;
  onCarTap: (e: WechatMiniprogram.TouchEvent) => void;
}

interface ICarItem {
  id: string;
  name: string;
  desc: string;
  image: string;
  tags: string[];
  features: string[];
  price: number;
}

Page<DataType, IPageCustom>({
  data: {
    pickupTime: '',
    returnTime: '',
    currentFilter: 'all',
    tags: [
      { id: '1', name: '雪地胎', active: false },
      { id: '2', name: '倒车影像', active: false },
      { id: '3', name: '倒车雷达', active: false },
      { id: '4', name: '蓝牙连接', active: false }
    ],
    cars: [
      {
        id: '1',
        name: '日产轩逸',
        desc: '1.6自动 | 三厢 5座',
        image: '/assets/images/cars/nissan.png',
        tags: ['车龄2年内'],
        features: ['倒车影像', '倒车雷达', '蓝牙连接'],
        price: 123,
        totalPrice: 369
      },
      {
        id: '2',
        name: '雪佛兰科鲁泽',
        desc: '1.5自动 | 三厢 5座',
        image: '/assets/images/cars/chevrolet.png',
        tags: ['车龄2年内', '倒车影像', '倒车雷达'],
        features: ['蓝牙连接'],
        price: 133,
        totalPrice: 399
      },
      {
        id: '3',
        name: '日产劲客',
        desc: '1.5自动 | SUV 5座',
        image: '/assets/images/cars/nissan-suv.png',
        tags: ['车龄2年内'],
        features: ['倒车影像', '倒车雷达', '蓝牙连接'],
        price: 143,
        totalPrice: 429
      }
    ]
  } as DataType,

  onLoad(options: Record<string, string>) {
    if (options.pickupTime && options.returnTime) {
      this.setData({
        pickupTime: options.pickupTime,
        returnTime: options.returnTime
      });
    }
  },

  onEditTime() {
    wx.navigateBack();
  },

  onFilterTap(e: WechatMiniprogram.TouchEvent) {
    const type = e.currentTarget.dataset.type as 'all' | 'brand' | 'price' | 'more';
    this.setData({
      currentFilter: type
    });
  },

  onTagTap(e: WechatMiniprogram.TouchEvent) {
    const { id } = e.currentTarget.dataset;
    const tags = this.data.tags.map(tag => ({
      ...tag,
      active: tag.id === id ? !tag.active : tag.active
    }));
    this.setData({ tags });
  },

  onCarTap(e: WechatMiniprogram.TouchEvent) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/car-detail/index?id=${id}`
    });
  }
}); 