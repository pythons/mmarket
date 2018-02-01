<template>
  <div class="ecs-wrap">
    <el-row type="flex" class="row-bg row-bg-light">
      <el-col :span="19"  class="text">
           <div class="tit"><img src="../../../common/images/pro/oss-logo.png" /><span class="titinner chameleon">对象存储（OSS）</span></div>
            <div class="desc">
              对象存储OSS（Object Storage Service），是美的云提供的面向企业级应用和互联网服务推出的非结构化数据存储服务，为您提供安全、可靠、稳定的海量数据存储解决方案。您还可以方便的同其他云产品搭配使用，广泛的应用于海量数据存储与备份，数据加工与处理，内容加速分发，业务数据挖掘分析等多种业务场景。
            </div>
            <a href="http://mtp.midea.com/module/objectstroe.html#/object/overview" target="_blank"><el-button type="primary" class="more">立即使用</el-button></a>
      </el-col>
    </el-row>
    <div class="line"><span>产品优势</span></div>
    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1 hvr-float-shadow">
        <p class="img-box"><img src="../../../common/images/pro/oss-p1.png"></p>
        <p class="tit">灵活存储</p>
        <p class="desc">支持丰富的数据类型存储，提供大小文件数据存储功能，存储对象数量不受限制</p>
        <p class="more"><a href="http://mconsole.midea.net/oss/index.html" class="link" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1 hvr-float-shadow">
        <p class="img-box"><img src="../../../common/images/pro/oss-p2.png"></p>
        <p class="tit">分块上传</p>
        <p class="desc">5GB以上超大文件可分块上传；5GB以内的文件可由用户选择是否需要分块上传</p>
        <p class="more"><a href="http://mconsole.midea.net/oss/index.html" class="link" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1 hvr-float-shadow">
        <p class="img-box"><img src="../../../common/images/pro/oss-p3.png"></p>
        <p class="tit">按需付费</p>
        <p class="desc">存储空间、网络流量和API请求等资源使用按量付费，有效节约使用成本</p>
        <p class="more"><a href="http://mconsole.midea.net/oss/index.html" class="link" target="_blank">了解更多</a></p>
      </el-col>
    </el-row>

    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1 hvr-float-shadow">
        <p class="img-box"><img src="../../../common/images/pro/mcd-p1.jpg"></p>
        <p class="tit">可视化操作</p>
        <p class="desc">对存储在OSS上的文件，提供可视化操作界面，快捷方便管理文件</p>
        <p class="more"><a href="http://mconsole.midea.net/oss/index.html" class="link" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1 hvr-float-shadow">
        <p class="img-box"<img src="../../../common/images/pro/mcd-p2.jpg"></p>
        <p class="tit">数据备份</p>
        <p class="desc">存储在OSS上的文件默认都会至少2份以上的备份，不用担心文件丢失的问题</p>
        <p class="more"><a href="http://mconsole.midea.net/oss/index.html" class="link" target="_blank">了解更多</a></p>
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
      background: url('../../../common/images/pro/oss-bg.png') no-repeat right bottom;
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
