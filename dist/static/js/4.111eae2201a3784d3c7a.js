webpackJsonp([4],{427:function(t,e,n){function o(t){n(522)}var i=n(157)(n(498),n(538),o,"data-v-67150f72",null);t.exports=i.exports},430:function(t,e,n){t.exports=!n(431)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},431:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},432:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},433:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},434:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},435:function(t,e,n){var o=n(455);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},436:function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},437:function(t,e,n){var o=n(435),i=n(434);t.exports=function(t){return o(i(t))}},444:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{configUpload:"",mult:!1,fileList:[{url:""}],dialogImageUrl:"",dialogVisible:!1}},created:function(){this.configUpload=this.Host+this.$FileUpload,this.imgUrlFileList?this.fileList=[{url:this.imgUrlFileList}]:this.fileList=[]},mounted:function(){var t=this;t.$nextTick(function(){t.$refs.uploadBox.$children[0].$el.children.length>=1&&(t.$refs.uploadBox.$children[1].$el.style.display="none")})},methods:{handleRemove:function(t,e){var n=this;n.$emit("EmptyImgUrl",""),n.$nextTick(function(){n.$refs.uploadBox.$children[1].$el.style.display="inline-block"})},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},handleSuccessUpload:function(t){var e=this;"/indexCopy"==this.$route.fullPath&&e.$store.dispatch("onActionChangeIndexCopyImgUrl",t.slice(1)),e.$emit("SendToImgUrl",t.slice(1)),e.$nextTick(function(){e.$refs.uploadBox.$children[0].$el.children.length>=1&&(e.$refs.uploadBox.$children[1].$el.style.display="none",e.$refs.uploadBox.$children[0].$el.style.display="inline-block")}),e.btnIconDir=t.slice(1),e.dialogImageUrl=e.Host+t},beforeAvatarUpload:function(t){var e="image/jpeg"===t.type||"image/jpg"===t.type||"image/png"===t.type||"image/gif"===t.type,n=t.size/1024/1024<20;return e||this.$message.error("上传环境地址图片只能是 jpeg/jpg/png/gif 格式!"),n||this.$message.error("上传环境地址图片大小不能超过 20M!"),e&&n}},props:["imgUrlFileList"],watch:{imgUrlFileList:{handler:function(t,e){var n=this;this.fileList=[{url:t}],t?this.$nextTick(function(){n.$refs.uploadBox.$children[0].$el.children.length>=1&&(n.$refs.uploadBox.$children[0].$el.style.display="inline-block",n.$refs.uploadBox.$children[1].$el.style.display="none")}):this.$nextTick(function(){n.$refs.uploadBox.$children[1].$el.style.display="inline-block",n.$refs.uploadBox.$children[0].$children[0].$el.style.display="none"})},deep:!0}}}},445:function(t,e,n){"use strict";e.__esModule=!0;var o=n(450),i=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default=i.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}},446:function(t,e,n){e=t.exports=n(156)(!0),e.push([t.i,".el-upload-dragger{width:100%!important;height:100%!important}.auth-img div.el-upload--picture-card,.auth-img li.el-upload-list__item.is-success{width:100px!important;height:100px!important;line-height:100px}.index-copy div.el-upload--picture-card,.index-copy li.el-upload-list__item.is-success{width:60px!important;height:60px!important;line-height:60px}.el-dialog.el-dialog--tiny{top:30%!important;position:fixed!important;-webkit-transform:translate(-50%)!important;transform:translate(-50%)!important}\n/*!*.el-dialog.el-dialog--tiny:nth-of-type(1){*!*/\n  /*!*top: 10% !important;*!*/\n/*!*}*!*/","",{version:3,sources:["D:/projectLY/frameWork1.0/src/components/common/imgUpload.vue"],names:[],mappings:"AACA,mBACE,qBAAuB,AACvB,qBAAwB,CACzB,AAMD,mFACE,sBAAwB,AACxB,uBAAyB,AACzB,iBAAmB,CACpB,AAMD,uFACE,qBAAuB,AACvB,sBAAwB,AACxB,gBAAkB,CACnB,AACD,2BACE,kBAAoB,AACpB,yBAA2B,AAE3B,4CAA6C,AACrC,mCAAqC,CAC9C;AACD,kDAAkD;EAChD,4BAA4B;AAC9B,SAAS",file:"imgUpload.vue",sourcesContent:["\n.el-upload-dragger{\n  width: 100% !important;\n  height: 100% !important;\n}\n.auth-img div.el-upload--picture-card {\n   width: 100px !important;\n   height: 100px !important;\n   line-height: 100px;\n}\n.auth-img li.el-upload-list__item.is-success {\n  width: 100px !important;\n  height: 100px !important;\n  line-height: 100px;\n}\n.index-copy div.el-upload--picture-card {\n  width: 60px !important;\n  height: 60px !important;\n  line-height: 60px;\n}\n.index-copy li.el-upload-list__item.is-success {\n  width: 60px !important;\n  height: 60px !important;\n  line-height: 60px;\n}\n.el-dialog.el-dialog--tiny {\n  top: 30% !important;\n  position: fixed !important;\n  /*width: 30% !important;*/\n  -webkit-transform:translate(-50%) !important;\n          transform:translate(-50%) !important;\n}\n/*!*.el-dialog.el-dialog--tiny:nth-of-type(1){*!*/\n  /*!*top: 10% !important;*!*/\n/*!*}*!*/\n/*.el-dialog.el-dialog--tiny:nth-of-type(n-1){*/\n  /*top: 30% !important;*/\n/*}*/\n/*.el-dialog.el-dialog--tiny:nth-of-type(n-4){*/\n  /*top: 50% !important;*/\n/*}*/\n/*.el-dialog.el-dialog--tiny:nth-of-type(n-3){*/\n  /*top: 40% !important;*/\n/*}*/\n/*.el-dialog.el-dialog--tiny:nth-of-type(n-4){*/\n  /*top: 70% !important;*/\n/*}*/\n"],sourceRoot:""}])},447:function(t,e,n){var o=n(446);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(416)("42f1628a",o,!0)},448:function(t,e,n){function o(t){n(447)}var i=n(157)(n(444),n(449),o,null,null);t.exports=i.exports},449:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-upload",{ref:"uploadBox",staticClass:"bixbix",attrs:{action:t.configUpload,"list-type":"picture-card",multiple:t.mult,drag:"","file-list":t.fileList,"on-preview":t.handlePictureCardPreview,"before-upload":t.beforeAvatarUpload,"on-remove":t.handleRemove,"on-success":t.handleSuccessUpload}},[n("i",{staticClass:"el-icon-plus"})]),t._v(" "),n("el-dialog",{attrs:{size:"tiny"},model:{value:t.dialogVisible,callback:function(e){t.dialogVisible=e},expression:"dialogVisible"}},[n("img",{staticClass:"img1",attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1)},staticRenderFns:[]}},450:function(t,e,n){t.exports={default:n(451),__esModule:!0}},451:function(t,e,n){n(477),t.exports=n(158).Object.assign},452:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},453:function(t,e,n){var o=n(433);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},454:function(t,e,n){var o=n(437),i=n(473),a=n(472);t.exports=function(t){return function(e,n,r){var l,s=o(e),p=i(s.length),c=a(r,p);if(t&&n!=n){for(;p>c;)if((l=s[c++])!=l)return!0}else for(;p>c;c++)if((t||c in s)&&s[c]===n)return t||c||0;return!t&&-1}}},455:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},456:function(t,e,n){var o=n(452);t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,i){return t.call(e,n,o,i)}}return function(){return t.apply(e,arguments)}}},457:function(t,e,n){var o=n(433),i=n(432).document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},458:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},459:function(t,e,n){var o=n(432),i=n(158),a=n(456),r=n(461),l=function(t,e,n){var s,p,c,u=t&l.F,d=t&l.G,f=t&l.S,m=t&l.P,v=t&l.B,g=t&l.W,y=d?i:i[e]||(i[e]={}),h=y.prototype,C=d?o:f?o[e]:(o[e]||{}).prototype;d&&(n=e);for(s in n)(p=!u&&C&&void 0!==C[s])&&s in y||(c=p?C[s]:n[s],y[s]=d&&"function"!=typeof C[s]?n[s]:v&&p?a(c,o):g&&C[s]==c?function(t){var e=function(e,n,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,o)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(c):m&&"function"==typeof c?a(Function.call,c):c,m&&((y.virtual||(y.virtual={}))[s]=c,t&l.R&&h&&!h[s]&&r(h,s,c)))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,t.exports=l},460:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},461:function(t,e,n){var o=n(464),i=n(469);t.exports=n(430)?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},462:function(t,e,n){t.exports=!n(430)&&!n(431)(function(){return 7!=Object.defineProperty(n(457)("div"),"a",{get:function(){return 7}}).a})},463:function(t,e,n){"use strict";var o=n(467),i=n(465),a=n(468),r=n(474),l=n(435),s=Object.assign;t.exports=!s||n(431)(function(){var t={},e={},n=Symbol(),o="abcdefghijklmnopqrst";return t[n]=7,o.split("").forEach(function(t){e[t]=t}),7!=s({},t)[n]||Object.keys(s({},e)).join("")!=o})?function(t,e){for(var n=r(t),s=arguments.length,p=1,c=i.f,u=a.f;s>p;)for(var d,f=l(arguments[p++]),m=c?o(f).concat(c(f)):o(f),v=m.length,g=0;v>g;)u.call(f,d=m[g++])&&(n[d]=f[d]);return n}:s},464:function(t,e,n){var o=n(453),i=n(462),a=n(475),r=Object.defineProperty;e.f=n(430)?Object.defineProperty:function(t,e,n){if(o(t),e=a(e,!0),o(n),i)try{return r(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},465:function(t,e){e.f=Object.getOwnPropertySymbols},466:function(t,e,n){var o=n(460),i=n(437),a=n(454)(!1),r=n(470)("IE_PROTO");t.exports=function(t,e){var n,l=i(t),s=0,p=[];for(n in l)n!=r&&o(l,n)&&p.push(n);for(;e.length>s;)o(l,n=e[s++])&&(~a(p,n)||p.push(n));return p}},467:function(t,e,n){var o=n(466),i=n(458);t.exports=Object.keys||function(t){return o(t,i)}},468:function(t,e){e.f={}.propertyIsEnumerable},469:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},470:function(t,e,n){var o=n(471)("keys"),i=n(476);t.exports=function(t){return o[t]||(o[t]=i(t))}},471:function(t,e,n){var o=n(432),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},472:function(t,e,n){var o=n(436),i=Math.max,a=Math.min;t.exports=function(t,e){return t=o(t),t<0?i(t+e,0):a(t,e)}},473:function(t,e,n){var o=n(436),i=Math.min;t.exports=function(t){return t>0?i(o(t),9007199254740991):0}},474:function(t,e,n){var o=n(434);t.exports=function(t){return Object(o(t))}},475:function(t,e,n){var o=n(433);t.exports=function(t,e){if(!o(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!o(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!o(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!o(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},476:function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},477:function(t,e,n){var o=n(459);o(o.S+o.F,"Object",{assign:n(463)})},498:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(160),i=n.n(o),a=n(445),r=n.n(a),l=n(159),s=n(448),p=n.n(s);e.default={components:{imgupload:p.a},data:function(){return{Copyversion:"",CopycompOption:"",CopyChildRenCompany:"",CopyifActive:"",CopyChildRenCompanyItem:[],version:"",optionVersion:[],compOption:"",optionComp:[],ChildRenCompany:"",ChildRenCompanyItem:[],envMsg:{},CopyenvMsg:{},options:this.envOption,ifActive:"",options2:[{value:"1",label:"是"},{value:"0",label:"否"}],copyMsgItem:[],fullscreenLoading:!1}},computed:r()({},n.i(l.b)({imgPre:function(t){return t.login.changeImgPreInfo}})),created:function(){var t=this;t.$Ajax.post(t.Host+"/appController/getAllVersion",{}).then(function(e){t.optionVersion=e.data.data}).catch(function(t){}),0==t.$store.getters.user.grade?t.$Ajax.post(t.Host+"/sevenStarController/getAllCompany",{}).then(function(e){t.optionComp=e.data.data}).catch(function(t){}):1==t.$store.getters.user.grade&&(t.optionComp[0]={compCode:t.$store.getters.user.company.comp_code,compId:t.$store.getters.user.company.id,compName:t.$store.getters.user.company.comp_name})},methods:{selectCompany:function(t){var e=this;e.ChildRenCompany="",e.$Ajax.post(e.Host+"/sevenStarController/getAllSubCompany",{compId:t}).then(function(t){1==t.data.code&&(e.ChildRenCompanyItem=t.data.data)}).catch(function(t){})},selectCopyCompany:function(t){var e=this;e.CopyChildRenCompany="",e.$Ajax.post(e.Host+"/sevenStarController/getAllSubCompany",{compId:t}).then(function(t){1==t.data.code&&(e.CopyChildRenCompanyItem=t.data.data)}).catch(function(t){})},startCopy:function(){var t=this;if(!this.compOption)return void this.$message({message:"请先选择原始配置企业信息",type:"warning",duration:t.$duration});if(!t.version.trim())return void this.$message({message:"请先输入原始配置版本号",type:"warning",duration:t.$duration});if(!t.envMsg.value)return void this.$message({message:"请先选择原始配置环境信息",type:"warning",duration:t.$duration});if(!t.ifActive)return void this.$message({message:"请先选择原始配置是否激活状态",type:"warning",duration:t.$duration});if(!this.CopycompOption)return void this.$message({message:"请先选择生成配置企业信息",type:"warning",duration:t.$duration});if(!t.Copyversion.trim())return void this.$message({message:"请先输入生成配置版本号",type:"warning",duration:t.$duration});if(!t.CopyenvMsg.value)return void this.$message({message:"请先选择生成配置环境信息",type:"warning",duration:t.$duration});if(!t.CopyifActive)return void this.$message({message:"请先选择生成配置是否激活状态",type:"warning",duration:t.$duration});var e=t.envMsg.value.slice(0,t.envMsg.value.length-1),n=t.CopyenvMsg.value.slice(0,t.CopyenvMsg.value.length-1);if(("PC"!=e&&"iPad"!=e||"iPad"!=n&&"PC"!=n)&&("Android"!=e&&"IOS"!=e||"IOS"!=n&&"Android"!=n))return this.$message({message:"环境信息不匹配，只能是 PC 与 iPad或者PC；以及IOS与Android或者IOS",type:"warning",duration:t.$duration}),void(this.copyMsgItem=[]);t.fullscreenLoading=!0;var o={compId:t.compOption,appVersion:t.version,appEnvName:t.envMsg.value,isActived:t.ifActive,pageIndex:1,pageSize:30};t.ChildRenCompany&&(o.subCompCode=t.ChildRenCompany);var i={compId:t.CopycompOption,appVersion:t.Copyversion,appEnvName:t.CopyenvMsg.value,isActived:t.CopyifActive,pageIndex:1,pageSize:30};t.CopyChildRenCompany&&(i.subCompCode=t.CopyChildRenCompany),t.$Ajax.all([t.$Ajax.post(t.Host+"/appController/queryPageApplication",o),t.$Ajax.post(t.Host+"/appController/queryPageApplication",i)]).then(t.$Ajax.spread(function(e,n){return 0==e.data.code?(t.$message({message:e.data.msg,type:"warning",duration:t.$duration}),void setTimeout(function(){t.fullscreenLoading=!1},1e3)):n.data.data&&0!=n.data.data.list.length?(t.$message({message:"生成配置信息已有配置信息，请去配置列表查看",type:"warning",duration:t.$duration}),void setTimeout(function(){t.fullscreenLoading=!1},1e3)):(setTimeout(function(){t.fullscreenLoading=!1},1e3),t.replaceEnvMsg=t.CopyenvMsg.value,void(t.copyMsgItem=e.data.data.list))})).catch(function(e){setTimeout(function(){t.fullscreenLoading=!1},1e3)})},copySubmit:function(){var t=this;if(!this.copyMsgItem.length)return void t.$message({message:"请先 一键复制信息",type:"warning",duration:t.$duration});var e={compId:t.CopycompOption,appVersion:t.Copyversion,appEnvName:t.CopyenvMsg.value,isActived:t.CopyifActive,pageIndex:1,pageSize:30};t.CopyChildRenCompany&&(e.subCompCode=t.CopyChildRenCompany),this.$Ajax.post(t.Host+"/appController/queryPageApplication",e).then(function(e){if(1==e.data.code&&e.data.data&&e.data.data.list&&e.data.data.list.length>=0)return void t.$message({message:"生成配置信息已有配置信息，一键复制失败",type:"warning",duration:t.$duration});if(0==e.data.code&&!e.data.data){for(var n=t.CopyChildRenCompany&&t.CopyChildRenCompanyItem.find(function(e){return e.compCode==t.CopyChildRenCompany}),o=t.CopycompOption&&t.optionComp.find(function(e){return e.compId==t.CopycompOption}),a=0,r=t.copyMsgItem.length;a<r;a++){if(!t.copyMsgItem[a].redirUrl.trim())return void t.$message({message:"第"+(a+1)+"个数据的Url地址不能为空",type:"warning",duration:t.$duration});"EMPTY"==t.copyMsgItem[a].redirUrl.trim().toUpperCase()&&(t.copyMsgItem[a].redirUrl="Empty"),delete t.copyMsgItem[a].id,delete t.copyMsgItem[a].createTime,delete t.copyMsgItem[a].updateTime,t.copyMsgItem[a].compId=o.compId,t.copyMsgItem[a].compCode=o.compCode,t.copyMsgItem[a].appVersion=t.Copyversion,t.copyMsgItem[a].isActived=t.CopyifActive,t.copyMsgItem[a].appEnvName=t.CopyenvMsg.value,t.CopyChildRenCompany&&(t.copyMsgItem[a].subCompCode=n.compCode,t.copyMsgItem[a].subCompName=n.compName)}t.$Ajax.post(t.Host+"/appController/addMutiApplication",{mutiAppJson:i()(t.copyMsgItem)}).then(function(e){1==e.data.code?t.$router.push("/configlist"):0==e.data.code&&t.$message({message:e.data.msg,type:"warning",duration:t.$duration})}).catch(function(t){})}}).catch(function(t){})},selectEnvMsg:function(t){t.indexOf("PC")>-1?this.optionID=this.optionPc:t.indexOf("iPad")>-1?this.optionID=this.optioniPad:this.optionID=this.optionApp},receptImg:function(t){var e=this.copyMsgItem.findIndex(function(e,n,o){return e.btnPosId==t});this.copyMsgItem[e].btnIconDir=this.$store.getters.changeCopyImgUrl},emptyImgUrl:function(t){var e=this,n=e.copyMsgItem.findIndex(function(e,n,o){return e.btnPosId==t});e.copyMsgItem[n].btnIconDir=""},copyBack:function(){this.$router.go(-1)}}}},510:function(t,e,n){e=t.exports=n(156)(!0),e.push([t.i,".i-copy[data-v-67150f72]{padding-left:20px;padding-top:20px}.i-copy .prev[data-v-67150f72]{text-align:left;padding-bottom:10px}.i-copy .prev .v-s[data-v-67150f72]{display:inline-block;width:150px!important}.i-copy .current[data-v-67150f72]{text-align:left;padding-bottom:20px}.i-copy .current .v-s[data-v-67150f72]{display:inline-block;width:150px!important}.i-copy .tips[data-v-67150f72]{text-align:left;padding-bottom:20px;font-size:14px;line-height:26px}.i-copy .tips .el-icon-information[data-v-67150f72]{color:red!important;font-size:16px;font-weight:600}.i-copy .btn-on-off[data-v-67150f72]{margin-top:20px;text-align:left}","",{version:3,sources:["D:/projectLY/frameWork1.0/src/components/indexConfig/copy.vue"],names:[],mappings:"AACA,yBACE,kBAAmB,AACnB,gBAAkB,CACnB,AACD,+BACI,gBAAiB,AACjB,mBAAqB,CACxB,AACD,oCACM,qBAAsB,AACtB,qBAAwB,CAC7B,AACD,kCACI,gBAAiB,AACjB,mBAAqB,CACxB,AACD,uCACM,qBAAsB,AACtB,qBAAwB,CAC7B,AACD,+BACI,gBAAiB,AACjB,oBAAqB,AACrB,eAAgB,AAChB,gBAAkB,CACrB,AACD,oDACM,oBAAsB,AACtB,eAAgB,AAChB,eAAiB,CACtB,AACD,qCACI,gBAAiB,AAKjB,eAAiB,CACpB",file:"copy.vue",sourcesContent:["\n.i-copy[data-v-67150f72] {\n  padding-left: 20px;\n  padding-top: 20px;\n}\n.i-copy .prev[data-v-67150f72] {\n    text-align: left;\n    padding-bottom: 10px;\n}\n.i-copy .prev .v-s[data-v-67150f72] {\n      display: inline-block;\n      width: 150px !important;\n}\n.i-copy .current[data-v-67150f72] {\n    text-align: left;\n    padding-bottom: 20px;\n}\n.i-copy .current .v-s[data-v-67150f72] {\n      display: inline-block;\n      width: 150px !important;\n}\n.i-copy .tips[data-v-67150f72] {\n    text-align: left;\n    padding-bottom: 20px;\n    font-size: 14px;\n    line-height: 26px;\n}\n.i-copy .tips .el-icon-information[data-v-67150f72] {\n      color: red !important;\n      font-size: 16px;\n      font-weight: 600;\n}\n.i-copy .btn-on-off[data-v-67150f72] {\n    margin-top: 20px;\n    /*.cancel {*/\n    /*background-color: #d2dad6;*/\n    /*border-color: #d2dad6;*/\n    /*}*/\n    text-align: left;\n}\n"],sourceRoot:""}])},522:function(t,e,n){var o=n(510);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(416)("001e21ae",o,!0)},538:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"i-copy"},[n("div",{staticClass:"prev"},[n("span",[t._v("原始配置信息信息： ")]),t._v(" "),n("el-select",{staticClass:"configSelect1",attrs:{placeholder:"请选择企业"},on:{change:t.selectCompany},model:{value:t.compOption,callback:function(e){t.compOption=e},expression:"compOption"}},t._l(t.optionComp,function(t,e){return n("el-option",{key:t.compId,attrs:{label:t.compName,value:t.compId}})})),t._v(" "),n("el-select",{attrs:{placeholder:"请选择子公司信息",clearable:""},model:{value:t.ChildRenCompany,callback:function(e){t.ChildRenCompany=e},expression:"ChildRenCompany"}},t._l(t.ChildRenCompanyItem,function(t,e){return n("el-option",{key:t.compId,attrs:{label:t.compName,value:t.compCode}})})),t._v(" "),n("el-select",{staticClass:"v-s",attrs:{placeholder:"请选择版本"},model:{value:t.version,callback:function(e){t.version=e},expression:"version"}},t._l(t.optionVersion,function(t,e){return n("el-option",{key:t.index,attrs:{label:t.index,value:t}})})),t._v(" "),n("el-select",{staticClass:"configSelect1",attrs:{placeholder:"请选择环境"},model:{value:t.envMsg,callback:function(e){t.envMsg=e},expression:"envMsg"}},t._l(t.options,function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t}})})),t._v(" "),n("el-select",{staticClass:"configSelect1",attrs:{placeholder:"请选择激活状态"},model:{value:t.ifActive,callback:function(e){t.ifActive=e},expression:"ifActive"}},t._l(t.options2,function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),n("div",{staticClass:"current"},[n("span",[t._v("生成配置信息信息： ")]),t._v(" "),n("el-select",{staticClass:"configSelect1",attrs:{placeholder:"请选择企业"},on:{change:t.selectCopyCompany},model:{value:t.CopycompOption,callback:function(e){t.CopycompOption=e},expression:"CopycompOption"}},t._l(t.optionComp,function(t,e){return n("el-option",{key:t.compId,attrs:{label:t.compName,value:t.compId}})})),t._v(" "),n("el-select",{attrs:{placeholder:"请选择子公司信息",clearable:""},model:{value:t.CopyChildRenCompany,callback:function(e){t.CopyChildRenCompany=e},expression:"CopyChildRenCompany"}},t._l(t.CopyChildRenCompanyItem,function(t){return n("el-option",{key:t.compId,attrs:{label:t.compName,value:t.compCode}})})),t._v(" "),n("el-input",{staticClass:"v-s",attrs:{placeholder:"请输入对应版本"},model:{value:t.Copyversion,callback:function(e){t.Copyversion=e},expression:"Copyversion"}}),t._v(" "),n("el-select",{staticClass:"configSelect1",attrs:{placeholder:"请选择环境"},model:{value:t.CopyenvMsg,callback:function(e){t.CopyenvMsg=e},expression:"CopyenvMsg"}},t._l(t.options,function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t}})})),t._v(" "),n("el-select",{staticClass:"configSelect1",attrs:{placeholder:"请选择激活状态"},model:{value:t.CopyifActive,callback:function(e){t.CopyifActive=e},expression:"CopyifActive"}},t._l(t.options2,function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),t._v(" "),n("el-button",{staticClass:"index-copy",attrs:{type:"success"},nativeOn:{click:function(e){t.startCopy(e)}}},[t._v("开始一键复制")])],1),t._v(" "),t._m(0),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],staticStyle:{width:"100%"},attrs:{"max-height":"600","element-loading-text":"正在复制中",data:t.copyMsgItem,border:"",stripe:!0,"empty-text":" ","highlight-current-row":!0}},[n("el-table-column",{attrs:{label:"位置"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",[t._v(t._s(t._f("convertPosition")(e.row.btnPosId,t.replaceEnvMsg)))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"位置说明"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{trigger:"hover",placement:"top"}},[n("p",[t._v(t._s(e.row.btnPosDes))]),t._v(" "),n("div",{staticClass:"name-wrapper",slot:"reference"},[n("el-input",{attrs:{placeholder:"请输入位置名称"},model:{value:e.row.btnPosDes,callback:function(t){e.row.btnPosDes=t},expression:"scope.row.btnPosDes"}})],1)])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"图片地址"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("imgupload",{staticClass:"index-copy",attrs:{imgUrlFileList:e.row.btnIconDir?t.imgPre+e.row.btnIconDir:""},on:{EmptyImgUrl:function(n){t.emptyImgUrl(e.row.btnPosId)},SendToImgUrl:function(n){t.receptImg(e.row.btnPosId)}}})]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"图片名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{trigger:"hover",placement:"top"}},[n("p",[t._v(t._s(e.row.btnIconName))]),t._v(" "),n("div",{staticClass:"name-wrapper",slot:"reference"},[n("el-input",{attrs:{placeholder:"请输入图片名称"},model:{value:e.row.btnIconName,callback:function(t){e.row.btnIconName=t},expression:"scope.row.btnIconName"}})],1)])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Url地址"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{trigger:"hover",placement:"top"}},[n("p",[t._v(t._s(e.row.redirUrl))]),t._v(" "),n("div",{staticClass:"name-wrapper",slot:"reference"},[n("el-input",{attrs:{placeholder:"请输入Url地址"},model:{value:e.row.redirUrl,callback:function(t){e.row.redirUrl=t},expression:"scope.row.redirUrl"}})],1)])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"相关参数"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{trigger:"hover",placement:"top"}},[n("p",[t._v(t._s(e.row.otherParam))]),t._v(" "),n("div",{staticClass:"name-wrapper",slot:"reference"},[n("el-input",{attrs:{placeholder:"请输入相关参数"},model:{value:e.row.otherParam,callback:function(t){e.row.otherParam=t},expression:"scope.row.otherParam"}})],1)])]}}])})],1),t._v(" "),n("div",{staticClass:"btn-on-off"},[n("el-button",{attrs:{type:"info"},nativeOn:{click:function(e){t.copySubmit(e)}}},[t._v("保存")]),t._v(" "),n("el-button",{nativeOn:{click:function(e){t.copyBack(e)}}},[t._v("取消")])],1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tips"},[n("i",{staticClass:"el-icon-information"},[t._v(" 友情提示： ")]),t._v(" "),n("ul",[n("li",[t._v(" 1、一键复制时 原配置的信息不会被更改，只是复制一份，生成的配置信息可修改，在保存之后才有效")]),t._v(" "),n("li",[t._v(" 2、一键复制时 对应的位置时固定的")]),t._v(" "),n("li",[t._v(" 3、原始配置信息有可能是小于13条信息，所以一键复制后缺少的信息请去配置添加项 单独进行添加信息")]),t._v(" "),n("li",[t._v(" 4、在生成配置信息 对应的数据库必须为空数据")]),t._v(" "),n("li",[t._v(" 5、在生成配置信息中的Url地址如果输入 empty 的字母字样，保存时会默认保存为 Empty")])])])}]}}});