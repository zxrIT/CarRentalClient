interface ITimePickerData {
  currentDate: number;
  minDate: number;
  maxDate: number;
  showCalendar: boolean;
  showTime: boolean;
  selectedDate: string;
  selectedTime: string;
  timeArray: string[];
  duration: number;
  days: Array<{
    day: number;
    disabled: boolean;
    selected: boolean;
    isToday: boolean;
    inRange: boolean;
  }>;
  currentMonth: string;
  weekDay: string;
  pickupDate: string;
  pickupTime: string;
  pickupWeekDay: string;
  returnDate: string;
  returnTime: string;
  returnWeekDay: string;
  isSelectingReturn: boolean;
}

interface ITimePickerProps {
  show: boolean;
  type: 'pickup' | 'return';
  currentTime: string;
  minTime: number;
}

interface IComponentData {
  show: boolean;
  days: Array<{
    day: number;
    disabled: boolean;
    selected: boolean;
    inRange: boolean;
  }>;
  pickupDate: string;
  pickupTime: string;
  pickupWeekDay: string;
  returnDate: string;
  returnTime: string;
  returnWeekDay: string;
  duration: number;
  isSelectingReturn: boolean;
  timeArray: string[];
  showTime: boolean;
}

Component<IComponentData>({
  properties: {
    show: {
      type: Boolean,
      value: false
    },
    type: {
      type: String,
      value: 'pickup'
    }
  },

  data: {
    days: [],
    pickupDate: '',
    pickupTime: '14:30',
    pickupWeekDay: '',
    returnDate: '',
    returnTime: '14:30',
    returnWeekDay: '',
    duration: 0,
    isSelectingReturn: false,
    timeArray: [
      '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
      '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
      '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
      '20:00', '20:30', '21:00', '21:30', '22:00'
    ],
    showTime: false
  },

  observers: {
    'show': function(show: boolean) {
      if (show) {
        const now = new Date();
        this.initCalendar(now);
      }
    }
  },

  methods: {
    initCalendar(date: Date) {
      const year = date.getFullYear();
      const month = date.getMonth();
      const today = date.getDate();
      
      // 获取当月第一天是星期几
      const firstDay = new Date(year, month, 1).getDay();
      // 获取当月天数
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      
      const days = [];
      // 添加上个月的占位天数
      for (let i = 0; i < firstDay; i++) {
        days.push({ day: 0, disabled: true, selected: false, isToday: false, inRange: false });
      }
      
      // 添加当月天数
      for (let i = 1; i <= daysInMonth; i++) {
        days.push({
          day: i,
          disabled: i < today,
          selected: i === today,
          isToday: i === today,
          inRange: false
        });
      }

      // 设置默认取车时间为今天
      const todayStr = `${(month + 1).toString().padStart(2, '0')}月${today.toString().padStart(2, '0')}日`;
      const weekDay = ['日', '一', '二', '三', '四', '五', '六'][date.getDay()];

      this.setData({
        days,
        currentMonth: `${year}年${month + 1}月`,
        pickupDate: todayStr,
        pickupWeekDay: weekDay,
        pickupTime: '14:30',
        isSelectingReturn: false
      });

      // 如果已有取车时间，标记选中状态
      if (this.data.pickupDate) {
        const pickupDay = parseInt(this.data.pickupDate.split('月')[1].split('日')[0]);
        days.forEach(d => {
          if (d.day === pickupDay) {
            d.selected = true;
          }
        });
        this.setData({ days });
      }
    },

    onDayClick(e: any) {
      const { index } = e.currentTarget.dataset;
      const day = this.data.days[index];
      
      if (day.disabled || !day.day) return;
      
      const date = new Date();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const dayStr = day.day.toString().padStart(2, '0');
      const selectedDate = `${month}月${dayStr}日`;
      const weekDay = ['日', '一', '二', '三', '四', '五', '六'][new Date(date.getFullYear(), date.getMonth(), day.day).getDay()];

      // 更新选中状态
      const days = this.data.days.map(d => ({
        ...d,
        selected: false,
        inRange: false
      }));

      if (this.data.isSelectingReturn) {
        // 选择还车时间
        const pickupDay = parseInt(this.data.pickupDate.split('月')[1].split('日')[0]);
        const returnDay = day.day;

        if (returnDay < pickupDay) {
          wx.showToast({
            title: '还车时间必须晚于取车时间',
            icon: 'none'
          });
          return;
        }

        // 标记日期范围
        days.forEach(d => {
          if (d.day >= pickupDay && d.day <= returnDay) {
            d.inRange = true;
            if (d.day === pickupDay || d.day === returnDay) {
              d.selected = true;
            }
          }
        });

        // 计算租期（不足一天按一天计算）
        const pickupTimestamp = this.getTimestamp(`${this.data.pickupDate} ${this.data.pickupTime}`);
        const returnTimestamp = this.getTimestamp(`${selectedDate} ${this.data.returnTime}`);
        const duration = Math.ceil((returnTimestamp - pickupTimestamp) / (24 * 60 * 60 * 1000));
        
        this.setData({
          days,
          returnDate: selectedDate,
          returnWeekDay: weekDay,
          duration: Math.max(1, duration) // 确保最小为1天
        });
      } else {
        // 选择取车时间
        days[index].selected = true;
        this.setData({
          days,
          pickupDate: selectedDate,
          pickupWeekDay: weekDay,
          isSelectingReturn: true,  // 自动切换到选择还车时间
          returnDate: '',  // 清空还车时间
          returnTime: '14:30',
          duration: 0
        });
      }
    },

    onClose() {
      this.setData({
        showCalendar: false,
        showTime: false
      });
      this.triggerEvent('close');
    },

    onCalendarConfirm(e: any) {
      const date = new Date(e.detail);
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      const weekDay = ['日', '一', '二', '三', '四', '五', '六'][date.getDay()];
      
      this.setData({
        selectedDate: `${month}月${day}日`,
        showCalendar: false,
        showTime: true,
        selectedTime: '14:30'
      });
    },

    onTimeSelect(e: any) {
      const selectedTime = e.currentTarget.dataset.time;
      
      if (this.data.isSelectingReturn) {
        // 检查是否晚于取车时间
        const pickupTimestamp = this.getTimestamp(`${this.data.pickupDate} ${this.data.pickupTime}`);
        const returnTimestamp = this.getTimestamp(`${this.data.returnDate} ${selectedTime}`);
        
        if (pickupTimestamp && returnTimestamp && returnTimestamp <= pickupTimestamp) {
          wx.showToast({
            title: '还车时间必须晚于取车时间',
            icon: 'none'
          });
          return;
        }
      }

      this.setData({
        [this.data.isSelectingReturn ? 'returnTime' : 'pickupTime']: selectedTime,
        showTime: false
      });
    },

    onTimeConfirm() {
      if (!this.data.pickupDate || !this.data.pickupTime) {
        wx.showToast({
          title: '请选择取车时间',
          icon: 'none'
        });
        return;
      }

      if (!this.data.returnDate || !this.data.returnTime) {
        wx.showToast({
          title: '请选择还车时间',
          icon: 'none'
        });
        return;
      }

      this.triggerEvent('confirm', {
        pickup: {
          date: this.data.pickupDate,
          time: this.data.pickupTime,
          weekDay: this.data.pickupWeekDay,
          timestamp: this.getTimestamp(`${this.data.pickupDate} ${this.data.pickupTime}`)
        },
        return: {
          date: this.data.returnDate,
          time: this.data.returnTime,
          weekDay: this.data.returnWeekDay,
          timestamp: this.getTimestamp(`${this.data.returnDate} ${this.data.returnTime}`)
        },
        duration: this.data.duration
      });

      this.setData({
        show: false
      });
     },

    onClear() {
      this.setData({
        pickupDate: '',
        pickupTime: '14:30',
        returnDate: '',
        returnTime: '14:30',
        duration: 0,
        isSelectingReturn: false
      });
      this.initCalendar(new Date());
    },

    getTimestamp(timeStr: string): number {
      const [datePart, timePart] = timeStr.split(' ');
      const [month, day] = datePart.replace(/[月日]/g, ':').split(':').filter(Boolean);
      const [hour, minute] = timePart.split(':');
      
      const date = new Date();
      date.setMonth(parseInt(month) - 1);
      date.setDate(parseInt(day));
      date.setHours(parseInt(hour));
      date.setMinutes(parseInt(minute));
      return date.getTime();
    },

    parseTimeString(timeStr: string): number | null {
      if (!timeStr) return null;
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

    switchToPickup() {
      this.setData({
        isSelectingReturn: false
      });
    },

    switchToReturn() {
      if (!this.data.pickupDate) {
        wx.showToast({
          title: '请先选择取车时间',
          icon: 'none'
        });
        return;
      }
      this.setData({
        isSelectingReturn: true
      });
    },

    showTimeSelect() {
      this.setData({
        showTime: true
      });
    },

    hideTimeSelect() {
      this.setData({
        showTime: false
      });
    }
  }
}); 