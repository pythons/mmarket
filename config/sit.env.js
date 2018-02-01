module.exports = {
  NODE_ENV: '"sit"',
  authority: false,//强制鉴权(方便开发阶段测试，不会出现没有路由的情况)
  //需包含的模块，优先级高于moduleFilter.  统一控制台子系统需包含index,login和management三个模块
  moduleContainer:['./src/module/index','./src/module/login','./src/module/management','./src/module/search','./src/module/monitor', './src/module/cloudbasic', './src/module/video', './src/module/objectstroe','./src/module/dashboard', './src/module/database', './src/module/cloudmarket'],
  moduleFilter:['./src/module/dashboard'],//过滤不被打包的模块
  urlNoAuthority:['/websiteinfo/contactus', '/websiteinfo/privatepolicy','/websiteinfo/serviceterm','/websiteinfo/faq'],
  api: {
    login:{
      host:'http://123.58.34.245:9000'
    },
    socket:{
      host: 'http://202.104.112.244:18093'
    },
    ustack:{
      url:'http://123.58.34.247:8081/auth-iframe'
    },
    manaement: {
      host: 'http://202.104.112.244:18092'
    },
    monitor:{
      host:'http://123.58.34.241:8000'
    },
    objectStore: {
      appid:'4a0f0d9f2e414046b686be72b0d8169d',
      uploadHost:'http://123.58.34.245:17480',
      appmanager:'http://123.58.34.245:80',
      mcloud:'http://10.133.131.37:8080'
    },
    video: {
      uploadHost: 'http://123.58.34.245:17480',
      appmanager:'http://123.58.34.245:80',
      authen: 'http://123.58.34.245:9000',
      videoplay: 'http://123.58.34.246:80'
    },
    search:{
      host:'http://123.58.34.246:12109',
      push:'http://123.58.34.246:10118',
      search:'http://123.58.34.246:10321'
    },
    database:{
      host:'http://123.58.34.247:8085'
    },
    market: {
      host:'http://219.128.88.29:8088',
      mtp:'http://123.58.34.241:18092'
    },
    image: {
      host:'http://172.20.32.159:80'
    }
  },
  url:{
    pin_code_url:'http://c4adev.midea.com/servlet/pinServlet.png'
  }
}
