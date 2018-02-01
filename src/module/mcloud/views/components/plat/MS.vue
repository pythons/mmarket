<template>
  <div class="ecs-wrap">
    <el-row type="flex" class="row-bg row-bg-light">
      <el-col :span="19"  class="text">
           <div class="tit"><img src="../../../common/images/pro/ms_logo.png" /><span class="titinner chameleon">美易搜（MS）</span></div>
            <div class="desc">
              美易搜(Midea Search)：美的云结合美的内部需求自主研发的一套企业版搜索引擎，帮助企业用户精准，快速的检索出需要的信息，支持分权限查看，结果智能化排序，多语言，对接多种数据源……等功能。
            </div>
            <a href="http://mtp.midea.com/module/search.html" target="_blank"><el-button type="primary" class="more">立即使用</el-button></a>
      </el-col>
    </el-row>
    <div class="line"><span>产品优势</span></div>
    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/ms_01.png"></p>
        <p class="tit">自主研发</p>
        <p class="desc">搜索引擎全部技术自动研发，可根据内部需求定制化服务</p>
        <p class="more"><a href="http://m_search.midea.com/doc/" class="link" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/ms_02.jpg"></p>
        <p class="tit">智能化排序</p>
        <p class="desc">检索结果智能化排序，根据需求，定制化调整</p>
        <p class="more"><a href="http://m_search.midea.com/doc/" class="link" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/ms_03.jpg"></p>
        <p class="tit">实时性高</p>
        <p class="desc">数据产生后到检索出结果，可控制在秒级</p>
        <p class="more"><a href="http://m_search.midea.com/doc/" class="link" target="_blank">了解更多</a></p>
      </el-col>
    </el-row>

    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/ms_04.jpg"></p>
        <p class="tit">自学习能力强</p>
        <p class="desc">实时根据用户搜索习惯，不断优化自身搜索算法</p>
        <p class="more"><a href="http://m_search.midea.com/doc/" class="link" target="_blank">了解更多</a></p>
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
      background: url('../../../common/images/pro/ces-bg.jpg') no-repeat right bottom;
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
