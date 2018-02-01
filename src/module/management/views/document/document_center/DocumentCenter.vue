<template>
  <paper>
    <son-title :headTitle="{titleName:'美的云统一管理平台文档'}"></son-title>
    <el-row>
      <el-col :span="24">
        <p class="title">{{msg}}</p>
      </el-col>
    </el-row>
    <div class="doc_header">
      <el-row>
       <el-col :sm="8" :lg="8" :md="8" class="text-center">
         <img class="contentBox" src="/static/images/management/message/baseApply.png">
         <div class="doc_title">
          <dl>
           <dt>基础应用</dt>
           <dd><a href="/#/websiteinfo/faq">云基础</a></dd>
          </dl>
         </div>
       </el-col>
       <el-col :sm="8" :lg="8" :md="8" class="text-center">
         <img class="contentBox" src="/static/images/management/message/baseServer.png">
         <div class="doc_title">
          <dl>
           <dt>基础服务</dt>
           <dd><a href="/#/websiteinfo/faq">视频点播</a></dd>
           <dd><a href="/#/websiteinfo/faq">搜索引擎</a></dd>
          </dl>
         </div>
       </el-col>
       <el-col :sm="8" :lg="8" :md="8" class="text-center">
         <img class="contentBox" src="/static/images/management/message/baseSource.png">
         <div class="doc_title">
          <dl>
           <dt>基础资源</dt>
           <dd><a href="/#/websiteinfo/faq">云监控</a></dd>
           <dd><a href="/#/websiteinfo/faq">对象存储</a></dd>
           <dd><a href="/#/websiteinfo/faq">云数据库MySQL</a></dd>
           <dd><a href="/#/websiteinfo/faq">云缓存Redis</a></dd>
          </dl>
         </div>
       </el-col>
      </el-row>
    </div>
  </paper>
</template>
<style lang="less" scoped>
.title{
  text-align:center;
  margin-top:71px;
  font-family: PingFangSC-Regular;
  font-size: 16px;
  height:16px;
  color: #211E2E;
  letter-spacing: 0;
}
.doc_header{
  margin:0 auto;
  margin-top:78px;
  .contentBox{
    width:233px;
    height:198px;
    // display:block;
    // margin-left:50px;
    margin-bottom:20px;
  }
}
.doc_title{
  text-align:center;
  dt{
    font-weight:900;
    margin-bottom:20px;
  }
  dd{
    margin-top:17px;
    margin-bottom:17px;
    a{
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #21B8D5;
      letter-spacing: 0;
    }
  }
}
</style>
<script>
  import SonTitle from 'components/awesome/son_title/SonTitle'
  export default{
    data(){
      return {
        msg:"欢迎使用美的云统一管理平台文档，不管您是初次使用还是一名高级用户，您都可以找到该服务的所有实用信息。"
      }
    },
    components:{
      'son-title':SonTitle
    }
  }
</script>
