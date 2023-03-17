module.exports = {
  
  // 关闭语法检查
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target:'http://gmall-h5-api.atguigu.cn',
      }
    },
  },
}
