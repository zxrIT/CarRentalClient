Page({
  data: {
    requirements: [
      {
        type: '大陆客户',
        idType: '二代身份证',
        validity: '',
        remark: ''
      },
      {
        type: '港澳客户',
        idType: '港澳居民居住证（回乡证）',
        validity: '有效期须在当次租期的一个月以上',
        remark: '身份证件须通过实名等相关机构验证'
      },
      {
        type: '台湾客户',
        idType: '台湾居民居住证、台湾居民来往大陆通行证（回乡证）',
        validity: '有效期须在当次租期的一个月以上',
        remark: ''
      },
      {
        type: '外籍客户',
        idType: '护照、外国人永久居留身份证',
        validity: '有效期须在当次租期的一个月以上',
        remark: '提前一个工作日（不含法定节假日）上传证件扫描件'
      }
    ]
  }
}); 