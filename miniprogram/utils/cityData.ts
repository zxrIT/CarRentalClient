interface ICityItem {
  name: string;
  code: string;
  pinyin: string;
  level?: string; // 城市等级：一线/二线/三线
}

// 按拼音首字母分组的城市数据
export const cityGroups: { [key: string]: ICityItem[] } = {
  'A': [
    { name: '安庆', code: '340800', pinyin: 'anqing', level: '三线' },
    { name: '安阳', code: '410500', pinyin: 'anyang', level: '三线' },
    { name: '阿克苏', code: '652900', pinyin: 'akesu', level: '三线' }
  ],
  'B': [
    { name: '北京', code: '110000', pinyin: 'beijing', level: '一线' },
    { name: '保定', code: '130600', pinyin: 'baoding', level: '三线' },
    { name: '包头', code: '150200', pinyin: 'baotou', level: '三线' },
    { name: '宝鸡', code: '610300', pinyin: 'baoji', level: '三线' },
    { name: '滨州', code: '371600', pinyin: 'binzhou', level: '三线' }
  ],
  'C': [
    { name: '长沙', code: '430100', pinyin: 'changsha', level: '二线' },
    { name: '成都', code: '510100', pinyin: 'chengdu', level: '一线' },
    { name: '重庆', code: '500000', pinyin: 'chongqing', level: '一线' },
    { name: '长春', code: '220100', pinyin: 'changchun', level: '二线' },
    { name: '常州', code: '320400', pinyin: 'changzhou', level: '二线' }
  ],
  'D': [
    { name: '大连', code: '210200', pinyin: 'dalian', level: '二线' },
    { name: '东莞', code: '441900', pinyin: 'dongguan', level: '二线' },
    { name: '大庆', code: '230600', pinyin: 'daqing', level: '三线' },
    { name: '德州', code: '371400', pinyin: 'dezhou', level: '三线' }
  ],
  'F': [
    { name: '佛山', code: '440600', pinyin: 'foshan', level: '二线' },
    { name: '福州', code: '350100', pinyin: 'fuzhou', level: '二线' },
    { name: '抚顺', code: '210400', pinyin: 'fushun', level: '三线' }
  ],
  'G': [
    { name: '广州', code: '440100', pinyin: 'guangzhou', level: '一线' },
    { name: '贵阳', code: '520100', pinyin: 'guiyang', level: '二线' },
    { name: '桂林', code: '450300', pinyin: 'guilin', level: '三线' }
  ],
  'H': [
    { name: '哈尔滨', code: '230100', pinyin: 'haerbin', level: '二线' },
    { name: '杭州', code: '330100', pinyin: 'hangzhou', level: '一线' },
    { name: '合肥', code: '340100', pinyin: 'hefei', level: '二线' },
    { name: '呼和浩特', code: '150100', pinyin: 'huhehaote', level: '二线' },
    { name: '海口', code: '460100', pinyin: 'haikou', level: '二线' },
    { name: '惠州', code: '441300', pinyin: 'huizhou', level: '三线' }
  ],
  'J': [
    { name: '济南', code: '370100', pinyin: 'jinan', level: '二线' },
    { name: '嘉兴', code: '330400', pinyin: 'jiaxing', level: '三线' },
    { name: '金华', code: '330700', pinyin: 'jinhua', level: '三线' },
    { name: '江门', code: '440700', pinyin: 'jiangmen', level: '三线' }
  ],
  'K': [
    { name: '昆明', code: '530100', pinyin: 'kunming', level: '二线' },
    { name: '克拉玛依', code: '650200', pinyin: 'kelamayi', level: '三线' }
  ],
  'L': [
    { name: '兰州', code: '620100', pinyin: 'lanzhou', level: '二线' },
    { name: '洛阳', code: '410300', pinyin: 'luoyang', level: '三线' },
    { name: '柳州', code: '450200', pinyin: 'liuzhou', level: '三线' },
    { name: '拉萨', code: '540100', pinyin: 'lasa', level: '三线' }
  ],
  'M': [
    { name: '绵阳', code: '510700', pinyin: 'mianyang', level: '三线' },
    { name: '马鞍山', code: '340500', pinyin: 'maanshan', level: '三线' }
  ],
  'N': [
    { name: '南京', code: '320100', pinyin: 'nanjing', level: '一线' },
    { name: '南昌', code: '360100', pinyin: 'nanchang', level: '二线' },
    { name: '宁波', code: '330200', pinyin: 'ningbo', level: '二线' },
    { name: '南宁', code: '450100', pinyin: 'nanning', level: '二线' }
  ],
  'Q': [
    { name: '青岛', code: '370200', pinyin: 'qingdao', level: '二线' },
    { name: '泉州', code: '350500', pinyin: 'quanzhou', level: '二线' },
    { name: '秦皇岛', code: '130300', pinyin: 'qinhuangdao', level: '三线' }
  ],
  'S': [
    { name: '上海', code: '310000', pinyin: 'shanghai', level: '一线' },
    { name: '深圳', code: '440300', pinyin: 'shenzhen', level: '一线' },
    { name: '苏州', code: '320500', pinyin: 'suzhou', level: '一线' },
    { name: '沈阳', code: '210100', pinyin: 'shenyang', level: '二线' },
    { name: '石家庄', code: '130100', pinyin: 'shijiazhuang', level: '二线' }
  ],
  'T': [
    { name: '天津', code: '120000', pinyin: 'tianjin', level: '一线' },
    { name: '太原', code: '140100', pinyin: 'taiyuan', level: '二线' },
    { name: '唐山', code: '130200', pinyin: 'tangshan', level: '三线' },
    { name: '台州', code: '331000', pinyin: 'taizhou', level: '三线' }
  ],
  'W': [
    { name: '武汉', code: '420100', pinyin: 'wuhan', level: '一线' },
    { name: '无锡', code: '320200', pinyin: 'wuxi', level: '二线' },
    { name: '温州', code: '330300', pinyin: 'wenzhou', level: '二线' },
    { name: '乌鲁木齐', code: '650100', pinyin: 'wulumuqi', level: '二线' }
  ],
  'X': [
    { name: '西安', code: '610100', pinyin: 'xian', level: '一线' },
    { name: '厦门', code: '350200', pinyin: 'xiamen', level: '二线' },
    { name: '徐州', code: '320300', pinyin: 'xuzhou', level: '三线' },
    { name: '西宁', code: '630100', pinyin: 'xining', level: '三线' }
  ],
  'Y': [
    { name: '烟台', code: '370600', pinyin: 'yantai', level: '三线' },
    { name: '银川', code: '640100', pinyin: 'yinchuan', level: '三线' },
    { name: '宜昌', code: '420500', pinyin: 'yichang', level: '三线' },
    { name: '玉溪', code: '530400', pinyin: 'yuxi', level: '三线' }
  ],
  'Z': [
    { name: '郑州', code: '410100', pinyin: 'zhengzhou', level: '二线' },
    { name: '中山', code: '442000', pinyin: 'zhongshan', level: '三线' },
    { name: '珠海', code: '440400', pinyin: 'zhuhai', level: '二线' },
    { name: '淄博', code: '370300', pinyin: 'zibo', level: '三线' }
  ]
};

// 热门城市
export const hotCities: ICityItem[] = [
  { name: '北京', code: '110000', pinyin: 'beijing', level: '一线' },
  { name: '上海', code: '310000', pinyin: 'shanghai', level: '一线' },
  { name: '广州', code: '440100', pinyin: 'guangzhou', level: '一线' },
  { name: '深圳', code: '440300', pinyin: 'shenzhen', level: '一线' },
  { name: '成都', code: '510100', pinyin: 'chengdu', level: '一线' },
  { name: '重庆', code: '500000', pinyin: 'chongqing', level: '一线' }
];

export default {
  cityGroups,
  hotCities
}; 