<template>
  <paper>
   <header>
    <h3 class="title">云基础运用</h3>
    <el-row class="itemBoxOne">
      <el-col v-for="(item,key) in datas"  :sm="8" :lg="4" :md="4" class="text-center">
        <a class="link" :href="item.itemLink">
          <img class="contentBox" :src="item.itemIcons">
          <p class="doc_title">{{item.iconMsg}}</p>
        </a>
      </el-col>
    </el-row>
    <el-row>
      <el-col v-for="(item,key) in Datas"  :sm="8" :lg="4" :md="4" class="text-center">
        <a class="link" :href="item.itemLink">
          <img class="contentBox" :src="item.itemIcons">
          <p class="doc_title">{{item.iconMsg}}</p>
        </a>
      </el-col>
    </el-row>
    <el-row>
      <el-col v-for="(item,key) in DaTas"  :sm="8" :lg="4" :md="4" class="text-center">
        <a class="link" :href="item.itemLink">
          <img class="contentBox" :src="item.itemIcons">
          <p class="doc_title">{{item.iconMsg}}</p>
        </a>
      </el-col>
    </el-row>
    <BorderOnePx class="singleLine"></BorderOnePx>
   </header>
   <div class="body">
     <h3 class="cloudTitle">云基础服务</h3>
     <el-row class="itemBoxOne">
      <el-col v-for="(item,key) in infos"  :sm="8" :lg="4" :md="4" class="text-center">
        <a class="link" :href="item.itemLink">
          <img class="contentBox" :src="item.itemIcons">
          <p class="doc_title">{{item.iconMsg}}</p>
        </a>
      </el-col>
    </el-row>
    <BorderOnePx class="singleLine"></BorderOnePx>
   </div>
  <footer>
     <h3 class="cloudTitle">云基础资源</h3>
     <el-row class="itemBoxOne">
      <el-col v-for="(item,key) in Infos"  :sm="8" :lg="4" :md="4" class="text-center">
        <a class="link" :href="item.itemLink">
          <img class="contentBox" :src="item.itemIcons">
          <p class="doc_title">{{item.iconMsg}}</p>
        </a>
      </el-col>
    </el-row>
   </footer>
  </paper>
</template>
<style lang="less" scoped>

    .title{
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #211E2E;
      letter-spacing: 0;
    }
    .itemBoxOne{
       margin-top:24px;
    }
     .link{
      .contentBox{
        margin-bottom:20px;
      }
      .doc_title{
          font-family: PingFangSC-Light;
          font-size: 12px;
          color: #211E2E;
          letter-spacing: 0;
          margin-bottom:34px;
      }
    }
  .singleLine{
    margin-top:15px;
  }
  .cloudTitle{
      margin-top:26px;
      font-family: PingFangSC-Regular;
     font-size: 14px;
     color: #211E2E;
     letter-spacing: 0;
  }

</style>
<script>
  import BorderOnePx from 'components/awesome/border_one_px/BorderOnePx'
  export default {
    data(){
      return {
        datas:[
            {itemIcons:"/static/images/management/cloudbaseapply/apply07.png",iconMsg:"配置管理平台",itemLink:"javascript:;"},
            {itemIcons:"/static/images/management/cloudbaseapply/apply09.png",iconMsg:"调度平台",itemLink:"javascript:;"},
            {itemIcons:"/static/images/management/cloudbaseapply/apply11.png",iconMsg:"系统日志平台",itemLink:"javascript:;"},
            {itemIcons:"/static/images/management/cloudbaseapply/apply02.png",iconMsg:"操作审计日志系统",itemLink:"javascript:;"},
            {itemIcons:"/static/images/management/cloudbaseapply/apply05.png",iconMsg:"监控平台",itemLink:"javascript:;"},
            {itemIcons:"/static/images/management/cloudbaseapply/apply12.png",iconMsg:"消息服务",itemLink:"javascript:;"}
        ],
        Datas:[
            {itemIcons:"/static/images/management/cloudbaseapply/apply10.png",iconMsg:"文档中心",itemLink:"javascript:;"},
            {itemIcons:"/static/images/management/cloudbaseapply/apply13.png",iconMsg:"影像系统",itemLink:"javascript:;"},
            {itemIcons:"/static/images/management/cloudbaseapply/apply14.png",iconMsg:"云打印",itemLink:"javascript:;"},
            {itemIcons:"/static/images/management/cloudbaseapply/apply01.png",iconMsg:"表单服务",itemLink:"javascript:;"},
            {itemIcons:"/static/images/management/cloudbaseapply/apply03.png",iconMsg:"工作流服务",itemLink:"javascript:;"},
            {itemIcons:"/static/images/management/cloudbaseapply/apply04.png",iconMsg:"规则服务",itemLink:"javascript:;"}
        ],
        DaTas:[
            {itemIcons:"/static/images/management/cloudbaseapply/apply06.png",iconMsg:"美的云盘",itemLink:"javascript:;"},
            {itemIcons:"/static/images/management/cloudbaseapply/apply08.png",iconMsg:"传输通道",itemLink:"javascript:;"},
        ],
        infos:[
            {itemIcons:"/static/images/management/cloudbaseserve/Group 38.png",iconMsg:"视频点播",itemLink:"javascript:;"},
            {itemIcons:"/static/images/management/cloudbaseserve/Group 39.png",iconMsg:"云监控",itemLink:"javascript:;"},
            {itemIcons:"/static/images/management/cloudbaseserve/Group 40.png",iconMsg:"云数据库",itemLink:"javascript:;"},
            {itemIcons:"/static/images/management/cloudbaseserve/Group 41.png",iconMsg:"云缓存",itemLink:"javascript:;"},
            {itemIcons:"/static/images/management/cloudbaseserve/Group 42.png",iconMsg:"对象存储",itemLink:"javascript:;"},
        ],
       Infos:[
            {itemIcons:"/static/images/management/cloudbasesource/Group 43.png",iconMsg:"云基础",itemLink:"javascript:;"},
            {itemIcons:"/static/images/management/cloudbasesource/Group 44.png",iconMsg:"云快照",itemLink:"javascript:;"},
            {itemIcons:"/static/images/management/cloudbasesource/Group 45.png",iconMsg:"云安全",itemLink:"javascript:;"},
            {itemIcons:"/static/images/management/cloudbasesource/Group 46.png",iconMsg:"云硬盘",itemLink:"javascript:;"}
        ]

      }
    },
    components:{
      'BorderOnePx':BorderOnePx
    }
  }
</script>