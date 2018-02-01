<template>
  <div class="ecs-wrap">
    <el-row type="flex" class="row-bg row-bg-light">
      <el-col :span="19"  class="text">
           <div class="tit"><img src="../../../common/images/pro/cwf-logo.png" /><span class="titinner chameleon">数传通道（MD）</span></div>
            <div class="desc">
              数传通道（Midea Datatransfer）是专为美的研发文件传输研发的安全系统，保证研发与研发外之间文件传输的统一及安全。
            </div>
            <a href="http://dts.midea.com" target="_blank"><el-button type="primary" class="more">立即使用</el-button></a>
      </el-col>
    </el-row>
    <div class="line"><span>产品优势</span></div>
    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/cwf-p1.png"></p>
        <p class="tit">文件预览</p>
        <p class="desc">数传通道支持多种格式文档预览以及多种格式的图片预览</p>
        <p class="more"><a href="javascript: ;" class="linkno" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/cwf-p2.png"></p>
        <p class="tit">文件安全</p>
        <p class="desc">数传通道保证所有文档文件都经过严格的审核机智，保障数据的安全</p>
        <p class="more"><a href="javascript: ;" class="linkno" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/cwf-p3.png"></p>
        <p class="tit">集成MIP</p>
        <p class="desc">数传通道集成MIP，所有MIP都可以直接登录数传通道并使用</p>
        <p class="more"><a href="javascript: ;" class="linkno" target="_blank">了解更多</a></p>
      </el-col>
    </el-row>

    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1">
        <p class="img-box"><img src="../../../common/images/pro/cwf-p4.png"></p>
        <p class="tit">完善的用户角色管理</p>
        <p class="desc">数传通道有严格角色划分，高效及充分利用每一个资源</p>
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
      background: url('../../../common/images/pro/cwf-bg.png') no-repeat right bottom;
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
