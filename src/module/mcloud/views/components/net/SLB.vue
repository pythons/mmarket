<template>
  <div class="ecs-wrap">
    <el-row type="flex" class="row-bg row-bg-light">
      <el-col :span="19"  class="text">
           <div class="tit"><img src="../../../common/images/pro/slb-logo.png" /><span class="titinner chameleon">负载均衡（SLB）</span></div>
            <div class="desc">
              负载均衡SLB（Server Load Balence）为了提高用户服务的可用性和可扩展性，需要使用负载均衡服务；我们提供了基于 TCP/HTTP 的负载均衡服务，可以避免用户投入虚拟机和人力的成本，让用户不关心LB的单点问题，且可直接通过API调用自动化操作。
            </div>
            <a href="http://mtp.midea.com/module/cloudbasic.html" target="_blank"><el-button type="primary" class="more">立即使用</el-button></a>
      </el-col>
    </el-row>
    <div class="line"><span>产品优势</span></div>
    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/lbs-p1.png"></p>
        <p class="tit">动态调配、按需增减</p>
        <p class="desc">基于资源池化的负载均衡配置，业务主机可以动态的添加或移除，业务主机的状态与权重也可在线修改</p>
        <p class="more"><a href="http://www.midea.net/docs/products/load-balance" class="link" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/lbs-p2.png"></p>
        <p class="tit">多协议支持</p>
        <p class="desc">提供公网和私网类型的负载均衡服务，支持4层（TCP协议）和7层（HTTP协议）,满足各类业务场景的要求</p>
        <p class="more"><a href="http://www.midea.net/docs/products/load-balance" class="link" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/lbs-p3.png"></p>
        <p class="tit">超高安全性</p>
        <p class="desc">免费提供四层DDoS攻击防护，支持应用防火墙，实时抵御网络攻击</p>
        <p class="more"><a href="http://www.midea.net/docs/products/load-balance" class="link" target="_blank">了解更多</a></p>
      </el-col>
    </el-row>

    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/lbs-p4.png"></p>
        <p class="tit">健康检查</p>
        <p class="desc">可用多种方法对云服务器进行健康检查，健康检查频率可自定义；一旦检测到云服务器异常，自动屏蔽异常云服务器，确保服务可用性</p>
        <p class="more"><a href="http://www.midea.net/docs/products/load-balance" class="link" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/iot-p9.jpg"></p>
        <p class="tit">多种流量调度算法</p>
        <p class="desc">支持加权轮询和最小连接数两种调度算法，可根据自身需求选择响应的算法分发流量。支持支持设置后端服务器权重，使得流量调度更均匀，提升负载均衡能力</p>
        <p class="more"><a href="http://www.midea.net/docs/products/load-balance" class="link" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/iot-p10.jpg"></p>
        <p class="tit">支持会话保持</p>
        <p class="desc">可将一定时间内来自同一用户的访问请求转发至同一个后端服务器上处理， 实现用户访问的连续性</p>
        <p class="more"><a href="http://www.midea.net/docs/products/load-balance" class="link" target="_blank">了解更多</a></p>
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
      background: url('../../../common/images/pro/lbs-bg.png') no-repeat right bottom;
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
