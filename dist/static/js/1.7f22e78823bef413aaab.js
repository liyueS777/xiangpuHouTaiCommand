webpackJsonp([1,2],{417:function(t,e,n){function i(t){n(484)}var o=n(157)(n(478),n(487),i,"data-v-11def9f4",null);t.exports=o.exports},422:function(t,e,n){function i(t){n(523)}var o=n(157)(n(491),n(539),i,"data-v-7302774a",null);t.exports=o.exports},430:function(t,e,n){t.exports=!n(431)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},431:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},432:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},433:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},434:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},435:function(t,e,n){var i=n(455);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},436:function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},437:function(t,e,n){var i=n(435),o=n(434);t.exports=function(t){return i(o(t))}},438:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},created:function(){},methods:{},props:["title"]}},439:function(t,e,n){e=t.exports=n(156)(!0),e.push([t.i,".configAddHeader{text-align:left;margin-left:10px;margin-bottom:10px}.block{text-align:left;margin-left:40px;margin-top:10px}","",{version:3,sources:["D:/projectLY/frameWork1.0/src/components/common/configHeader.vue"],names:[],mappings:"AACA,iBACE,gBAAiB,AACjB,iBAAkB,AAClB,kBAAoB,CACrB,AACD,OACE,gBAAiB,AACjB,iBAAkB,AAClB,eAAiB,CAClB",file:"configHeader.vue",sourcesContent:["\n.configAddHeader {\n  text-align: left;\n  margin-left: 10px;\n  margin-bottom: 10px;\n}\n.block {\n  text-align: left;\n  margin-left: 40px;\n  margin-top: 10px;\n}\n"],sourceRoot:""}])},440:function(t,e,n){var i=n(439);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(416)("6c758020",i,!0)},441:function(t,e,n){function i(t){n(440)}var o=n(157)(n(438),n(442),i,null,null);t.exports=o.exports},442:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block configAddHeader"},[n("span",{staticClass:"wrapper"},[n("el-button",{attrs:{type:"info"}},[n("i",{staticClass:"el-icon-edit"}),t._v("\n      "+t._s(t.title)+"\n    ")])],1)])},staticRenderFns:[]}},443:function(t,e,n){"use strict";var i=n(11),o=new i.default;e.a=o},444:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{configUpload:"",mult:!1,fileList:[{url:""}],dialogImageUrl:"",dialogVisible:!1}},created:function(){this.configUpload=this.Host+this.$FileUpload,this.imgUrlFileList?this.fileList=[{url:this.imgUrlFileList}]:this.fileList=[]},mounted:function(){var t=this;t.$nextTick(function(){t.$refs.uploadBox.$children[0].$el.children.length>=1&&(t.$refs.uploadBox.$children[1].$el.style.display="none")})},methods:{handleRemove:function(t,e){var n=this;n.$emit("EmptyImgUrl",""),n.$nextTick(function(){n.$refs.uploadBox.$children[1].$el.style.display="inline-block"})},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},handleSuccessUpload:function(t){var e=this;"/indexCopy"==this.$route.fullPath&&e.$store.dispatch("onActionChangeIndexCopyImgUrl",t.slice(1)),e.$emit("SendToImgUrl",t.slice(1)),e.$nextTick(function(){e.$refs.uploadBox.$children[0].$el.children.length>=1&&(e.$refs.uploadBox.$children[1].$el.style.display="none",e.$refs.uploadBox.$children[0].$el.style.display="inline-block")}),e.btnIconDir=t.slice(1),e.dialogImageUrl=e.Host+t},beforeAvatarUpload:function(t){var e="image/jpeg"===t.type||"image/jpg"===t.type||"image/png"===t.type||"image/gif"===t.type,n=t.size/1024/1024<20;return e||this.$message.error("上传环境地址图片只能是 jpeg/jpg/png/gif 格式!"),n||this.$message.error("上传环境地址图片大小不能超过 20M!"),e&&n}},props:["imgUrlFileList"],watch:{imgUrlFileList:{handler:function(t,e){var n=this;this.fileList=[{url:t}],t?this.$nextTick(function(){n.$refs.uploadBox.$children[0].$el.children.length>=1&&(n.$refs.uploadBox.$children[0].$el.style.display="inline-block",n.$refs.uploadBox.$children[1].$el.style.display="none")}):this.$nextTick(function(){n.$refs.uploadBox.$children[1].$el.style.display="inline-block",n.$refs.uploadBox.$children[0].$children[0].$el.style.display="none"})},deep:!0}}}},445:function(t,e,n){"use strict";e.__esModule=!0;var i=n(450),o=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=o.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}},446:function(t,e,n){e=t.exports=n(156)(!0),e.push([t.i,".el-upload-dragger{width:100%!important;height:100%!important}.auth-img div.el-upload--picture-card,.auth-img li.el-upload-list__item.is-success{width:100px!important;height:100px!important;line-height:100px}.index-copy div.el-upload--picture-card,.index-copy li.el-upload-list__item.is-success{width:60px!important;height:60px!important;line-height:60px}.el-dialog.el-dialog--tiny{top:30%!important;position:fixed!important;-webkit-transform:translate(-50%)!important;transform:translate(-50%)!important}\n/*!*.el-dialog.el-dialog--tiny:nth-of-type(1){*!*/\n  /*!*top: 10% !important;*!*/\n/*!*}*!*/","",{version:3,sources:["D:/projectLY/frameWork1.0/src/components/common/imgUpload.vue"],names:[],mappings:"AACA,mBACE,qBAAuB,AACvB,qBAAwB,CACzB,AAMD,mFACE,sBAAwB,AACxB,uBAAyB,AACzB,iBAAmB,CACpB,AAMD,uFACE,qBAAuB,AACvB,sBAAwB,AACxB,gBAAkB,CACnB,AACD,2BACE,kBAAoB,AACpB,yBAA2B,AAE3B,4CAA6C,AACrC,mCAAqC,CAC9C;AACD,kDAAkD;EAChD,4BAA4B;AAC9B,SAAS",file:"imgUpload.vue",sourcesContent:["\n.el-upload-dragger{\n  width: 100% !important;\n  height: 100% !important;\n}\n.auth-img div.el-upload--picture-card {\n   width: 100px !important;\n   height: 100px !important;\n   line-height: 100px;\n}\n.auth-img li.el-upload-list__item.is-success {\n  width: 100px !important;\n  height: 100px !important;\n  line-height: 100px;\n}\n.index-copy div.el-upload--picture-card {\n  width: 60px !important;\n  height: 60px !important;\n  line-height: 60px;\n}\n.index-copy li.el-upload-list__item.is-success {\n  width: 60px !important;\n  height: 60px !important;\n  line-height: 60px;\n}\n.el-dialog.el-dialog--tiny {\n  top: 30% !important;\n  position: fixed !important;\n  /*width: 30% !important;*/\n  -webkit-transform:translate(-50%) !important;\n          transform:translate(-50%) !important;\n}\n/*!*.el-dialog.el-dialog--tiny:nth-of-type(1){*!*/\n  /*!*top: 10% !important;*!*/\n/*!*}*!*/\n/*.el-dialog.el-dialog--tiny:nth-of-type(n-1){*/\n  /*top: 30% !important;*/\n/*}*/\n/*.el-dialog.el-dialog--tiny:nth-of-type(n-4){*/\n  /*top: 50% !important;*/\n/*}*/\n/*.el-dialog.el-dialog--tiny:nth-of-type(n-3){*/\n  /*top: 40% !important;*/\n/*}*/\n/*.el-dialog.el-dialog--tiny:nth-of-type(n-4){*/\n  /*top: 70% !important;*/\n/*}*/\n"],sourceRoot:""}])},447:function(t,e,n){var i=n(446);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(416)("42f1628a",i,!0)},448:function(t,e,n){function i(t){n(447)}var o=n(157)(n(444),n(449),i,null,null);t.exports=o.exports},449:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-upload",{ref:"uploadBox",staticClass:"bixbix",attrs:{action:t.configUpload,"list-type":"picture-card",multiple:t.mult,drag:"","file-list":t.fileList,"on-preview":t.handlePictureCardPreview,"before-upload":t.beforeAvatarUpload,"on-remove":t.handleRemove,"on-success":t.handleSuccessUpload}},[n("i",{staticClass:"el-icon-plus"})]),t._v(" "),n("el-dialog",{attrs:{size:"tiny"},model:{value:t.dialogVisible,callback:function(e){t.dialogVisible=e},expression:"dialogVisible"}},[n("img",{staticClass:"img1",attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1)},staticRenderFns:[]}},450:function(t,e,n){t.exports={default:n(451),__esModule:!0}},451:function(t,e,n){n(477),t.exports=n(158).Object.assign},452:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},453:function(t,e,n){var i=n(433);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},454:function(t,e,n){var i=n(437),o=n(473),r=n(472);t.exports=function(t){return function(e,n,a){var l,s=i(e),c=o(s.length),d=r(a,c);if(t&&n!=n){for(;c>d;)if((l=s[d++])!=l)return!0}else for(;c>d;d++)if((t||d in s)&&s[d]===n)return t||d||0;return!t&&-1}}},455:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},456:function(t,e,n){var i=n(452);t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,o){return t.call(e,n,i,o)}}return function(){return t.apply(e,arguments)}}},457:function(t,e,n){var i=n(433),o=n(432).document,r=i(o)&&i(o.createElement);t.exports=function(t){return r?o.createElement(t):{}}},458:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},459:function(t,e,n){var i=n(432),o=n(158),r=n(456),a=n(461),l=function(t,e,n){var s,c,d,p=t&l.F,u=t&l.G,f=t&l.S,m=t&l.P,g=t&l.B,v=t&l.W,h=u?o:o[e]||(o[e]={}),A=h.prototype,_=u?i:f?i[e]:(i[e]||{}).prototype;u&&(n=e);for(s in n)(c=!p&&_&&void 0!==_[s])&&s in h||(d=c?_[s]:n[s],h[s]=u&&"function"!=typeof _[s]?n[s]:g&&c?r(d,i):v&&_[s]==d?function(t){var e=function(e,n,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,i)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(d):m&&"function"==typeof d?r(Function.call,d):d,m&&((h.virtual||(h.virtual={}))[s]=d,t&l.R&&A&&!A[s]&&a(A,s,d)))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,t.exports=l},460:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},461:function(t,e,n){var i=n(464),o=n(469);t.exports=n(430)?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},462:function(t,e,n){t.exports=!n(430)&&!n(431)(function(){return 7!=Object.defineProperty(n(457)("div"),"a",{get:function(){return 7}}).a})},463:function(t,e,n){"use strict";var i=n(467),o=n(465),r=n(468),a=n(474),l=n(435),s=Object.assign;t.exports=!s||n(431)(function(){var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach(function(t){e[t]=t}),7!=s({},t)[n]||Object.keys(s({},e)).join("")!=i})?function(t,e){for(var n=a(t),s=arguments.length,c=1,d=o.f,p=r.f;s>c;)for(var u,f=l(arguments[c++]),m=d?i(f).concat(d(f)):i(f),g=m.length,v=0;g>v;)p.call(f,u=m[v++])&&(n[u]=f[u]);return n}:s},464:function(t,e,n){var i=n(453),o=n(462),r=n(475),a=Object.defineProperty;e.f=n(430)?Object.defineProperty:function(t,e,n){if(i(t),e=r(e,!0),i(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},465:function(t,e){e.f=Object.getOwnPropertySymbols},466:function(t,e,n){var i=n(460),o=n(437),r=n(454)(!1),a=n(470)("IE_PROTO");t.exports=function(t,e){var n,l=o(t),s=0,c=[];for(n in l)n!=a&&i(l,n)&&c.push(n);for(;e.length>s;)i(l,n=e[s++])&&(~r(c,n)||c.push(n));return c}},467:function(t,e,n){var i=n(466),o=n(458);t.exports=Object.keys||function(t){return i(t,o)}},468:function(t,e){e.f={}.propertyIsEnumerable},469:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},470:function(t,e,n){var i=n(471)("keys"),o=n(476);t.exports=function(t){return i[t]||(i[t]=o(t))}},471:function(t,e,n){var i=n(432),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},472:function(t,e,n){var i=n(436),o=Math.max,r=Math.min;t.exports=function(t,e){return t=i(t),t<0?o(t+e,0):r(t,e)}},473:function(t,e,n){var i=n(436),o=Math.min;t.exports=function(t){return t>0?o(i(t),9007199254740991):0}},474:function(t,e,n){var i=n(434);t.exports=function(t){return Object(i(t))}},475:function(t,e,n){var i=n(433);t.exports=function(t,e){if(!i(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!i(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!i(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!i(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},476:function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},477:function(t,e,n){var i=n(459);i(i.S+i.F,"Object",{assign:n(463)})},478:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(445),o=n.n(i),r=n(159),a=n(443),l=n(441),s=n.n(l),c=n(448),d=n.n(c);e.default={data:function(){return{Everycode:"",mUrlAgent:"",mUrlweilian:"",mUrlVersion:"",version:"",compID:"",ChildRenCompany:"",ChildRenCompanyItem:[],compOption:[],input:"",envMsg:{},envID:null,mUrlOffical:"",mUrlMall:"",ImgMLogin:"",ImgMAuth:"",ImgMMain:"",ImgMAbout:"",fileListMLogin:"",fileListMAuth:"",fileListMMain:"",fileListMAbout:"",options:this.envOption,titleConfig:""}},computed:o()({},n.i(r.b)({imgUrlPre:function(t){return t.login.changeImgPreInfo}})),created:function(){var t=this;this.hasAuth(),t.titleConfig=t.configEditItem?"编辑配置":"添加配置",t.ifEdit=!!t.configEditItem,t.version=a.a.version?a.a.version:"",t.configEditItem&&t.configEditItem.id?t.hasAuth(function(){t.init(t.configEditItem)}):t.$notify.info({title:"消息",message:"图片可以拖拽上传"})},methods:{selectChildrenCompany:function(t){var e=this;this.ChildRenCompany="",this.confirm(this.Host+"/sevenStarController/getAllSubCompany",{compId:t},function(t){e.ChildRenCompanyItem=t.data.data})},hasAuth:function(t){var e=this;1==e.$store.getters.user.grade?(e.compOption[0]={compCode:e.$store.getters.user.company.comp_code,compId:e.$store.getters.user.company.id,compName:e.$store.getters.user.company.comp_name},t&&t()):0==e.$store.getters.user.grade&&e.$Ajax.post(e.Host+"/sevenStarController/getAllCompany",{}).then(function(n){e.$nextTick(function(){e.compOption=n.data.data}),t&&t()}).catch(function(t){})},chengeee:function(t){},init:function(t){var e=this,n=t;e.Everycode=t.orgName,e.version=n.version,e.envMsg=e.options.find(function(t,e,i){return t.value==n.env}),e.mUrlOffical=n.homeUrl,e.mUrlVersion=null==n.versionAbout?"":n.versionAbout,e.mUrlAgent=null==n.providerUrl?"":n.providerUrl,e.mUrlMall=n.mallUrl,n.mUrlweilian&&null!=n.mUrlweilian||(n.mUrlweilian=""),e.mUrlweilian=n.weilianlUrl,e.ImgMLogin=n.loginLogoDir,e.ImgMAuth=n.authLogoDir,e.ImgMMain=n.indexLogoDir,e.ImgMAbout=n.aboutLogoDir,e.fileListMAuth=e.imgUrlPre+n.authLogoDir+"?"+ +new Date,e.fileListMMain=e.imgUrlPre+n.indexLogoDir+"?"+ +new Date,e.fileListMAbout=e.imgUrlPre+n.aboutLogoDir+"?"+ +new Date,e.fileListMLogin=e.imgUrlPre+n.loginLogoDir+"?"+ +new Date},receptImgMLogin:function(t){this.ImgMLogin=t},receptImgMAuth:function(t){this.ImgMAuth=t},receptImgMMain:function(t){this.ImgMMain=t},receptImgMAbout:function(t){this.ImgMAbout=t},emptyImgMLogin:function(){this.ImgMLogin=""},emptyImgMAuth:function(){this.ImgMAuth=""},emptyImgMMain:function(){this.ImgMMain=""},emptyImgMAbout:function(){this.ImgMAbout=""},configConfirm:function(){var t=this;if(t.configEditItem&&t.configEditItem.id){if(!(this.ImgMLogin&&this.ImgMAuth&&this.ImgMMain&&this.ImgMAbout))return void t.$message({message:"图片上传不能为空",type:"warning",duration:t.$duration,showClose:!0});var e={id:t.configEditItem.id,orgName:t.configEditItem.orgName,version:t.version,env:t.envMsg.value,homeUrl:t.mUrlOffical.trim(),mallUrl:t.mUrlMall.trim(),weilianlUrl:t.mUrlweilian.trim(),providerUrl:t.mUrlAgent.trim(),loginLogoDir:t.ImgMLogin,authLogoDir:t.ImgMAuth,indexLogoDir:t.ImgMMain,aboutLogoDir:t.ImgMAbout,compId:t.configEditItem.compId,versionAbout:t.mUrlVersion.trim()};t.confirm(t.Host+"/authController/updateAuthentication",e,function(e){1==e.data.code&&t.$emit("configEditSuccess",{code:1})})}else{if(!t.compID)return void this.$message({message:"请先选择企业信息",type:"warning",duration:t.$duration});if(!t.version)return void this.$message({message:"请先输入版本信息",type:"warning",duration:t.$duration});if(!t.envMsg.value)return void this.$message({message:"请先选择环境信息",type:"warning",duration:t.$duration});if(!t.mUrlOffical)return void this.$message({message:"请先填入移动端官网链接",type:"warning",duration:t.$duration});if(!t.mUrlMall)return void this.$message({message:"请先填入移动端商城链接",type:"warning",duration:t.$duration});if(!t.ImgMLogin)return void this.$message({message:"请先上传移动端登陆logo",type:"warning",duration:t.$duration});if(!t.ImgMAuth)return void this.$message({message:"请先上传移动端鉴权logo",type:"warning",duration:t.$duration});if(!t.ImgMMain)return void this.$message({message:"请先上传移动端首页logo",type:"warning",duration:t.$duration});if(!t.ImgMAbout)return void this.$message({message:"请先上传移动端关于页logo",type:"warning",duration:t.$duration});var n=t.ChildRenCompany&&t.ChildRenCompanyItem.find(function(e){return t.ChildRenCompany==e.compId}),i=t.compOption.find(function(e){return t.compID==e.compId}),o={orgName:t.ChildRenCompany?n.compCode:i.compCode,version:t.version,env:t.envMsg.value};t.confirm(t.Host+"/authController/getAuthenIsExist",o,function(e){if(0==e.data.code)t.$message({message:e.data.msg+"请去鉴权配置列表中查看并可以编辑",type:"warning",duration:t.$duration,showClose:!0});else{var o="",r="";t.ChildRenCompany?(o=n.compCode,r=t.ChildRenCompany):(o=i.compCode,r=t.compID);var l={orgName:o,compId:r,version:t.version,env:t.envMsg.value,homeUrl:t.mUrlOffical.trim(),mallUrl:t.mUrlMall.trim(),weilianlUrl:t.mUrlweilian.trim(),providerUrl:t.mUrlAgent.trim(),loginLogoDir:t.ImgMLogin,authLogoDir:t.ImgMAuth,indexLogoDir:t.ImgMMain,aboutLogoDir:t.ImgMAbout,versionAbout:t.mUrlVersion.trim()};t.confirm(t.Host+"/authController/addAuthentication",l,function(e){t.$message({message:e.data.msg,type:0==e.data.code?"warning":"success",duration:t.$duration,showClose:!0,onClose:function(){1==e.data.code&&(a.a.version=t.version,t.$router.push({path:"/authList"}))}})})}})}},confirm:function(t,e,n){this.$Ajax.post(t,e,n).then(function(t){n&&n(t)}).catch(function(t){})},cancelConfig:function(){this.configEditItem&&this.configEditItem.id?this.$emit("configEditSuccess",{code:0}):this.$router.push({path:"/authList"})}},components:{configheader:s.a,imgupload:d.a},props:["configEditItem"],watch:{configEditItem:{deep:!0,handler:function(t,e){this.init(t)}}}}},481:function(t,e,n){e=t.exports=n(156)(!0),e.push([t.i,'.configAddHeader[data-v-11def9f4]{text-align:left;margin-left:10px;margin-bottom:10px}.configAdd li[data-v-11def9f4]{padding:10px}.configAdd li>div[data-v-11def9f4]{float:left;padding-left:10px;line-height:36px}.configAdd li .tips-exp[data-v-11def9f4]{width:300px!important}.configAdd li .tips-exp>p[data-v-11def9f4]{text-align:left}.configAdd li .el-icon-information[data-v-11def9f4]:before{content:"\\E615";color:skyblue;font-size:16px}.configAdd li>div[data-v-11def9f4]:first-of-type{min-width:100px;text-align:right;padding-left:30px;margin-right:15px;font-size:14px}.configAdd li>div[data-v-11def9f4]:last-of-type{width:300px}.configAdd li>div:last-of-type>div[data-v-11def9f4]{width:100%}.block[data-v-11def9f4]{text-align:left;margin-left:40px;margin-top:10px}',"",{version:3,sources:["D:/projectLY/frameWork1.0/src/components/auth/authAdd.vue"],names:[],mappings:"AACA,kCACE,gBAAiB,AACjB,iBAAkB,AAClB,kBAAoB,CACrB,AACD,+BACE,YAAc,CACf,AACD,mCACI,WAAY,AACZ,kBAAmB,AACnB,gBAAkB,CACrB,AACD,yCACI,qBAAwB,CAC3B,AACD,2CACM,eAAiB,CACtB,AACD,2DACI,gBAAiB,AACjB,cAAe,AACf,cAAgB,CACnB,AACD,iDACI,gBAAiB,AACjB,iBAAkB,AAClB,kBAAmB,AACnB,kBAAmB,AACnB,cAAgB,CACnB,AACD,gDACI,WAAa,CAChB,AACD,oDACM,UAAY,CACjB,AACD,wBACE,gBAAiB,AACjB,iBAAkB,AAClB,eAAiB,CAClB",file:"authAdd.vue",sourcesContent:['\n.configAddHeader[data-v-11def9f4] {\n  text-align: left;\n  margin-left: 10px;\n  margin-bottom: 10px;\n}\n.configAdd li[data-v-11def9f4] {\n  padding: 10px;\n}\n.configAdd li > div[data-v-11def9f4] {\n    float: left;\n    padding-left: 10px;\n    line-height: 36px;\n}\n.configAdd li .tips-exp[data-v-11def9f4] {\n    width: 300px !important;\n}\n.configAdd li .tips-exp > p[data-v-11def9f4] {\n      text-align: left;\n}\n.configAdd li .el-icon-information[data-v-11def9f4]:before {\n    content: "\\E615";\n    color: skyblue;\n    font-size: 16px;\n}\n.configAdd li > div[data-v-11def9f4]:first-of-type {\n    min-width: 100px;\n    text-align: right;\n    padding-left: 30px;\n    margin-right: 15px;\n    font-size: 14px;\n}\n.configAdd li > div[data-v-11def9f4]:last-of-type {\n    width: 300px;\n}\n.configAdd li > div:last-of-type > div[data-v-11def9f4] {\n      width: 100%;\n}\n.block[data-v-11def9f4] {\n  text-align: left;\n  margin-left: 40px;\n  margin-top: 10px;\n}\n'],sourceRoot:""}])},484:function(t,e,n){var i=n(481);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(416)("09549c04",i,!0)},487:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("configheader",{attrs:{title:t.titleConfig}}),t._v(" "),n("ul",{staticClass:"configAdd"},[n("li",{staticClass:"clearfix"},[n("div",[t._v(t._s(t.ifEdit?"企业编码":"企业名称"))]),t._v(" "),t.ifEdit?t._e():n("div",[n("el-select",{attrs:{placeholder:"请选择企业",disabled:t.ifEdit},on:{change:t.selectChildrenCompany},model:{value:t.compID,callback:function(e){t.compID=e},expression:"compID"}},t._l(t.compOption,function(t){return n("el-option",{key:t.compId,attrs:{label:t.compName,value:t.compId}})}))],1),t._v(" "),t.ifEdit?t._e():n("div",[n("el-select",{attrs:{placeholder:"请选择子公司信息",clearable:!t.ifEdit,disabled:t.ifEdit},model:{value:t.ChildRenCompany,callback:function(e){t.ChildRenCompany=e},expression:"ChildRenCompany"}},t._l(t.ChildRenCompanyItem,function(t){return n("el-option",{key:t.compId,attrs:{label:t.compName,value:t.compId}})}))],1),t._v(" "),t.ifEdit?n("div",[n("el-input",{attrs:{placeholder:"请输入公司编码",disabled:""},model:{value:t.Everycode,callback:function(e){t.Everycode=e},expression:"Everycode"}})],1):t._e()]),t._v(" "),n("li",{staticClass:"clearfix"},[n("div",[t._v("版本信息")]),t._v(" "),n("div",[n("el-input",{attrs:{placeholder:"请输入对应版本",disabled:t.ifEdit},model:{value:t.version,callback:function(e){t.version=e},expression:"version"}})],1)]),t._v(" "),n("li",{staticClass:"clearfix"},[n("div",[t._v("环境信息")]),t._v(" "),n("div",[n("el-select",{attrs:{placeholder:"请选择环境信息",disabled:t.ifEdit},on:{change:t.chengeee},model:{value:t.envMsg,callback:function(e){t.envMsg=e},expression:"envMsg"}},t._l(t.options,function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t}})}))],1)]),t._v(" "),n("li",{staticClass:"clearfix"},[n("div",[t._v("官网链接")]),t._v(" "),n("div",[n("el-input",{attrs:{placeholder:"请输入链接地址"},model:{value:t.mUrlOffical,callback:function(e){t.mUrlOffical=e},expression:"mUrlOffical"}})],1)]),t._v(" "),n("li",{staticClass:"clearfix"},[n("div",[t._v("商城链接")]),t._v(" "),n("div",[n("el-input",{attrs:{placeholder:"请输入链接地址"},model:{value:t.mUrlMall,callback:function(e){t.mUrlMall=e},expression:"mUrlMall"}})],1)]),t._v(" "),n("li",{staticClass:"clearfix"},[n("div",[t._v("微链地址")]),t._v(" "),n("div",[n("el-input",{attrs:{placeholder:"请输入链接地址"},model:{value:t.mUrlweilian,callback:function(e){t.mUrlweilian=e},expression:"mUrlweilian"}})],1)]),t._v(" "),n("li",{staticClass:"clearfix"},[n("div",[t._v("服务商地址")]),t._v(" "),n("div",[n("el-input",{attrs:{placeholder:"请输入服务商地址"},model:{value:t.mUrlAgent,callback:function(e){t.mUrlAgent=e},expression:"mUrlAgent"}})],1)]),t._v(" "),n("li",{staticClass:"clearfix"},[n("div",[t._v("版本号")]),t._v(" "),n("div",[n("el-input",{attrs:{placeholder:"请输入版本号"},model:{value:t.mUrlVersion,callback:function(e){t.mUrlVersion=e},expression:"mUrlVersion"}})],1)]),t._v(" "),n("li",{staticClass:"clearfix"},[n("div",[t._v("登录logo")]),t._v(" "),n("imgupload",{staticClass:"auth-img",attrs:{imgUrlFileList:t.fileListMLogin},on:{SendToImgUrl:t.receptImgMLogin,EmptyImgUrl:t.emptyImgMLogin}}),t._v(" "),t._m(0),t._v(" "),t._m(1)],1),t._v(" "),n("li",{staticClass:"clearfix"},[n("div",[t._v("鉴权logo")]),t._v(" "),n("imgupload",{staticClass:"auth-img",attrs:{imgUrlFileList:t.fileListMAuth},on:{SendToImgUrl:t.receptImgMAuth,EmptyImgUrl:t.emptyImgMAuth}}),t._v(" "),t._m(2),t._v(" "),t._m(3)],1),t._v(" "),n("li",{staticClass:"clearfix"},[n("div",[t._v("首页logo")]),t._v(" "),n("imgupload",{staticClass:"auth-img",attrs:{imgUrlFileList:t.fileListMMain},on:{SendToImgUrl:t.receptImgMMain,EmptyImgUrl:t.emptyImgMMain}}),t._v(" "),t._m(4),t._v(" "),t._m(5)],1),t._v(" "),n("li",{staticClass:"clearfix"},[n("div",[t._v("关于页logo")]),t._v(" "),n("imgupload",{staticClass:"auth-img",attrs:{imgUrlFileList:t.fileListMAbout},on:{SendToImgUrl:t.receptImgMAbout,EmptyImgUrl:t.emptyImgMAbout}}),t._v(" "),t._m(6),t._v(" "),t._m(7)],1)]),t._v(" "),n("div",{staticClass:"block"},[n("span",{staticClass:"wrapper"},[n("el-button",{attrs:{type:"success"},on:{click:t.configConfirm}},[t._v("确定")]),t._v(" "),n("el-button",{attrs:{type:"info"},on:{click:t.cancelConfig}},[t._v("取消")])],1)])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("i",{staticClass:"el-icon-information"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tips-exp"},[n("p",[n("strong",[t._v("PC：")]),t._v("165*27px的尺寸")]),t._v(" "),n("p",[n("strong",[t._v("Android：")]),t._v("470*76的尺寸")]),t._v(" "),n("p",[n("strong",[t._v("IOS：")]),t._v("540*88的尺寸")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("i",{staticClass:"el-icon-information"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tips-exp"},[n("p",[n("strong",[t._v("PC：")]),t._v("358*96px的尺寸")]),t._v(" "),n("p",[n("strong",[t._v("Android：")]),t._v("506*130的尺寸")]),t._v(" "),n("p",[n("strong",[t._v("IOS：")]),t._v("580*150的尺寸")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("i",{staticClass:"el-icon-information"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tips-exp"},[n("p",[n("strong",[t._v("PC：")]),t._v("163*28px的尺寸")]),t._v(" "),n("p",[n("strong",[t._v("Android：")]),t._v("979*184的尺寸")]),t._v(" "),n("p",[n("strong",[t._v("IOS：")]),t._v("979*240的尺寸")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("i",{staticClass:"el-icon-information"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tips-exp"},[n("p",[n("strong",[t._v("PC：")]),t._v("295*79px的尺寸")]),t._v(" "),n("p",[n("strong",[t._v("Android：")]),t._v("662*156的尺寸")]),t._v(" "),n("p",[n("strong",[t._v("IOS：")]),t._v("760*180的尺寸")])])}]}},491:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(445),o=n.n(i),r=n(159),a=n(443),l=n(417),s=n.n(l);e.default={data:function(){return{ChildRenCompany:"",ChildRenCompanyItem:[],showclose:!0,compOption:"",pageShow:!1,currentPage:1,pageSize:6,total:null,loading:!0,optionComp:[],sevenStarListItem:[],dialogTableVisible:!1,itemtitle:"",authItem:{},editSelectMsg:""}},mounted:function(){},computed:o()({},n.i(r.b)({imgUrlPre:function(t){return t.login.changeImgPreInfo}})),created:function(){var t=this;t.listOff=!0,t.loading=!1,t.hasAuth(function(){a.a.compCode&&(t.compOption=a.a.compCode,t.init())})},methods:{changeSortVersion:function(t,e){return t.version-e.version>0},hasAuth:function(t){var e=this,n=this;1==n.$store.getters.user.grade?n.$nextTick(function(){e.compOption=n.$store.getters.user.company.comp_code,n.optionComp[0]={compCode:n.$store.getters.user.company.comp_code,compId:n.$store.getters.user.company.id,compName:n.$store.getters.user.company.comp_name}}):0==n.$store.getters.user.grade&&n.$Ajax.post(n.Host+"/sevenStarController/getAllCompany",{}).then(function(e){n.$nextTick(function(){n.optionComp=e.data.data}),t&&t()}).catch(function(t){})},check:function(){this.init()},close1:function(t){var e=this;e.dialogTableVisible=t,e.init()},init:function(){var t=this;this.$Ajax.post(this.Host+"/authController/getAuthenticationByOrgName",{orgName:this.ChildRenCompany?this.ChildRenCompany:this.compOption}).then(function(e){if(0==e.data.code)return t.$message.warning(e.data.msg),void(t.sevenStarListItem=[]);a.a.compCode=t.compOption,t.editSelectMsg=t.compOption,t.sevenStarListItem=e.data.data;for(var n=0;n<t.sevenStarListItem.length;n++)t.sevenStarListItem[n].compId=t.optionComp.find(function(e){return t.compOption==e.compCode}).compId,t.sevenStarListItem[n].weilianlUrl=null==t.sevenStarListItem[n].weilianlUrl?"":t.sevenStarListItem[n].weilianlUrl}).catch(function(t){})},editFinish:function(t){t.code,this.dialogTableVisible=!1},deleConfigItem:function(t,e){var n=this;n.$confirm("确定删除?","",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n.$Ajax.post(n.Host+"/authController/delAuthenticationById",{id:e.id,compId:e.compId}).then(function(t){n.$message({type:1==t.data.code?"success":"error",message:t.data.msg,duration:n.$duration,onClose:function(){1==t.data.code&&n.init()}})}).catch(function(t){})}).catch(function(){n.$message({type:"info",message:"已取消删除",duration:n.$duration})})},editConfigItem:function(t,e){this.authItem=e,this.dialogTableVisible=!0},selectCompName:function(t){var e=this;this.ChildRenCompany="",this.ChildRenCompanyItem=[];var n=this.optionComp.find(function(e){return t==e.compCode});this.confirm(this.Host+"/sevenStarController/getAllSubCompany",{compId:n.compId},function(t){e.$nextTick(function(){e.ChildRenCompanyItem=t.data.data})})},confirm:function(t,e,n){this.$Ajax.post(t,e,n).then(function(t){n&&n(t)}).catch(function(t){})}},components:{configedit:s.a}}},511:function(t,e,n){e=t.exports=n(156)(!0),e.push([t.i,".el-table--enable-row-transition .el-table__body tr td .cell span .el-tag[data-v-7302774a]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%;background-color:#c0c5cc}.el-table--enable-row-transition .el-table__body tr .el-table_1_column_13 .cell[data-v-7302774a],.el-table--enable-row-transition .el-table__body tr .el-table_1_column_13 div[data-v-7302774a]{width:100%}.el-table--enable-row-transition .el-table__body tr .el-table_1_column_13 .cell button[data-v-7302774a],.el-table--enable-row-transition .el-table__body tr .el-table_1_column_13 div button[data-v-7302774a]{padding:4px 6px!important}.configCheck[data-v-7302774a]{display:inline-block;margin-bottom:20px;margin-left:0}","",{version:3,sources:["D:/projectLY/frameWork1.0/src/components/auth/authList.vue"],names:[],mappings:"AAQA,2FACI,gBAAiB,AACjB,uBAAwB,AACxB,mBAAoB,AACpB,WAAY,AACZ,wBAA0B,CAE7B,AACD,gMAGI,UAAY,CACf,AACD,8MACM,yBAA4B,CACjC,AACD,8BACE,qBAAsB,AACtB,mBAAoB,AACpB,aAAe,CAChB",file:"authList.vue",sourcesContent:["/*.el-table--enable-row-transition .el-table__body td*/\n.el-table--enable-row-transition[data-v-7302774a] {\n  /*td:last-of-type {*/\n  /*.el-table .cell:last-of-type {*/\n  /*padding-left: 0 !important;*/\n  /*}*/\n  /*}*/\n}\n.el-table--enable-row-transition .el-table__body tr td .cell span .el-tag[data-v-7302774a] {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 100%;\n    background-color: #c0c5cc;\n    /*background-color: #cc98b2;*/\n}\n.el-table--enable-row-transition .el-table__body tr .el-table_1_column_13 .cell[data-v-7302774a], .el-table--enable-row-transition .el-table__body tr .el-table_1_column_13 div[data-v-7302774a] {\n    /*padding-left:0 !important;*/\n    /*padding-right: 0 !important;*/\n    width: 100%;\n}\n.el-table--enable-row-transition .el-table__body tr .el-table_1_column_13 .cell button[data-v-7302774a], .el-table--enable-row-transition .el-table__body tr .el-table_1_column_13 div button[data-v-7302774a] {\n      padding: 4px 6px !important;\n}\n.configCheck[data-v-7302774a] {\n  display: inline-block;\n  margin-bottom: 20px;\n  margin-left: 0;\n}\n"],sourceRoot:""}])},523:function(t,e,n){var i=n(511);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(416)("28d50088",i,!0)},539:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading.body",value:t.loading,expression:"loading",modifiers:{body:!0}}],staticClass:"company"},[n("el-select",{staticClass:"configSelect1",attrs:{placeholder:"请选择集团"},on:{change:t.selectCompName},model:{value:t.compOption,callback:function(e){t.compOption=e},expression:"compOption"}},t._l(t.optionComp,function(t){return n("el-option",{key:t.compId,attrs:{label:t.compName,value:t.compCode}})})),t._v(" "),n("el-select",{attrs:{placeholder:"请选择子公司信息",clearable:""},model:{value:t.ChildRenCompany,callback:function(e){t.ChildRenCompany=e},expression:"ChildRenCompany"}},t._l(t.ChildRenCompanyItem,function(t){return n("el-option",{key:t.compId,attrs:{label:t.compName,value:t.compCode}})})),t._v(" "),n("div",{staticClass:"block configCheck"},[n("span",{staticClass:"wrapper"},[n("el-button",{attrs:{type:"info"},on:{click:t.check}},[t._v("查询")])],1)]),t._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.sevenStarListItem,border:"","max-height":"530","empty-text":" "}},[n("el-table-column",{attrs:{label:"集团编码",fixed:"",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{trigger:"hover",placement:"top"}},[n("p",[t._v(t._s(e.row.orgName))]),t._v(" "),n("div",{staticClass:"name-wrapper",slot:"reference"},[n("el-tag",[t._v(t._s(e.row.orgName))])],1)])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"版本ID",sortable:"",prop:"version","sort-method":t.changeSortVersion,width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.version))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"环境信息",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(t._f("convertEnv")(e.row.env)))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"官网Url",width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{trigger:"hover",placement:"top"}},[n("p",[t._v(t._s(e.row.homeUrl))]),t._v(" "),n("div",{staticClass:"name-wrapper",slot:"reference"},[n("el-tag",[t._v(t._s(e.row.homeUrl))])],1)])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"商城Url",width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{trigger:"hover",placement:"top"}},[n("p",[t._v(t._s(e.row.mallUrl))]),t._v(" "),n("div",{staticClass:"name-wrapper",slot:"reference"},[n("el-tag",[t._v(t._s(e.row.mallUrl))])],1)])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"微链Url",width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{trigger:"hover",placement:"top"}},[n("p",[t._v(t._s(e.row.weilianlUrl))]),t._v(" "),n("div",{staticClass:"name-wrapper",slot:"reference"},[n("el-tag",[t._v(t._s(e.row.weilianlUrl))])],1)])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"服务商Url",width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{trigger:"hover",placement:"top"}},[n("p",[t._v(t._s(e.row.providerUrl))]),t._v(" "),n("div",{staticClass:"name-wrapper",slot:"reference"},[n("el-tag",[t._v(t._s(e.row.providerUrl))])],1)])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"登录Url",width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{trigger:"hover",placement:"top"}},[n("p",[t._v(t._s(t.imgUrlPre+e.row.loginLogoDir))]),t._v(" "),n("div",{staticClass:"name-wrapper",slot:"reference"},[n("el-tag",[t._v(t._s(t.imgUrlPre+e.row.loginLogoDir))])],1)])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"鉴权Url",width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{trigger:"hover",placement:"top"}},[n("p",[t._v(t._s(t.imgUrlPre+e.row.authLogoDir))]),t._v(" "),n("div",{staticClass:"name-wrapper",slot:"reference"},[n("el-tag",[t._v(t._s(t.imgUrlPre+e.row.authLogoDir))])],1)])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"首页logo",width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{trigger:"hover",placement:"top"}},[n("p",[t._v(t._s(t.imgUrlPre+e.row.indexLogoDir))]),t._v(" "),n("div",{staticClass:"name-wrapper",slot:"reference"},[n("el-tag",[t._v(t._s(t.imgUrlPre+e.row.indexLogoDir))])],1)])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"关于页logo",width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{trigger:"hover",placement:"top"}},[n("p",[t._v(t._s(t.imgUrlPre+e.row.aboutLogoDir))]),t._v(" "),n("div",{staticClass:"name-wrapper",slot:"reference"},[n("el-tag",[t._v(t._s(t.imgUrlPre+e.row.aboutLogoDir))])],1)])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"版本号",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{trigger:"hover",placement:"top"}},[n("p",[t._v(t._s(e.row.versionAbout))]),t._v(" "),n("div",{staticClass:"name-wrapper",slot:"reference"},[n("el-tag",[t._v(t._s(e.row.versionAbout))])],1)])]}}])}),t._v(" "),n("el-table-column",{staticClass:"btn",attrs:{label:"操作",fixed:"right",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(n){t.editConfigItem(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),n("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(n){t.deleConfigItem(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),n("el-dialog",{attrs:{title:"",visible:t.dialogTableVisible,"modal-append-to-body":""},on:{"update:visible":function(e){t.dialogTableVisible=e},close:function(e){t.close1(!1)}}},[n("configedit",{attrs:{configEditItem:t.authItem},on:{configEditSuccess:t.editFinish}})],1)],1)},staticRenderFns:[]}}});