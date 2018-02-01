<template>
  <div class="container">
    <!-- 轮播图 -->
      <banner></banner>
    <!-- 产品 -->
      <el-row type="flex" justify="space-around" class="row-bg">
          <el-col :span="6" class="col1 hvr-float-shadow" @click.native="topro('ECS')">
            <p class="img-box"><img src="../../common/images/index/index_p1.png"></p>
              <p>什么是美的云？</p>
              <span class="blue">了解美的云平台的产品服务</span>
          </el-col>
        <el-col :span="6" class="col1 hvr-float-shadow" @click.native="topro('Inspace')">
          <p class="img-box"><img src="../../common/images/index/index_p2.png"></p>
            <p>强大的平台服务</p>
           <span class="blue">美的云工业云(Inspace)平台</span>
        </el-col>
        <el-col :span="6" class="col1 hvr-float-shadow" @click.native="topro('docs')">
          <p class="img-box"><img src="../../common/images/index/index_p3.png"></p>
            <p>技术支持</p>
            <span class="blue" target="_blank">有什么不明白 看看吧</span>
        </el-col>
      </el-row>

      <el-row type="flex" justify="space-around" class="row-bg row-bg-light">
        <el-col :span="8" class="text">
           <span class="tit chameleon deley1">领先的开源云计算&nbsp;&nbsp;构建强大的云服务</span>
            <div class="desc">
              基于业界流行的OpenStack原生开源云计算平台，并整合自主研发的服务组件。美的云提供包括弹性计算、高性能存储、SDN网络等在内的完整云计算基础设施服务（IaaS），让海量的云端资源随手可得，按需自由支配。
            </div>
            <router-link to="/mcloud/productdetail/net/ECS"><el-button  type="primary" class="more">了解更多</el-button></router-link>
        </el-col>
        <el-col :span="8" class="img1 hvr-bob"></el-col>
      </el-row>

      <el-row type="flex" justify="space-around" class="row-bg">
        <el-col :span="8" class="img2 hvr-bob"></el-col>
        <el-col :span="8" class="text">
           <span class="tit chameleon deley3">出众的平台性能&nbsp;&nbsp;打造软件定义的数据中心</span>
            <div class="desc">
              利用OpenStack Nova模块经过精心打磨，已实现秒级创建云主机；云硬盘最高可提供6000 IOPS / 170 MBps的超高性能，秒级即可完成1T云硬盘实时快照备份；利用灵活易用的SDN网络，可快速搭建美的云内部私有网络；通过简单友好的可视化操作界面，可轻松获得海量计算、存储和网络资源，真正实现安全、稳定、高效的软件定义数据中心。
            </div>
            <router-link to="/mcloud/productdetail/database/VHD"><el-button type="primary" class="more">了解更多</el-button></router-link>
        </el-col>
      </el-row>

      <el-row type="flex" justify="space-around" class="row-bg row-bg-light">
        <el-col :span="8" class="text">
           <span class="tit chameleon deley2">丰富的智能化经验&nbsp;&nbsp;成就领先的工业云平台</span>
            <div class="desc">
              美的云工业云(Inspace)平台是为智能硬件产品接入互联网而推出的一项开放云服务，使互联设备可以轻松安全地与云应用及其他设备交互，实现用户与设备，设备与设备，设备与用户之间的互联、互动、互懂。依靠美的智慧家居及云计算团队丰富的业务经验和技术积累，美的云Inspace服务可支持数亿台设备和数百亿条消息，并且可以对这些消息进行处理并将其安全可靠地路由至目标节点和其他设备。
            </div>
            <router-link to="/mcloud/productdetail/plat/Inspace"><el-button type="primary" class="more">了解更多</el-button></router-link>
        </el-col>
        <el-col :span="8" class="img3 hvr-bob"></el-col>
      </el-row>

      <el-row type="flex" justify="space-around" class="row-bg">
        <el-col :span="8" class="img4 hvr-bob"></el-col>
        <el-col :span="8" class="text">
           <span class="tit chameleon deley5">先进的技术架构&nbsp;&nbsp;提供强大的人工智能服务</span>
            <div class="desc">
              美的云借助领先的开源技术搭建新一代的人工智能服务。利用大数据和深度学习的极致结合打造的美的图像识别服务(MIR)，可精准识别图像，人脸中的视觉内容，包括数十种常见场景等，包含图像打标、场景分类、API服务模块，应用于智能相册管理、图片分类和检索、图片安全监控，人脸识别，OCR等场景。
            </div>
            <router-link to="/mcloud/productdetail/Inspace/MIR"><el-button type="primary" class="more">了解更多</el-button></router-link>
        </el-col>
      </el-row>

      <el-row type="flex" justify="space-around" class="row-bg row-bg-light">
        <el-col :span="8" class="text">
           <span class="tit chameleon deley4">最大程度保障您的数据安全</span>
            <div class="desc">
              美的云提供二层隔离的私有网络，黑客无法嗅探或者截获报文，保证租户数据100%安全；美的云提供软件防火墙技术，每台云主机均可定义自己的进出站安全组策略；美的云提供钥匙对服务，保证云主机的访问安全；美的云块存储服务采取Ceph分布式存储解决方案，每份数据多重实时副本和备份，保障数据不丢失，即使物理硬件彻底损坏，也可以快速恢复业务。
            </div>
            <router-link to="/mcloud/productdetail/safe/CMS"><el-button type="primary" class="more">了解更多</el-button></router-link>
        </el-col>
        <el-col :span="8" class="img5 hvr-bob"></el-col>
      </el-row>

      <!-- <el-row type="flex" justify="space-around" class="row-bg">
        <el-col :span="8" class="img6"></el-col>
        <el-col :span="8" class="text">
           <span class="tit">专业化 统一化的运维服务</span>
            <div class="desc">
              通过量化运维资源利用情况、资源配置速度、对您需求的响应速度、资源与需求的匹配情况等检验和衡量运维的工作效率、工作水平。包括监控报警，通知列表，操作日志，工单支持等服务。
            </div>
            <a href="http://www.midea.net/docs/" target="_blank"><el-button type="primary" size="small" class="more">了解更多>></el-button></a>
        </el-col>
      </el-row> -->
  </div>
</template>

<script>
import Banner from '../../common/components/banner/Banner';
export default {
  name: 'home',
  components: {
    'banner': Banner
  },
  data() {
    return {
    }
  },
  methods:{
    topro(index){
      if(index === 'ECS'){
        this.$router.push({path:'/mcloud/productdetail/net/ECS'})
      }else if(index === 'Inspace'){
        this.$router.push({path:'/mcloud/productdetail/plat/Inspace'})
      }else{
        window.open('http://www.midea.net/docs/');
      }

    }
  }
}
</script>

<style lang="less" scoped>
.container {
    .row-bg{
      background: #fff;
      padding:75px 0;
      min-height:420px;
      .col1{
        text-align: center;
        cursor: pointer;
        &:hover{
          img{
            -webkit-animation-name: hvr-bob-float, hvr-bob;
            animation-name: hvr-bob-float, hvr-bob;
            -webkit-animation-duration: .3s, 3s;
            animation-duration: .3s, 3s;
            -webkit-animation-delay: 0s, .3s;
            animation-delay: 0s, .3s;
            -webkit-animation-timing-function: ease-out, ease-in-out;
            animation-timing-function: ease-out, ease-in-out;
            -webkit-animation-iteration-count: 1, infinite;
            animation-iteration-count: 1, infinite;
            -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
            -webkit-animation-direction: normal, alternate;
            animation-direction: normal, alternate;
          }
        }
        .img-box{
          height: 155px; line-height:155px; vertical-align: middle; margin-bottom: 15px;
          img{
            vertical-align:middle;
            -webkit-transform: perspective(1px) translateZ(0);
            transform: perspective(1px) translateZ(0);
            box-shadow: 0 0 1px transparent;
            }
        }
        .blue{
          margin-top: 15px; display: block;
          color:rgb(30, 166, 192);
        }
      }
      .text{
        &:hover{
          .more{
            -webkit-animation-name: swivelChair;
            animation-name: swivelChair;
            -webkit-animation-duration: 2s;
            animation-duration: 2s;
          }
        }
        .tit{
          font-size: 18px;
          display: block;
          text-align: center;
        }
        .desc{
           margin: 20px auto 0 auto; line-height: 1.8;text-align: justify;
           color:rgb(72, 96, 106);
           max-width: 550px;
        }
        .more{
          margin:50px 0 0 0;
          width:150px;
          height: 30px;
          border-radius: 15px;
          padding:4px;
        }
      }
      .img1{
          background: url('../../common/images/index/index_p4.png') no-repeat center center;
          background-size: contain;
      }
      .img2{
          background: url('../../common/images/index/index_p5.png') no-repeat center center;
          background-size: contain;
      }
      .img3{
          background: url('../../common/images/index/index_p6.png') no-repeat center center;
          background-size: contain;
      }
      .img4{
          background: url('../../common/images/index/index_p7.png') no-repeat center center;
          background-size: contain;
      }
      .img5{
          background: url('../../common/images/index/index_p8.png') no-repeat center center;
          background-size: contain;
      }
      .img6{
          background: url('../../common/images/index_p15.png') no-repeat;
          background-size: contain;
      }
    }
    .row-bg-light{
      background: #f2f5fa;
    }



}

</style>
