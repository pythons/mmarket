<template>
  <div class="header-wrapper">
    <div class="left">
      <div class="logo" @click="$router.push('/home')">美的云</div>
    </div>
    <div class="right">
      <el-menu theme="dark" :default-active="activeIndex" mode="horizontal" router>
        <el-menu-item index="1" :route="{path:'/home'}">首页</el-menu-item>
        <el-submenu index="2" >
          <template slot="title">产品服务</template>
          <el-menu-item-group>
            <template slot="title">计算与网络</template>
            <el-menu-item index="云主机（ECS)" :route="{path:'/mcloud/productdetail/net/ECS'}">云主机（ECS）</el-menu-item>
            <el-menu-item index="虚拟网络（VDC)" :route="{path:'/mcloud/productdetail/net/VDC'}">虚拟网络（VDC)</el-menu-item>
            <el-menu-item index="负载均衡（SLB)" :route="{path:'/mcloud/productdetail/net/SLB'}">负载均衡（SLB）</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="存储与数据库">
            <el-menu-item index="云硬盘（VHD)" :route="{path:'/mcloud/productdetail/database/VHD'}">云硬盘（VHD)</el-menu-item>
            <el-menu-item index="云数据库（RDS)" :route="{path:'/mcloud/productdetail/database/RDS'}">云数据库（RDS)</el-menu-item>
            <el-menu-item index="云缓存（OCS)" :route="{path:'/mcloud/productdetail/database/OCS'}">云缓存（OCS)</el-menu-item>
            <el-menu-item index="对象存储（OSS)" :route="{path:'/mcloud/productdetail/database/OSS'}">对象存储（OSS)</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="平台服务">
            <el-menu-item index="工业云平台（Inspace）" :route="{path:'/mcloud/productdetail/plat/Inspace'}">工业云平台（Inspace）</el-menu-item>
            <el-menu-item index="ESB" :route="{path:'/mcloud/productdetail/plat/ESB'}">ESB</el-menu-item>
            <el-menu-item index="视频点播（MVoD）" :route="{path:'/mcloud/productdetail/plat/MVoD'}">视频点播（MVoD）</el-menu-item>
            <el-menu-item index="美易搜（MS）" :route="{path:'/mcloud/productdetail/plat/MS'}">美易搜（MS）</el-menu-item>
            <el-menu-item index="应用引擎（MAE）" :route="{path:'/mcloud/productdetail/plat/MAE'}">应用引擎（MAE）</el-menu-item>
            <el-menu-item index="美的云网盘（MCD）" :route="{path:'/mcloud/productdetail/plat/MCD'}">美的云网盘（MCD）</el-menu-item>
            <el-menu-item index="数传通道（MD）" :route="{path:'/mcloud/productdetail/plat/MD'}">数传通道（MD）</el-menu-item>
            <el-menu-item index="推送服务（MPS）" :route="{path:'/mcloud/productdetail/plat/MPS'}">推送服务（MPS）</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="人工智能">
            <el-menu-item index="图像识别（MIR）" :route="{path:'/mcloud/productdetail/Intelligence/MIR'}"> 图像识别（MIR）</el-menu-item>
            <el-menu-item index="AI计算平台（AIP）" :route="{path:'/mcloud/productdetail/Intelligence/AIP'}">AI计算平台（AIP）</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="安全与运维">
             <el-menu-item index="云监控（CMS）" :route="{path:'/mcloud/productdetail/safe/CMS'}">云监控（CMS）</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3" >
          <template slot="title">帮助与支持</template>
          <a href="http://www.midea.net/docs/" class="blue" target="_blank"><el-menu-item index="3-1" :route="{path:''}">技术文档</el-menu-item></a>
          <a href="http://www.midea.net/docs/faq" class="blue" target="_blank"><el-menu-item index="3-2" :route="{path:''}">常见问题</el-menu-item></a>
        </el-submenu>
        <el-submenu index="4" >
          <template slot="title">关于美的云</template>
          <el-menu-item index="4-1" :route="{path:'/mcloud/productdetail/about'}">关于我们</el-menu-item>
          <el-menu-item index="4-2" :route="{path:'/mcloud/productdetail/history'}">发展历程</el-menu-item>
          <el-menu-item index="4-3" :route="{path:'/mcloud/productdetail/contact'}">联系我们</el-menu-item>
          <el-menu-item index="4-4" :route="{path:'/mcloud/productdetail/join'}">加入我们</el-menu-item>
        </el-submenu>
        <el-menu-item index="5" :route="{path:''}"><a href="http://mtp.midea.com" class="blue" target="_blank"><i class="mf mf-yunwangluo" style="font-size:20px;margin-right:5px;color:#21b8d5"></i>控制台</a></el-menu-item>
      </el-menu>

    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeIndex: '',
      }
    }
  }
</script>

<style lang="less">
  @import "~styles/vars.less";
  .header-wrapper {
    position: fixed;
    width: 100%;
    height: 64px;
    box-sizing: border-box;
    z-index: 1;
    padding: 12px 64px;
    min-width: 610px;
    .left {
      margin-top: 10px;
      float: left;
      .logo {
        width: 70px;
        height: 23px;
        line-height: 23px;
        padding-left: 36px;
        letter-spacing: 2px;
        font-size: 16px;
        color: #cadfff;
        margin-top: -4px;
        background: url("/static/images/marketHomeLogo/cloudmarketlogo.png") no-repeat left center;
        background-size: contain;
        cursor: pointer;
      }
    }
    .right {
      float: right;
      margin-top: -12px;
      .el-menu--dark {
        background-color: #1d293f;
        transition: background-color 0.5s linear;
      }
      .el-menu--dark .el-menu-item,
      .el-menu--dark .el-submenu__title {
        border-bottom: 1px solid transparent;
        color: #cadfff;
      }
      .el-menu--dark .el-menu-item:hover,
      .el-menu--dark .el-submenu__title:hover {
        background-color: #1d293f;
        transition: background-color 0.5s linear;
      }
      .el-menu--horizontal>.el-menu-item:hover,
      .el-menu--horizontal>.el-submenu.is-active .el-submenu__title,
      .el-menu--horizontal>.el-submenu:hover .el-submenu__title {
        border-bottom: 1px solid #21b8d5;
        color:#21b8d5;
      }
      .el-menu--dark .el-menu {
        background-color: #1d293f;
      }
      .el-menu--dark .el-submenu>.el-menu {
        position: fixed;
        top: 60px;
        border: 1px solid #37445c;
        border-left:none;
        padding:0;
      }
      .el-menu--horizontal .el-submenu .el-submenu__icon-arrow {
        display:none;
      }
      .el-menu--dark .el-submenu .el-menu-item {
        background-color: #1d293f;
        padding-left: 20px;
        &:hover{
          background-color: rgb(72, 96, 106);
          color:#21b8d5;
        }
      }
      .el-menu--dark .el-menu-item-group{
        float:left;
        .el-menu-item:hover{
          background-color: #1d293f;
          color:#21b8d5;
        }
      }
      .el-menu-item-group__title {
        font-size: 15px;
        color: #cadfff;
        margin-left: -10px;
      }
    }
  }
  @media screen and (max-width: 735px) {
     .header-wrapper {
       padding: 12px 0;
     }
  }
</style>
