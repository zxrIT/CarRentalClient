import { cityGroups, hotCities } from '../../utils/cityData';

Component({
  properties: {
    show: {
      type: Boolean,
      value: false
    }
  },

  data: {
    cityGroups,
    hotCities,
    scrollIntoView: '',
    letters: Object.keys(cityGroups)
  },

  methods: {
    onClose() {
      this.triggerEvent('close');
    },

    onCitySelect(e: any) {
      const { city } = e.currentTarget.dataset;
      this.triggerEvent('select', { city });
      this.onClose();
    },

    onLetterTap(e: any) {
      const { letter } = e.currentTarget.dataset;
      this.setData({
        scrollIntoView: letter
      });
    }
  }
}); 