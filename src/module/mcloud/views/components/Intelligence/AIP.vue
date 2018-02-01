<template>
  <div class="ecs-wrap">
    <el-row type="flex" class="row-bg row-bg-light">
      <el-col :span="19"  class="text">
           <div class="tit"><img src="../../../common/images/pro/mop-logo.png" /><span class="titinner chameleon">AI计算平台（AIP）</span></div>
            <div class="desc">
              美的AI计算平台，整合美的内部多业务数据，结合美的云核心推荐引擎与AI技术。构建适合多场景的精准推荐系统。精准指导营销，研发等领域。
            </div>
           <el-button type="primary" class="more" :disabled="true">即将推出</el-button>
            <p class="tips">*本产品处于内测阶段，敬请期待</p>
      </el-col>
    </el-row>
    <div class="line"><span>产品优势</span></div>
    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/mop-p1.jpg"></p>
        <p class="tit">算法易用</p>
        <p class="desc">持续更新的多种推荐算法，参数化的算法策略配置方式</p>
        <p class="more"><a href="javascript: ;" class="linkno">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/mop-p2.jpg"></p>
        <p class="tit">标准数据</p>
        <p class="desc">标准化的数据格式和接入规范，提供客户端、服务端的数据埋点、采集和加工</p>
        <p class="more"><a href="javascript: ;" class="linkno">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/mop-p3.jpg"></p>
        <p class="tit">高性能服务</p>
        <p class="desc">毫秒级响应，实时数据更新能够在分钟级时延内影响结果</p>
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
             font-size: 22px;
             position: relative;
             bottom:20px;
             font-weight: 400;
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
      background: url('../../../common/images/pro/mop-bg.jpg') no-repeat right bottom;
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
