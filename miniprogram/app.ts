interface IGlobalData {
  // 定义全局数据的类型
}

App<{
  globalData: IGlobalData
}>({
  onLaunch() {
    // 小程序启动时执行
  },
  globalData: {
    // 全局数据
  }
}) 