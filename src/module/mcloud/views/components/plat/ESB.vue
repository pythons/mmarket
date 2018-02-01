<template>
  <div class="ecs-wrap">
    <el-row type="flex" class="row-bg row-bg-light">
      <el-col :span="19"  class="text">
           <div class="tit"><img src="../../../common/images/pro/cls-logo.png" /><span class="titinner chameleon">ESB</span></div>
            <div class="desc">
              美的企业服务总线（ESB）实现对各业务系统间的广泛集成，实现客户数据的高效共享和服务共享，消除各个应用系统之间的信息孤立和功能冗余。是美的集团全局统一的应用集成平台、实现了系统间集成的可控可管。
            </div>
            <a href="http://eim.midea.com/login.do" target="_blank"><el-button type="primary" class="more">立即使用</el-button></a>
      </el-col>
    </el-row>
    <div class="line"><span>产品优势</span></div>
    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/cls-p1.png"></p>
        <p class="tit">规范标准</p>
        <p class="desc">ESB作为美的集团全局统一的应用集成平台，系统接入的通信协议、报文格式、编码方式遵循统一标准</p>
        <p class="more"><a href="javascript: ;" class="linkno" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/cls-p2.png"></p>
        <p class="tit">安全可控</p>
        <p class="desc">ESB提供4A认证，黑白名单，流量控制，实时监控等功能，使用安全可控</p>
        <p class="more"><a href="javascript: ;" class="linkno" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/cls-p3.png"></p>
        <p class="tit">成熟可靠</p>
        <p class="desc">ESB基于成熟的IBM中间件产品MQ和MB构建而成，有着极其丰富的使用实例，高度可靠</p>
        <p class="more"><a href="javascript: ;" class="linkno" target="_blank">了解更多</a></p>
      </el-col>
    </el-row>

    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/cls-p4.png"></p>
        <p class="tit">简单维护</p>
        <p class="desc">ESB通过图形界面提供注册，审批，监控，报表等运维操作</p>
        <p class="more"><a href="javascript: ;" class="linkno" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/cls-p5.png"></p>
        <p class="tit">高可用易扩展</p>
        <p class="desc">采用集群式部署，多节点，高可用。可在不中断服务的情况下实现服务能力扩容</p>
        <p class="more"><a href="javascript: ;" class="linkno" target="_blank">了解更多</a></p>
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
      background: url('../../../common/images/pro/cls-bg.png') no-repeat right bottom;
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
