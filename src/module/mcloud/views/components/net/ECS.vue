<template>
  <div class="ecs-wrap">
    <el-row type="flex" class="row-bg row-bg-light">
      <el-col :span="19"  class="text">
           <div class="tit"><img src="../../../common/images/pro/ecs-logo.png" /><span class="titinner chameleon">云主机（ECS）</span></div>
            <div class="desc">
              云主机服务ECS（Elastic Compute Service）是云计算中最基础的服务，OpenStack Nova项目建设，承载了美的云平台所有服务的计算业务。ECS的 Web 服务接口非常简单，您可以轻松获取和配置容量。使用该服务，您可以完全控制您的计算资源，并可以在成熟的计算环境中运行。ECS能在秒级别内创建虚拟机，为节点快速扩容提供保障。
            </div>
            <a href="http://mtp.midea.com/module/cloudbasic.html" target="_blank"><el-button type="primary" class="more">立即使用</el-button></a>
      </el-col>
    </el-row>
    <div class="line"><span>产品优势</span></div>
    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/ecs-p1.png"></p>
        <p class="tit">弹性 Web 规模级计算</p>
        <p class="desc">自由配置 CPU、内存、带宽，可随时升级 。升级配置数据不丢失，业务暂停时间可控</p>
        <p class="more"><a href="http://www.midea.net/docs/products/host" class="link" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/ecs-p2.png"></p>
        <p class="tit">秒级部署</p>
        <p class="desc">几秒钟内增加或减少容量。同时管理数百个，甚至数千个服务器实例。不需要的资源可以随时销毁</p>
        <p class="more"><a href="http://www.midea.net/docs/products/host" class="link" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/ecs-p3.png"></p>
        <p class="tit">自有镜像</p>
        <p class="desc">可在搭建好环境后捕获成自有镜像，之后可基于此自由映像创建更多主机</p>
        <p class="more"><a href="http://www.midea.net/docs/products/host" class="link" target="_blank">了解更多</a></p>
      </el-col>
    </el-row>

    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/ecs-p4.png"></p>
        <p class="tit">实时监控</p>
        <p class="desc">实时监控主机CPU、内存、硬盘读写、网络流量等重要数据，定时备份监控数据；按需设置个性化报警阀值，保障性能满格业务持续运行</p>
        <p class="more"><a href="http://www.midea.net/docs/products/host" class="link" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/ecs-p5.png"></p>
        <p class="tit">保证安全</p>
        <p class="desc">免费提供软件级别防火墙，用户可轻松定制自有的安全策略；允许用户自定义密钥对，保障云主机访问安全</p>
        <p class="more"><a href="http://www.midea.net/docs/products/host" class="link" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/iot-p5.jpg"></p>
        <p class="tit">可扩展性</p>
        <p class="desc">弹性云主机可与美的云其他云产品无缝衔接，在同一个平台上满足多样化业务需求，助力用户持续发展</p>
        <p class="more"><a href="http://www.midea.net/docs/products/host" class="link" target="_blank">了解更多</a></p>
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
      background: url('../../../common/images/pro/ecs-bg.png') no-repeat right bottom;
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
