webpackJsonp([2,5],{480:function(t,e,i){function n(t){i(511)}var o=i(188)(i(505),i(514),n,"data-v-11def9f4",null);t.exports=o.exports},485:function(t,e,i){function n(t){i(553)}var o=i(188)(i(518),i(570),n,"data-v-7302774a",null);t.exports=o.exports},494:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},created:function(){},methods:{},props:["title"]}},495:function(t,e,i){e=t.exports=i(187)(!0),e.push([t.i,".configAddHeader{text-align:left;margin-left:10px;margin-bottom:10px}.block{text-align:left;margin-left:40px;margin-top:10px}","",{version:3,sources:["D:/projectLY/frameWork1.0/src/components/common/configHeader.vue"],names:[],mappings:"AACA,iBACE,gBAAiB,AACjB,iBAAkB,AAClB,kBAAoB,CACrB,AACD,OACE,gBAAiB,AACjB,iBAAkB,AAClB,eAAiB,CAClB",file:"configHeader.vue",sourcesContent:["\n.configAddHeader {\n  text-align: left;\n  margin-left: 10px;\n  margin-bottom: 10px;\n}\n.block {\n  text-align: left;\n  margin-left: 40px;\n  margin-top: 10px;\n}\n"],sourceRoot:""}])},496:function(t,e,i){var n=i(495);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(479)("6c758020",n,!0)},497:function(t,e,i){function n(t){i(496)}var o=i(188)(i(494),i(498),n,null,null);t.exports=o.exports},498:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"block configAddHeader"},[i("span",{staticClass:"wrapper"},[i("el-button",{attrs:{type:"info"}},[i("i",{staticClass:"el-icon-edit"}),t._v("\n      "+t._s(t.title)+"\n    ")])],1)])},staticRenderFns:[]}},499:function(t,e,i){"use strict";var n=i(12),o=new n.default;e.a=o},500:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{configUpload:"",mult:!1,fileList:[{url:""}],dialogImageUrl:"",dialogVisible:!1}},created:function(){this.configUpload=this.Host+this.$FileUpload,this.imgUrlFileList?this.fileList=[{url:this.imgUrlFileList}]:this.fileList=[]},mounted:function(){var t=this;t.$nextTick(function(){t.$refs.uploadBox.$children[0].$el.children.length>=1&&(t.$refs.uploadBox.$children[1].$el.style.display="none")})},methods:{handleRemove:function(t,e){var i=this;i.$emit("EmptyImgUrl",""),i.$nextTick(function(){i.$refs.uploadBox.$children[1].$el.style.display="inline-block"})},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},handleSuccessUpload:function(t){var e=this;"/indexCopy"==this.$route.fullPath&&e.$store.dispatch("onActionChangeIndexCopyImgUrl",t.slice(1)),e.$emit("SendToImgUrl",t.slice(1)),e.$nextTick(function(){e.$refs.uploadBox.$children[0].$el.children.length>=1&&(e.$refs.uploadBox.$children[1].$el.style.display="none",e.$refs.uploadBox.$children[0].$el.style.display="inline-block")}),e.btnIconDir=t.slice(1),e.dialogImageUrl=e.Host+t},beforeAvatarUpload:function(t){var e="image/jpeg"===t.type||"image/jpg"===t.type||"image/png"===t.type||"image/gif"===t.type,i=t.size/1024/1024<20;return e||this.$message.error("上传环境地址图片只能是 jpeg/jpg/png/gif 格式!"),i||this.$message.error("上传环境地址图片大小不能超过 20M!"),e&&i}},props:["imgUrlFileList"],watch:{imgUrlFileList:{handler:function(t,e){var i=this;this.fileList=[{url:t}],t?this.$nextTick(function(){i.$refs.uploadBox.$children[0].$el.children.length>=1&&(i.$refs.uploadBox.$children[0].$el.style.display="inline-block",i.$refs.uploadBox.$children[1].$el.style.display="none")}):this.$nextTick(function(){i.$refs.uploadBox.$children[1].$el.style.display="inline-block",i.$refs.uploadBox.$children[0].$children[0].$el.style.display="none"})},deep:!0}}}},501:function(t,e,i){e=t.exports=i(187)(!0),e.push([t.i,".el-upload-dragger{width:100%!important;height:100%!important}.auth-img div.el-upload--picture-card,.auth-img li.el-upload-list__item.is-success{width:100px!important;height:100px!important;line-height:100px}.index-copy div.el-upload--picture-card,.index-copy li.el-upload-list__item.is-success{width:60px!important;height:60px!important;line-height:60px}.el-dialog.el-dialog--tiny{top:30%!important;position:fixed!important;-webkit-transform:translate(-50%)!important;transform:translate(-50%)!important}\n/*!*.el-dialog.el-dialog--tiny:nth-of-type(1){*!*/\n  /*!*top: 10% !important;*!*/\n/*!*}*!*/","",{version:3,sources:["D:/projectLY/frameWork1.0/src/components/common/imgUpload.vue"],names:[],mappings:"AACA,mBACE,qBAAuB,AACvB,qBAAwB,CACzB,AAMD,mFACE,sBAAwB,AACxB,uBAAyB,AACzB,iBAAmB,CACpB,AAMD,uFACE,qBAAuB,AACvB,sBAAwB,AACxB,gBAAkB,CACnB,AACD,2BACE,kBAAoB,AACpB,yBAA2B,AAE3B,4CAA6C,AACrC,mCAAqC,CAC9C;AACD,kDAAkD;EAChD,4BAA4B;AAC9B,SAAS",file:"imgUpload.vue",sourcesContent:["\n.el-upload-dragger{\n  width: 100% !important;\n  height: 100% !important;\n}\n.auth-img div.el-upload--picture-card {\n   width: 100px !important;\n   height: 100px !important;\n   line-height: 100px;\n}\n.auth-img li.el-upload-list__item.is-success {\n  width: 100px !important;\n  height: 100px !important;\n  line-height: 100px;\n}\n.index-copy div.el-upload--picture-card {\n  width: 60px !important;\n  height: 60px !important;\n  line-height: 60px;\n}\n.index-copy li.el-upload-list__item.is-success {\n  width: 60px !important;\n  height: 60px !important;\n  line-height: 60px;\n}\n.el-dialog.el-dialog--tiny {\n  top: 30% !important;\n  position: fixed !important;\n  /*width: 30% !important;*/\n  -webkit-transform:translate(-50%) !important;\n          transform:translate(-50%) !important;\n}\n/*!*.el-dialog.el-dialog--tiny:nth-of-type(1){*!*/\n  /*!*top: 10% !important;*!*/\n/*!*}*!*/\n/*.el-dialog.el-dialog--tiny:nth-of-type(n-1){*/\n  /*top: 30% !important;*/\n/*}*/\n/*.el-dialog.el-dialog--tiny:nth-of-type(n-4){*/\n  /*top: 50% !important;*/\n/*}*/\n/*.el-dialog.el-dialog--tiny:nth-of-type(n-3){*/\n  /*top: 40% !important;*/\n/*}*/\n/*.el-dialog.el-dialog--tiny:nth-of-type(n-4){*/\n  /*top: 70% !important;*/\n/*}*/\n"],sourceRoot:""}])},502:function(t,e,i){var n=i(501);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(479)("42f1628a",n,!0)},503:function(t,e,i){function n(t){i(502)}var o=i(188)(i(500),i(504),n,null,null);t.exports=o.exports},504:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-upload",{ref:"uploadBox",staticClass:"bixbix",attrs:{action:t.configUpload,"list-type":"picture-card",multiple:t.mult,drag:"","file-list":t.fileList,"on-preview":t.handlePictureCardPreview,"before-upload":t.beforeAvatarUpload,"on-remove":t.handleRemove,"on-success":t.handleSuccessUpload}},[i("i",{staticClass:"el-icon-plus"})]),t._v(" "),i("el-dialog",{attrs:{size:"tiny"},model:{value:t.dialogVisible,callback:function(e){t.dialogVisible=e},expression:"dialogVisible"}},[i("img",{staticClass:"img1",attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1)},staticRenderFns:[]}},505:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(499),o=i(497),a=i.n(o),l=i(503),r=i.n(l);e.default={data:function(){return{mUrlAgent:"",mUrlweilian:"",mUrlVersion:"",version:"",compID:{},compOption:[],input:"",envMsg:{},envID:null,mUrlOffical:"",mUrlMall:"",ImgMLogin:"",ImgMAuth:"",ImgMMain:"",ImgMAbout:"",fileListMLogin:"",fileListMAuth:"",fileListMMain:"",fileListMAbout:"",options:this.envOption,titleConfig:"",imgUrlPre:this.Host}},created:function(){var t=this;this.hasAuth(),t.titleConfig=t.configEditItem?"编辑配置":"添加配置",t.ifEdit=!!t.configEditItem,t.version=n.a.version?n.a.version:"",t.configEditItem&&t.configEditItem.id?t.hasAuth(function(){t.init(t.configEditItem)}):t.$notify.info({title:"消息",message:"图片可以拖拽上传"})},methods:{hasAuth:function(t){var e=this;1==e.$store.getters.user.grade?(this.compID={compCode:e.$store.getters.user.company.comp_code,compId:e.$store.getters.user.company.id,compName:e.$store.getters.user.company.comp_name},e.compOption[0]=this.compID,t&&t()):0==e.$store.getters.user.grade&&e.$Ajax.post(e.Host+"/sevenStarController/getAllCompany",{}).then(function(i){e.compOption=i.data.data,t&&t()}).catch(function(t){})},chengeee:function(t){},init:function(t){var e=this,i=t;e.compID=e.compOption.find(function(t,e,n){return t.compCode==i.orgName}),e.version=i.version,e.envMsg=e.options.find(function(t,e,n){return t.value==i.env}),e.mUrlOffical=i.homeUrl,e.mUrlVersion=null==i.versionAbout?"":i.versionAbout,e.mUrlAgent=null==i.providerUrl?"":i.providerUrl,e.mUrlMall=i.mallUrl,i.mUrlweilian&&null!=i.mUrlweilian||(i.mUrlweilian=""),e.mUrlweilian=i.weilianlUrl,e.ImgMLogin=i.loginLogoDir,e.ImgMAuth=i.authLogoDir,e.ImgMMain=i.indexLogoDir,e.ImgMAbout=i.aboutLogoDir,e.fileListMAuth=e.imgUrlPre+"/"+i.authLogoDir+"?"+ +new Date,e.fileListMMain=e.imgUrlPre+"/"+i.indexLogoDir+"?"+ +new Date,e.fileListMAbout=e.imgUrlPre+"/"+i.aboutLogoDir+"?"+ +new Date,e.fileListMLogin=e.imgUrlPre+"/"+i.loginLogoDir+"?"+ +new Date},receptImgMLogin:function(t){this.ImgMLogin=t},receptImgMAuth:function(t){this.ImgMAuth=t},receptImgMMain:function(t){this.ImgMMain=t},receptImgMAbout:function(t){this.ImgMAbout=t},emptyImgMLogin:function(){this.ImgMLogin=""},emptyImgMAuth:function(){this.ImgMAuth=""},emptyImgMMain:function(){this.ImgMMain=""},emptyImgMAbout:function(){this.ImgMAbout=""},configConfirm:function(){var t=this;if(t.configEditItem&&t.configEditItem.id){if(!(this.ImgMLogin&&this.ImgMAuth&&this.ImgMMain&&this.ImgMAbout))return void t.$message({message:"图片上传不能为空",type:"warning",duration:t.$duration,showClose:!0});var e={id:t.configEditItem.id,orgName:t.compID.compCode,version:t.version,env:t.envMsg.value,homeUrl:t.mUrlOffical.trim(),mallUrl:t.mUrlMall.trim(),weilianlUrl:t.mUrlweilian.trim(),providerUrl:t.mUrlAgent.trim(),loginLogoDir:t.ImgMLogin,authLogoDir:t.ImgMAuth,indexLogoDir:t.ImgMMain,aboutLogoDir:t.ImgMAbout,compId:t.configEditItem.compId,versionAbout:t.mUrlVersion.trim()};t.confirm(t.Host+"/authController/updateAuthentication",e,function(e){1==e.data.code&&(n.a.compCode=t.compID.compCode,t.$emit("configEditSuccess",{code:1}))})}else{if(!t.compID.compCode)return void this.$message({message:"请先选择企业信息",type:"warning",duration:t.$duration});if(!t.version)return void this.$message({message:"请先输入版本信息",type:"warning",duration:t.$duration});if(!t.envMsg.value)return void this.$message({message:"请先选择环境信息",type:"warning",duration:t.$duration});if(!t.mUrlOffical)return void this.$message({message:"请先填入移动端官网链接",type:"warning",duration:t.$duration});if(!t.mUrlMall)return void this.$message({message:"请先填入移动端商城链接",type:"warning",duration:t.$duration});if(!t.ImgMLogin)return void this.$message({message:"请先上传移动端登陆logo",type:"warning",duration:t.$duration});if(!t.ImgMAuth)return void this.$message({message:"请先上传移动端鉴权logo",type:"warning",duration:t.$duration});if(!t.ImgMMain)return void this.$message({message:"请先上传移动端首页logo",type:"warning",duration:t.$duration});if(!t.ImgMAbout)return void this.$message({message:"请先上传移动端关于页logo",type:"warning",duration:t.$duration});t.confirm(t.Host+"/authController/getAuthenIsExist",{orgName:t.compID.compCode,version:t.version,env:t.envMsg.value},function(e){0==e.data.code?t.$message({message:e.data.msg+"请去鉴权配置列表中查看并可以编辑",type:"warning",duration:t.$duration,showClose:!0}):t.confirm(t.Host+"/authController/addAuthentication",{orgName:t.compID.compCode,version:t.version,env:t.envMsg.value,homeUrl:t.mUrlOffical.trim(),mallUrl:t.mUrlMall.trim(),weilianlUrl:t.mUrlweilian.trim(),providerUrl:t.mUrlAgent.trim(),loginLogoDir:t.ImgMLogin,authLogoDir:t.ImgMAuth,indexLogoDir:t.ImgMMain,aboutLogoDir:t.ImgMAbout,compId:t.compID.compId,versionAbout:t.mUrlVersion.trim()},function(e){t.$message({message:e.data.msg,type:0==e.data.code?"warning":"success",duration:t.$duration,showClose:!0,onClose:function(){1==e.data.code&&(n.a.version=t.version,t.$router.push({path:"/authList"}))}})})})}},confirm:function(t,e,i){this.$Ajax.post(t,e,i).then(function(t){i&&i(t)}).catch(function(t){})},cancelConfig:function(){this.configEditItem&&this.configEditItem.id?this.$emit("configEditSuccess",{code:0}):this.$router.push({path:"/authList"})}},components:{configheader:a.a,imgupload:r.a},props:["configEditItem"],watch:{configEditItem:{deep:!0,handler:function(t,e){this.init(t)}}}}},508:function(t,e,i){e=t.exports=i(187)(!0),e.push([t.i,'.configAddHeader[data-v-11def9f4]{text-align:left;margin-left:10px;margin-bottom:10px}.configAdd li[data-v-11def9f4]{padding:10px}.configAdd li>div[data-v-11def9f4]{float:left;padding-left:10px;line-height:36px}.configAdd li .tips-exp[data-v-11def9f4]{width:300px!important}.configAdd li .tips-exp>p[data-v-11def9f4]{text-align:left}.configAdd li .el-icon-information[data-v-11def9f4]:before{content:"\\E615";color:skyblue;font-size:16px}.configAdd li>div[data-v-11def9f4]:first-of-type{min-width:100px;text-align:right;padding-left:30px;margin-right:15px;font-size:14px}.configAdd li>div[data-v-11def9f4]:last-of-type{width:300px}.configAdd li>div:last-of-type>div[data-v-11def9f4]{width:100%}.block[data-v-11def9f4]{text-align:left;margin-left:40px;margin-top:10px}',"",{version:3,sources:["D:/projectLY/frameWork1.0/src/components/auth/authAdd.vue"],names:[],mappings:"AACA,kCACE,gBAAiB,AACjB,iBAAkB,AAClB,kBAAoB,CACrB,AACD,+BACE,YAAc,CACf,AACD,mCACI,WAAY,AACZ,kBAAmB,AACnB,gBAAkB,CACrB,AACD,yCACI,qBAAwB,CAC3B,AACD,2CACM,eAAiB,CACtB,AACD,2DACI,gBAAiB,AACjB,cAAe,AACf,cAAgB,CACnB,AACD,iDACI,gBAAiB,AACjB,iBAAkB,AAClB,kBAAmB,AACnB,kBAAmB,AACnB,cAAgB,CACnB,AACD,gDACI,WAAa,CAChB,AACD,oDACM,UAAY,CACjB,AACD,wBACE,gBAAiB,AACjB,iBAAkB,AAClB,eAAiB,CAClB",file:"authAdd.vue",sourcesContent:['\n.configAddHeader[data-v-11def9f4] {\n  text-align: left;\n  margin-left: 10px;\n  margin-bottom: 10px;\n}\n.configAdd li[data-v-11def9f4] {\n  padding: 10px;\n}\n.configAdd li > div[data-v-11def9f4] {\n    float: left;\n    padding-left: 10px;\n    line-height: 36px;\n}\n.configAdd li .tips-exp[data-v-11def9f4] {\n    width: 300px !important;\n}\n.configAdd li .tips-exp > p[data-v-11def9f4] {\n      text-align: left;\n}\n.configAdd li .el-icon-information[data-v-11def9f4]:before {\n    content: "\\E615";\n    color: skyblue;\n    font-size: 16px;\n}\n.configAdd li > div[data-v-11def9f4]:first-of-type {\n    min-width: 100px;\n    text-align: right;\n    padding-left: 30px;\n    margin-right: 15px;\n    font-size: 14px;\n}\n.configAdd li > div[data-v-11def9f4]:last-of-type {\n    width: 300px;\n}\n.configAdd li > div:last-of-type > div[data-v-11def9f4] {\n      width: 100%;\n}\n.block[data-v-11def9f4] {\n  text-align: left;\n  margin-left: 40px;\n  margin-top: 10px;\n}\n'],sourceRoot:""}])},511:function(t,e,i){var n=i(508);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(479)("09549c04",n,!0)},514:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("configheader",{attrs:{title:t.titleConfig}}),t._v(" "),i("ul",{staticClass:"configAdd"},[i("li",{staticClass:"clearfix"},[i("div",[t._v("企业名称")]),t._v(" "),i("div",[i("el-select",{attrs:{placeholder:"请选择企业",disabled:t.ifEdit},model:{value:t.compID,callback:function(e){t.compID=e},expression:"compID"}},t._l(t.compOption,function(t){return i("el-option",{key:t.compId,attrs:{label:t.compName,value:t}})}))],1)]),t._v(" "),i("li",{staticClass:"clearfix"},[i("div",[t._v("版本信息")]),t._v(" "),i("div",[i("el-input",{attrs:{placeholder:"请输入对应版本",disabled:t.ifEdit},model:{value:t.version,callback:function(e){t.version=e},expression:"version"}})],1)]),t._v(" "),i("li",{staticClass:"clearfix"},[i("div",[t._v("环境信息")]),t._v(" "),i("div",[i("el-select",{attrs:{placeholder:"请选择环境信息",disabled:t.ifEdit},on:{change:t.chengeee},model:{value:t.envMsg,callback:function(e){t.envMsg=e},expression:"envMsg"}},t._l(t.options,function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t}})}))],1)]),t._v(" "),i("li",{staticClass:"clearfix"},[i("div",[t._v("官网链接")]),t._v(" "),i("div",[i("el-input",{attrs:{placeholder:"请输入链接地址"},model:{value:t.mUrlOffical,callback:function(e){t.mUrlOffical=e},expression:"mUrlOffical"}})],1)]),t._v(" "),i("li",{staticClass:"clearfix"},[i("div",[t._v("商城链接")]),t._v(" "),i("div",[i("el-input",{attrs:{placeholder:"请输入链接地址"},model:{value:t.mUrlMall,callback:function(e){t.mUrlMall=e},expression:"mUrlMall"}})],1)]),t._v(" "),i("li",{staticClass:"clearfix"},[i("div",[t._v("微链地址")]),t._v(" "),i("div",[i("el-input",{attrs:{placeholder:"请输入链接地址"},model:{value:t.mUrlweilian,callback:function(e){t.mUrlweilian=e},expression:"mUrlweilian"}})],1)]),t._v(" "),i("li",{staticClass:"clearfix"},[i("div",[t._v("服务商地址")]),t._v(" "),i("div",[i("el-input",{attrs:{placeholder:"请输入服务商地址"},model:{value:t.mUrlAgent,callback:function(e){t.mUrlAgent=e},expression:"mUrlAgent"}})],1)]),t._v(" "),i("li",{staticClass:"clearfix"},[i("div",[t._v("版本号")]),t._v(" "),i("div",[i("el-input",{attrs:{placeholder:"请输入版本号"},model:{value:t.mUrlVersion,callback:function(e){t.mUrlVersion=e},expression:"mUrlVersion"}})],1)]),t._v(" "),i("li",{staticClass:"clearfix"},[i("div",[t._v("登录logo")]),t._v(" "),i("imgupload",{staticClass:"auth-img",attrs:{imgUrlFileList:t.fileListMLogin},on:{SendToImgUrl:t.receptImgMLogin,EmptyImgUrl:t.emptyImgMLogin}}),t._v(" "),t._m(0),t._v(" "),t._m(1)],1),t._v(" "),i("li",{staticClass:"clearfix"},[i("div",[t._v("鉴权logo")]),t._v(" "),i("imgupload",{staticClass:"auth-img",attrs:{imgUrlFileList:t.fileListMAuth},on:{SendToImgUrl:t.receptImgMAuth,EmptyImgUrl:t.emptyImgMAuth}}),t._v(" "),t._m(2),t._v(" "),t._m(3)],1),t._v(" "),i("li",{staticClass:"clearfix"},[i("div",[t._v("首页logo")]),t._v(" "),i("imgupload",{staticClass:"auth-img",attrs:{imgUrlFileList:t.fileListMMain},on:{SendToImgUrl:t.receptImgMMain,EmptyImgUrl:t.emptyImgMMain}}),t._v(" "),t._m(4),t._v(" "),t._m(5)],1),t._v(" "),i("li",{staticClass:"clearfix"},[i("div",[t._v("关于页logo")]),t._v(" "),i("imgupload",{staticClass:"auth-img",attrs:{imgUrlFileList:t.fileListMAbout},on:{SendToImgUrl:t.receptImgMAbout,EmptyImgUrl:t.emptyImgMAbout}}),t._v(" "),t._m(6),t._v(" "),t._m(7)],1)]),t._v(" "),i("div",{staticClass:"block"},[i("span",{staticClass:"wrapper"},[i("el-button",{attrs:{type:"success"},on:{click:t.configConfirm}},[t._v("确定")]),t._v(" "),i("el-button",{attrs:{type:"info"},on:{click:t.cancelConfig}},[t._v("取消")])],1)])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("i",{staticClass:"el-icon-information"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tips-exp"},[i("p",[i("strong",[t._v("PC：")]),t._v("165*27px的尺寸")]),t._v(" "),i("p",[i("strong",[t._v("Android：")]),t._v("470*76的尺寸")]),t._v(" "),i("p",[i("strong",[t._v("IOS：")]),t._v("540*88的尺寸")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("i",{staticClass:"el-icon-information"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tips-exp"},[i("p",[i("strong",[t._v("PC：")]),t._v("358*96px的尺寸")]),t._v(" "),i("p",[i("strong",[t._v("Android：")]),t._v("506*130的尺寸")]),t._v(" "),i("p",[i("strong",[t._v("IOS：")]),t._v("580*150的尺寸")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("i",{staticClass:"el-icon-information"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tips-exp"},[i("p",[i("strong",[t._v("PC：")]),t._v("163*28px的尺寸")]),t._v(" "),i("p",[i("strong",[t._v("Android：")]),t._v("979*184的尺寸")]),t._v(" "),i("p",[i("strong",[t._v("IOS：")]),t._v("979*240的尺寸")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("i",{staticClass:"el-icon-information"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tips-exp"},[i("p",[i("strong",[t._v("PC：")]),t._v("295*79px的尺寸")]),t._v(" "),i("p",[i("strong",[t._v("Android：")]),t._v("662*156的尺寸")]),t._v(" "),i("p",[i("strong",[t._v("IOS：")]),t._v("760*180的尺寸")])])}]}},518:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(499),o=i(480),a=i.n(o);e.default={data:function(){return{showclose:!0,compOption:{},pageShow:!1,currentPage:1,pageSize:6,total:null,loading:!0,optionComp:[],sevenStarListItem:[],dialogTableVisible:!1,itemtitle:"",authItem:{},imgUrlPre:this.Host+"/",editSelectMsg:""}},mounted:function(){},created:function(){var t=this;t.listOff=!0,t.loading=!1,t.hasAuth(function(){n.a.compCode&&(t.compOption=t.optionComp.find(function(t,e,i){return t.compCode==n.a.compCode}),t.init())})},methods:{changeSortVersion:function(t,e){return t.version-e.version>0},hasAuth:function(t){var e=this;1==e.$store.getters.user.grade?(this.compOption={compCode:e.$store.getters.user.company.comp_code,compId:e.$store.getters.user.company.id,compName:e.$store.getters.user.company.comp_name},e.optionComp[0]=this.compOption):0==e.$store.getters.user.grade&&e.$Ajax.post(e.Host+"/sevenStarController/getAllCompany",{}).then(function(i){e.optionComp=i.data.data,t&&t()}).catch(function(t){})},check:function(){this.init()},close1:function(t){var e=this;e.dialogTableVisible=t,e.init()},init:function(){var t=this;this.$Ajax.post(this.Host+"/authController/getAuthenticationByOrgName",{orgName:this.compOption.compCode}).then(function(e){if(0==e.data.code)return t.$message.warning(e.data.msg),void(t.sevenStarListItem=[]);n.a.compCode=t.compOption.compCode,t.editSelectMsg=t.compOption.compCode,t.sevenStarListItem=e.data.data;for(var i=0;i<t.sevenStarListItem.length;i++)t.sevenStarListItem[i].compId=t.compOption.compId,t.sevenStarListItem[i].weilianlUrl=null==t.sevenStarListItem[i].weilianlUrl?"":t.sevenStarListItem[i].weilianlUrl}).catch(function(t){})},editFinish:function(t){t.code,this.dialogTableVisible=!1},deleConfigItem:function(t,e){var i=this;i.$confirm("确定删除?","",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){i.$Ajax.post(i.Host+"/authController/delAuthenticationById",{id:e.id,compId:e.compId}).then(function(t){i.$message({type:1==t.data.code?"success":"error",message:t.data.msg,duration:i.$duration,onClose:function(){1==t.data.code&&i.init()}})}).catch(function(t){})}).catch(function(){i.$message({type:"info",message:"已取消删除",duration:i.$duration})})},editConfigItem:function(t,e){this.authItem=e,this.dialogTableVisible=!0},selectCompName:function(t){}},components:{configedit:a.a}}},540:function(t,e,i){e=t.exports=i(187)(!0),e.push([t.i,".el-table__body-wrapper .el-table__body .el-table__row td .cell span .el-tag[data-v-7302774a]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%;background-color:#c0c5cc}.el-table__body-wrapper .el-table__body .el-table__row td:last-of-type .cell[data-v-7302774a],.el-table__body-wrapper .el-table__body .el-table__row td:last-of-type div[data-v-7302774a]{padding-left:0!important;padding-right:0!important;width:100%}.el-table__body-wrapper .el-table__body .el-table__row td:last-of-type .cell button[data-v-7302774a],.el-table__body-wrapper .el-table__body .el-table__row td:last-of-type div button[data-v-7302774a]{padding:4px 6px!important}.configCheck[data-v-7302774a]{display:inline-block;margin-bottom:20px;margin-left:0}","",{version:3,sources:["D:/projectLY/frameWork1.0/src/components/auth/authList.vue"],names:[],mappings:"AAQA,8FACI,gBAAiB,AACjB,uBAAwB,AACxB,mBAAoB,AACpB,WAAY,AACZ,wBAA0B,CAE7B,AACD,0LACI,yBAA2B,AAC3B,0BAA4B,AAC5B,UAAY,CACf,AACD,wMACM,yBAA4B,CACjC,AACD,8BACE,qBAAsB,AACtB,mBAAoB,AACpB,aAAe,CAChB",file:"authList.vue",sourcesContent:["\n.el-table__body-wrapper[data-v-7302774a] {\n  /*td:last-of-type {*/\n  /*.el-table .cell:last-of-type {*/\n  /*padding-left: 0 !important;*/\n  /*}*/\n  /*}*/\n}\n.el-table__body-wrapper .el-table__body .el-table__row td .cell span .el-tag[data-v-7302774a] {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 100%;\n    background-color: #c0c5cc;\n    /*background-color: #cc98b2;*/\n}\n.el-table__body-wrapper .el-table__body .el-table__row td:last-of-type .cell[data-v-7302774a], .el-table__body-wrapper .el-table__body .el-table__row td:last-of-type div[data-v-7302774a] {\n    padding-left: 0 !important;\n    padding-right: 0 !important;\n    width: 100%;\n}\n.el-table__body-wrapper .el-table__body .el-table__row td:last-of-type .cell button[data-v-7302774a], .el-table__body-wrapper .el-table__body .el-table__row td:last-of-type div button[data-v-7302774a] {\n      padding: 4px 6px !important;\n}\n.configCheck[data-v-7302774a] {\n  display: inline-block;\n  margin-bottom: 20px;\n  margin-left: 0;\n}\n"],sourceRoot:""}])},553:function(t,e,i){var n=i(540);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(479)("28d50088",n,!0)},570:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading.body",value:t.loading,expression:"loading",modifiers:{body:!0}}],staticClass:"company"},[i("el-select",{staticClass:"configSelect1",attrs:{placeholder:"请选择集团"},on:{change:t.selectCompName},model:{value:t.compOption,callback:function(e){t.compOption=e},expression:"compOption"}},t._l(t.optionComp,function(t){return i("el-option",{key:t.compId,attrs:{label:t.compName,value:t}})})),t._v(" "),i("div",{staticClass:"block configCheck"},[i("span",{staticClass:"wrapper"},[i("el-button",{attrs:{type:"info"},on:{click:t.check}},[t._v("查询")])],1)]),t._v(" "),i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.sevenStarListItem,border:"","empty-text":" "}},[i("el-table-column",{attrs:{label:"集团编码",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-popover",{attrs:{trigger:"hover",placement:"top"}},[i("p",[t._v(t._s(e.row.orgName))]),t._v(" "),i("div",{staticClass:"name-wrapper",slot:"reference"},[i("el-tag",[t._v(t._s(e.row.orgName))])],1)])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"版本ID",sortable:"",prop:"version","sort-method":t.changeSortVersion,width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.version))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"环境信息",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(t._f("convertEnv")(e.row.env)))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"官网Url",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-popover",{attrs:{trigger:"hover",placement:"top"}},[i("p",[t._v(t._s(e.row.homeUrl))]),t._v(" "),i("div",{staticClass:"name-wrapper",slot:"reference"},[i("el-tag",[t._v(t._s(e.row.homeUrl))])],1)])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"商城Url",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-popover",{attrs:{trigger:"hover",placement:"top"}},[i("p",[t._v(t._s(e.row.mallUrl))]),t._v(" "),i("div",{staticClass:"name-wrapper",slot:"reference"},[i("el-tag",[t._v(t._s(e.row.mallUrl))])],1)])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"微链Url",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-popover",{attrs:{trigger:"hover",placement:"top"}},[i("p",[t._v(t._s(e.row.weilianlUrl))]),t._v(" "),i("div",{staticClass:"name-wrapper",slot:"reference"},[i("el-tag",[t._v(t._s(e.row.weilianlUrl))])],1)])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"服务商Url",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-popover",{attrs:{trigger:"hover",placement:"top"}},[i("p",[t._v(t._s(e.row.providerUrl))]),t._v(" "),i("div",{staticClass:"name-wrapper",slot:"reference"},[i("el-tag",[t._v(t._s(e.row.providerUrl))])],1)])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"登录Url",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-popover",{attrs:{trigger:"hover",placement:"top"}},[i("p",[t._v(t._s(t.imgUrlPre+e.row.loginLogoDir))]),t._v(" "),i("div",{staticClass:"name-wrapper",slot:"reference"},[i("el-tag",[t._v(t._s(t.imgUrlPre+e.row.loginLogoDir))])],1)])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"鉴权Url",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-popover",{attrs:{trigger:"hover",placement:"top"}},[i("p",[t._v(t._s(t.imgUrlPre+e.row.authLogoDir))]),t._v(" "),i("div",{staticClass:"name-wrapper",slot:"reference"},[i("el-tag",[t._v(t._s(t.imgUrlPre+e.row.authLogoDir))])],1)])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"首页logo",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-popover",{attrs:{trigger:"hover",placement:"top"}},[i("p",[t._v(t._s(t.imgUrlPre+e.row.indexLogoDir))]),t._v(" "),i("div",{staticClass:"name-wrapper",slot:"reference"},[i("el-tag",[t._v(t._s(t.imgUrlPre+e.row.indexLogoDir))])],1)])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"关于页logo",width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-popover",{attrs:{trigger:"hover",placement:"top"}},[i("p",[t._v(t._s(t.imgUrlPre+e.row.aboutLogoDir))]),t._v(" "),i("div",{staticClass:"name-wrapper",slot:"reference"},[i("el-tag",[t._v(t._s(t.imgUrlPre+e.row.aboutLogoDir))])],1)])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"版本号",width:"90"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-popover",{attrs:{trigger:"hover",placement:"top"}},[i("p",[t._v(t._s(e.row.versionAbout))]),t._v(" "),i("div",{staticClass:"name-wrapper",slot:"reference"},[i("el-tag",[t._v(t._s(e.row.versionAbout))])],1)])]}}])}),t._v(" "),i("el-table-column",{staticClass:"btn",attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(i){t.editConfigItem(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),i("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(i){t.deleConfigItem(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),i("el-dialog",{attrs:{title:"",visible:t.dialogTableVisible,"modal-append-to-body":""},on:{"update:visible":function(e){t.dialogTableVisible=e},close:function(e){t.close1(!1)}}},[i("configedit",{attrs:{configEditItem:t.authItem},on:{configEditSuccess:t.editFinish}})],1)],1)},staticRenderFns:[]}}});