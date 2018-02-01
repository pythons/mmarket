<template>
  <div class="foot-wrapper">
   <el-row type="flex" justify="center" class="row-bg row-bg-light">
      <el-col :span="7"  class="text">
        <ul>
          <li>产品服务</li>
          <router-link :to="{path:'/mcloud/productdetail/net/ECS'}"><li class="txt">计算与网络</li></router-link>
          <router-link :to="{path:'/mcloud/productdetail/database/VHD'}"><li class="txt">存储与数据库</li></router-link>
          <router-link :to="{path:'/mcloud/productdetail/plat/Inspace'}"><li class="txt">平台服务</li></router-link>
          <router-link :to="{path:'/mcloud/productdetail/Intelligence/MIR'}"><li class="txt">人工智能</li></router-link>
          <router-link :to="{path:'/mcloud/productdetail/safe/CMS'}"><li class="txt">安全与运维</li></router-link>
        </ul>
      </el-col>
      <el-col :span="7"  class="text">
        <ul>
          <li>帮助与支持</li>
          <a href="http://www.midea.net/docs/" class="blue" target="_blank"><li class="txt">技术文档</li></a>
          <a href="http://www.midea.net/docs/faq" class="blue" target="_blank"><li class="txt">常见问题</li></a>
          <router-link :to="{path:'/mcloud/productdetail/luntan'}"><li class="txt">美的云论坛</li></router-link>
          <router-link :to="{path:'/mcloud/productdetail/blog'}"><li class="txt">美的云博客</li></router-link>
        </ul>
      </el-col>
      <el-col :span="7"  class="text">
        <ul>
          <li>关于美的云</li>
          <router-link :to="{path:'/mcloud/productdetail/about'}"><li class="txt">关于我们</li></router-link>
          <router-link :to="{path:'/mcloud/productdetail/history'}"><li class="txt">发展历程</li></router-link>
          <router-link :to="{path:'/mcloud/productdetail/contact'}"><li class="txt">联系我们</li></router-link>
          <router-link :to="{path:'/websiteinfo/serviceterm'}"><li class="txt">服务条款</li></router-link>
          <router-link :to="{path:'/websiteinfo/privatepolicy'}"><li class="txt">隐私政策</li></router-link>
        </ul>
      </el-col>
    </el-row>
    <div class="line">
        <div class="span">
           <div class="logo">美的云</div>
        </div>
    </div>
    <div class="copyright">
        Copyright &copy; 1968-2017 美的集团股份有限公司 粤ICP备09215446号
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="less" scoped>
  .foot-wrapper {
    position: relative;
    height: 300px;
    font-size: 14px;
    color: #cadfff;
    .row-bg {
      .text{
        border-right: 1px solid #37445c;
        &:last-child{
          border-right:none;
        }
        ul{
          width:80%;
          display: block;
          margin:0 auto;
          text-align: center;
          li{
            padding-bottom: 20px;
          }
          .txt{
            color:rgb(72, 96, 106);
            &:hover{
              color:#21b8d5;
              cursor: pointer;
            }
          }
        }
      }
    }
    .line{
       position: relative;
       bottom:20px;
       height: 30px;
       line-height: 30px;
       border-bottom: 1px solid #37445c;
       text-align: center;
       margin: 40px 0 0 0;
       .span{
        display: inline-block;
        margin-top: 13px;
        padding: 0 0 0 10px;
        background: #1d293f;
        .logo{
          width: 70px;
          height: 23px;
          line-height: 23px;
          letter-spacing: 2px;
          padding-left: 28px;
          color: #cadfff;
          font-size: 16px;
          background: url("../../images/cloudmarketlogo.png") no-repeat left center;
          background-size: contain;
        }
      }
    }
    .copyright{
      padding:20px 0;
      text-align: center;
      color:rgb(72, 96, 106);
    }
  }
</style>

