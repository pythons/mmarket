<template>
  <div class="ecs-wrap">
    <el-row type="flex" class="row-bg row-bg-light">
      <el-col :span="19"  class="text">
           <div class="tit"><img src="../../../common/images/pro/iot-logo.png" /><span class="titinner chameleon">工业云平台（Inspace）</span></div>
            <div class="desc">
              智能制造是集团双智战略的重要组成部分。作为智能制造的重要基础，美的工业云平台要在智能制造的【物连接】【业务连接】【模式变革】等方面发挥其特有的作用，为集团响应国家2025战略，实现美的智能制造的目标，进入工业4.0贡献力量。
            </div>
            <el-button type="primary" class="more" :disabled="true">即将推出</el-button>
            <p class="tips">*本产品处于内测阶段，敬请期待</p>
      </el-col>
    </el-row>
    <div class="line"><span>产品优势</span></div>
    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/iot-p1.jpg"></p>
        <p class="tit">互联互通</p>
        <p class="desc">工业对象（设备，模具，人员…），工业业务（营销，采购，生产…）互联互通，高度数字化</p>
        <p class="more"><a href="javascript: ;" class="linkno" >了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/iot-p2.jpg"></p>
        <p class="tit">智能化</p>
        <p class="desc">发挥云平台海量计算，人工智能（如机器学习）的优势，实现工业领域的智能化（如预测/智能排产）</p>
        <p class="more"><a href="javascript: ;" class="linkno">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/iot-p3.jpg"></p>
        <p class="tit">开放性</p>
        <p class="desc">高度开放，不仅仅是美的的业务伙伴，全国制造行业都可以分享到美的智能制造的经验，成果，为国家2025战略作出贡献</p>
        <p class="more"><a href="javascript: ;" class="linkno">了解更多</a></p>
      </el-col>
    </el-row>

    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/iot-p4.jpg"></p>
        <p class="tit">安全性</p>
        <p class="desc">连接通道，操作权限安全可控。确保美的及工业云用户的数据，业务安全</p>
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
      background: url('../../../common/images/pro/iot-bg.jpg') no-repeat right bottom;
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
