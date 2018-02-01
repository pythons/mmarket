<template>
  <div class="ecs-wrap">
    <el-row type="flex" class="row-bg row-bg-light">
      <el-col :span="19"  class="text">
           <div class="tit"><img src="../../../common/images/pro/mae-logo.png" /><span class="titinner chameleon">应用引擎（MAE）</span></div>
            <div class="desc">
              美的应用引擎MAE（Midea Application Engine）是基于分布式计算，提供弹性、一站式的应用容器托管环境，目前支持Java、PHP 、Python等多种语言。分布式持续集成流水线，支持云端及私有混合态部署，提供应用开发测试一体化能力；企业级容器镜像仓库，支持多租户级别的应用商店管理模式，实现开发测试交付持续化能力；企业级容器云平台，支持横向可扩展的容器集群管理，实现开发运维策略化能力。
            </div>
            <el-button type="primary" class="more" :disabled="true">即将推出</el-button>
            <p class="tips">*本产品处于内测阶段，敬请期待</p>
      </el-col>
    </el-row>
    <div class="line"><span>产品优势</span></div>
    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/mae-p1.png"></p>
        <p class="tit">应用管理</p>
        <p class="desc">应用的创建、代码上传、部署、重启、停止、启动、删除；支持多版本的管理，可以在历史版本之间切换部署</p>
        <p class="more"><a href="http://www.midea.net/docs/products/mae" class="link" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/mae-p2.png"></p>
        <p class="tit">弹性伸缩</p>
        <p class="desc">应用运行过程中，MAE通过判断负载情况自动伸缩它所使用的资源，伸缩过程不影响应用对外服务，也无需用户干预</p>
        <p class="more"><a href="http://www.midea.net/docs/products/mae" class="link" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/mae-p3.png"></p>
        <p class="tit">故障恢复</p>
        <p class="desc">当服务异常停止，或宿主机离线，云引擎将自动进行故障替换，故障恢复，保证24×7运行</p>
        <p class="more"><a href="http://www.midea.net/docs/products/mae" class="link" target="_blank">了解更多</a></p>
      </el-col>
    </el-row>

    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/mae-p4.png"></p>
        <p class="tit">持续集成</p>
        <p class="desc">美的云开发提供远程在线开发和测试工具，只要有网络，能连上MAE，就能开发，在线调试您的代码，紧急发布新版本</p>
        <p class="more"><a href="http://www.midea.net/docs/products/mae" class="link" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/mae-p5.png"></p>
        <p class="tit">图形化界面</p>
        <p class="desc">MAE提供应用从部署、发布、版本更新到运维的全图形化操作界面， 操作简单直观，化简为零，随时随地管理您的云应用</p>
        <p class="more"><a href="http://www.midea.net/docs/products/mae" class="link" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/ces-p1.jpg"></p>
        <p class="tit">实时监控</p>
        <p class="desc">提供应用的性能分析数据，包括应用的各项参数、网络流量等；精确到分钟级的可视化实时监控，所有资源一目了然；也可以按需设置个性化报警阀值；运行日志可实时查询和下载</p>
        <p class="more"><a href="http://www.midea.net/docs/products/mae" class="link" target="_blank">了解更多</a></p>
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
        .tips{
           color: #999; font-size: 14px;
        }
      }
    }
    .row-bg-light{
      min-height:250px;
      background: url('../../../common/images/pro/mae-bg.png') no-repeat right bottom;
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
