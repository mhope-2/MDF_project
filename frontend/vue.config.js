module.exports = {
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  transpileDependencies: [
    'quasar'
  ],
  devServer: {
    proxy: {
        '^/api':{
            target: 'http://localhost:5000',
            ws: true,
            changeOrigin: true,
            logLevel: 'debug',
        }
    }
}
}
