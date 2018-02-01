<template>
  <div class="ecs-wrap">
    <el-row type="flex" class="row-bg row-bg-light">
      <el-col :span="19"  class="text">
           <div class="tit"><img src="../../../common/images/pro/vhd-logo.png" /><span class="titinner chameleon">云硬盘（VHD）</span></div>
            <div class="desc">
              美的云硬盘VHD（Virtual Hard Disk）为云主机提供持久化的云硬盘。云硬盘使用多重副本、实时复制的技术以保证您的数据安全、可靠。分布式存储将您的数据保存在多台服务器上，即使有服务器发生故障，也不影响数据的可靠性和可用性，让您高枕无忧。
            </div>
            <a href="http://mtp.midea.com/module/cloudbasic.html" target="_blank"><el-button type="primary" class="more">立即使用</el-button></a>
      </el-col>
    </el-row>
    <div class="line"><span>产品优势</span></div>
    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1 hvr-float-shadow">
        <p class="img-box"><img src="../../../common/images/pro/mcd-p1.jpg"></p>
        <p class="tit">支持高性能</p>
        <p class="desc">美的云支持两种硬盘，其中性能型硬盘最高可达6000 IOPS，吞吐量最高可达170MB/s</p>
        <p class="more"><a href="http://www.midea.net/docs/products/disk" class="link" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1 hvr-float-shadow">
        <p class="img-box"><img src="../../../common/images/pro/mcd-p2.jpg"></p>
        <p class="tit">支持大容量</p>
        <p class="desc">美的云支持两种硬盘，其中容量型硬盘可提供高达5T容量，性能可达500IOPS，吞吐量可达50MB/s</p>
        <p class="more"><a href="http://www.midea.net/docs/products/disk" class="link" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1 hvr-float-shadow">
        <p class="img-box"><img src="../../../common/images/pro/mcd-p3.jpg"></p>
        <p class="tit">多终端同时访问</p>
        <p class="desc">块存储服务提供的共享盘允许单个卷同时挂载到多个虚拟机上，在块设备层提供并发访问能力，使得用户可以在共享盘上构造高可用的分布式应用</p>
        <p class="more"><a href="http://www.midea.net/docs/products/disk" class="link" target="_blank">了解更多</a></p>
      </el-col>
    </el-row>

    <el-row type="flex" class="row-bg">
      <el-col :span="8" class="col1 hvr-float-shadow">
        <p class="img-box"><img src="../../../common/images/pro/mcd-p4.jpg"></p>
        <p class="tit">实时弹性扩容</p>
        <p class="desc">挂载到云主机上的硬盘可以随时进行在线秒级扩容，无需进行线下操作，保证系统24×7运行</p>
        <p class="more"><a href="http://www.midea.net/docs/products/disk" class="link" target="_blank">了解更多</a></p>
      </el-col>
      <el-col :span="8" class="col1 hvr-float-shadow">
        <p class="img-box"><img src="../../../common/images/pro/mcd-p5.jpg"></p>
        <p class="tit">秒级备份、恢复</p>
        <p class="desc">秒级实时创建云存储快照，备份云硬盘当前全部数据。快照之间没有依赖关系，删除任何时间点的快照都不会影响其它快照的使用</p>
        <p class="more"><a href="http://www.midea.net/docs/products/disk" class="link" target="_blank">了解更多</a></p>
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
