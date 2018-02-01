<template>
  <paper>
    <son-title :headTitle="{titleName:'全部消息'}"></son-title>
    <div class="btn-list">
      <el-button @click="allChecked()" class="btn">全选</el-button>
      <el-button @click="deleteMessage(msgIds)" class="btn">删除</el-button>
    </div>
    <div :class="{box:isActive}">
    <div :class="{'lastchild': index ===datas.length-1}" class="msg-box clearfix" v-for="(item,index) in datas" :key="index">
        <div class="icon">
          <img  :src="item.srcIcon">
          <span class="lines"></span>
        </div>
      <div class="msg-center fr">
        <div class="msg-center-l"> 
          <el-checkbox  v-model="item.checked"></el-checkbox>
          <span class="sys-title">{{item.title}}</span>
          <span class="fr managers">{{item.management}}</span>
        </div>
        <div class="msg-center-r">
         <p ref="message" :class="[item.showMore===false?'sys-msg fl':'sys-lg fl']">{{item.message}}</p>  
          <el-button  v-if="item.conditions" type="text" size="small" @click="toggle(item)">{{item.showMore ? "隐藏":"显示更多"}}<i :class="[item.showMore ? 'mf mf-top':'mf mf-bottom']"></i></el-button>    
         <span class="sys-dates fr">{{item.time}}</span>
        </div>
        <span @click="deleteItem(item)" class="msg-close mf mf-close"></span>
      </div>
    </div>
    <div v-if="showDrop" class="drop-fresh">
     <span @click="getMessageLists()" class="mf mf-lg mf-houtui"></span>
    </div>
    </div>
  </paper>
</template>
<style lang="less" scoped>
.paper{
  min-width:1200px !important;
  overflow-x:auto !important;
}
.box{
  background-image:url('/static/images/management/message/message.jpg');
  background-size:800px 600px;
  background-repeat:no-repeat;
  background-position: center;
  width:100%;
  height:400px;
}
.lastchild{
  border:0px solid !important;
}
.drop-fresh{
  width:24px;
  height:18.2px;
  margin:0 auto;
  .mf-houtui{
   transform:rotateZ(-90deg);
   color:#7AD4E5;
   font-size:2em;
   cursor:pointer;
  }
}
.btn-list{
  .btn{
    width:80px;
    margin-bottom:40px;
  }
}
.msg-box{
  margin-left:100px;
  margin-right:20px;
  padding-bottom:30px;
  border-left:1px solid #7AD4E5;
  min-height:90px;
  position:relative;
    .icon{
      width:60px;
      height:60px;
      background:rgba(128,128,128,0.3);
      border-radius:50%;
      left:-30px;
      position:absolute;
    }
  .msg-center{
      width:90%;
      padding-left:30px;
      padding-top:20px;
      min-height:59px;
      position:relative;
      border-radius:10px;
      border:1px solid #c4c4c4;
      position:relative;
      .sys-title{
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #211E2F;
        letter-spacing: 0;
        padding-left:16px;
      }
      .managers{
        padding-right:88px;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #211E2F;
      }
      .sys-lg{
        margin-top:10px;
        font-family: PingFangSC-Light;
        font-size: 14px;
        color: #211E2F;
        letter-spacing: 0;
        padding-left:38px; 
        width: 603px;
        line-height:20px;
        white-space: pre-wrap;
        word-wrap: break-word;
        margin-bottom:15px;
      }
      .sys-msg{
        margin-top:10px;
        font-family: PingFangSC-Light;
        font-size: 14px;
        color: #211E2F;
        letter-spacing: 0;
        padding-left:38px;
        width: 603px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis; 
      }
      .el-button--text{
        margin-top:3px;
      }
      .sys-dates {
        padding-right:45px;
        font-family: PingFangSC-Light;
        font-size: 14px;
        color: #211E2F;
      }
      .msg-close{
        position:absolute;
        top:10px;
        right:20px;
        width:10px;
        height:10px;
        color:#c4c4c4;
        &:hover{
          cursor:pointer;
          color:#7AD4E5;
        }
      }
      &::before{
       content:"";
       position: absolute;
       left:-16px;
       top: 26px;
       width: 0;
       height: 0;
       border-top: 10px solid transparent;
       border-right: 16px solid #c4c4c4;
       border-bottom: 12px solid transparent;
    }
    &::after {
       content: '';
       position: absolute;
       top: 26px;
       left: -15px;
       width: 0;
       height: 0;
       border-bottom: 10px solid transparent;
       border-right: 15px solid #fff;
       border-top: 10px solid transparent; 
    }
  }
}
</style>
<script>
  import * as srv from '../../../api/service';
  import SonTitle from 'components/awesome/son_title/SonTitle' 
  export default {
    data(){
      return {   
        showDrop:true,
        datas:[],
        msgIds:[],
        index:1,
        pageSize:0,
        count:0,
        isActive:false
      }
    },
    created(){
     this.getMessageLists();
    },
    methods:{
      //-----勾选删除消息
      deleteMessage(msgIds){
        var that = this;
        this.$confirm('是否删除选中项，是否继续？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {        
            for(var i=0;i<that.datas.length;i++){
              if(that.datas[i].checked==true&&msgIds.indexOf(that.datas[i].id)==-1){
                 msgIds.push(that.datas[i].id);
              }
            }
            let params = {
              msgIds:msgIds,
              JSESSIONID:""
            }
            srv.deleteMessage(params).then(res=>{
               if(res.errorCode=="600000"){
                  this.$notify({
                      type: 'success',
                     message: `删除成功`
                  });
                  for(var i=that.datas.length-1;i>=0;i--){
                    if(msgIds.indexOf(that.datas[i].id)!==-1){
                       that.datas.splice(i,1);
                    }
                  }
                  if(that.datas.length===0){
                    that.isActive = true;
                    that.showDrop=false;
                  }
               }else{
                  this.$notify({
                      type: 'error',
                     message: `删除失败`
                  });                
               }
            });
          that.msgIds=[];
        }).catch(() => {

        });
      },
      //-----全选事件
      allChecked(){
        this.datas.map(item=>{
            item.checked = true;
            return item;
        });
      },
      //----删除单个消息
      deleteItem(item){

        var that = this;
        this.$confirm('是否删除选中项，是否继续？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {  
            let params = {
              msgIds:[item.id],
              JSESSIONID:""
            }
            srv.deleteMessage(params).then(res=>{
               if(res.errorCode=="600000"){
                  this.$notify({
                      type: 'success',
                     message: `删除成功`
                  });              
                  for(var i=that.datas.length-1;i>=0;i--){
                    if(that.datas[i].id==item.id){
                       that.datas.splice(i,1);
                    }
                  }
                  if(that.datas.length===0){
                    that.isActive = true;
                    that.showDrop=false;
                  }
               }else{
                  this.$notify({
                      type: 'error',
                     message: `删除失败`
                  });                
               }
            });
        }).catch(() => {

        });
      },
      //----展开和隐藏的切换
      toggle(item){
         item.showMore = !item.showMore;
      },
      //---获取消息列表
      getMessageLists(){
        var that = this;
        let infos = {
          JSESSIONID:""
        }
        srv.requestNotReadedMessage(infos).then(res=>{
           if(res.errorCode=="600000"){
             if(res.result.count>0){
                let params = {
                 JSESSIONID:"",
                 index:that.index++,
                 pageSize:5
                }
                srv.requestMessageLists(params).then(res=>{
                  if(res.errorCode==='600000'){            
                    res.result.map(item =>{
                       item.srcIcon = '/static/images/management/message/manager.png';
                       item.title = "系统消息";
                       item.management = '系统管理员';
                       item.showMore = false;
                       item.checked = false;
                       item.message = item.content;
                       if(item.content.length<80){
                          item.conditions = false;   
                       }else{
                          item.conditions = true;
                       }
                       item.time = that.$moment(item.publishTime).format("hh:mm YYYY/MM/DD");
                        return item;
                    });
                    res.result.forEach(item=>{
                       that.datas.push(item);
                     })
                   
                    if(that.datas.length>0){
                      //发送修改数据的请求
                      var arrId = [];
                      //遍历数据
                      for(var i=0;i<that.datas.length;i++){
                        if(arrId&&arrId.indexOf(that.datas[i].id)==-1){
                          arrId.push(that.datas[i].id);
                        }
                      }
                      let params = {
                        msgIds:arrId,
                        status:1,
                        JSESSIONID:""
                      };
                      //发请求
                      srv.modifyMessageSituation(params).then(res=>{                     
                       if(res.errorCode==='600000'){
                         console.log(res.result);
                       }
                      });
                    }
                    if(that.datas.length<5){
                       that.showDrop = false;
                    }
                    if(that.datas.length==0){
                      that.isActive = true;
                    }
                  }else{
                    that.showDrop=false;
                  }
               })
             }else{
               that.isActive = true;
               if(that.datas.length>0){
                 that.isActive = false;
               }
               that.showDrop=false;
             }
           }
        });
      }             
    },
    components:{
      'son-title':SonTitle
    }
  }
</script>