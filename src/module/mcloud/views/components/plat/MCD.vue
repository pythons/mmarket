<template>
  <div class="ecs-wrap">
    <el-row type="flex" class="row-bg row-bg-light">
      <el-col :span="19"  class="text">
           <div class="tit"><img src="../../../common/images/pro/mcd-logo.png" /><span class="titinner chameleon">美的云网盘（MCD）</span></div>
            <div class="desc">
              美的云盘（Midea Cloud Disk）提供了多元化文件的网络备份、同步、分享等服务。具有空间大，速度快，安全性高等优点。可以安全存储个人数据，并为群组提供文件共享、成员管理等便捷服务。
            </div>
            <a href="http://yunpan.midea.com/#/all" target="_blank"><el-button type="primary" class="more">立即使用</el-button></a>
      </el-col>
    </el-row>
    <div class="line"><span>产品优势</span></div>
    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/ico_mcd_01.png"></p>
        <p class="tit">安全性高</p>
        <p class="desc">自主研发，专注文件传输存储的安全性，实时监控数据</p>
        <p class="more"><a href="http://yunpan.midea.com/operationManual.html" class="link" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/ico_mcd_02.jpg"></p>
        <p class="tit">快速传输文件</p>
        <p class="desc">断点上传，上传不限速，可进行批量操作，轻松便利。网络速度有多快上传速度就有多快</p>
        <p class="more"><a href="http://yunpan.midea.com/operationManual.html" class="link" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/ico_mcd_03.jpg"></p>
        <p class="tit">文件预览</p>
        <p class="desc">支持常规格式的图片、音频、视频、文档文件的在线预览，无需下载文件到本地即可轻松查看文件</p>
        <p class="more"><a href="http://yunpan.midea.com/operationManual.html" class="link" target="_blank">了解更多</a></p>
      </el-col>
    </el-row>

    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/ico_mcd_04.png"></p>
        <p class="tit">多种分享方式</p>
        <p class="desc">提供公开链接，私密链接，一对一，一对多等多种分享文件方式</p>
        <p class="more"><a href="http://yunpan.midea.com/operationManual.html" class="link" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/ico_mcd_05.png"></p>
        <p class="tit">群组文件共享</p>
        <p class="desc">提供多人群组文件传输，同步服务，达到群组文件共享</p>
        <p class="more"><a href="http://yunpan.midea.com/operationManual.html" class="link" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/ico_mcd_06.png"></p>
        <p class="tit">灵活权限控制</p>
        <p class="desc">对群组成员提供多种角色，多种权限控制，灵活设置群组</p>
        <p class="more"><a href="http://yunpan.midea.com/operationManual.html" class="link" target="_blank">了解更多</a></p>
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
      background: url('../../../common/images/pro/mcd-bg.jpg') no-repeat right bottom;
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
