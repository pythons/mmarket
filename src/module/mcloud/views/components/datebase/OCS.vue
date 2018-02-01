<template>
  <div class="ecs-wrap">
    <el-row type="flex" class="row-bg row-bg-light">
      <el-col :span="19"  class="text">
           <div class="tit"><img src="../../../common/images/pro/ocs-logo.png" /><span class="titinner chameleon">云缓存（OCS）</span></div>
            <div class="desc">
              云缓存OCS (Open Cache Service) 可以为您提供高性能的K-V缓存数据库集群。一个集群包含多个缓存节点，支持主从、一主多从和多主多从架构，确保高可用。另外，我们提供在线扩容，自动备份、监控告警和图形化操作等功能来帮助你更好的管理集群; 集群将运行于私有网络内，结合美的云提供的高性能云硬盘，在保障高性能的同时兼顾您的数据安全。
            </div>
            <a href="http://mtp.midea.com/module/cache.html#/cache/applyManage" target="_blank"><el-button type="primary" class="more">立即使用</el-button></a>
      </el-col>
    </el-row>
    <div class="line"><span>产品优势</span></div>
    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1 hvr-float-shadow">
        <p class="img-box"><img src="../../../common/images/pro/ocs-p1.jpg"></p>
        <p class="tit">安全可靠</p>
        <p class="desc">提供 Web 服务接口，让您能够配置防火墙设置，以控制对您的缓存集群的网络访问。保护缓存集群安全</p>
        <p class="more"><a href="http://www.midea.net/docs/products/redis" class="link" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1 hvr-float-shadow">
        <p class="img-box"><img src="../../../common/images/pro/ocs-p2.jpg"></p>
        <p class="tit">简单易用</p>
        <p class="desc">部署配置选项简单易懂，即开即用，轻松应对集群部署和管理</p>
        <p class="more"><a href="http://www.midea.net/docs/products/redis" class="link" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1 hvr-float-shadow">
        <p class="img-box"><img src="../../../common/images/pro/ocs-p3.jpg"></p>
        <p class="tit">手动，自动备份</p>
        <p class="desc">缓存服务支持可持久化，你可以通过备份功能对缓存服务进行定期备份，对关键时间点的数据进行保护</p>
        <p class="more"><a href="http://www.midea.net/docs/products/redis" class="link" target="_blank">了解更多</a></p>
      </el-col>
    </el-row>

    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1 hvr-float-shadow">
        <p class="img-box"><img src="../../../common/images/pro/iot-p12.jpg"></p>
        <p class="tit">全面监控</p>
        <p class="desc">每一项监控都提供了历史监控和实时监控，最短时间间隔可以达到10s。其中可以为“内存使用率”和”被拒绝的 key 个数”创建监控告警策略</p>
        <p class="more"><a href="http://www.midea.net/docs/products/redis" class="link" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1 hvr-float-shadow">
        <p class="img-box"><img src="../../../common/images/pro/ocs-p5.jpg"></p>
        <p class="tit">弹性扩容</p>
        <p class="desc">在缓存服务运行过程中，如出现服务能力不足或者容量不够的情况，您都可以通过扩容来解决</p>
        <p class="more"><a href="http://www.midea.net/docs/products/redis" class="link" target="_blank">了解更多</a></p>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="less" scoped>
.ecs-wrap{
  padding:0 0 25px 18px;
  .row-bg{
      .col1{
        text-align: center;
        padding:0 25px;
        margin: 25px 0;
        position: relative;
        &:after{
          content:"";
          height: 194px;
          border-right: 1px solid #ececec;
          position:absolute;
          right: 0;
          bottom: 0;
        }
        &:nth-child(3n):after {
           border-right: none;
        }
        .img-box{
          height: 110px;vertical-align:middle;
          img{
            vertical-align:middle;
            }
        }
        .tit{
          font-size: 16px; font-weight:400; line-height: 2
         }
        .desc{
          color: #999; text-align: justify; min-height: 100px;
        }
        .more{
           text-align: right;
           a{
             text-decoration: underline;
           }
           }
      }
      .text{
        .tit{
           .titinner{
             font-size: 22px; font-weight: 400;
             position: relative;
             bottom:20px;
           }
           img{
             width:60px;
             height:60px;
           }
        }
        .desc{
           margin-top: 10px; line-height: 1.8;text-align: justify;
        }
        .more{
          margin:15px 0 15px 0;
        }
      }
    }
    .row-bg-light{
      min-height:250px;
      background: url('../../../common/images/pro/ocs-bg.png') no-repeat right bottom;
      background-size: contain;
    }
    .line{
       position: relative;
       bottom:30px;
       height: 30px;
       line-height: 30px;
       border-bottom: 1px solid #ececec;
       text-align: center;
       span{
        display: inline-block;
        font-size: 18px;
        margin-top: 13px;
        background-color: #fff;
        padding: 0 18px;
      }
    }
}
</style>
