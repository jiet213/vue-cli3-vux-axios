// vue.config.js
module.exports = {
  //baseUrl: './',//vue-cli3.3以下版本使用
  publicPath: './', //vue-cli3.3+新版本使用
  outputDir: 'dist', // 打包的目录
  lintOnSave: true, // 在保存时校验格式
  productionSourceMap: false, // 生产环境是否生成 SourceMap
  devServer: {
    open: true, // 启动服务后是否打开浏览器
    host: '0.0.0.0',
    port: 8082, // 服务端口
    https: false,
    hotOnly: false,
    proxy: null, // 设置代理
    before: app => {}
  },
  // webpack配置
	chainWebpack: config => {
	},
  configureWebpack: config => {
    require('vux-loader').merge(config, {
      options: {},
      plugins: ['vux-ui', {
        name: 'less-theme',
        path: './node_modules/vux/src/theme.less'
      }]
    })
  },
  // 第三方插件配置 https://www.npmjs.com/package/vue-cli-plugin-style-resources-loader
	pluginOptions: {
	}
}