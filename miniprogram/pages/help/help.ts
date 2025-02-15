interface IPageData {
  // 定义页面数据的类型
}

interface IPageInstance {
  // 定义页面实例方法类型
}

Page<IPageData, IPageInstance>({
  data: {
    // 页面的初始数据
  },
  onLoad() {
    // 页面加载时执行
  },
  // 添加跳转方法
  navigateToIdRequirement() {
    wx.navigateTo({
      url: '/pages/help/id-requirement/index'
    });
  },
  navigateToRentRule() {
    wx.navigateTo({
      url: '/pages/help/rent-rule/index'
    });
  },
  navigateToViolation() {
    wx.navigateTo({
      url: '/pages/help/violation/index'
    });
  }
}) 