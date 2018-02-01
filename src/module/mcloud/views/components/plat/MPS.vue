<template>
  <div class="ecs-wrap">
    <el-row type="flex" class="row-bg row-bg-light">
      <el-col :span="19"  class="text">
           <div class="tit"><img src="../../../common/images/pro/mps-logo.png" /><span class="titinner chameleon">推送服务（MPS）</span></div>
            <div class="desc">
              美的云推送服务MPS（Mobile Push Service）是一站式APP信息推送平台，开发者可以通过MPS向用户精准推送通知和自定义消息。MPS提供统一消息推送的完整解决方案，包含千万级别的设备并发推送能力、Restful云端接口以及完善的客户端SDK等。
            </div>
            <el-button type="primary" class="more" :disabled="true">即将推出</el-button>
            <p class="tips">*本产品处于内测阶段，敬请期待</p>
      </el-col>
    </el-row>
    <div class="line"><span>产品优势</span></div>
    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/mps-p1.png"></p>
        <p class="tit">多种推送方式</p>
        <p class="desc">文本内容直接展示给用户，自定义消息：自定义透传给应用，富媒体：图文并茂的HTML页面</p>
        <p class="more"><a href="javascript: ;" class="linkno">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/mps-p2.png"></p>
        <p class="tit">灵活的推送目标</p>
        <p class="desc">广播推送：向所有用户推送。标签推送：按标签群组推送。精准推送：向单个用户推送</p>
        <p class="more"><a href="javascript: ;" class="linkno">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/mps-p3.png"></p>
        <p class="tit">用户分群</p>
        <p class="desc">根据 MPush 提供的多条件组合进行用户群组划分，实时筛选实时推送</p>
        <p class="more"><a href="javascript: ;" class="linkno">了解更多</a></p>
      </el-col>
    </el-row>

    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/mps-p4.png"></p>
        <p class="tit">推送历史</p>
        <p class="desc">无论是通过Web发送的还是通过API发送的都可以在推送历史记录中查询</p>
        <p class="more"><a href="javascript: ;" class="linkno">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/mps-p5.png"></p>
        <p class="tit">简单易集成</p>
        <p class="desc">提供网站后台进行管理操作；也提供Restful API和SDK供开发者调用和集成</p>
        <p class="more"><a href="javascript: ;" class="linkno">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/mps-p6.png"></p>
        <p class="tit">统计与报表</p>
        <p class="desc">推送报表”与“用户统计报表”呈现推送的效果和应用发展趋势</p>
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
      background: url('../../../common/images/pro/mps-bg.png') no-repeat right bottom;
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
