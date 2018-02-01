<template>
  <div class="ecs-wrap">
    <ul class="history">
      <li class="col line-start"><i class="start">&nbsp;</i></li>
      <li class="col line1">
        <i class="bg1 chameleon">2015年<br />06月</i>
        <div>美的云计算团队开始组建</div>
       </li>
      <li class="col line2">
        <i class="bg2 chameleon deley2">2015年<br />10月</i>
        <div>美的云平台上线公测</div>
      </li>
      <li class="col">
        <i class="bg3 chameleon deley3">2015年<br />11月</i>
        <div>美的自主研发智慧云V1.5正式上线<br />云数据库RDS，云缓存OCS内测版上线</div>
      </li>
      <li class="col">
        <i class="bg4 chameleon deley4">2015年<br />12月</i>
        <div>美的云应用引擎MAE内测版上线</div>
      </li>
      <li class="col">
        <i class="bg4 chameleon deley1">2016年<br />01月</i>
        <div>全新官网，全新形象<br />美的云平台V1.0正式上线</div>
      </li>
      <li class="col line-end">
        <i class="bg3 chameleon deley2">2017年<br />11月</i>
        <div>全新官网，全新形象<br />美的云平台V2.0正式上线</div>
      </li>
      <li class="col">
        <i class="end chameleon deley5">&nbsp;</i>
      </li>
    </ul>
  </div>
</template>
<style lang="less" scoped>
.ecs-wrap{
  padding:0 0 25px 18px;
  .history{
    li{
      margin-bottom: 70px;
      position: relative;
      &:first-child{
        margin-bottom: 15px;
      }
      &:before{
        content:" ";
        position: absolute;
        border-right: 2px solid #1bd3fc;
        height: 100px;
        left: 50px;
        top: 77px;
      }
      &:last-child:before{
         border:none;
      }
      i{
        width: 108px;
        height:82px;
        text-align:center;
        background: url('../../../common/images/history_bg.png') no-repeat 0 0;
        float: left;
        color: #fff;
        padding: 26px 7px 0 0;
        &.start{
          background-position: -4px 0;
          padding-top:0;
        }
        &.bg1{
          background-position: 0 -97px;
        }
        &.bg2{
          background-position: 0 -257px;
        }
        &.bg3{
          background-position: 0 -417px;
        }
        &.bg4{
          background-position: 0 -597px;
        }
        &.end{
          background-position: 0 -972px;
        }
      }
      div{
        float: left;
        padding:10px 15px;
        background: #f5f7f8;
        color:rgb(72, 96, 106);
        border-radius: 5px;
        margin-top:12px;
      }
    }
    .line-start:before{
       top: 50px;
    }
    .line1:before{
       border-color: #8dd847;
    }
    .line2:before{
       border-color: #57d882;
    }
    .line-end:before{
      border-color: #c4c4c4;
    }
    .col:after{
      content:"";
      display:table;
      clear:both;
    }
  }
}
</style>
