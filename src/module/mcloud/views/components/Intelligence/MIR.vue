<template>
  <div class="ecs-wrap">
    <el-row type="flex" class="row-bg row-bg-light">
      <el-col :span="19"  class="text">
           <div class="tit"><img src="../../../common/images/pro/cdp-logo.png" /><span class="titinner chameleon">图像识别（MIR）</span></div>
            <div class="desc">
              美的图像识别服务（Midea Image Recognition）基于大数据和深度学习实现，可精准识别图像，人脸中的视觉内容，包括数十种常见场景等，包含图像打标、场景分类、API服务模块，应用于智能相册管理、图片分类和检索、图片安全监控，人脸识别，OCR等场景。
            </div>
            <el-button type="primary" class="more" :disabled="true">即将推出</el-button>
            <p class="tips">*本产品处于内测阶段，敬请期待</p>
      </el-col>
    </el-row>
    <div class="line"><span>产品优势</span></div>
    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/mdp-p1.jpg"></p>
        <p class="tit">稳定性好</p>
        <p class="desc">提供24小时云端高稳定服务，宕机率低，故障恢复快，单图毫秒级响应，服务可用性高达99.95%</p>
        <p class="more"><a href="javascript: ;" class="linkno">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/mdp-p2.jpg"></p>
        <p class="tit">准确度高</p>
        <p class="desc">基于百度丰富的海量数据，利用深度学习技术及精准的算法迭代模型，不断提高准确性</p>
        <p class="more"><a href="javascript: ;" class="linkno">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/mdp-p3.jpg"></p>
        <p class="tit">功能丰富</p>
        <p class="desc">支持多种场景识别，并在持续增加中，让你更好的读懂世界</p>
        <p class="more"><a href="javascript: ;" class="linkno">了解更多</a></p>
      </el-col>
    </el-row>

    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/mdp-p4.jpg"></p>
        <p class="tit">算法领先</p>
        <p class="desc">基于专业的深度学习算法和海量数据训练，算法权威领先</p>
        <p class="more"><a href="javascript: ;" class="linkno">了解更多</a></p>
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
      background: url('../../../common/images/pro/mdp-bg.jpg') no-repeat right bottom;
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
