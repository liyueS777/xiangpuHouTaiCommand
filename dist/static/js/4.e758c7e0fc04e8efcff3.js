webpackJsonp([4],{489:function(e,t,i){function n(e){i(548)}var a=i(188)(i(524),i(565),n,"data-v-28baf052",null);e.exports=a.exports},494:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}},created:function(){},methods:{},props:["title"]}},495:function(e,t,i){t=e.exports=i(187)(!0),t.push([e.i,".configAddHeader{text-align:left;margin-left:10px;margin-bottom:10px}.block{text-align:left;margin-left:40px;margin-top:10px}","",{version:3,sources:["D:/projectLY/frameWork1.0/src/components/common/configHeader.vue"],names:[],mappings:"AACA,iBACE,gBAAiB,AACjB,iBAAkB,AAClB,kBAAoB,CACrB,AACD,OACE,gBAAiB,AACjB,iBAAkB,AAClB,eAAiB,CAClB",file:"configHeader.vue",sourcesContent:["\n.configAddHeader {\n  text-align: left;\n  margin-left: 10px;\n  margin-bottom: 10px;\n}\n.block {\n  text-align: left;\n  margin-left: 40px;\n  margin-top: 10px;\n}\n"],sourceRoot:""}])},496:function(e,t,i){var n=i(495);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(479)("6c758020",n,!0)},497:function(e,t,i){function n(e){i(496)}var a=i(188)(i(494),i(498),n,null,null);e.exports=a.exports},498:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"block configAddHeader"},[i("span",{staticClass:"wrapper"},[i("el-button",{attrs:{type:"info"}},[i("i",{staticClass:"el-icon-edit"}),e._v("\n      "+e._s(e.title)+"\n    ")])],1)])},staticRenderFns:[]}},499:function(e,t,i){"use strict";var n=i(12),a=new n.default;t.a=a},500:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{configUpload:"",mult:!1,fileList:[{url:""}],dialogImageUrl:"",dialogVisible:!1}},created:function(){this.configUpload=this.Host+this.$FileUpload,this.imgUrlFileList?this.fileList=[{url:this.imgUrlFileList}]:this.fileList=[]},mounted:function(){var e=this;e.$nextTick(function(){e.$refs.uploadBox.$children[0].$el.children.length>=1&&(e.$refs.uploadBox.$children[1].$el.style.display="none")})},methods:{handleRemove:function(e,t){var i=this;i.$emit("EmptyImgUrl",""),i.$nextTick(function(){i.$refs.uploadBox.$children[1].$el.style.display="inline-block"})},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},handleSuccessUpload:function(e){var t=this;"/indexCopy"==this.$route.fullPath&&t.$store.dispatch("onActionChangeIndexCopyImgUrl",e.slice(1)),t.$emit("SendToImgUrl",e.slice(1)),t.$nextTick(function(){t.$refs.uploadBox.$children[0].$el.children.length>=1&&(t.$refs.uploadBox.$children[1].$el.style.display="none",t.$refs.uploadBox.$children[0].$el.style.display="inline-block")}),t.btnIconDir=e.slice(1),t.dialogImageUrl=t.Host+e},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type||"image/jpg"===e.type||"image/png"===e.type||"image/gif"===e.type,i=e.size/1024/1024<20;return t||this.$message.error("上传环境地址图片只能是 jpeg/jpg/png/gif 格式!"),i||this.$message.error("上传环境地址图片大小不能超过 20M!"),t&&i}},props:["imgUrlFileList"],watch:{imgUrlFileList:{handler:function(e,t){var i=this;this.fileList=[{url:e}],e?this.$nextTick(function(){i.$refs.uploadBox.$children[0].$el.children.length>=1&&(i.$refs.uploadBox.$children[0].$el.style.display="inline-block",i.$refs.uploadBox.$children[1].$el.style.display="none")}):this.$nextTick(function(){i.$refs.uploadBox.$children[1].$el.style.display="inline-block",i.$refs.uploadBox.$children[0].$children[0].$el.style.display="none"})},deep:!0}}}},501:function(e,t,i){t=e.exports=i(187)(!0),t.push([e.i,".el-upload-dragger{width:100%!important;height:100%!important}.auth-img div.el-upload--picture-card,.auth-img li.el-upload-list__item.is-success{width:100px!important;height:100px!important;line-height:100px}.index-copy div.el-upload--picture-card,.index-copy li.el-upload-list__item.is-success{width:60px!important;height:60px!important;line-height:60px}.el-dialog.el-dialog--tiny{top:30%!important;position:fixed!important;-webkit-transform:translate(-50%)!important;transform:translate(-50%)!important}\n/*!*.el-dialog.el-dialog--tiny:nth-of-type(1){*!*/\n  /*!*top: 10% !important;*!*/\n/*!*}*!*/","",{version:3,sources:["D:/projectLY/frameWork1.0/src/components/common/imgUpload.vue"],names:[],mappings:"AACA,mBACE,qBAAuB,AACvB,qBAAwB,CACzB,AAMD,mFACE,sBAAwB,AACxB,uBAAyB,AACzB,iBAAmB,CACpB,AAMD,uFACE,qBAAuB,AACvB,sBAAwB,AACxB,gBAAkB,CACnB,AACD,2BACE,kBAAoB,AACpB,yBAA2B,AAE3B,4CAA6C,AACrC,mCAAqC,CAC9C;AACD,kDAAkD;EAChD,4BAA4B;AAC9B,SAAS",file:"imgUpload.vue",sourcesContent:["\n.el-upload-dragger{\n  width: 100% !important;\n  height: 100% !important;\n}\n.auth-img div.el-upload--picture-card {\n   width: 100px !important;\n   height: 100px !important;\n   line-height: 100px;\n}\n.auth-img li.el-upload-list__item.is-success {\n  width: 100px !important;\n  height: 100px !important;\n  line-height: 100px;\n}\n.index-copy div.el-upload--picture-card {\n  width: 60px !important;\n  height: 60px !important;\n  line-height: 60px;\n}\n.index-copy li.el-upload-list__item.is-success {\n  width: 60px !important;\n  height: 60px !important;\n  line-height: 60px;\n}\n.el-dialog.el-dialog--tiny {\n  top: 30% !important;\n  position: fixed !important;\n  /*width: 30% !important;*/\n  -webkit-transform:translate(-50%) !important;\n          transform:translate(-50%) !important;\n}\n/*!*.el-dialog.el-dialog--tiny:nth-of-type(1){*!*/\n  /*!*top: 10% !important;*!*/\n/*!*}*!*/\n/*.el-dialog.el-dialog--tiny:nth-of-type(n-1){*/\n  /*top: 30% !important;*/\n/*}*/\n/*.el-dialog.el-dialog--tiny:nth-of-type(n-4){*/\n  /*top: 50% !important;*/\n/*}*/\n/*.el-dialog.el-dialog--tiny:nth-of-type(n-3){*/\n  /*top: 40% !important;*/\n/*}*/\n/*.el-dialog.el-dialog--tiny:nth-of-type(n-4){*/\n  /*top: 70% !important;*/\n/*}*/\n"],sourceRoot:""}])},502:function(e,t,i){var n=i(501);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(479)("42f1628a",n,!0)},503:function(e,t,i){function n(e){i(502)}var a=i(188)(i(500),i(504),n,null,null);e.exports=a.exports},504:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-upload",{ref:"uploadBox",staticClass:"bixbix",attrs:{action:e.configUpload,"list-type":"picture-card",multiple:e.mult,drag:"","file-list":e.fileList,"on-preview":e.handlePictureCardPreview,"before-upload":e.beforeAvatarUpload,"on-remove":e.handleRemove,"on-success":e.handleSuccessUpload}},[i("i",{staticClass:"el-icon-plus"})]),e._v(" "),i("el-dialog",{attrs:{size:"tiny"},model:{value:e.dialogVisible,callback:function(t){e.dialogVisible=t},expression:"dialogVisible"}},[i("img",{staticClass:"img1",attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1)},staticRenderFns:[]}},524:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(499),a=i(497),o=i.n(a),l=i(503),s=i.n(l);t.default={data:function(){return{UrlBtn:!0,UrlBtnText:this.UrlBtn?"有链接":"无链接",ajaxUrl:"",ifAjax:!1,hasChildRenCompany:!1,selectedOptionscascader:[],ChildRenCompany:{},ChildRenCompanyItem:[],optionscascader:[],props:{value:"value",children:"children"},version:"",compID:"",compOption:[],input:"",envMsg:"",ifActive:"",picID:"",envID:null,posID:"",posMsg:"",picName:"",Url:"",params:"",btnIconDir:"",optionIDcode:null,imgUrl:"",fileList:"",optionID:[],options:this.envOption,options2:[{value:"1",label:"是"},{value:"0",label:"否"}]}},created:function(){var e=this;this.UrlBtn?(this.UrlBtnText="有链接",this.Url=""):(this.UrlBtnText="无链接",this.Url="Empty"),this.$notify.info({title:"消息",message:"选择位置时请先选择环境;图片可以拖拽上传"}),e.version=n.a.version?n.a.version:"",1==e.$store.getters.user.grade?(this.selectedOptionscascader={compCode:e.$store.getters.user.company.comp_code,compId:e.$store.getters.user.company.id,compName:e.$store.getters.user.company.comp_name},e.optionscascader[0]=this.selectedOptionscascader,e.selectedOptionscascader.compId&&e.$Ajax.post(e.Host+"/sevenStarController/getAllSubCompany",{compId:e.selectedOptionscascader.compId}).then(function(t){1==t.data.code&&0!=t.data.data.length?(e.hasChildRenCompany=!0,e.ChildRenCompanyItem=t.data.data):e.hasChildRenCompany=!1}).catch(function(e){})):0==e.$store.getters.user.grade&&e.$Ajax.post(e.Host+"/sevenStarController/getAllCompany",{}).then(function(t){e.optionscascader=t.data.data}).catch(function(e){})},methods:{checkParam:function(){this.$notify.info({title:"消息",message:"参数列表需以空格隔开，第一个为数量，无单位，第二个为数字，第三个为百分比数字"})},bbb:function(){},selectEnvMsg:function(e){e.indexOf("PC")>-1?this.optionID=this.optionPc:e.indexOf("iPad")>-1?this.optionID=this.optioniPad:this.optionID=this.optionApp},handleChangeCascader:function(e){this.$notify.info({title:"消息",message:"该公司配置添加可以只是一级集团企业，也可以是集团企业下的子公司"});var t=this;t.$Ajax.post(t.Host+"/sevenStarController/getAllSubCompany",{compId:e.compId}).then(function(e){1==e.data.code&&0!=e.data.data.length?(t.hasChildRenCompany=!0,t.ChildRenCompanyItem=e.data.data):t.hasChildRenCompany=!1}).catch(function(e){})},selectComp:function(e){},selectPositionID:function(e,t){var i=this;if(i.selectedOptionscascader.compId)if(i.version)if(i.envMsg){(i.envMsg.indexOf("PC")>-1||i.envMsg.indexOf("iPad")>-1)&&e<=3?i.ifAjax=!0:(i.envMsg.indexOf("PC")<=-1||i.envMsg.indexOf("iPad")<=-1)&&14==e?i.ifAjax=!0:i.ifAjax=!1;var n;n=i.ChildRenCompany.compCode?{appEnvName:i.envMsg,btnPosId:i.envID,compId:i.selectedOptionscascader.compId,subCompCode:i.ChildRenCompany.compCode,isActived:i.ifActive,version:i.version.trim()}:{appEnvName:i.envMsg,btnPosId:i.envID,compId:i.selectedOptionscascader.compId,isActived:i.ifActive,version:i.version.trim()},this.$Ajax.post(this.Host+"/appController/isAppPosExist",n).then(function(e){i.optionIDcode=e.data.code,0==e.data.code?i.$message({message:e.data.msg,type:"warning",duration:i.$duration,showClose:!0}):t&&t()}).catch(function(e){})}else i.$message({message:"请先选择环境信息",type:"warning",duration:i.$duration,showClose:!0,onClose:function(){i.envID=null}});else i.$message({message:"请先填入版本",type:"warning",duration:i.$duration,showClose:!0,onClose:function(){i.envID=null}});else i.$message({message:"请先选择企业信息",type:"warning",duration:i.$duration,showClose:!0,onClose:function(){i.envID=null}})},receptImg:function(e){this.imgUrl=e},configConfirm:function(){var e=this,t=this;if(!this.selectedOptionscascader.compId)return void this.$message({message:"请先选择企业信息",type:"warning",duration:t.$duration});if(!t.version)return void this.$message({message:"请先输入版本号",type:"warning",duration:t.$duration});if(!t.envMsg)return void this.$message({message:"请先选择环境信息",type:"warning",duration:t.$duration});if(!t.ifActive)return void this.$message({message:"请先选择是否激活状态",type:"warning",duration:t.$duration});if(!t.optionIDcode)return void this.$message({message:"请先选择环境位置或该位置已被占用",type:"warning",duration:t.$duration});if(!t.envID)return void this.$message({message:"请先选择环境位置",type:"warning",duration:t.$duration});if(!t.imgUrl)return void this.$message({message:"请先上传图片",type:"warning",duration:t.$duration});if(!t.picName)return void this.$message({message:"请先填入图表名称",type:"warning",duration:t.$duration});if(!t.Url&&this.UrlBtn)return void this.$message({message:"请先填入链接地址",type:"warning",duration:t.$duration});var i={appVersion:t.version,appEnvName:t.envMsg,btnPosId:t.envID,compId:t.selectedOptionscascader.compId,compCode:t.selectedOptionscascader.compCode,isActived:t.ifActive,btnPosDes:t.posMsg.trim(),btnIconDir:t.imgUrl,btnIconName:t.picName,redirUrl:t.UrlBtn?t.Url.trim():"Empty",otherParam:t.params.trim()};t.ChildRenCompany.compCode&&(i.subCompCode=t.ChildRenCompany.compCode,i.subCompName=t.ChildRenCompany.compName),(t.envMsg.indexOf("PC")>-1&&t.envID<=3||t.envMsg.indexOf("PC")<=-1&&14==t.envID)&&(i.ajaxUrl=t.ajaxUrl.trim()),this.selectPositionID(t.envID,function(){e.$Ajax.post(e.Host+"/appController/addApplication",i).then(function(e){t.$message({message:e.data.msg,type:0==e.data.code?"warning":"success",duration:t.$duration,showClose:!0,onClose:function(){1==e.data.code&&(n.a.version=t.version,t.$router.push({path:"/configlist"}))}})}).catch(function(e){})})},cancel:function(){this.$router.push({path:"/configlist"})},urlKeyUp:function(){this.Url.trim()?"EMPTY"==this.Url.trim().toUpperCase()?this.UrlBtn=!1:this.UrlBtn=!0:this.UrlBtn=!1},goCopy:function(){this.$router.push("/indexCopy")}},components:{configheader:o.a,imgupload:s.a},watch:{UrlBtn:{handler:function(e,t){e?(this.UrlBtnText="有链接",this.Url=""):(this.UrlBtnText="无链接",this.Url="Empty")}}}}},535:function(e,t,i){t=e.exports=i(187)(!0),t.push([e.i,'.h[data-v-28baf052]{position:relative}.h .configAddHeader[data-v-28baf052]{text-align:left;margin-left:10px;margin-bottom:10px}.h .index-copy[data-v-28baf052]{position:absolute;left:200px;top:0}.configAdd li[data-v-28baf052]{padding:10px}.configAdd li>div[data-v-28baf052]{float:left;padding-left:10px;line-height:36px}.configAdd li .url[data-v-28baf052]{width:300px}.configAdd li .urlSelect[data-v-28baf052]{text-align:left}.configAdd li .tips-exp[data-v-28baf052]{width:600px!important}.configAdd li .tips-exp>p[data-v-28baf052]{text-align:left;border-bottom:1px solid silver}.configAdd li .el-icon-information[data-v-28baf052]:before{content:"\\E615";color:skyblue;font-size:16px}.configAdd li>div[data-v-28baf052]:first-of-type{min-width:100px;text-align:right;padding-left:30px;margin-right:15px;font-size:14px}.configAdd li>div[data-v-28baf052]:last-of-type{width:300px}.configAdd li>div:last-of-type>div[data-v-28baf052],.configAdd li>div:last-of-type>span[data-v-28baf052]{width:100%}.block[data-v-28baf052]{text-align:left;margin-left:40px;margin-top:10px}',"",{version:3,sources:["D:/projectLY/frameWork1.0/src/components/indexConfig/configAdd.vue"],names:[],mappings:"AACA,oBACE,iBAAmB,CACpB,AACD,qCACI,gBAAiB,AACjB,iBAAkB,AAClB,kBAAoB,CACvB,AACD,gCACI,kBAAmB,AACnB,WAAY,AACZ,KAAO,CACV,AACD,+BACE,YAAc,CACf,AACD,mCACI,WAAY,AACZ,kBAAmB,AACnB,gBAAkB,CACrB,AACD,oCACI,WAAa,CAChB,AACD,0CACI,eAAiB,CACpB,AACD,yCACI,qBAAwB,CAC3B,AACD,2CACM,gBAAiB,AACjB,8BAAgC,CACrC,AACD,2DACI,gBAAiB,AACjB,cAAe,AACf,cAAgB,CACnB,AACD,iDACI,gBAAiB,AACjB,iBAAkB,AAClB,kBAAmB,AACnB,kBAAmB,AACnB,cAAgB,CACnB,AACD,gDACI,WAAa,CAChB,AAID,yGACM,UAAY,CACjB,AACD,wBACE,gBAAiB,AACjB,iBAAkB,AAClB,eAAiB,CAClB",file:"configAdd.vue",sourcesContent:['\n.h[data-v-28baf052] {\n  position: relative;\n}\n.h .configAddHeader[data-v-28baf052] {\n    text-align: left;\n    margin-left: 10px;\n    margin-bottom: 10px;\n}\n.h .index-copy[data-v-28baf052] {\n    position: absolute;\n    left: 200px;\n    top: 0;\n}\n.configAdd li[data-v-28baf052] {\n  padding: 10px;\n}\n.configAdd li > div[data-v-28baf052] {\n    float: left;\n    padding-left: 10px;\n    line-height: 36px;\n}\n.configAdd li .url[data-v-28baf052] {\n    width: 300px;\n}\n.configAdd li .urlSelect[data-v-28baf052] {\n    text-align: left;\n}\n.configAdd li .tips-exp[data-v-28baf052] {\n    width: 600px !important;\n}\n.configAdd li .tips-exp > p[data-v-28baf052] {\n      text-align: left;\n      border-bottom: 1px solid silver;\n}\n.configAdd li .el-icon-information[data-v-28baf052]:before {\n    content: "\\E615";\n    color: skyblue;\n    font-size: 16px;\n}\n.configAdd li > div[data-v-28baf052]:first-of-type {\n    min-width: 100px;\n    text-align: right;\n    padding-left: 30px;\n    margin-right: 15px;\n    font-size: 14px;\n}\n.configAdd li > div[data-v-28baf052]:last-of-type {\n    width: 300px;\n}\n.configAdd li > div:last-of-type > div[data-v-28baf052] {\n      width: 100%;\n}\n.configAdd li > div:last-of-type > span[data-v-28baf052] {\n      width: 100%;\n}\n.block[data-v-28baf052] {\n  text-align: left;\n  margin-left: 40px;\n  margin-top: 10px;\n}\n'],sourceRoot:""}])},548:function(e,t,i){var n=i(535);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(479)("36167cf0",n,!0)},565:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"h"},[i("configheader",{staticClass:"c",attrs:{title:"添加配置"},nativeOn:{click:function(t){if(!("button"in t)&&e._k(t.keyCode,"aaa"))return null;e.bbb(t)}}}),e._v(" "),i("el-button",{staticClass:"index-copy",attrs:{type:"success"},nativeOn:{click:function(t){e.goCopy(t)}}},[i("i",{staticClass:"el-icon-edit"}),e._v("\n      一键复制\n    ")])],1),e._v(" "),i("ul",{staticClass:"configAdd"},[i("li",{staticClass:"clearfix"},[i("div",[e._v("企业信息")]),e._v(" "),i("div",[i("el-select",{attrs:{placeholder:"请选择企业信息"},on:{change:e.handleChangeCascader},model:{value:e.selectedOptionscascader,callback:function(t){e.selectedOptionscascader=t},expression:"selectedOptionscascader"}},e._l(e.optionscascader,function(e){return i("el-option",{key:e.compId,attrs:{label:e.compName,value:e}})}))],1),e._v(" "),e.hasChildRenCompany?i("div",[i("el-select",{attrs:{placeholder:"请选择子公司信息",clearable:""},model:{value:e.ChildRenCompany,callback:function(t){e.ChildRenCompany=t},expression:"ChildRenCompany"}},e._l(e.ChildRenCompanyItem,function(e){return i("el-option",{key:e.compId,attrs:{label:e.compName,value:e}})}))],1):e._e()]),e._v(" "),i("li",{staticClass:"clearfix"},[i("div",[e._v("版本信息")]),e._v(" "),i("div",[i("el-input",{attrs:{placeholder:"请输入对应版本"},model:{value:e.version,callback:function(t){e.version=t},expression:"version"}})],1)]),e._v(" "),i("li",{staticClass:"clearfix"},[i("div",[e._v("环境信息")]),e._v(" "),i("div",[i("el-select",{attrs:{placeholder:"请选择环境信息"},on:{change:e.selectEnvMsg},model:{value:e.envMsg,callback:function(t){e.envMsg=t},expression:"envMsg"}},e._l(e.options,function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)]),e._v(" "),i("li",{staticClass:"clearfix"},[i("div",[e._v("是否激活")]),e._v(" "),i("div",[i("el-select",{attrs:{placeholder:"请选择是否激活"},model:{value:e.ifActive,callback:function(t){e.ifActive=t},expression:"ifActive"}},e._l(e.options2,function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)]),e._v(" "),i("li",{staticClass:"clearfix"},[i("div",[e._v("位置ID")]),e._v(" "),i("div",[i("el-select",{staticClass:"posiotnID",attrs:{placeholder:"请选择位置"},on:{change:e.selectPositionID},model:{value:e.envID,callback:function(t){e.envID=t},expression:"envID"}},e._l(e.optionID,function(e){return i("el-option",{key:e.value,attrs:{label:e.value,value:e.label}})}))],1)]),e._v(" "),i("li",{staticClass:"clearfix"},[i("div",[e._v("位置说明")]),e._v(" "),i("div",[i("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.posMsg,callback:function(t){e.posMsg=t},expression:"posMsg"}})],1)]),e._v(" "),i("li",{staticClass:"clearfix"},[i("div",[e._v("图片地址")]),e._v(" "),i("imgupload",{attrs:{imgUrlFileList:e.fileList},on:{SendToImgUrl:e.receptImg}}),e._v(" "),e._m(0),e._v(" "),e._m(1)],1),e._v(" "),i("li",{staticClass:"clearfix"},[i("div",[e._v("图片名称")]),e._v(" "),i("div",[i("el-input",{attrs:{placeholder:"请输入图片名称"},model:{value:e.picName,callback:function(t){e.picName=t},expression:"picName"}})],1)]),e._v(" "),i("li",{staticClass:"clearfix"},[i("div",[e._v("Url地址")]),e._v(" "),i("div",{staticClass:"url"},[i("el-input",{attrs:{placeholder:"请输入链接地址"},nativeOn:{keyup:function(t){e.urlKeyUp(t)}},model:{value:e.Url,callback:function(t){e.Url=t},expression:"Url"}})],1),e._v(" "),i("div",{staticClass:"urlSelect"},[i("el-switch",{attrs:{"on-color":"#13ce66","off-color":"#ff4949","on-text":"","off-text":""},model:{value:e.UrlBtn,callback:function(t){e.UrlBtn=t},expression:"UrlBtn"}}),e._v(" "),i("span",[e._v(e._s(e.UrlBtnText))])],1)]),e._v(" "),i("li",{staticClass:"clearfix"},[i("div",[e._v("相关参数")]),e._v(" "),i("div",[i("el-input",{attrs:{placeholder:"请输入参数信息"},on:{focus:e.checkParam},model:{value:e.params,callback:function(t){e.params=t},expression:"params"}})],1)]),e._v(" "),e.ifAjax?i("li",{staticClass:"clearfix"},[i("div",[e._v("接口配置")]),e._v(" "),i("div",[i("el-input",{attrs:{placeholder:"请输入相关接口地址"},model:{value:e.ajaxUrl,callback:function(t){e.ajaxUrl=t},expression:"ajaxUrl"}})],1)]):e._e()]),e._v(" "),i("div",{staticClass:"block"},[i("span",{staticClass:"wrapper"},[i("el-button",{attrs:{type:"success"},on:{click:e.configConfirm}},[e._v("确定")]),e._v(" "),i("el-button",{attrs:{type:"info"},on:{click:e.cancel}},[e._v("取消")])],1)])])},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("i",{staticClass:"el-icon-information"})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"tips-exp"},[i("p",[i("strong",[e._v("PC：")]),e._v("位置-学习中心尺寸为150*30px，其余位置为104*82px的尺寸")]),e._v(" "),i("p",[i("strong",[e._v("Android：")]),e._v("头部1、2、3、4位置的都为202*120px，焦点圈数据为358*78px的尺寸，定子链、转子链、粒子链、象翌书院的尺寸为146*144的尺寸，时空圈的尺寸为672*120,汇能器、聚能器、赋能器三个位置尺寸都为185*185")]),e._v(" "),i("p",[i("strong",[e._v("IOS：")]),e._v("头部1、2、3、4位置的都为232*138px，焦点圈数据为409*88px的尺寸，定子链、转子链、粒子链、象翌书院的尺寸为146*144的尺寸，时空圈的尺寸为772*140,汇能器、聚能器、赋能器三个位置尺寸都为212*212")])])}]}}});