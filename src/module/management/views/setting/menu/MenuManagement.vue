<template>
  <section class="menu-wrapper">
		<paper>
			<son-title :headTitle="headTitle"></son-title>
			<div>
				<el-row>
					<el-col :span="9">
						<div class="content">
							<div class="menu-title"><span class="title title-left">菜单树</span><span class="title title-right" @click="addmenu">新建</span></div>
							<div class="menu-content">
								<el-tree 
								:data="data" 
								:props="defaultProps" 
								:default-expand-all = "true"
								:expand-on-click-node = "false"
								@node-click= "getMenuDetail"
								></el-tree>
							</div>
						</div>
					</el-col>
					<el-col :span="1">
						 <div>&nbsp</div>
					</el-col>
					<el-col :span="14">
						<div class="content">
							<div class="menu-title">
								<span class="title title-left">菜单详情</span>
								<span class="title title-mid" v-if="formDisabled" @click="modifymenu">编辑</span>
								<span class="title title-right" v-if="formDisabled" @click="deletemenu">删除</span>
								<span class="title title-mid" v-if="!formDisabled" @click="conservemenu">保存</span>
								<span class="title title-right" v-if="!formDisabled" @click="cancelEdit">取消</span>
							</div>
							<div class="menu-content">
								<el-form ref="menuForms" label-width="100px" :rules="menuRules" :model="menuForm"  label-position="left">
									<el-form-item label="菜单名称" prop="name">
										<el-input auto-complete="off" :placeholder="'请填写菜单名称，最多'+maxlength+'个字'" :maxlength=maxlength :disabled="formDisabled" v-model="menuForm.name"></el-input>
									</el-form-item>
									<el-form-item label="菜单级别" prop="level">
										<el-select 
										placeholder="请选择菜单级别" 
										:disabled="formDisabled || isModify" 
										v-model="menuForm.level" 
										@change="chooseLevel">
											<el-option label="1" value="1"></el-option>
											<el-option label="2" value="2"></el-option>
											<el-option label="3" value="3"></el-option>
										</el-select>
									</el-form-item>
									<el-form-item label="父级菜单" class="parent-menu" prop="parentName">
										<el-input auto-complete="off" 
										@focus="isParentMenu = true" 
										placeholder="请选择父级菜单" 
										:disabled="formDisabled || topLevel || isModify" 
										:icon="isParentMenu ? 'caret-top' : 'caret-bottom' "  v-model="menuForm.parentName" 
										:on-icon-click="cancel "></el-input>
										<div class="parent-menu-content" v-if="isParentMenu">
											<el-tree 
											:data="datas" 
											:props="parentProps"
											:expand-on-click-node = "false"
											@node-click = "chooseParentMenu"
											class="parent-tree"></el-tree>
										</div>
									</el-form-item>
									<el-form-item label="访问地址" prop="link">
										<el-input auto-complete="off" :placeholder= "topLevel ? '当前为一级菜单，不需要填写访问地址' : '请填写访问地址'"  :disabled="formDisabled || topLevel" v-model="menuForm.link"></el-input>
									</el-form-item>
									<el-form-item label="排列次序" prop="sort">
										<el-input auto-complete="off" placeholder="请填写排序" :disabled="formDisabled" v-model="menuForm.sort"></el-input>
									</el-form-item>
									<el-form-item label="全员可见" prop="allVisible">
										<el-radio-group :disabled="formDisabled || topLevel" v-model="menuForm.allVisible" @change="changeAllVisible">
											<el-radio label="是"></el-radio>
											<el-radio label="否"></el-radio>
										</el-radio-group>
									</el-form-item>
									<el-form-item label="可见人员" prop="visiblePerson">
										<el-input auto-complete="off" placeholder="请填写可见人员" :disabled="formDisabled" icon="more" :on-icon-click="checkMembers" v-model="menuForm.visiblePerson" v-if="formDisabled"></el-input>
										<el-input 
										auto-complete="off" 
										placeholder="请填写可见人员" 
										:disabled="isAllVisible" 
										icon="mf mf-yonghuzhongxin" 
										:on-icon-click="chooseMember" 
										@focus="chooseMember"
										v-model="menuForm.visiblePerson" v-else></el-input>
									</el-form-item>
									<el-form-item label="菜单图标">
										<span :class="menuForm.menuIcon" v-if="formDisabled" style="font-size:20px"></span>
										<span :class="chooseIcon" v-else><span @click="getIconFont">请选择</span></span>
										<el-input v-model="menuForm.menuIcon" v-show="false"></el-input>
									</el-form-item>
									<el-form-item label="描述" prop="memo">
										<el-input type="textarea" auto-complete="off"  placeholder="请填写描述" :disabled="formDisabled" v-model="menuForm.memo"></el-input>
									</el-form-item>
								</el-form>
							</div>
						</div>
					</el-col>
				</el-row>
			</div>
			<el-dialog :visible.sync="isFont" :show-close="true" title="图标库" @close="cancel" size="small" top="10%">
				<div class="iconContent">
					<span v-for="(item,index) in iconFontList" :class="item" style="font-size:30px" @click="chooseIconFont(index)"></span>
				</div>
			</el-dialog>
			<div class="content choose-member" v-if="showMembers" v-drag = "greet">
				<div class="menu-title"><span class="title title-left">可见人员({{memberList.length}})</span><span class="title title-right mf mf-close" @click="showMembers = false"></span></div>
				<div class="menu-content">
					<p v-for="(item,index) in memberList">{{index+1}}&nbsp&nbsp&nbsp&nbsp{{item}}</p>
				</div>
			</div>
			<el-dialog :visible.sync="newMember" :show-close="true" @close="cancel" title="选择人员" size="small" top="10%">
				<div>
					<selector :limitMembers="limitMembers" v-model="members"></selector>
				</div>
				<div class="bottom_btn">
					<el-button @click.stop.prevent="sureChoose" type="primary" >确定</el-button>
					<el-button @click.stop.prevent="cancel" >取消</el-button>
				</div>
			</el-dialog>
		</paper>
  </section>
</template>
<style lang="less" scoped>
  .menu-wrapper {
    width: 100%;
    height: 100%;
    font-size: 14px;
		.el-dialog--small{
			width: 524px;
			.iconContent{
				span{
					display: inline-block;
					margin: 10px;
					font-size: 30px;
				}
				span:hover{
					color: #21b8d5;
					cursor: pointer;
				}
			}
		}
		.bottom_btn {
			text-align: right;
			margin: 20px 0;
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
		.choose-member{
			position: absolute;
			border: 1px solid #cecece;
			border-radius: 4px 4px 0 0;
			width: 200px;
			top: 38%;
			right: 50px;
			.menu-title{
				height: 40px;
				line-height: 40px;
				background: #f2f2f2;
				color: #211e2e;
				position: relative;
				.title{
					display: inline-block;
					position: absolute;
					height: 40px;
					line-height: 40px;
				}
				.title-left{
					left: 20px;
				}
				.title-right{
					right: 20px;
					font-size: 20px;
					cursor: pointer;
				}
			}
			.menu-content{
				max-height: 210px;
				overflow: auto;
				p{
					border-bottom: 1px solid #cecece;
					text-indent: 14px;
					font-size: 14px;
					height: 20px;
					line-height: 20px;
					background: rgba(100%, 100%, 100%, 100%);
				}
				p:nth-child(2n){
					background: #f2f2f2;
				}
			}
		}
		.el-row{
			margin-top: 25px;
			.content {
				border: 1px solid #cecece;
				border-radius: 4px 4px 0 0;
				height: 604px;
				overflow: auto;
				.menu-title{
					height: 40px;
					line-height: 40px;
					background: #f2f2f2;
					color: #211e2e;
					position: relative;
					.title{
						display: inline-block;
						position: absolute;
					}
					.title-left{
						left: 20px;
					}
					.title-right{
						right: 20px;
						color: #21b8d5;
						font-size: 13px;
						cursor: pointer;
					}
					.title-mid{
						color: #21b8d5;
						right: 60px;
						cursor: pointer;
					}
				}
				.menu-content{
					padding: 20px;
					.el-tree{
						border: none;
					}
					.el-form{
						.el-form-item{
							span{
								font-size: 18px;
								color: #a5acbe;
								span{
									text-decoration: underline;
									font-size: 14px;
									cursor: pointer;
									color: #21b8d5;
								}
							}
						}
						.parent-menu{
							position: relative;
							.parent-menu-content{
								border-radius: 5px;
								position: absolute;
								top: 38px;
								left: 0;
								z-index: 2017;
								width: 100%;
								max-height: 220px;
								overflow: auto;
								box-shadow: -1px 3px 3px #888888;
							}
						}
					}
				}
			}
		}
  }
</style>
<script>
	import Vue from 'vue';
	import Selector from 'components/utils/org_selector/Selector.vue';
  import SonTitle from 'components/awesome/son_title/SonTitle.vue';
	import Paper from 'components/awesome/paper/Paper.vue';
	import * as srv from '../../../api/service';

  export default{
    data() {
      return {
				limitMembers:500, // 控制人员选择器一次性选择数量
				isParentMenu:false, // 控制父级菜单树的显示
				newMember:false, // 控制人员选择器开关
				isModify: false,	// 控制菜单是否为编辑界面
				showMembers: false, // 控制可见人员查看的显示
				formDisabled: true, // 控制form表单的disabled
				topLevel:true, // 确认是否为一级菜单
				isFont:false, // 控制图标库的显示
				isAllVisible: true, // 控制是否全员可见
				headTitle:{
				titleName: '菜单管理', // 标题的名字
          isBack: false 
				},
				defaultProps: {   //树默认展示参数
          label: "name",
          disabled: "",
          children: "children",
          isLeaf: 'isLeaf'
				},
				parentProps: {   //父级菜单默认展示参数
					label: "menuName",
          disabled: "",
          children: "children",
          isLeaf: 'isLeaf'
				},
				data: [],
				datas: [],
				menuRules: {
					name: [
						{ required: true, message: '请填写菜单名称', trigger: 'blur' }
					],
					level: [
						{ required: true, message: '请选择菜单级别', trigger: 'change' }
					],
					parentName: [
						{ required: false, message: '请选择父级菜单', trigger: 'change' }
					],
					link: [
						{ required: false, validator:(rule,value,callback)=>{
							if(false){
								callback(new Error("请输入正确的url地址"));
							}else{
								callback();
							}
          	}, trigger: 'change' }
					],
					sort: [
						{ required: true, message: '请填写菜单排序', trigger: 'blur' },
						{ required: true, validator:(rule,value,callback)=>{
							if(/^\d+$/.test(value) == false){
								callback(new Error("菜单排序只能输入数字"));
							}else{
								callback();
							}
          	}, trigger: 'change' }
					],
					allVisible: [
						{ required: true, message: '请选择是否可见', trigger: 'change' }
					],
					visiblePerson: [
						{ required: false, message: '请填写可见人员', trigger: 'change' }
					],
					memo: [
						{ required: false, message: '请填写描述', trigger: 'blur' }
					],
					
				},
				menuForm:{
					name:'',
					level:'',
					parentName:'',
					parentId:'',
					link:'',
					sort:'',
					allVisible:'',
					visiblePerson:'',
					menuIcon:'',
					memo:'',
					menuId:''
				},
				maxlength:0, //菜单长度限制
				changeMenuForm:{},
				refreshmethod:this.getTreeData,
				members:[],
				memberList:[],
				iconFontList:[],
				chooseIcon:'',
				triangle:'caret-bottom',
				val:''
      }
    },
		directives: {
			drag:{
				bind(el,binding){
					let oDiv = el; // 当前元素
					let self = this; // 上下文
					oDiv.onmousedown  = function (e) {
						//鼠标按下，计算当前元素距离可视区的距离
						let disX = e.clientX - oDiv.offsetLeft;
						let disY = e.clientY - oDiv.offsetTop;
						document.onmousemove = function (e) {
							//通过事件委托，计算移动的距离 
							let l = e.clientX - disX;
							let t = e.clientY - disY;
							//移动当前元素  
							oDiv.style.left = l + 'px';
							oDiv.style.top = t + 'px';
							//将此时的位置传出去
							binding.value({x:e.pageX,y:e.pageY})
						};
						document.onmouseup = function (e) {
							document.onmousemove = null;
							document.onmouseup = null;
						};
					}
				}
			}
		},
    created() {
			var that = this
			this.refreshmethod().then((val) => {
				if(val.length>0){
					// 初始化默认加载第一个菜单
					that.getMenuDetail('',val[0].menuId);
					that.data = val;
				}else{
					this.$confirm("您还没有菜单，是否立即创建","提示",{
						confirmButtonText: '是',
						cancelButtonText: '否',
						type: 'warning'
					}).then(() => {
						this.addmenu()
					}).catch(() => {

					});
				}
			});
		},
    methods:{
			//接受传来的位置数据，并将数据绑定给data下的val
			greet(val){
				this.val = val;
			},
			// 获取菜单树的数据
			getTreeData() {
				let params = {
					cookie: '1'
				}
				return srv.getSystemMenu(params).then(res => {
					return res.result;
				})
			},
			// 点击获取菜单详情
			getMenuDetail(data,val) {
				let params = {
					menuId: data.menuId || val
				}
				if(this.formDisabled){
					srv.getMenuDetail(params).then(res => {
						var parentParams = {menuId:res.result.parentId};
						var that = this
							srv.getMenuDetail(parentParams).then(parentRes => {
								that.menuForm = {
									name:res.result.name,
									level:res.result.level,
									link:res.result.link,
									sort:res.result.sort,
									allVisible:res.result.allVisible !=='1' ? '否' : '是',
									visiblePerson:res.result.allVisible ==='0' ? String(res.result.visiblePerson) : '',
									menuIcon:res.result.menuIcon,
									memo:res.result.memo,
									parentName: res.result.parentId !=='0' ? parentRes.result.name : '',
									menuId:res.result.menuId
								}
								that.$nextTick(function() {
									that.menuForm.allVisible = res.result.allVisible ==='1' ? '是':'否';
								});
							})
					})
				}else{
					this.$notify({
						title: '警告',
						message: '请先保存当前菜单后再查看其它菜单详情',
						type: 'warning'
					});
				}
			},
			// 添加菜单页面
			addmenu() {
				if(!this.formDisabled){
					this.$confirm("您还未保存菜单，是否放弃编辑","提示",{
						confirmButtonText: '是',
						cancelButtonText: '否',
						type: 'warning'
					}).then(() => {
						this.$refs['menuForms'].resetFields()
						this.chooseIcon = '';
						this.formDisabled = false;
						this.topLevel = false;
						this.isModify = false;
					}).catch(() => {

					});
				}else{
					this.$refs['menuForms'].resetFields()
					this.chooseIcon = '';
					this.formDisabled = false;
					this.topLevel = false;
					this.isModify = false;
				}
			},
			// 编辑菜单页面
			modifymenu() {
				// debugger
				this.isModify = true;
				this.formDisabled = false;
				this.chooseIcon = this.menuForm.menuIcon;
				this.changeMenuForm = this.menuForm;
				if(this.menuForm.level === '1'){
					this.topLevel = true;
				}else{
					this.topLevel = false;
				}
			},
			// 删除菜单
			deletemenu() {
				this.$confirm("该菜单项及其子菜单将全部删除，是否继续删除？","提示",{
					confirmButtonText: '是',
					cancelButtonText: '否',	
					type: 'warning'
				}).then(() => {
					let that = this;
					let params = {
						menuId: this.menuForm.menuId
					}
					srv.deleteMenu(params).then(res => {
						if(res.errorCode === '600000'){
							this.$notify({
								type:'success',
								message:'菜单删除成功'
							});
						}else{
							this.$notify({
								type:'error',
								message:'菜单删除失败'
							});
						}
					})
					setTimeout(() => {
						this.refreshmethod().then((val) => {
							that.data = val;
						});
					},200)
				}).catch(() => {

				});
			},
			// 选择菜单级别
			chooseLevel() {
				this.topLevel = this.menuForm.level === '1';
				this.menuForm.allVisible = this.menuForm.level === '1' ? '是' : '';
				this.menuForm.level === '2' || !this.isModify ? this.chooseIcon = 'mf mf-xiangmuwenjianjia' : ''
				let params = {
					level: this.menuForm.level
				}
				srv.getMenuList(params).then(res => {
					this.datas = res.result;
				})
				if(this.menuForm.level === '1'){
					this.menuRules.link[0].required = false;
					this.menuRules.parentName[0].required = false;
					this.menuForm.allVisible = '是';
					this.menuForm.link = '';
					this.maxlength = 5
				}
				else 
				// if(this.menuForm.level === '2')
				{
					this.menuRules.link[0].required = true; 
					this.menuRules.parentName[0].required = true;
					this.maxlength = 10
				}
			},
			// 选择父级菜单
			chooseParentMenu(data) {
				// console.log(data);
				if(!data.children){
					this.menuForm.parentName = data.menuName;
					this.menuForm.parentId = data.menuId;
					this.isParentMenu = false;
				}else{
					this.$notify({
						type:'warning',
						message:'父级菜单只能选择当前菜单级别的上一级'
					});
				}
			},
			// 选择是否全员可见
			changeAllVisible() {
				this.menuForm.allVisible === '是' ? this.isAllVisible = true : this.isAllVisible = false;
				this.isAllVisible ? this.menuForm.visiblePerson = '' : this.menuForm.visiblePerson;
			},
			// 选择可见人员
			chooseMember() {
				if(!this.isAllVisible){
					this.newMember = true;
				}
			},
			// 确认选择可见人员
			sureChoose() {
				this.newMember = false;
				for(let i = 0;i<this.members.length;i++){
					this.memberList.push(this.members[i].mName)
				}
				this.menuForm.visiblePerson = String(this.memberList)
			},
			// 取消选择·
			cancel() {
				this.members = [];
				this.iconFontList = [];
				this.newMember = false;
				this.isParentMenu = false;
				this.isFont = false;
				this.triangle = 'caret-bottom';
			},
			// 查看可见人员
			checkMembers() {
				if(this.memberList.length>0){	
					this.showMembers = true;
				}else{
					if(this.menuForm.allVisible === '是'){
						this.$notify({
							type:'warning',
							message:'当前菜单为全员可见'
						});
					}else{
						this.$notify({
							type:'warning',
							message:'当前菜单无可见人员'
						});
					}
				}
			},
			// 打开图标库
			getIconFont() {
				let styles = document.getElementsByTagName("style");
				for(var i=0,ii=styles.length;i<ii;i++) {
					if(styles[i].innerText.indexOf("/static/fonts/iconfont")) {
						var regexp = /.mf-([a-zA-Z0-9_-]+):before/g;
						var rs = styles[i].innerText.match(regexp);
						var iconClass = "mf "
						if(rs) {
							for(var j=0,jj=rs.length;j<jj;j++) {
								this.iconFontList.push(iconClass+rs[j].replace(":before","").replace(".", ""));
							}
						}
					}
				}
				this.isFont = true;
			},
			// 选择图标
			chooseIconFont(index) {
				this.chooseIcon = this.iconFontList[index]
				this.isFont = false;
			},
			// 保存菜单
			conservemenu() {
				let params = {
					menuId:this.menuForm.menuId,
					parentId: this.isModify ? '' : this.menuForm.parentId,
					name:this.menuForm.name,
					link:this.menuForm.link,
					sort:this.menuForm.sort,
					allVisible:this.menuForm.allVisible === '是' ? this.menuForm.allVisible = "1" : this.menuForm.allVisible = "0",
					visiblePerson:this.menuForm.visiblePerson ==='' ? [] : this.menuForm.visiblePerson.split(","),
					menuIcon:this.chooseIcon,
					memo:this.menuForm.memo,
					level: this.isModify ? '' : this.menuForm.level
				}
				let that = this;
				this.$refs["menuForms"].validate((valid) => {
					if(valid){
						if(this.isModify){
							srv.modifyMenu(params).then(res => {
								if(res.errorCode === '600000'){
									this.formDisabled = true;
									this.topLevel = true;
									this.chooseIcon = '';
									this.$notify({
										type:'success',
										message:'菜单修改成功'
									});
									this.getMenuDetail('',params.menuId)
									// this.menuForm = params;
								}else{
									this.$notify({
										type:'error',
										message:'菜单修改失败'
									});
								}
							})
						}else{
							// 新增菜单请求
							srv.addMenu(params).then(res => {
								if(res.errorCode === '600000'){
									this.formDisabled = true;
									this.topLevel = true;
									this.$notify({
										type:'success',
										message:'菜单创建成功'
									});
									this.getMenuDetail('',res.result.menuId)
								}else{
									this.$notify({
										type:'error',
										message:'菜单创建失败'
									});
								}
							})
						}
					}else{
						this.$notify({
							type:'warning',
							message:'请填写必要选项'
						});
						return false;
					}
				});
				
				setTimeout(() => {
					this.refreshmethod().then((val) => {
						that.data = val;
					});
				},500)
			},
			// 退出菜单新增或者编辑
			cancelEdit() {
				this.formDisabled = true;
				this.topLevel = true;
				this.isModify = false;
				this.$refs['menuForms'].resetFields()
				this.chooseIcon = ''
			},
    },
    components: {
			"selector": Selector,
      "son-title": SonTitle,
      "paper" : Paper
    }
  }
</script>
