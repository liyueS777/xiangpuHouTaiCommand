<template>
    <div>
      <div class="h">
        <configheader class="c" title="添加配置" @click.native.aaa="bbb"></configheader>
        <el-button type="success" class="index-copy" @click.native="goCopy">
          <i class="el-icon-edit"></i>
          一键复制
        </el-button>
      </div>
      <ul class="configAdd">
        <li class="clearfix">
          <div>企业信息</div>
          <div>
            <el-select v-model="selectedOptionscascader" placeholder="请选择企业信息" @change="handleChangeCascader">
              <el-option
                v-for="item in optionscascader"
                :key="item.compId"
                :label="item.compName"
                :value="item"
                >
              </el-option>
            </el-select>
          </div>
          <div v-if="hasChildRenCompany">
            <el-select v-model="ChildRenCompany" placeholder="请选择子公司信息" clearable>
              <el-option
                v-for="item in ChildRenCompanyItem"
                :key="item.compId"
                :label="item.compName"
                :value="item">
              </el-option>
            </el-select>
          </div>
        </li>
        <li class="clearfix">
          <div>版本信息</div>
          <div>
            <el-input v-model="version" placeholder="请输入对应版本"></el-input>
          </div>
        </li>
        <li class="clearfix">
          <div>环境信息</div>
          <div>
            <el-select v-model="envMsg" placeholder="请选择环境信息" @change="selectEnvMsg">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </li>
        <li class="clearfix">
          <div>是否激活</div>
          <div>
            <el-select v-model="ifActive" placeholder="请选择是否激活">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </li>
        <li class="clearfix">
          <div>位置ID</div>
          <div>
            <el-select v-model="envID" class="posiotnID" placeholder="请选择位置" @change="selectPositionID">
              <el-option
                v-for="item in optionID"
                :key="item.value"
                :label="item.value"
                :value="item.label">
              </el-option>
            </el-select>
          </div>
        </li>
        <li class="clearfix">
          <div>位置说明</div>
          <div>
            <el-input v-model="posMsg" placeholder="请输入内容"></el-input>
          </div>
        </li>
        <li class="clearfix">
          <div>图片地址</div>
          <imgupload @SendToImgUrl="receptImg" :imgUrlFileList="fileList"></imgupload>
          <div>
            <i class="el-icon-information"></i>
          </div>
          <div class="tips-exp">
            <p> <strong>PC：</strong>位置-学习中心尺寸为150*30px，其余位置为104*82px的尺寸</p>
            <p><strong>Android：</strong>头部1、2、3、4位置的都为202*120px，焦点圈数据为358*78px的尺寸，定子链、转子链、粒子链、象翌书院的尺寸为146*144的尺寸，时空圈的尺寸为672*120,汇能器、聚能器、赋能器三个位置尺寸都为185*185</p>
            <p><strong>IOS：</strong>头部1、2、3、4位置的都为232*138px，焦点圈数据为409*88px的尺寸，定子链、转子链、粒子链、象翌书院的尺寸为146*144的尺寸，时空圈的尺寸为772*140,汇能器、聚能器、赋能器三个位置尺寸都为212*212</p>
          </div>
        </li>
        <li class="clearfix">
          <div>图片名称</div>
          <div>
            <el-input v-model="picName" placeholder="请输入图片名称"></el-input>
          </div>
        </li>
        <li class="clearfix">
          <div>Url地址</div>
          <div class="url">
            <el-input v-model="Url" placeholder="请输入链接地址" @keyup.native="urlKeyUp"></el-input>
          </div>
          <div class="urlSelect">
            <el-switch
              v-model="UrlBtn"
              on-color="#13ce66"
              off-color="#ff4949"
              on-text=""
              off-text="">
            </el-switch>
            <span>{{UrlBtnText}}</span>
          </div>
        </li>
        <li class="clearfix">
        <div>相关参数</div>
        <div>
          <el-input v-model="params" placeholder="请输入参数信息" @focus="checkParam"></el-input>
        </div>
      </li>
        <li class="clearfix" v-if="ifAjax">
          <div>接口配置</div>
          <div>
            <el-input v-model="ajaxUrl" placeholder="请输入相关接口地址"></el-input>
          </div>
        </li>
        <!--<li class="clearfix">-->
          <!--<div>用户权限</div>-->
          <!--<div>-->
            <!--<el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>-->
            <!--<div style="margin: 15px 0;"></div>-->
            <!--<el-checkbox-group v-model="userAuth" @change="handleCheckedCitiesChange">-->
              <!--<el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>-->
            <!--</el-checkbox-group>-->
          <!--</div>-->
          <!--<div>-->
            <!--<i class="el-icon-information"></i>-->
          <!--</div>-->
          <!--<div class="tips-exp">-->
            <!--<p> <strong>Tips：</strong>选择后表示有权限打开该Url链接，不选择表示无权限打开Url链接</p>-->

          <!--</div>-->
        <!--</li>-->
      </ul>
      <div class="block">
        <span class="wrapper">
          <el-button type="success" @click="configConfirm">确定</el-button>
          <el-button type="info" @click="cancel">取消</el-button>
        </span>
      </div>
    </div>
</template>
<script>
    import Connect from '../../state/VueConnect'
    import configheader from '../common/configHeader.vue'
    import imgupload from '../common/imgUpload.vue'

    export default {
        data()
    {
        return {
          UrlBtn:true,
//          checkAll: true,
//          userAuth: [],
//          cities: ['BUSER','CUSER'],
//          isIndeterminate: true,
          UrlBtnText:this.UrlBtn?'有链接':'无链接',
          ajaxUrl:'',
          ifAjax:false,
          hasChildRenCompany:false,
          selectedOptionscascader:[],
          ChildRenCompany:{},
          ChildRenCompanyItem:[],
          optionscascader:[],
          props: {
            value: 'value',
            children: 'children'
          },
          version:'',
          compID:'',
          compOption:[],
          input:'',
          envMsg: '',
          ifActive:'',
          picID:'',
          envID:null,
          posID:'',
          posMsg:'',
          picName:'',
          Url:'',
          params:'',
          btnIconDir:'',
          optionIDcode:null,
          imgUrl:'',
          //给上传图片默认值--编辑使用
          fileList: '',
          optionID:[],
//          optionPcID:this.optionPc,
          options: this.envOption,
          options2: [{
            value: '1',
            label: '是'
          }, {
            value: '0',
            label: '否'
          }],
        }
    }
    ,
    created()
    {
      const that = this;
      if(this.UrlBtn){
        this.UrlBtnText = '有链接';
        this.Url = '';
      }else{
        this.UrlBtnText = '无链接';
        this.Url = 'Empty';
      }
      this.$notify.info({
        title: '消息',
        message: `选择位置时请先选择环境;图片可以拖拽上传`
      });

      that.version = Connect.version?Connect.version:'';
      if(that.$store.getters.user.grade==1){
        this.selectedOptionscascader = {
          compCode:that.$store.getters.user.company.comp_code,
          compId:that.$store.getters.user.company.id,
          compName:that.$store.getters.user.company.comp_name
        };
        that.optionscascader[0] = this.selectedOptionscascader;
        if(that.selectedOptionscascader.compId){
            console.log('subcpm11111');
          that.$Ajax
            .post(that.Host+'/sevenStarController/getAllSubCompany',{
              compId:that.selectedOptionscascader.compId
            })
            .then(function (response) {
              console.log(response.data,1111111);
              if(response.data.code==1&&response.data.data.length!=0){
                that.hasChildRenCompany = true;
                that.ChildRenCompanyItem = response.data.data;
              }else {
                that.hasChildRenCompany = false;
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      }else if(that.$store.getters.user.grade==0){
        that.$Ajax
          .post(that.Host+'/sevenStarController/getAllCompany',{})
          .then(function (res) {
            console.log(res.data);
            that.optionscascader = res.data.data;
          })
          .catch(function (error) {
            console.log(error);
          });
      }

    }
    ,
    methods: {
//      handleCheckAllChange(event) {
//        this.userAuth = event.target.checked ? this.cities : [];
//        this.isIndeterminate = false;
//      },
//      handleCheckedCitiesChange(value) {
//        let checkedCount = value.length;
//        this.checkAll = checkedCount === this.cities.length;
//        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
//      },
      checkParam(){
        this.$notify.info({
          title: '消息',
          message: '参数列表需以空格隔开，第一个为数量，无单位，第二个为数字，第三个为百分比数字'
        });
      },
      bbb(){
          console.log(this.userAuth);
      },
      selectEnvMsg(key){
          console.log(key);
        if(key.indexOf('PC')>-1){
          this.optionID = this.optionPc
        }else{
          this.optionID = this.optionApp
        }
      },
      handleChangeCascader(key){
          this.$notify.info({
            title: '消息',
            message: '该公司配置添加可以只是一级集团企业，也可以是集团企业下的子公司'
          });
          const that = this;
//          that.$nextTick(()=>{
            that.$Ajax
              .post(that.Host+'/sevenStarController/getAllSubCompany',{
                  compId:key.compId
              })
              .then(function (response) {
                console.log(response.data,1111111);
                if(response.data.code==1&&response.data.data.length!=0){
                    that.hasChildRenCompany = true;
                    that.ChildRenCompanyItem = response.data.data;
                }else {
                    that.hasChildRenCompany = false;
                }
              })
              .catch(function (error) {
                console.log(error);
              });
//          })
      },
      selectComp(key){
          console.log(this.compID,key);
      },
      selectPositionID(key,callBack){
        let that = this;
          if(!that.selectedOptionscascader.compId){
            that.$message({
                message: '请先选择企业信息',
                type: 'warning',
                duration:that.$duration,
                showClose:true,
                onClose: function () {
                  that.envID = null;
                }
              });
          }
          else if(!that.version){
            that.$message({
              message: '请先填入版本',
              type: 'warning',
              duration:that.$duration,
              showClose:true,
              onClose: function () {
                that.envID = null;
              }
            });
          }
          else if(!that.envMsg){
          that.$message({
            message: '请先选择环境信息',
            type: 'warning',
            duration:that.$duration,
            showClose:true,
            onClose: function () {
              that.envID = null;
            }
          });
        }
          else{

            if(that.envMsg.indexOf('PC') > -1 && key<=3){
                that.ifAjax = true;
            }else if(that.envMsg.indexOf('PC') <= -1 &&　key==14){
              that.ifAjax = true;
            }else {
              that.ifAjax = false;
            }
            var params;
            if(that.ChildRenCompany.compCode){
              params = {
                appEnvName: that.envMsg,
                btnPosId: that.envID,
                compId:that.selectedOptionscascader.compId,
                subCompCode:that.ChildRenCompany.compCode,
                isActived:that.ifActive,
                version:that.version.trim()
              }
            }else {
              params = {
                appEnvName: that.envMsg,
                btnPosId: that.envID,
                compId:that.selectedOptionscascader.compId,
                isActived:that.ifActive,
                version:that.version.trim()
              }
            }
            this.$Ajax
                .post(this.Host+'/appController/isAppPosExist',params)
                .then(function (response) {
                  console.log(response.data,654567);
                  that.optionIDcode = response.data.code;
                  if(response.data.code==0){
                    that.$message({
                      message: response.data.msg,
                      type: 'warning',
                      duration:that.$duration,
                      showClose:true,
                    });
                  }else {
                    callBack && callBack();
                  }

            })
                .catch(function (error) {
                  console.log(error);
            });
        };
      },
      receptImg(res){
//          console.log(res,'接收到孩子穿回来的图片啦');
          this.imgUrl = res;
      },
      configConfirm(){
          const that = this;
          if(!this.selectedOptionscascader.compId){
            this.$message({
              message: '请先选择企业信息',
              type: 'warning',
              duration:that.$duration,
            });
            return;
          }
          else if(!that.version){
            this.$message({
              message: '请先输入版本号',
              type: 'warning',
              duration:that.$duration,
            });
            return;

          }
          else if(!that.envMsg){
            this.$message({
              message: '请先选择环境信息',
              type: 'warning',
              duration:that.$duration,
            });
            return;

          }
          else if(!that.ifActive){
            this.$message({
              message: '请先选择是否激活状态',
              type: 'warning',
              duration:that.$duration,
            });
            return;

          }
          else if(!that.optionIDcode){
            this.$message({
              message: '请先选择环境位置或该位置已被占用',
              type: 'warning',
              duration:that.$duration,
            });
            return;
          }
          else if(!that.envID){
            this.$message({
              message: '请先选择环境位置',
              type: 'warning',
              duration:that.$duration,
            });
            return;
          }
          else if(!that.imgUrl){
            this.$message({
              message: '请先上传图片',
              type: 'warning',
              duration:that.$duration,
            });
            return;
          }
          else if(!that.picName){
            this.$message({
              message: '请先填入图表名称',
              type: 'warning',
              duration:that.$duration,
            });
            return;
          }
          else if(!that.Url && this.UrlBtn){
            this.$message({
              message: '请先填入链接地址',
              type: 'warning',
              duration:that.$duration,
            });
            return;
          }
//          else if((that.envMsg.indexOf('PC') > -1 && that.envID<=3) || (that.envMsg.indexOf('PC') <= -1 &&　that.envID==14)){
//              if(!that.ajaxUrl.trim()){
//                this.$message({
//                  message: '请先填入接口地址',
//                  type: 'warning',
//                  duration:that.$duration,
//                });
//                return;
//              }
//          }
        let paramsObj = {
          appVersion:that.version,
          appEnvName: that.envMsg,
          btnPosId: that.envID,
          compId:that.selectedOptionscascader.compId,
          compCode:that.selectedOptionscascader.compCode,
          isActived:that.ifActive,
          btnPosDes:that.posMsg.trim(),
          btnIconDir:that.imgUrl,
          btnIconName:that.picName,
          redirUrl:that.UrlBtn?that.Url.trim():'Empty',
          otherParam:that.params.trim(),
//          userAuth:JSON.stringify(that.userAuth)
        };
          if(that.ChildRenCompany.compCode){
            paramsObj["subCompCode"] = that.ChildRenCompany.compCode;
            paramsObj["subCompName"] = that.ChildRenCompany.compName;
          };
          if((that.envMsg.indexOf('PC') > -1 && that.envID<=3) || (that.envMsg.indexOf('PC') <= -1 &&　that.envID==14)){
            paramsObj["ajaxUrl"] = that.ajaxUrl.trim();
          };
        this.selectPositionID(that.envID,()=>{
          this.$Ajax
            .post(this.Host+'/appController/addApplication', paramsObj)
            .then(function (response) {
              console.log(response.data);
              that.$message({
                message: response.data.msg,
                type: response.data.code==0?'warning':'success',
                duration:that.$duration,
                showClose:true,
                onClose: function () {
                  if(response.data.code==1){
                    //在成功的时候把版本号信息保留下来；
                    Connect.version = that.version;
                    //这里有 push  和  replace
                    //  push 室友记录历史的，可配合前进后退使用，而replace是直接跳到该路由，是直接替换，不会产生历史；比如授权页；
                    that.$router.push({
                      path:'/configlist'
                    });
                  }
                }
              });
            })
            .catch(function (error) {
              console.log(error);
            });
        });

      },
      cancel(){
        this.$router.push({
          path:'/configlist'
        });
      },
      urlKeyUp(){
          console.log(this.Url);
          if(!this.Url.trim()){
              this.UrlBtn = false;
          }
          else if(this.Url.trim().toUpperCase()=='EMPTY'){
            this.UrlBtn = false;
          }
          else {
            this.UrlBtn = true;
          }
      },
      goCopy(){
          console.log('copy');
          this.$router.push('/indexCopy');
      }
    },components:{
      configheader,
      imgupload,
    },
      watch:{
//            'envMsg':{
//                handler(newValue,oldValue){
//                    console.log(newValue,oldValue);
//                    if(newValue.indexOf('PC')>-1){
//                      this.optionID = this.optionPc
//                    }else{
//                      this.optionID = this.optionApp
//                    }
//                }
//            }
              'UrlBtn':{
                  handler(newValue,oldValue){
                      console.log(newValue,oldValue);
                      if(newValue){
                          this.UrlBtnText = '有链接';
                          this.Url = '';
                      }else{
                        this.UrlBtnText = '无链接';
                        this.Url = 'Empty';
                      }
                  }
              }
      }
    }
</script>
<style lang="scss" scoped>
  .h {
    position: relative;
    .configAddHeader {
      text-align: left;
      margin-left: 10px;
      margin-bottom: 10px;
    }
    .index-copy {
      position: absolute;
      left: 200px;
      top: 0;
    }
  }

  .configAdd {
    li {
      padding:10px;
      > div {
          float: left;
          padding-left: 10px;
          line-height: 36px;

      }
      .url {
        width: 300px;
      }
      .urlSelect {
        text-align: left;
      }
      .tips-exp {
        width: 600px !important;
        >p {
          text-align: left;
          border-bottom: 1px solid silver;

        }
      }
      .el-icon-information:before {
        content: "\E615";
        color: skyblue;
        font-size: 16px;
      }
      > div:first-of-type {
          min-width: 100px;
          text-align: right;
        padding-left: 30px;
        margin-right: 15px;
        font-size: 14px;
      }
      > div:last-of-type {
        width: 300px;
        > div {
          width: 100%;
        }
        >span {
          width: 100%;
        }
      }
    }
  }
  .block {
    text-align: left;
    margin-left: 40px;
    margin-top: 10px;
  }
</style>
