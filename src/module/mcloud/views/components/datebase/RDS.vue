<template>
  <div class="ecs-wrap">
    <el-row type="flex" class="row-bg row-bg-light">
      <el-col :span="19"  class="text">
           <div class="tit"><img src="../../../common/images/pro/rds-logo.png" /><span class="titinner chameleon">云数据库（RDS）</span></div>
            <div class="desc">
              云数据库RDS（Relational Database Service）是一种稳定可靠、可弹性伸缩的在线数据库服务。支持MySQL、PostgreSQL、MongoDB等多种存储引擎，并且提供了容灾、备份、恢复、监控、迁移、审计等方面的全套解决方案，彻底解决数据库运维的烦恼。
            </div>
            <a href="http://mtp.midea.com/module/database.html#/database/applyManage" target="_blank"><el-button type="primary" class="more">立即使用</el-button></a>
      </el-col>
    </el-row>
    <div class="line"><span>产品优势</span></div>
    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1 hvr-float-shadow">
        <p class="img-box"><img src="../../../common/images/pro/rds-p1.jpg"></p>
        <p class="tit">简单维护</p>
        <p class="desc">美的云数据库通过图形界面提供关系型数据库，包括创建、启动、停止、扩容、删除、备份、恢复、审计、监控、优化等所有运维操作</p>
        <p class="more"><a href="http://www.midea.net/docs/products/rds" class="link" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1 hvr-float-shadow">
        <p class="img-box"><img src="../../../common/images/pro/rds-p2.jpg"></p>
        <p class="tit">超高性能</p>
        <p class="desc">得益于美的云高速统一存储提供的强大性能，美的云关系型数据库提供远超传统单机数据库系统的性能，轻松满足大型业务应用的苛刻要求</p>
        <p class="more"><a href="http://www.midea.net/docs/products/rds" class="link" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1 hvr-float-shadow">
        <p class="img-box"><img src="../../../common/images/pro/rds-p3.jpg"></p>
        <p class="tit">多场景支持</p>
        <p class="desc">美的云数据库提供了主主集群、主备集群、同步集群、一主多备、读写分离、数据切分、列式存储引擎等多种应用场景。确保能够满足现有的各种数据应用需求</p>
        <p class="more"><a href="http://www.midea.net/docs/products/rds" class="link" target="_blank">了解更多</a></p>
      </el-col>
    </el-row>

    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1 hvr-float-shadow">
        <p class="img-box"><img src="../../../common/images/pro/rds-p4.jpg"></p>
        <p class="tit">数据高可用</p>
        <p class="desc">多种高可用场景加上包括自动备份、数据库快照、数据库故障自动切换等功能，保证您的再也无需为业务数据丢失而担忧，确保数据库的高可用</p>
        <p class="more"><a href="http://www.midea.net/docs/products/rds" class="link" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1 hvr-float-shadow">
        <p class="img-box"><img src="../../../common/images/pro/iot-p11.jpg"></p>
        <p class="tit">高扩展、高安全</p>
        <p class="desc">美的云数据库可实现在线的节点添加、数据迁移。并提供了多种审计功能、加密、权限审核、sql审核等功能确保数据库的高安全</p>
        <p class="more"><a href="http://www.midea.net/docs/products/rds" class="link" target="_blank">了解更多</a></p>
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
      background: url('../../../common/images/pro/rds-bg.jpg') no-repeat right bottom;
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
