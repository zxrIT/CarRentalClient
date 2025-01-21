import { locationData, ILocationItem } from '../../utils/locationData';

interface IComponentData {
  currentCity: string;
  hotLocations: ILocationItem[];
  allLocations: ILocationItem[];
}

interface IComponentProperties {
  show: boolean;
  cityName: string;
}

Component<IComponentData, IComponentProperties>({
  properties: {
    show: {
      type: Boolean,
      value: false
    },
    cityName: {
      type: String,
      value: ''
    }
  },

  data: {
    currentCity: '',
    hotLocations: [],
    allLocations: []
  },

  observers: {
    'cityName': function(cityName: string) {
      if (cityName && locationData[cityName]) {
        this.setData({
          currentCity: cityName,
          hotLocations: locationData[cityName].hotLocations,
          allLocations: locationData[cityName].allLocations
        });
      } else {
        this.setData({
          currentCity: '',
          hotLocations: [],
          allLocations: []
        });
      }
    }
  },

  methods: {
    onClose() {
      this.triggerEvent('close');
    },

    onLocationSelect(e: WechatMiniprogram.TouchEvent) {
      const { location } = e.currentTarget.dataset;
      if (location && this.data.currentCity === this.properties.cityName) {
        this.triggerEvent('select', { location });
        this.onClose();
      }
    }
  }
}); 