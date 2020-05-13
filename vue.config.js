module.exports = {
    configureWebpack: {
      resolve: {
        alias: {
          'assets': '@/assets',
          'common': '@/common',
          'components': '@/components',
          'network': '@/network',
          'views': '@/views',
        }
      }
    },
    devServer:{
      host:'192.168.0.47',
      port:'8808',
      https:false,
      open:false,
      proxy:null
    }
  }
  
  