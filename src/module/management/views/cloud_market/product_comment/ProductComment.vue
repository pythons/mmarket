<template>
  <el-dialog :close-on-click-modal="modal" custom-class="Dialog_" title="评论管理"  :visible.sync="dialogFormVisible" @close="cancel()">
  <div class="center-comment">
   <ratings :ratingsList="ratingsList" :isNeedDelete="isNeedDelete" @deleteRating="deleteRating"></ratings>
      <p class="tips" v-if="ratingsList.length<=0">暂无评论信息</p>
   </div>
  </el-dialog>
</template>
<style lang="less">
  .Dialog_{
    width:840px;
    height:770px;
    .el-dialog__body{
      padding-right:40 !important;
      padding-top: 0 !important;
    }
    .tips{
      width:100%;
      height:100px;
      line-height:100px;
      text-align:center;
    }
    .center-comment{
      width:100%;
      height:720px;
      padding-right:20px;
      overflow-y:auto;
      .ratings-box .comment .delete{
         right:70px;
      }
      .ratings-box .comment .comment-words{
        padding-right:150px;
        word-wrap: break-word; 
        width:580px;
      }
      .ratings-box .user-name{
        color:#000000;
        font-size:14px;
        font-family:PingFangSC-Regular;
        font-weight:900;
      }
    }
  }
</style>
<script>
 import * as srv from '../../../api/service';
 import Ratings from 'components/utils/ratings/Ratings'
  export default {
    data(){
      return {
       dialogFormVisible:true,
       modal:false,
       ratingsList: [],
       isNeedDelete:true
      }
    },
    created(){
     this.getData();
    },
    methods:{
      cancel(){
         this.$router.push("/market/product_management");
      },
      getData(){
        let params = {productId:this.$route.params.productId,index:1,pageSize:10};
         srv.requestProductCommentLists(params).then(res =>{
           this.ratingsList = res.result.list;
         })
      },
      deleteRating(id,index){
        srv.deleteComments({markId:id}).then(res =>{
            if(res.code === 200){
               this.$notify({
                   type: 'success',
                   message: `删除成功`
               });
             }
         })
       }
    },
    components:{
      'ratings':Ratings
    }
  }
</script>