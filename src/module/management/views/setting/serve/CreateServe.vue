<template>
  <el-dialog :close-on-click-modal="modal" custom-class="dialog__" :title="indexTitle"  :visible.sync="dialogFormVisible" @close="cancel()">
    <el-form @submit.native.prevent ref="ruleForm" label-position="left" :model="ruleForm" :rules="rules"
                 label-width="90px" class="demo-ruleForm">
      <el-form-item label="服务名称 :" prop="serveName">
        <el-input :disabled="disabled" :maxlength="70" placeholder="请输入服务名称，长度不超过70字符" v-model="ruleForm.serveName"></el-input>
      </el-form-item>
      <el-form-item label="服务标识 :" prop="serveIndex">
        <el-input :disabled="disabled" :maxlength="128" placeholder="请输入服务名称，长度不超过128字符" v-model="ruleForm.serveIndex"></el-input>
      </el-form-item>
      <el-form-item label="排列次序 :" prop="orderLists">
        <el-input @change="changeCode(ruleForm.orderLists)"  onkeypress="return event.keyCode>=48&&event.keyCode<=57" :disabled="disabled" :minlength="1" :maxlength="3" placeholder="请设置菜单位置次序" v-model="ruleForm.orderLists"></el-input>
      </el-form-item>
      <el-form-item label="系统服务 :" prop="innerSystem">
          <el-radio-group :disabled="disabled" v-model="systemClass">
             <el-radio :label="0">内部系统</el-radio>
             <el-radio :label="1">外部系统</el-radio>
             <el-radio :label="2">金融系统</el-radio>
          </el-radio-group>
      </el-form-item>
      <el-form-item label="访问地址 :" prop="visitAddress">
        <el-input :disabled="disabled" :maxlength="30" placeholder="请输入系统访问地址" v-model="ruleForm.visitAddress"></el-input>
      </el-form-item>
      <el-form-item label="需要项目 :" prop="needProject">
          <el-radio-group :disabled="disabled" v-model="needProject">
             <el-radio :label="1">是</el-radio>
             <el-radio :label="0">否</el-radio>
          </el-radio-group>
      </el-form-item>
      <el-form-item label="服务图标 :" prop="servesIcon">
         <el-upload
            class="avatar-uploader"
            :action="imgUrl"
            :disabled="disabled"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
             :on-preview="handlePictureCardPreview"
              >
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            <div slot="tip" class="el-upload__tip">只能上传png文件，且不超过1M</div>
        </el-upload>
        <!--<el-dialog v-model="dialogVisible" size="tiny">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>-->
      </el-form-item>
      <el-form-item label="描述 :" prop="description">
       <el-input :disabled="disabled" :maxlength="128" type="textarea"  v-model="ruleForm.description"></el-input> 
      </el-form-item>
      <el-form-item>
        <div v-if="showButton" class="bottom_btn clearfix">
          <el-button @click="cancel()" class="nextstep ">取消</el-button>
          <el-button @click="submitForm()" class="goback " type="primary">确定</el-button>
        </div>
        <div v-else >
          <el-button @click="backhome()" class="backhome">返回</el-button>
        </div>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<style lang="less">
.dialog__{
    width:500px;
    min-height:730px;
     .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    border: 1px dashed #d9d9d9;
  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }
  .el-upload__tip{
    font-style:italic;
    margin-top:1px;
  }
  .bottom_btn {
      text-align: center;
      margin: 20px 0;
      margin-left: -80px;
      .goback, .nextstep {
        width: 98px;
      }
      .goback {
        margin-right: 5px;
      }
      .nextstep {
        margin-left: 5px;
      }
  }
  .backhome{
    width:98px;
    margin-left:100px;
  }
}

</style>
<script>
  import * as urv from '../../../api/api'
  import * as srv from '../../../api/service';
  export default {
    data(){
      return {
        systemClass:0,
        needProject:1,
        dialogFormVisible:true,
        modal:false,
        imgUrl:urv.uploadFiles,
        imageUrl:"",
        dialogVisible:false,
        dialogImageUrl:"",
        disabled:false,
        showButton:true,
        ruleForm:{
           serveName:"",
           serveIndex:"",
           orderLists:"",
           systemClass:"",
           visitAddress:"",
           needProject:"",
           servesIcon:"",
           description:""
        },
        rules: {
          serveName: [
             { required: true, message: '请输入服务名称', trigger: 'blur' },
             { required: true, validator:(rule,value,callback)=>{
                if(/^[\u4e00-\u9fa5_-a-zA-Z0-9]+$/i.test(value) == false){
                    callback(new Error("只能输入数字，英文大小写字母，中文字符，下划线“  _ ”，中划线”- “"));
                }else{
                    callback();
                }
            }, trigger: 'blur' }
          ],
          serveIndex: [
             { required: true, message: '请输入服务标识', trigger: 'blur' },
             { required: true, validator:(rule,value,callback)=>{
                if(/^[\u4e00-\u9fa5_-a-zA-Z0-9]+$/i.test(value) == false){
                    callback(new Error("只能输入数字，英文大小写字母，中文字符，下划线“  _ ”，中划线”- “"));
                }else{
                    callback();
                }
            }, trigger: 'blur' }
          ],
          visitAddress:[
             { required: true, message: '请输入系统访问地址', trigger: 'blur' },
             {required: true, validator:(rule,value,callback)=>{
              if(/^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])?$/i.test(value) === false){
                  callback(new Error('输入的必须是网址'));
              }else{           
                  callback();
              }
             },  trigger: 'blur' }
          ]      
        }
      }
    },
    //---标题的设置
    computed:{
        indexTitle(){
          if(this.$route.params.type==='new'){
             return '创建服务'
          }else if(this.$route.params.type==='editor'){
            return '编辑服务'
          }else if(this.$route.params.type==="detail"){
            return '服务详情'
          }
        }
    },
    //----新增，编辑，查看详情下的调用
    created(){
       if(this.$route.params.type==="detail"){
          this.disabled = true;
          this.showButton = false;
          this.getServerDetail();
       }else if(this.$route.params.type==='new'){

       }else if(this.$route.params.type==='editor'){
          this.getServerDetail();
       }
    },
    methods:{
          //限制格式的图片大小
      beforeAvatarUpload(file) {
        const isPNG = file.type === 'image/png';
        const isLt1M = file.size / 1024 / 1024 < 1;

        if (!isPNG) {
          this.$message.error('上传头像图片只能是 PNG 格式!');
        }
        if (!isLt1M) {
          this.$message.error('上传头像图片大小不能超过 1MB!');
        }
        return isPNG && isLt1M;
      },
      //---图片上传成功后的回显
      handleAvatarSuccess(response, file, fileList){  
      this.imageUrl = response.result;
      },
      //---取消
      cancel(){
        this.$router.push('/setting/serve');
      },
      //---返回
      backhome(){
        this.$router.push('/setting/serve');
      },
      //---表单特殊值输入的处理
      changeCode(value){
       let reg = /^[0-9]\d*$/;
       if(value >999 || new RegExp(reg).test(value) ==false) {
          setTimeout(() => {
             this.ruleForm.orderLists ='';
        },0);
       }
      },
      //---获取服务详情
      getServerDetail(){
        var params = {
          serverId:this.$route.params.serverId,
          JSESSIONID:""
        }
        srv.getServeDetails(params).then(res=>{
          if(res.errorCode=="600000"){
              this.ruleForm.serveName = res.result.result.serverName;
              this.ruleForm.serveIndex = res.result.result.mark;
              this.ruleForm.orderLists = res.result.result.sort;
              this.systemClass = parseInt(res.result.result.systemClass);
              this.ruleForm.visitAddress = res.result.result.link;
              this.needProject = parseInt(res.result.result.needProject);
              this.imageUrl = res.result.result.serverIcon;
              this.ruleForm.description = res.result.result.memo;
          }
        });
      },
      //----表单提交
      submitForm(){
         var that = this;
         this.$refs["ruleForm"].validate((valid) => { 
            if(valid){
                 this.$confirm('是否确认提交,是否继续?', '提示', {
                 confirmButtonText: '确定',
                 cancelButtonText: '取消',
                 type: 'warning'
              }).then(() => {
                let params;
                if(that.$route.params.serverId==="-1"){
                   params = {
                    serverName:that.ruleForm.serveName,
                    mark:that.ruleForm.serveIndex,
                    sort:parseInt(that.ruleForm.orderLists)+"",
                    systemClass:that.systemClass+"",
                    link:that.ruleForm.visitAddress,
                    needProject:that.needProject+"",
                    serverIcon:that.imageUrl,
                    memo:that.ruleForm.description,
                    JSESSIONID:""
                   }
                }else{
                   params = {
                    serverId:that.$route.params.serverId,
                    serverName:that.ruleForm.serveName,
                    mark:that.ruleForm.serveIndex,
                    sort:parseInt(that.ruleForm.orderLists)+"",
                    systemClass:that.systemClass+"",
                    link:that.ruleForm.visitAddress,
                    needProject:that.needProject+"",
                    serverIcon:that.imageUrl,
                    memo:that.ruleForm.description,
                    JSESSIONID:""
                  }
                }
                  srv.createOrModifyServe(params).then(res =>{
                    if(res.errorCode=="600000"){
                        this.$notify.success({
                             title: '成功',
                             message: `提交成功`,
                        });  
                    }
                     this.$router.push('/setting/serve'); 
                     this.$parent.$refs.wt.getData();
                  });
               });
            }
         });
      }
    }
  }
</script>