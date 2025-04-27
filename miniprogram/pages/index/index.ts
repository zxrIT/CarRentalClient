interface IPageData {
  bannerList: string[];
  pickupCityName: string;    // 取车城市
  returnCityName: string;    // 还车城市
  pickupLocation: string;    // 取车网点
  returnLocation: string;    // 还车网点
  pickupTime: string;
  returnTime: string;
  duration: number;
  showCityPicker: boolean;
  showLocationPicker: boolean;
  showTimePicker: boolean;
  isReturnDifferentCity: boolean;  // 是否异地还车
  pickingReturnCity: boolean;      // 是否正在选择还车城市
  pickingReturnLocation: boolean;  // 是否正在选择还车网点
  distance: string;  // 添加距离属性
  pickingReturnTime: boolean;
  minTime: number;  // 添加 minTime 属性
  pickupWeekDay: string;
  returnWeekDay: string;
  pickupDate: string;
  returnDate: string;
}

// 定义城市选择事件的数据结构
interface ICitySelectEvent {
  detail: {
    city: {
      name: string;
      code: string;
      pinyin: string;
      level: string;
    }
  }
}

// 定义网点选择事件的数据结构
interface ILocationSelectEvent {
  detail: {
    location: {
      id: string;
      name: string;
      address: string;
      isHot?: boolean;
    }
  }
}

// 定义点击事件的数据结构
interface IClickEvent {
  currentTarget: {
    dataset: {
      type: 'pickup' | 'return';
    }
  }
}

// 定义时间选择事件的数据结构
interface ITimeSelectEvent {
  detail: {
    type: 'pickup' | 'return';
    time: string;
    timestamp: number;
  }
}

Page<IPageData>({
  data: {
    bannerList: [
      '/assets/images/banner1.png',
      '/assets/images/banner2.png',
      '/assets/images/banner3.png'
    ],
    pickupCityName: '',
    returnCityName: '',
    pickupLocation: '',
    returnLocation: '',
    pickupTime: '',
    returnTime: '',
    duration: 0,
    showCityPicker: false,
    showLocationPicker: false,
    showTimePicker: false,
    isReturnDifferentCity: false,
    pickingReturnCity: false,
    pickingReturnLocation: false,
    distance: '',  // 初始化距离为空
    pickingReturnTime: false,
    minTime: 0,  // 初始化 minTime
    pickupWeekDay: '',
    returnWeekDay: '',
    pickupDate: '',
    returnDate: ''
  },

  onLoad() {
    this.setNearestCity();
  },

  // 获取最近的城市
  async setNearestCity() {
    try {
      // 获取位置权限
      const setting = await wx.getSetting();
      if (!setting.authSetting['scope.userLocation']) {
        await wx.authorize({ scope: 'scope.userLocation' });
      }

      // 获取当前位置
      const location = await wx.getLocation({
        type: 'gcj02'
      });

      // 调用腾讯地图API获取城市信息
      wx.request({
        url: `https://apis.map.qq.com/ws/geocoder/v1/?location=${location.latitude},${location.longitude}&key=你的key值`,
        success: (res: WechatMiniprogram.RequestSuccessCallbackResult) => {
          const data = (res as any).data;
          if (data.status === 0) {
            const cityName = data.result.address_component.city.replace('市', '');
            this.setData({
              pickupCityName: cityName,
              returnCityName: cityName
            });
          }
        },
        fail: () => {
          // 定位失败时默认北京
          this.setData({
            pickupCityName: '北京',
            returnCityName: '北京'
          });
        }
      });
    } catch (error) {
      // 获取位置失败时默认北京
      this.setData({
        pickupCityName: '北京',
        returnCityName: '北京'
      });
    }
  },

  // 切换异地还车开关
  onReturnDifferentCityChange(e: WechatMiniprogram.SwitchChange) {
    const isReturnDifferentCity = e.detail.value;
    this.setData({
      isReturnDifferentCity,
      returnCityName: isReturnDifferentCity ? '' : this.data.pickupCityName,
      returnLocation: isReturnDifferentCity ? '' : this.data.pickupLocation,
      distance: ''  // 清空距离
    });
  },

  // 点击选择城市
  handleCityClick(e: IClickEvent) {
    const { type } = e.currentTarget.dataset;
    this.setData({
      showCityPicker: true,
      pickingReturnCity: type === 'return'
    });
  },

  // 点击选择网点
  handleLocationSelect(e: IClickEvent) {
    const { type } = e.currentTarget.dataset;
    this.setData({
      showLocationPicker: true,
      pickingReturnLocation: type === 'return'
    });
  },

  // 城市选择回调
  onCitySelect(e: ICitySelectEvent) {
    if (e.detail && e.detail.city) {
      if (this.data.pickingReturnCity) {
        this.setData({
          returnCityName: e.detail.city.name,
          returnLocation: '',
          showCityPicker: false
        });
      } else {
        this.setData({
          pickupCityName: e.detail.city.name,
          pickupLocation: '',
          showCityPicker: false,
          returnCityName: this.data.isReturnDifferentCity ? this.data.returnCityName : e.detail.city.name,
          returnLocation: this.data.isReturnDifferentCity ? this.data.returnLocation : ''
        });
      }
    }
  },

  // 网点选择回调
  onLocationSelect(e: ILocationSelectEvent) {
    if (e.detail && e.detail.location) {
      if (this.data.pickingReturnLocation) {
        this.setData({
          returnLocation: e.detail.location.name,
          showLocationPicker: false
        });
        // 如果是异地还车且已选择了取车网点，计算距离
        if (this.data.isReturnDifferentCity && this.data.pickupLocation) {
          this.calculateDistance(
            this.data.pickupLocation,
            e.detail.location.name
          );
        }
      } else {
        this.setData({
          pickupLocation: e.detail.location.name,
          showLocationPicker: false,
          returnLocation: this.data.isReturnDifferentCity ? this.data.returnLocation : e.detail.location.name
        });
        // 如果是异地还车且已选择了还车网点，计算距离
        if (this.data.isReturnDifferentCity && this.data.returnLocation) {
          this.calculateDistance(
            e.detail.location.name,
            this.data.returnLocation
          );
        }
      }
    }
  },

  // 关闭城市选择器
  onCityPickerClose() {
    this.setData({
      showCityPicker: false
    });
  },

  // 关闭网点选择器
  onLocationPickerClose() {
    this.setData({
      showLocationPicker: false
    });
  },

  // 点击选择时间
  handleTimeSelect(e: WechatMiniprogram.TouchEvent) {
    const { type } = e.currentTarget.dataset as { type: 'pickup' | 'return' };
    let minTime = 0;
    
    // 如果是选择还车时间，设置最小时间为取车时间
    if (type === 'return' && this.data.pickupTime) {
      const pickupDate = this.parseTimeString(this.data.pickupTime);
      if (pickupDate) {
        minTime = pickupDate;
      }
    }
    this.setData({
      showTimePicker: true,
      pickingReturnTime: type === 'return',
      minTime
    });
  },

  parseTimeString(timeStr: string): number | null {
    try {
      const [month, day, hour, minute] = timeStr.replace(/[年月日时分]/g, ':').split(':');
      const date = new Date();
      date.setMonth(parseInt(month) - 1);
      date.setDate(parseInt(day));
      date.setHours(parseInt(hour));
      date.setMinutes(parseInt(minute));
      return date.getTime();
    } catch (error) {
      console.error('时间格式解析错误:', error);
      return null;
    }
  },

  onTimeSelect(e: any) {
    const { pickup, return: returnData, duration } = e.detail;
    
    this.setData({
      pickupTime: `${pickup.date} ${pickup.time}`,
      returnTime: `${returnData.date} ${returnData.time}`,
      duration,
      pickupWeekDay: pickup.weekDay,
      returnWeekDay: returnData.weekDay,
      showTimePicker: false
    });
  },

  onTimePickerClose() {
    this.setData({
      showTimePicker: false
    });
  },

  // 计算两个网点之间的距离
  async calculateDistance(from: string, to: string) {
    try {
      // 先获取网点的经纬度
      const fromLocation = await this.getLocationByAddress(this.data.pickupCityName + from);
      const toLocation = await this.getLocationByAddress(this.data.returnCityName + to);
      
      if (fromLocation && toLocation) {
        // 调用距离计算API
        wx.request({
          url: `https://apis.map.qq.com/ws/distance/v1/?mode=driving&from=${fromLocation.lat},${fromLocation.lng}&to=${toLocation.lat},${toLocation.lng}&key=你的key值`,
          success: (res: WechatMiniprogram.RequestSuccessCallbackResult) => {
            const data = (res as any).data;
            if (data.status === 0 && data.result.elements?.[0]) {
              const distance = data.result.elements[0].distance;
              // 转换为公里并保留一位小数
              const distanceInKm = (distance / 1000).toFixed(1);
              this.setData({
                distance: `距您${distanceInKm}km`
              });
            }
          }
        });
      }
    } catch (error) {
      console.error('计算距离失败:', error);
    }
  },

  // 根据地址获取经纬度
  getLocationByAddress(address: string): Promise<{lat: number; lng: number} | null> {
    return new Promise((resolve) => {
      wx.request({
        url: `https://apis.map.qq.com/ws/geocoder/v1/?address=${encodeURIComponent(address)}&key=你的key值`,
        success: (res: WechatMiniprogram.RequestSuccessCallbackResult) => {
          const data = (res as any).data;
          if (data.status === 0 && data.result?.location) {
            resolve({
              lat: data.result.location.lat,
              lng: data.result.location.lng
            });
          } else {
            resolve(null);
          }
        },
        fail: () => resolve(null)
      });
    });
  },

  // 获取优惠提示文本
  getDiscountText() {
    return `${this.data.pickupCityName || '当前城市'}出发异地还车费，限时特惠 0 元起`;
  },

  handleViewAll() {
    wx.navigateTo({
      url: '/pages/features/index'
    });
  },

  onSelectCar() {
    // 检查是否已选择必要信息
    if (!this.data.pickupCityName || !this.data.pickupLocation) {
      wx.showToast({
        title: '请选择取车城市和网点',
        icon: 'none'
      });
      return;
    }

    if (!this.data.pickupTime) {
      wx.showToast({
        title: '请选择取车时间',
        icon: 'none'
      });
      return;
    }

    if (!this.data.returnTime) {
      wx.showToast({
        title: '请选择还车时间',
        icon: 'none'
      });
      return;
    }

    // 构造完整的时间和地点信息
    const params = {
      location: this.data.pickupLocation,
      pickupTime: `${this.data.pickupDate} ${this.data.pickupTime}周${this.data.pickupWeekDay}`,
      returnTime: `${this.data.returnDate} ${this.data.returnTime}周${this.data.returnWeekDay}`
    };

    // 跳转到选车页面
    wx.navigateTo({
      url: `/pages/car-list/index?params=${encodeURIComponent(JSON.stringify(params))}`
    });
  }
}); 