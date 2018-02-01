<template>
  <div class="ecs-wrap">
    <el-row type="flex" class="row-bg row-bg-light">
      <el-col :span="19"  class="text">
           <div class="tit"><img src="../../../common/images/pro/vdc-logo.png" /><span class="titinner chameleon">虚拟网络（VDC）</span></div>
            <div class="desc">
              虚拟网络VDC（Virtual Data Center）是基于OpenStack Neutron项目，您可以在可视化的界面中通过鼠标构建所需的基础设施，例如路由器、私有网络、VPN，真正实现软件定义网络，从此您不需再手动进行路由上架及捆绑网线。
            </div>
            <a href="http://mtp.midea.com/module/cloudbasic.html" target="_blank"><el-button type="primary" class="more">立即使用</el-button></a>
      </el-col>
    </el-row>
    <div class="line"><span>产品优势</span></div>
    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/vdc-p1.png"></p>
        <p class="tit">完全隔离的二层虚拟网络</p>
        <p class="desc">使用隧道技术，真正实现二层隔离技术，不同租户之间网络报文不会互相影响，保100%网络安全隔离</p>
        <p class="more"><a href="http://www.midea.net/docs/products/vdc" class="link" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/vdc-p2.png"></p>
        <p class="tit">软件定义网络</p>
        <p class="desc">网络资源弹性可伸缩，按需申请，并可实时动态调整，真正实现软件定义网络</p>
        <p class="more"><a href="http://www.midea.net/docs/products/vdc" class="link" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/vdc-p3.png"></p>
        <p class="tit">简单直观的可视化操作</p>
        <p class="desc">VDC虚拟网络服务中的所有资源都可在界面上轻松创建，助您1分钟设计好网络拓扑，并直接可用</p>
        <p class="more"><a href="http://www.midea.net/docs/products/vdc" class="link" target="_blank">了解更多</a></p>
      </el-col>
    </el-row>

    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/iot-p6.jpg"></p>
        <p class="tit">多网络支持</p>
        <p class="desc">云主机可以随时加入或离开任何一个网络，也可以同时绑定多个网络，方便构建满足业务需求的网络拓扑</p>
        <p class="more"><a href="http://www.midea.net/docs/products/vdc" class="link" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/iot-p7.jpg"></p>
        <p class="tit">灵活的访问控制</p>
        <p class="desc">灵活的访问控制规则，满足各类用户的安全隔离规范；使用安全组功能，可以将私有网络中的实例划分成不同的安全域，并为安全域定义不同的访问控制规则</p>
        <p class="more"><a href="http://www.midea.net/docs/products/vdc" class="link" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/iot-p8.jpg"></p>
        <p class="tit">丰富的网络连接</p>
        <p class="desc">支持专线连接/软件VPN等多种连接方式，可以将专有网络和物理网络连接起来，组成一个虚拟的混合网络</p>
        <p class="more"><a href="http://www.midea.net/docs/products/vdc" class="link" target="_blank">了解更多</a></p>
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
      background: url('../../../common/images/pro/vdc-bg.png') no-repeat right bottom;
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
