<template>
  <div class="ecs-wrap">
    <el-row type="flex" class="row-bg row-bg-light">
      <el-col :span="19"  class="text">
           <div class="tit"><img src="../../../common/images/pro/cms-logo.png" /><span class="titinner chameleon">云监控（CMS）</span></div>
            <div class="desc">
              云监控（Cloud Monitoring Service）是一个开放性的监控平台，可实时监控您的云应用和服务器，并提供多种告警方式（短信、消息、邮件等）以保证及时预警，为您的云应用和服务器的正常运行保驾护航。
            </div>
            <a href="http://mtp.midea.com/module/monitor.html#/components/host" target="_blank"><el-button type="primary" class="more">立即使用</el-button></a>
      </el-col>
    </el-row>
    <div class="line"><span>产品优势</span></div>
    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/cms-p1.png"></p>
        <p class="tit">站点监控</p>
        <p class="desc">CMS支持美的云应用节点及外部云站点可用状态监控注册，支持HTTP/PING/DNS等多种监控方法</p>
        <p class="more"><a href="http://monitor.midea.net/docs/" class="link" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/cms-p2.png"></p>
        <p class="tit">服务器监控</p>
        <p class="desc">CMS支持美的云及外部服务器的可用性监控注册，支持已安装Linux、Windows等O/S的服务器、云主机、VPS等</p>
        <p class="more"><a href="http://monitor.midea.net/docs/" class="link" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/cms-p3.png"></p>
        <p class="tit">深度分析统计</p>
        <p class="desc">我们使用强大的算法，为用户提供了监控项的全景详情分析和详情统计报表，为网站优化加速奠定可靠的数据基础</p>
        <p class="more"><a href="http://monitor.midea.net/docs/" class="link" target="_blank">了解更多</a></p>
      </el-col>
    </el-row>

    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/cms-p4.png"></p>
        <p class="tit">自定义监控</p>
        <p class="desc">允许用户自定义个性化监控项目，通过向导方式帮助用户设定符合自己的监控及报警需求</p>
        <p class="more"><a href="http://monitor.midea.net/docs/" class="link" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/cms-p5.png"></p>
        <p class="tit">报警及联系人管理</p>
        <p class="desc">提供对报警规则，报警联系人的统一、批量管理服务。支持多报警方式：短信、邮件等</p>
        <p class="more"><a href="http://monitor.midea.net/docs/" class="link" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/cms-p6.png"></p>
        <p class="tit">开放性</p>
        <p class="desc">监控数据开放API远程调用，方便云应用产品集成监控数据，提升产品服务质量</p>
        <p class="more"><a href="http://monitor.midea.net/docs/" class="link" target="_blank">了解更多</a></p>
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
          font-size: 16px; font-weight:400; line-height: 2;
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
      background: url('../../../common/images/pro/cms-bg.png') no-repeat right bottom;
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
