<template>
  <div class="ecs-wrap">
    <el-row type="flex" class="row-bg row-bg-light">
      <el-col :span="19"  class="text">
           <div class="tit"><img src="../../../common/images/pro/cas-logo.png" /><span class="titinner chameleon">视频点播（MVoD）</span></div>
            <div class="desc">
              视频点播（Midea ApsaraVideo for VoD）结合美的内部需求研发的视频点播服务，集视频上传，媒体资源管理，视频播放于一体的音视频点播解决方案。提供功能完善的后台管理系统，丰富的API&SDK，可快速使用，灵活集成自有服务。
            </div>
            <a href="http://mtp.midea.com" target="_blank"><el-button type="primary" class="more">立即使用</el-button></a>
      </el-col>
    </el-row>
    <div class="line"><span>产品优势</span></div>
    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/mms-p1.jpg"></p>
        <p class="tit">自主研发</p>
        <p class="desc">视频点播全部技术自主研发，可根据内部需求定制化服务</p>
        <p class="more"><a href="http://video-cloud.midea.com/video/index.html" class="link" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/mms-p2.jpg"></p>
        <p class="tit">完善的管理后台</p>
        <p class="desc">视频点播提供管理控制台，可以方便的上传、删除、管理私有视频文件</p>
        <p class="more"><a href="http://video-cloud.midea.com/video/index.html" class="link" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/mms-p3.jpg"></p>
        <p class="tit">快速使用</p>
        <p class="desc">视频点播提供便捷的视频播放方式，支持二维码扫码播放，满足多种应用场景</p>
        <p class="more"><a href="http://video-cloud.midea.com/video/index.html" class="link" target="_blank">了解更多</a></p>
      </el-col>
    </el-row>

    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/mms-p4.jpg"></p>
        <p class="tit">灵活集成</p>
        <p class="desc">视频点播提供丰富的开放API，方便用户快速集成</p>
        <p class="more"><a href="http://video-cloud.midea.com/video/index.html" class="link" target="_blank">了解更多</a></p>
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
      background: url('../../../common/images/pro/mms-bg.jpg') no-repeat right bottom;
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
