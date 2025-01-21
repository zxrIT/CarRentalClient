export interface ILocationItem {
  id: string;
  name: string;
  address: string;
  distance?: string;
  isHot?: boolean;
}

export interface ICityLocations {
  [cityName: string]: {
    hotLocations: ILocationItem[];
    allLocations: ILocationItem[];
  };
}

export const locationData: ICityLocations = {
  "北京": {
    hotLocations: [
      { id: "bj001", name: "首都机场T3航站楼", address: "首都机场3号航站楼到达层", isHot: true },
      { id: "bj002", name: "北京南站", address: "北京南站交通枢纽", isHot: true },
      { id: "bj003", name: "大兴机场", address: "大兴机场航站楼到达层", isHot: true }
    ],
    allLocations: [
      { id: "bj004", name: "西单商圈", address: "西单北大街120号" },
      { id: "bj005", name: "望京SOHO", address: "望京商业中心" },
      { id: "bj006", name: "中关村科技园", address: "海淀区中关村大街" }
    ]
  },
  "上海": {
    hotLocations: [
      { id: "sh001", name: "虹桥机场T2", address: "虹桥机场2号航站楼到达层", isHot: true },
      { id: "sh002", name: "虹桥火车站", address: "虹桥火车站商业广场", isHot: true },
      { id: "sh003", name: "浦东机场T2", address: "浦东机场2号航站楼到达层", isHot: true }
    ],
    allLocations: [
      { id: "sh004", name: "陆家嘴中心", address: "浦东新区陆家嘴环路" },
      { id: "sh005", name: "徐家汇", address: "徐汇区虹桥路" },
      { id: "sh006", name: "静安寺", address: "静安区南京西路" }
    ]
  },
  "广州": {
    hotLocations: [
      { id: "gz001", name: "白云机场T2", address: "白云机场2号航站楼到达层", isHot: true },
      { id: "gz002", name: "广州南站", address: "广州南站综合交通枢纽", isHot: true },
      { id: "gz003", name: "天河城", address: "天河区天河路", isHot: true }
    ],
    allLocations: [
      { id: "gz004", name: "珠江新城", address: "天河区珠江新城" },
      { id: "gz005", name: "北京路", address: "越秀区北京路" },
      { id: "gz006", name: "广州塔", address: "海珠区阅江西路" }
    ]
  },
  "深圳": {
    hotLocations: [
      { id: "sz001", name: "宝安机场T3", address: "宝安区机场大道", isHot: true },
      { id: "sz002", name: "深圳北站", address: "龙华区民治街道", isHot: true },
      { id: "sz003", name: "华强北", address: "福田区华强北路", isHot: true }
    ],
    allLocations: [
      { id: "sz004", name: "科技园", address: "南山区科技中一路" },
      { id: "sz005", name: "海岸城", address: "南山区文心五路" },
      { id: "sz006", name: "万象城", address: "罗湖区宝安南路" }
    ]
  },
  "成都": {
    hotLocations: [
      { id: "cd001", name: "双流机场T2", address: "双流区航空港", isHot: true },
      { id: "cd002", name: "成都东站", address: "成华区成渝立交", isHot: true },
      { id: "cd003", name: "春熙路", address: "锦江区春熙路", isHot: true }
    ],
    allLocations: [
      { id: "cd004", name: "太古里", address: "锦江区中纱帽街" },
      { id: "cd005", name: "天府广场", address: "青羊区人民中路" },
      { id: "cd006", name: "环球中心", address: "武侯区天府大道" }
    ]
  },
  "重庆": {
    hotLocations: [
      { id: "cq001", name: "江北机场T3", address: "渝北区江北机场", isHot: true },
      { id: "cq002", name: "重庆北站", address: "渝北区重庆北站", isHot: true },
      { id: "cq003", name: "解放碑", address: "渝中区解放碑", isHot: true }
    ],
    allLocations: [
      { id: "cq004", name: "观音桥", address: "江北区观音桥" },
      { id: "cq005", name: "南坪", address: "南岸区南坪" },
      { id: "cq006", name: "杨家坪", address: "九龙坡区杨家坪" }
    ]
  },
  "杭州": {
    hotLocations: [
      { id: "hz001", name: "萧山机场", address: "萧山区机场路", isHot: true },
      { id: "hz002", name: "杭州东站", address: "江干区杭州东站", isHot: true },
      { id: "hz003", name: "西湖", address: "西湖区南山路", isHot: true }
    ],
    allLocations: [
      { id: "hz004", name: "武林广场", address: "下城区武林广场" },
      { id: "hz005", name: "钱江新城", address: "江干区钱江新城" },
      { id: "hz006", name: "滨江", address: "滨江区滨江大道" }
    ]
  },
  "南京": {
    hotLocations: [
      { id: "nj001", name: "禄口机场", address: "江宁区禄口机场", isHot: true },
      { id: "nj002", name: "南京南站", address: "雨花台区南京南站", isHot: true },
      { id: "nj003", name: "新街口", address: "玄武区新街口", isHot: true }
    ],
    allLocations: [
      { id: "nj004", name: "夫子庙", address: "秦淮区夫子庙" },
      { id: "nj005", name: "河西万达", address: "建邺区河西万达" },
      { id: "nj006", name: "江宁万达", address: "江宁区江宁万达" }
    ]
  },
  "武汉": {
    hotLocations: [
      { id: "wh001", name: "天河机场T3", address: "黄陂区天河机场", isHot: true },
      { id: "wh002", name: "汉口火车站", address: "江岸区汉口火车站", isHot: true },
      { id: "wh003", name: "武汉站", address: "洪山区武汉火车站", isHot: true }
    ],
    allLocations: [
      { id: "wh004", name: "光谷", address: "洪山区光谷广场" },
      { id: "wh005", name: "武商广场", address: "江汉区武商广场" },
      { id: "wh006", name: "汉街", address: "武昌区汉街" }
    ]
  },
  "西安": {
    hotLocations: [
      { id: "xa001", name: "咸阳机场", address: "咸阳市机场大道", isHot: true },
      { id: "xa002", name: "西安北站", address: "未央区西安北站", isHot: true },
      { id: "xa003", name: "钟楼", address: "碑林区钟楼", isHot: true }
    ],
    allLocations: [
      { id: "xa004", name: "大雁塔", address: "雁塔区大雁塔" },
      { id: "xa005", name: "小寨", address: "雁塔区小寨" },
      { id: "xa006", name: "高新万达", address: "雁塔区高新万达" }
    ]
  },
  "天津": {
    hotLocations: [
      { id: "tj001", name: "滨海机场T2", address: "东丽区滨海国际机场", isHot: true },
      { id: "tj002", name: "天津站", address: "河北区天津站", isHot: true },
      { id: "tj003", name: "滨江道", address: "和平区滨江道", isHot: true }
    ],
    allLocations: [
      { id: "tj004", name: "天津之眼", address: "红桥区天津之眼" },
      { id: "tj005", name: "文化中心", address: "河西区文化中心" },
      { id: "tj006", name: "意风区", address: "南开区意风区" }
    ]
  },
  "长沙": {
    hotLocations: [
      { id: "cs001", name: "黄花机场T2", address: "长沙县黄花机场", isHot: true },
      { id: "cs002", name: "长沙南站", address: "雨花区长沙南站", isHot: true },
      { id: "cs003", name: "五一广场", address: "芙蓉区五一广场", isHot: true }
    ],
    allLocations: [
      { id: "cs004", name: "橘子洲", address: "岳麓区橘子洲" },
      { id: "cs005", name: "梅溪湖", address: "岳麓区梅溪湖" },
      { id: "cs006", name: "步行街", address: "天心区黄兴路" }
    ]
  },
  "青岛": {
    hotLocations: [
      { id: "qd001", name: "流亭机场", address: "城阳区流亭机场", isHot: true },
      { id: "qd002", name: "青岛北站", address: "城阳区青岛北站", isHot: true },
      { id: "qd003", name: "五四广场", address: "市南区五四广场", isHot: true }
    ],
    allLocations: [
      { id: "qd004", name: "栈桥", address: "市南区栈桥" },
      { id: "qd005", name: "啤酒街", address: "市北区登州路" },
      { id: "qd006", name: "万达广场", address: "李沧区万达广场" }
    ]
  },
  "厦门": {
    hotLocations: [
      { id: "xm001", name: "高崎机场", address: "湖里区高崎机场", isHot: true },
      { id: "xm002", name: "厦门北站", address: "集美区厦门北站", isHot: true },
      { id: "xm003", name: "中山路", address: "思明区中山路", isHot: true }
    ],
    allLocations: [
      { id: "xm004", name: "鼓浪屿", address: "思明区鼓浪屿" },
      { id: "xm005", name: "环岛路", address: "思明区环岛路" },
      { id: "xm006", name: "SM广场", address: "湖里区SM广场" }
    ]
  },
  "济南": {
    hotLocations: [
      { id: "jn001", name: "遥墙机场", address: "历城区遥墙机场", isHot: true },
      { id: "jn002", name: "济南西站", address: "槐荫区济南西站", isHot: true },
      { id: "jn003", name: "泉城广场", address: "历下区泉城广场", isHot: true }
    ],
    allLocations: [
      { id: "jn004", name: "大明湖", address: "历下区大明湖" },
      { id: "jn005", name: "趵突泉", address: "历下区趵突泉" },
      { id: "jn006", name: "济南站", address: "天桥区济南站" }
    ]
  },
  "无锡": {
    hotLocations: [
      { id: "wx001", name: "硕放机场", address: "新区硕放机场", isHot: true },
      { id: "wx002", name: "无锡站", address: "崇安区无锡站", isHot: true },
      { id: "wx003", name: "三阳广场", address: "梁溪区三阳广场", isHot: true }
    ],
    allLocations: [
      { id: "wx004", name: "太湖广场", address: "滨湖区太湖广场" },
      { id: "wx005", name: "惠山古镇", address: "惠山区惠山古镇" },
      { id: "wx006", name: "无锡东站", address: "锡山区无锡东站" }
    ]
  },
  "宁波": {
    hotLocations: [
      { id: "nb001", name: "栎社机场", address: "江北区栎社机场", isHot: true },
      { id: "nb002", name: "宁波站", address: "海曙区宁波站", isHot: true },
      { id: "nb003", name: "天一广场", address: "海曙区天一广场", isHot: true }
    ],
    allLocations: [
      { id: "nb004", name: "老外滩", address: "江北区老外滩" },
      { id: "nb005", name: "鼓楼", address: "海曙区鼓楼" },
      { id: "nb006", name: "宁波南站", address: "鄞州区宁波南站" }
    ]
  },
  "福州": {
    hotLocations: [
      { id: "fz001", name: "长乐机场", address: "长乐区长乐机场", isHot: true },
      { id: "fz002", name: "福州南站", address: "晋安区福州南站", isHot: true },
      { id: "fz003", name: "东街口", address: "鼓楼区东街口", isHot: true }
    ],
    allLocations: [
      { id: "fz004", name: "三坊七巷", address: "鼓楼区三坊七巷" },
      { id: "fz005", name: "西湖公园", address: "鼓楼区西湖公园" },
      { id: "fz006", name: "万达广场", address: "仓山区万达广场" }
    ]
  },
  "苏州": {
    hotLocations: [
      { id: "sz001", name: "苏南硕放机场", address: "相城区苏南机场", isHot: true },
      { id: "sz002", name: "苏州北站", address: "高新区苏州北站", isHot: true },
      { id: "sz003", name: "观前街", address: "姑苏区观前街", isHot: true }
    ],
    allLocations: [
      { id: "sz004", name: "金鸡湖", address: "工业园区金鸡湖" },
      { id: "sz005", name: "平江路", address: "姑苏区平江路" },
      { id: "sz006", name: "诚品书店", address: "工业园区诚品书店" }
    ]
  },
  "合肥": {
    hotLocations: [
      { id: "hf001", name: "新桥机场", address: "新站区新桥机场", isHot: true },
      { id: "hf002", name: "合肥南站", address: "蜀山区合肥南站", isHot: true },
      { id: "hf003", name: "之心城", address: "蜀山区之心城", isHot: true }
    ],
    allLocations: [
      { id: "hf004", name: "大蜀山", address: "蜀山区大蜀山" },
      { id: "hf005", name: "科学岛", address: "包河区科学岛" },
      { id: "hf006", name: "万达广场", address: "庐阳区万达广场" }
    ]
  },
  "郑州": {
    hotLocations: [
      { id: "zz001", name: "新郑机场", address: "新郑市新郑机场", isHot: true },
      { id: "zz002", name: "郑州东站", address: "郑东新区郑州东站", isHot: true },
      { id: "zz003", name: "二七广场", address: "二七区二七广场", isHot: true }
    ],
    allLocations: [
      { id: "zz004", name: "中原万达", address: "中原区中原万达" },
      { id: "zz005", name: "郑东新区", address: "郑东新区CBD" },
      { id: "zz006", name: "德化街", address: "管城区德化街" }
    ]
  },
  "沈阳": {
    hotLocations: [
      { id: "sy001", name: "桃仙机场", address: "浑南区桃仙机场", isHot: true },
      { id: "sy002", name: "沈阳北站", address: "沈河区沈阳北站", isHot: true },
      { id: "sy003", name: "中街", address: "沈河区中街", isHot: true }
    ],
    allLocations: [
      { id: "sy004", name: "太原街", address: "和平区太原街" },
      { id: "sy005", name: "奥体中心", address: "浑南区奥体中心" },
      { id: "sy006", name: "万象城", address: "铁西区万象城" }
    ]
  },
  "大连": {
    hotLocations: [
      { id: "dl001", name: "周水子机场", address: "甘井子区周水子机场", isHot: true },
      { id: "dl002", name: "大连站", address: "中山区大连站", isHot: true },
      { id: "dl003", name: "星海广场", address: "沙河口区星海广场", isHot: true }
    ],
    allLocations: [
      { id: "dl004", name: "老虎滩", address: "中山区老虎滩" },
      { id: "dl005", name: "罗斯福", address: "中山区罗斯福" },
      { id: "dl006", name: "开发区万达", address: "开发区万达广场" }
    ]
  },
  "南宁": {
    hotLocations: [
      { id: "nn001", name: "吴圩机场", address: "江南区吴圩机场", isHot: true },
      { id: "nn002", name: "南宁东站", address: "江南区南宁东站", isHot: true },
      { id: "nn003", name: "万象城", address: "青秀区万象城", isHot: true }
    ],
    allLocations: [
      { id: "nn004", name: "朝阳广场", address: "兴宁区朝阳广场" },
      { id: "nn005", name: "青秀山", address: "青秀区青秀山" },
      { id: "nn006", name: "民族大道", address: "青秀区民族大道" }
    ]
  },
  "贵阳": {
    hotLocations: [
      { id: "gy001", name: "龙洞堡机场", address: "小河区龙洞堡机场", isHot: true },
      { id: "gy002", name: "贵阳北站", address: "观山湖区贵阳北站", isHot: true },
      { id: "gy003", name: "喷水池", address: "南明区喷水池", isHot: true }
    ],
    allLocations: [
      { id: "gy004", name: "花果园", address: "南明区花果园" },
      { id: "gy005", name: "甲秀楼", address: "南明区甲秀楼" },
      { id: "gy006", name: "观山湖公园", address: "观山湖区观山湖公园" }
    ]
  },
  "昆明": {
    hotLocations: [
      { id: "km001", name: "长水机场", address: "官渡区长水机场", isHot: true },
      { id: "km002", name: "昆明南站", address: "官渡区昆明南站", isHot: true },
      { id: "km003", name: "南屏街", address: "五华区南屏街", isHot: true }
    ],
    allLocations: [
      { id: "km004", name: "滇池", address: "西山区滇池" },
      { id: "km005", name: "大观楼", address: "五华区大观楼" },
      { id: "km006", name: "昆明站", address: "盘龙区昆明站" }
    ]
  },
  "石家庄": {
    hotLocations: [
      { id: "sjz001", name: "正定机场", address: "正定县正定机场", isHot: true },
      { id: "sjz002", name: "石家庄站", address: "桥西区石家庄站", isHot: true },
      { id: "sjz003", name: "勒泰中心", address: "长安区勒泰中心", isHot: true }
    ],
    allLocations: [
      { id: "sjz004", name: "北国商城", address: "桥西区北国商城" },
      { id: "sjz005", name: "人民广场", address: "长安区人民广场" },
      { id: "sjz006", name: "万达广场", address: "裕华区万达广场" }
    ]
  },
  "太原": {
    hotLocations: [
      { id: "ty001", name: "武宿机场", address: "小店区武宿机场", isHot: true },
      { id: "ty002", name: "太原南站", address: "小店区太原南站", isHot: true },
      { id: "ty003", name: "柳巷", address: "迎泽区柳巷", isHot: true }
    ],
    allLocations: [
      { id: "ty004", name: "万达广场", address: "小店区万达广场" },
      { id: "ty005", name: "迎泽公园", address: "迎泽区迎泽公园" },
      { id: "ty006", name: "龙城大街", address: "迎泽区龙城大街" }
    ]
  },
  "长春": {
    hotLocations: [
      { id: "cc001", name: "龙嘉机场", address: "龙嘉机场", isHot: true },
      { id: "cc002", name: "长春站", address: "宽城区长春站", isHot: true },
      { id: "cc003", name: "解放路", address: "朝阳区解放路", isHot: true }
    ],
    allLocations: [
      { id: "cc004", name: "欧亚商都", address: "朝阳区工农大路" },
      { id: "cc005", name: "长影世纪城", address: "绿园区长影世纪城" },
      { id: "cc006", name: "伊通河", address: "南关区伊通河" }
    ]
  },
  "哈尔滨": {
    hotLocations: [
      { id: "hrb001", name: "太平机场", address: "道里区太平机场", isHot: true },
      { id: "hrb002", name: "哈尔滨站", address: "南岗区哈尔滨站", isHot: true },
      { id: "hrb003", name: "中央大街", address: "道里区中央大街", isHot: true }
    ],
    allLocations: [
      { id: "hrb004", name: "索菲亚教堂", address: "道里区索菲亚教堂" },
      { id: "hrb005", name: "防洪纪念塔", address: "道里区防洪纪念塔" },
      { id: "hrb006", name: "太阳岛", address: "松北区太阳岛" }
    ]
  },
  "兰州": {
    hotLocations: [
      { id: "lz001", name: "中川机场", address: "永登县中川机场", isHot: true },
      { id: "lz002", name: "兰州站", address: "城关区兰州站", isHot: true },
      { id: "lz003", name: "东方红广场", address: "城关区东方红广场", isHot: true }
    ],
    allLocations: [
      { id: "lz004", name: "白塔山", address: "城关区白塔山" },
      { id: "lz005", name: "中山桥", address: "城关区中山桥" },
      { id: "lz006", name: "兰州大学", address: "城关区兰州大学" }
    ]
  },
  "乌鲁木齐": {
    hotLocations: [
      { id: "wlmq001", name: "地窝堡机场", address: "新市区地窝堡机场", isHot: true },
      { id: "wlmq002", name: "乌鲁木齐站", address: "天山区乌鲁木齐站", isHot: true },
      { id: "wlmq003", name: "大巴扎", address: "天山区大巴扎", isHot: true }
    ],
    allLocations: [
      { id: "wlmq004", name: "红山公园", address: "天山区红山公园" },
      { id: "wlmq005", name: "人民广场", address: "天山区人民广场" },
      { id: "wlmq006", name: "国际大巴扎", address: "天山区国际大巴扎" }
    ]
  },
  "银川": {
    hotLocations: [
      { id: "yc001", name: "河东机场", address: "贺兰县河东机场", isHot: true },
      { id: "yc002", name: "银川站", address: "兴庆区银川站", isHot: true },
      { id: "yc003", name: "鼓楼", address: "兴庆区鼓楼", isHot: true }
    ],
    allLocations: [
      { id: "yc004", name: "南门广场", address: "兴庆区南门广场" },
      { id: "yc005", name: "西夏王陵", address: "西夏区西夏王陵" },
      { id: "yc006", name: "镇北堡影视城", address: "西夏区镇北堡" }
    ]
  },
  "西宁": {
    hotLocations: [
      { id: "xn001", name: "曹家堡机场", address: "湟中县曹家堡机场", isHot: true },
      { id: "xn002", name: "西宁站", address: "城东区西宁站", isHot: true },
      { id: "xn003", name: "中心广场", address: "城中区中心广场", isHot: true }
    ],
    allLocations: [
      { id: "xn004", name: "塔尔寺", address: "湟中县塔尔寺" },
      { id: "xn005", name: "东关清真大寺", address: "城东区东关大寺" },
      { id: "xn006", name: "南山公园", address: "城西区南山公园" }
    ]
  },
  "呼和浩特": {
    hotLocations: [
      { id: "hhht001", name: "白塔机场", address: "赛罕区白塔机场", isHot: true },
      { id: "hhht002", name: "呼和浩特东站", address: "回民区呼和浩特东站", isHot: true },
      { id: "hhht003", name: "大召寺", address: "回民区大召寺", isHot: true }
    ],
    allLocations: [
      { id: "hhht004", name: "成吉思汗广场", address: "新城区成吉思汗广场" },
      { id: "hhht005", name: "万达广场", address: "赛罕区万达广场" },
      { id: "hhht006", name: "内蒙古博物院", address: "新城区博物院" }
    ]
  },
  "拉萨": {
    hotLocations: [
      { id: "ls001", name: "贡嘎机场", address: "贡嘎县贡嘎机场", isHot: true },
      { id: "ls002", name: "拉萨站", address: "城关区拉萨站", isHot: true },
      { id: "ls003", name: "布达拉宫", address: "城关区布达拉宫", isHot: true }
    ],
    allLocations: [
      { id: "ls004", name: "大昭寺", address: "城关区大昭寺" },
      { id: "ls005", name: "八廓街", address: "城关区八廓街" },
      { id: "ls006", name: "罗布林卡", address: "城关区罗布林卡" }
    ]
  },
  "南昌": {
    hotLocations: [
      { id: "nc001", name: "昌北机场", address: "新建区昌北机场", isHot: true },
      { id: "nc002", name: "南昌西站", address: "红谷滩新区南昌西站", isHot: true },
      { id: "nc003", name: "八一广场", address: "东湖区八一广场", isHot: true }
    ],
    allLocations: [
      { id: "nc004", name: "滕王阁", address: "西湖区滕王阁" },
      { id: "nc005", name: "万达广场", address: "红谷滩新区万达广场" },
      { id: "nc006", name: "青山湖", address: "青山湖区青山湖" }
    ]
  },
  "海口": {
    hotLocations: [
      { id: "hk001", name: "美兰机场", address: "美兰区美兰机场", isHot: true },
      { id: "hk002", name: "海口东站", address: "美兰区海口东站", isHot: true },
      { id: "hk003", name: "国贸", address: "龙华区国贸", isHot: true }
    ],
    allLocations: [
      { id: "hk004", name: "万绿园", address: "龙华区万绿园" },
      { id: "hk005", name: "假日海滩", address: "秀英区假日海滩" },
      { id: "hk006", name: "骑楼老街", address: "龙华区骑楼老街" }
    ]
  },
  "保定": {
    hotLocations: [
      { id: "bd001", name: "保定东站", address: "竞秀区保定东站", isHot: true },
      { id: "bd002", name: "保定站", address: "北市区保定站", isHot: true },
      { id: "bd003", name: "东方广场", address: "竞秀区东方广场", isHot: true }
    ],
    allLocations: [
      { id: "bd004", name: "华北电力大学", address: "北市区华电路" },
      { id: "bd005", name: "古莲公园", address: "竞秀区古莲公园" },
      { id: "bd006", name: "万博广场", address: "莲池区万博广场" }
    ]
  },
  "包头": {
    hotLocations: [
      { id: "bt001", name: "包头机场", address: "九原区包头机场", isHot: true },
      { id: "bt002", name: "包头站", address: "昆都仑区包头站", isHot: true },
      { id: "bt003", name: "青山万达", address: "青山区万达广场", isHot: true }
    ],
    allLocations: [
      { id: "bt004", name: "科技大学", address: "昆都仑区包头科技大学" },
      { id: "bt005", name: "昆区万达", address: "昆都仑区万达广场" },
      { id: "bt006", name: "东河万达", address: "东河区万达广场" }
    ]
  },
  "东莞": {
    hotLocations: [
      { id: "dg001", name: "虎门高铁站", address: "虎门镇虎门站", isHot: true },
      { id: "dg002", name: "东莞站", address: "东城区东莞站", isHot: true },
      { id: "dg003", name: "南城天安", address: "南城区天安数码城", isHot: true }
    ],
    allLocations: [
      { id: "dg004", name: "松山湖", address: "松山湖科技园" },
      { id: "dg005", name: "长安万达", address: "长安镇万达广场" },
      { id: "dg006", name: "环球港", address: "南城区环球港" }
    ]
  },
  "佛山": {
    hotLocations: [
      { id: "fs001", name: "佛山西站", address: "禅城区佛山西站", isHot: true },
      { id: "fs002", name: "千灯湖", address: "南海区千灯湖", isHot: true },
      { id: "fs003", name: "岭南天地", address: "禅城区岭南天地", isHot: true }
    ],
    allLocations: [
      { id: "fs004", name: "祖庙", address: "禅城区祖庙" },
      { id: "fs005", name: "顺德万达", address: "顺德区万达广场" },
      { id: "fs006", name: "南海万达", address: "南海区万达广场" }
    ]
  },
  "温州": {
    hotLocations: [
      { id: "wz001", name: "龙湾机场", address: "龙湾区机场路", isHot: true },
      { id: "wz002", name: "温州南站", address: "鹿城区温州南站", isHot: true },
      { id: "wz003", name: "五马街", address: "鹿城区五马街", isHot: true }
    ],
    allLocations: [
      { id: "wz004", name: "万达广场", address: "瓯海区万达广场" },
      { id: "wz005", name: "时代广场", address: "鹿城区时代广场" },
      { id: "wz006", name: "银泰城", address: "鹿城区银泰城" }
    ]
  },
  "中山": {
    hotLocations: [
      { id: "zs001", name: "中山北站", address: "火炬区中山北站", isHot: true },
      { id: "zs002", name: "利和广场", address: "东区利和广场", isHot: true },
      { id: "zs003", name: "假日广场", address: "东区假日广场", isHot: true }
    ],
    allLocations: [
      { id: "zs004", name: "孙文公园", address: "东区孙文公园" },
      { id: "zs005", name: "兴中广场", address: "中山市兴中广场" },
      { id: "zs006", name: "富华广场", address: "石岐区富华广场" }
    ]
  },
  "珠海": {
    hotLocations: [
      { id: "zh001", name: "金湾机场", address: "金湾区机场路", isHot: true },
      { id: "zh002", name: "珠海站", address: "香洲区珠海站", isHot: true },
      { id: "zh003", name: "拱北口岸", address: "香洲区拱北口岸", isHot: true }
    ],
    allLocations: [
      { id: "zh004", name: "横琴新区", address: "横琴新区" },
      { id: "zh005", name: "情侣路", address: "香洲区情侣路" },
      { id: "zh006", name: "华发商都", address: "香洲区华发商都" }
    ]
  },
  "安庆": {
    hotLocations: [
      { id: "aq001", name: "安庆机场", address: "迎江区安庆机场", isHot: true },
      { id: "aq002", name: "安庆站", address: "迎江区安庆站", isHot: true },
      { id: "aq003", name: "菱湖公园", address: "迎江区菱湖公园", isHot: true }
    ],
    allLocations: [
      { id: "aq004", name: "人民广场", address: "迎江区人民广场" },
      { id: "aq005", name: "安庆师范大学", address: "宜秀区安庆师范大学" },
      { id: "aq006", name: "天柱山", address: "宜秀区天柱山" }
    ]
  },
  "安阳": {
    hotLocations: [
      { id: "ay001", name: "安阳站", address: "文峰区安阳站", isHot: true },
      { id: "ay002", name: "殷墟", address: "殷都区殷墟", isHot: true },
      { id: "ay003", name: "文峰塔", address: "文峰区文峰塔", isHot: true }
    ],
    allLocations: [
      { id: "ay004", name: "安阳师范学院", address: "文峰区安阳师范学院" },
      { id: "ay005", name: "万达广场", address: "文峰区万达广场" },
      { id: "ay006", name: "洹河公园", address: "北关区洹河公园" }
    ]
  },
  "阿克苏": {
    hotLocations: [
      { id: "aks001", name: "阿克苏机场", address: "阿克苏机场", isHot: true },
      { id: "aks002", name: "阿克苏站", address: "阿克苏火车站", isHot: true },
      { id: "aks003", name: "红旗广场", address: "红旗广场", isHot: true }
    ],
    allLocations: [
      { id: "aks004", name: "温宿县", address: "温宿县" },
      { id: "aks005", name: "阿克苏大学", address: "阿克苏大学" },
      { id: "aks006", name: "人民广场", address: "人民广场" }
    ]
  },
  "宝鸡": {
    hotLocations: [
      { id: "bj001", name: "宝鸡站", address: "渭滨区宝鸡站", isHot: true },
      { id: "bj002", name: "宝鸡南站", address: "金台区宝鸡南站", isHot: true },
      { id: "bj003", name: "高新广场", address: "高新区高新广场", isHot: true }
    ],
    allLocations: [
      { id: "bj004", name: "宝鸡文理学院", address: "陈仓区宝鸡文理学院" },
      { id: "bj005", name: "万达广场", address: "金台区万达广场" },
      { id: "bj006", name: "青铜器博物馆", address: "金台区青铜器博物馆" }
    ]
  },
  "滨州": {
    hotLocations: [
      { id: "bz001", name: "滨州站", address: "滨城区滨州站", isHot: true },
      { id: "bz002", name: "渤海广场", address: "滨城区渤海广场", isHot: true },
      { id: "bz003", name: "黄河大桥", address: "滨城区黄河大桥", isHot: true }
    ],
    allLocations: [
      { id: "bz004", name: "滨州学院", address: "滨城区滨州学院" },
      { id: "bz005", name: "滨州医学院", address: "滨城区滨州医学院" },
      { id: "bz006", name: "万达广场", address: "滨城区万达广场" }
    ]
  },
  "大庆": {
    hotLocations: [
      { id: "dq001", name: "大庆机场", address: "萨尔图区大庆机场", isHot: true },
      { id: "dq002", name: "大庆站", address: "萨尔图区大庆站", isHot: true },
      { id: "dq003", name: "石油大学", address: "高新区石油大学", isHot: true }
    ],
    allLocations: [
      { id: "dq004", name: "铁人广场", address: "萨尔图区铁人广场" },
      { id: "dq005", name: "东湖公园", address: "让胡路区东湖公园" },
      { id: "dq006", name: "万达广场", address: "让胡路区万达广场" }
    ]
  },
  "德州": {
    hotLocations: [
      { id: "dz001", name: "德州站", address: "德城区德州站", isHot: true },
      { id: "dz002", name: "德州东站", address: "德城区德州东站", isHot: true },
      { id: "dz003", name: "太阳谷广场", address: "德城区太阳谷广场", isHot: true }
    ],
    allLocations: [
      { id: "dz004", name: "德州学院", address: "德城区德州学院" },
      { id: "dz005", name: "运河公园", address: "德城区运河公园" },
      { id: "dz006", name: "万达广场", address: "德城区万达广场" }
    ]
  },
  "抚顺": {
    hotLocations: [
      { id: "fs001", name: "抚顺站", address: "顺城区抚顺站", isHot: true },
      { id: "fs002", name: "雷锋广场", address: "新抚区雷锋广场", isHot: true },
      { id: "fs003", name: "望花区政府", address: "望花区政府", isHot: true }
    ],
    allLocations: [
      { id: "fs004", name: "抚顺师范高等专科学校", address: "望花区抚顺师范" },
      { id: "fs005", name: "万达广场", address: "顺城区万达广场" },
      { id: "fs006", name: "东洲区政府", address: "东洲区政府" }
    ]
  },
  "桂林": {
    hotLocations: [
      { id: "gl001", name: "两江机场", address: "临桂区两江机场", isHot: true },
      { id: "gl002", name: "桂林站", address: "秀峰区桂林站", isHot: true },
      { id: "gl003", name: "象山公园", address: "象山区象山公园", isHot: true }
    ],
    allLocations: [
      { id: "gl004", name: "七星公园", address: "七星区七星公园" },
      { id: "gl005", name: "漓江景区", address: "象山区漓江景区" },
      { id: "gl006", name: "万达广场", address: "叠彩区万达广场" }
    ]
  },
  "惠州": {
    hotLocations: [
      { id: "hz001", name: "惠州站", address: "惠城区惠州站", isHot: true },
      { id: "hz002", name: "西湖景区", address: "惠城区西湖景区", isHot: true },
      { id: "hz003", name: "金山湖", address: "惠城区金山湖", isHot: true }
    ],
    allLocations: [
      { id: "hz004", name: "惠州学院", address: "惠城区惠州学院" },
      { id: "hz005", name: "万达广场", address: "惠城区万达广场" },
      { id: "hz006", name: "大亚湾", address: "大亚湾区中心" }
    ]
  },
  "嘉兴": {
    hotLocations: [
      { id: "jx001", name: "嘉兴南站", address: "南湖区嘉兴南站", isHot: true },
      { id: "jx002", name: "南湖景区", address: "南湖区南湖景区", isHot: true },
      { id: "jx003", name: "月河历史街区", address: "南湖区月河街", isHot: true }
    ],
    allLocations: [
      { id: "jx004", name: "万达广场", address: "秀洲区万达广场" },
      { id: "jx005", name: "嘉兴学院", address: "南湖区嘉兴学院" },
      { id: "jx006", name: "世纪联华", address: "秀洲区世纪联华" }
    ]
  },
  "金华": {
    hotLocations: [
      { id: "jh001", name: "金华站", address: "婺城区金华站", isHot: true },
      { id: "jh002", name: "金华南站", address: "金东区金华南站", isHot: true },
      { id: "jh003", name: "万达广场", address: "婺城区万达广场", isHot: true }
    ],
    allLocations: [
      { id: "jh004", name: "师范大学", address: "婺城区师范大学" },
      { id: "jh005", name: "东阳横店", address: "东阳市横店影视城" },
      { id: "jh006", name: "义乌小商品城", address: "义乌市国际商贸城" }
    ]
  },
  "江门": {
    hotLocations: [
      { id: "jm001", name: "江门站", address: "蓬江区江门站", isHot: true },
      { id: "jm002", name: "万达广场", address: "蓬江区万达广场", isHot: true },
      { id: "jm003", name: "侨乡广场", address: "江海区侨乡广场", isHot: true }
    ],
    allLocations: [
      { id: "jm004", name: "五邑大学", address: "蓬江区五邑大学" },
      { id: "jm005", name: "长堤公园", address: "新会区长堤公园" },
      { id: "jm006", name: "圭峰山", address: "新会区圭峰山" }
    ]
  },
  "克拉玛依": {
    hotLocations: [
      { id: "klmy001", name: "克拉玛依机场", address: "克拉玛依机场", isHot: true },
      { id: "klmy002", name: "克拉玛依站", address: "克拉玛依火车站", isHot: true },
      { id: "klmy003", name: "石油大厦", address: "克拉玛依区石油大厦", isHot: true }
    ],
    allLocations: [
      { id: "klmy004", name: "黑油山", address: "克拉玛依区黑油山" },
      { id: "klmy005", name: "百川广场", address: "克拉玛依区百川广场" },
      { id: "klmy006", name: "金龙广场", address: "克拉玛依区金龙广场" }
    ]
  },
  "洛阳": {
    hotLocations: [
      { id: "ly001", name: "洛阳北站", address: "洛龙区洛阳北站", isHot: true },
      { id: "ly002", name: "龙门石窟", address: "洛龙区龙门石窟", isHot: true },
      { id: "ly003", name: "王城广场", address: "西工区王城广场", isHot: true }
    ],
    allLocations: [
      { id: "ly004", name: "白马寺", address: "洛龙区白马寺" },
      { id: "ly005", name: "万达广场", address: "涧西区万达广场" },
      { id: "ly006", name: "理工大学", address: "涧西区理工大学" }
    ]
  },
  "柳州": {
    hotLocations: [
      { id: "lz001", name: "柳州站", address: "柳北区柳州站", isHot: true },
      { id: "lz002", name: "柳州火车站", address: "柳南区柳州火车站", isHot: true },
      { id: "lz003", name: "文惠广场", address: "城中区文惠广场", isHot: true }
    ],
    allLocations: [
      { id: "lz004", name: "柳侯公园", address: "城中区柳侯公园" },
      { id: "lz005", name: "工学院", address: "柳北区工学院" },
      { id: "lz006", name: "万达广场", address: "鱼峰区万达广场" }
    ]
  },
  "绵阳": {
    hotLocations: [
      { id: "my001", name: "南郊机场", address: "游仙区南郊机场", isHot: true },
      { id: "my002", name: "绵阳站", address: "涪城区绵阳站", isHot: true },
      { id: "my003", name: "科技城", address: "科创园区科技城", isHot: true }
    ],
    allLocations: [
      { id: "my004", name: "绵阳师范学院", address: "涪城区绵阳师范" },
      { id: "my005", name: "万达广场", address: "涪城区万达广场" },
      { id: "my006", name: "富乐山", address: "涪城区富乐山" }
    ]
  },
  "马鞍山": {
    hotLocations: [
      { id: "mas001", name: "马鞍山站", address: "花山区马鞍山站", isHot: true },
      { id: "mas002", name: "万达广场", address: "花山区万达广场", isHot: true },
      { id: "mas003", name: "九华广场", address: "雨山区九华广场", isHot: true }
    ],
    allLocations: [
      { id: "mas004", name: "师范高专", address: "雨山区师范高专" },
      { id: "mas005", name: "湖东路", address: "花山区湖东路" },
      { id: "mas006", name: "采石矶", address: "花山区采石矶" }
    ]
  },
  "秦皇岛": {
    hotLocations: [
      { id: "qhd001", name: "北戴河机场", address: "北戴河区机场路", isHot: true },
      { id: "qhd002", name: "秦皇岛站", address: "海港区秦皇岛站", isHot: true },
      { id: "qhd003", name: "北戴河", address: "北戴河区海滨路", isHot: true }
    ],
    allLocations: [
      { id: "qhd004", name: "老虎石", address: "海港区老虎石" },
      { id: "qhd005", name: "燕山大学", address: "海港区燕山大学" },
      { id: "qhd006", name: "山海关", address: "山海关区长城" }
    ]
  },
  "泉州": {
    hotLocations: [
      { id: "qz001", name: "晋江机场", address: "晋江市晋江机场", isHot: true },
      { id: "qz002", name: "泉州站", address: "丰泽区泉州站", isHot: true },
      { id: "qz003", name: "温陵路", address: "鲤城区温陵路", isHot: true }
    ],
    allLocations: [
      { id: "qz004", name: "开元寺", address: "鲤城区开元寺" },
      { id: "qz005", name: "万达广场", address: "丰泽区万达广场" },
      { id: "qz006", name: "清源山", address: "丰泽区清源山" }
    ]
  },
  "唐山": {
    hotLocations: [
      { id: "ts001", name: "唐山站", address: "路北区唐山站", isHot: true },
      { id: "ts002", name: "万达广场", address: "路北区万达广场", isHot: true },
      { id: "ts003", name: "大学城", address: "路南区大学城", isHot: true }
    ],
    allLocations: [
      { id: "ts004", name: "南湖公园", address: "路南区南湖公园" },
      { id: "ts005", name: "陶瓷博物馆", address: "路北区陶瓷博物馆" },
      { id: "ts006", name: "唐山学院", address: "路北区唐山学院" }
    ]
  },
  "台州": {
    hotLocations: [
      { id: "tz001", name: "路桥机场", address: "路桥区机场路", isHot: true },
      { id: "tz002", name: "台州站", address: "椒江区台州站", isHot: true },
      { id: "tz003", name: "万达广场", address: "椒江区万达广场", isHot: true }
    ],
    allLocations: [
      { id: "tz004", name: "台州学院", address: "椒江区台州学院" },
      { id: "tz005", name: "江心屿", address: "椒江区江心屿" },
      { id: "tz006", name: "天台山", address: "天台县天台山" }
    ]
  },
  "徐州": {
    hotLocations: [
      { id: "xz001", name: "观音机场", address: "泉山区观音机场", isHot: true },
      { id: "xz002", name: "徐州东站", address: "云龙区徐州东站", isHot: true },
      { id: "xz003", name: "万达广场", address: "云龙区万达广场", isHot: true }
    ],
    allLocations: [
      { id: "xz004", name: "云龙湖", address: "云龙区云龙湖" },
      { id: "xz005", name: "矿业大学", address: "泉山区矿业大学" },
      { id: "xz006", name: "汉文化景区", address: "铜山区汉文化景区" }
    ]
  },
  "烟台": {
    hotLocations: [
      { id: "yt001", name: "蓬莱机场", address: "蓬莱区机场路", isHot: true },
      { id: "yt002", name: "烟台站", address: "芝罘区烟台站", isHot: true },
      { id: "yt003", name: "万达广场", address: "芝罘区万达广场", isHot: true }
    ],
    allLocations: [
      { id: "yt004", name: "烟台大学", address: "莱山区烟台大学" },
      { id: "yt005", name: "养马岛", address: "芝罘区养马岛" },
      { id: "yt006", name: "蓬莱阁", address: "蓬莱区蓬莱阁" }
    ]
  },
  "宜昌": {
    hotLocations: [
      { id: "yc001", name: "三峡机场", address: "猇亭区三峡机场", isHot: true },
      { id: "yc002", name: "宜昌东站", address: "西陵区宜昌东站", isHot: true },
      { id: "yc003", name: "万达广场", address: "西陵区万达广场", isHot: true }
    ],
    allLocations: [
      { id: "yc004", name: "三峡大坝", address: "夷陵区三峡大坝" },
      { id: "yc005", name: "清江画廊", address: "夷陵区清江画廊" },
      { id: "yc006", name: "三峡大学", address: "西陵区三峡大学" }
    ]
  },
  "玉溪": {
    hotLocations: [
      { id: "yx001", name: "玉溪站", address: "红塔区玉溪站", isHot: true },
      { id: "yx002", name: "抚仙湖", address: "澄江县抚仙湖", isHot: true },
      { id: "yx003", name: "红塔公园", address: "红塔区红塔公园", isHot: true }
    ],
    allLocations: [
      { id: "yx004", name: "玉溪师范学院", address: "红塔区玉溪师范" },
      { id: "yx005", name: "聂耳公园", address: "红塔区聂耳公园" },
      { id: "yx006", name: "九龙瀑布", address: "峨山县九龙瀑布" }
    ]
  },
  "淄博": {
    hotLocations: [
      { id: "zb001", name: "淄博站", address: "张店区淄博站", isHot: true },
      { id: "zb002", name: "万达广场", address: "张店区万达广场", isHot: true },
      { id: "zb003", name: "齐园", address: "临淄区齐园", isHot: true }
    ],
    allLocations: [
      { id: "zb004", name: "山东理工", address: "张店区山东理工" },
      { id: "zb005", name: "陶瓷博物馆", address: "淄川区陶瓷博物馆" },
      { id: "zb006", name: "周村古商城", address: "周村区古商城" }
    ]
  }
};

export default locationData; 