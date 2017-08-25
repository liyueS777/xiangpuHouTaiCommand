<template>
    <div>
      <configheader title="编辑配置"></configheader>
      <ul class="configAdd">
        <li class="clearfix">
          <div>企业编码</div>
          <div>
            <el-input v-model="compNameSubComp" placeholder="请输入企业信息" disabled></el-input>
          </div>
        </li>
        <li class="clearfix">
          <div>环境信息</div>
          <div>
            <el-select v-model="envMsg" placeholder="请选择环境信息" disabled>
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item">
              </el-option>
            </el-select>
          </div>
        </li>
        <li class="clearfix">
          <div>是否显示</div>
          <div>
            <el-select v-model="ifActive" placeholder="请选择是否激活" @change="selectActive">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item">
              </el-option>
            </el-select>
          </div>
        </li>
        <li class="clearfix">
          <div>位置ID</div>
          <div>
            <el-select v-model="posID" placeholder="请选择位置" disabled>
              <el-option
                v-for="item in optionID"
                :key="item.value"
                :label="item.value"
                :value="item">
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
          <imgupload @SendToImgUrl="editImg" :imgUrlFileList="fileList" @EmptyImgUrl="emptyImgUrl"></imgupload>
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
            <el-input v-model="linkUrl" placeholder="请输入链接地址" @keyup.native="urlKeyUp"></el-input>
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
            <!--<br>-->
            <!--<span>选择 无链接 默认会传输数据 Empty</span>-->
          </div>
        </li>
        <li class="clearfix" v-if="ifAjax">
          <div>接口地址</div>
          <div>
            <el-input v-model="ajaxUrl" placeholder="请输入相关接口地址"></el-input>
          </div>
        </li>
        <li class="clearfix">
        <div>相关参数</div>
        <div>
          <el-input v-model="params" placeholder="请输入参数信息"></el-input>
        </div>
      </li>
        <!--<li class="clearfix">-->
          <!--<div>用户权限</div>-->
          <!--<div>-->
            <!--&lt;!&ndash;<el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>&ndash;&gt;-->
            <!--&lt;!&ndash;<div style="margin: 15px 0;"></div>&ndash;&gt;-->
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
          <el-button type="success" @click="EditSuccess">确定</el-button>
          <el-button type="info" @click="editCancel">取消</el-button>
        </span>
      </div>
    </div>
</template>
<script>
  import configheader from '../common/configHeader.vue'
  import imgupload from '../common/imgUpload.vue'
  export default {
        components:{
          configheader,
          imgupload
        },
        data()
    {
        return {
//          checkAll: true,
//          userAuth: [],
//          cities: ['BUSER','CUSER'],
//          isIndeterminate: true,
          UrlBtnText:this.UrlBtn?'有链接':'无链接',
          UrlBtn:true,
          ifAjax:false,
          compNameSubComp:'',
          EditQuery:{},
          compID:'',
          compOption:[],
          input:'',
          envMsg: {},
          ifActive:{},
          picID:'',
          posID:{},
          posMsg:'',
          picName:'',
          Url:'',
          linkUrl:'',
          params:'',
          fileList: '',
          optionID:this.optionApp,
          optionPcID:this.optionPc,
          options: this.envOption,
          options2: [{
            value: '1',
            label: '是'
          }, {
            value: '0',
            label: '否'
          }],
          CurrentEditCompObj:{},
          CurrentEditEnvObj:{},
          CurrentEditActiveObj:{},
          CurrentEditPosIDObj:{}
        }
    }
    ,
    created()
    {
      this.init(this.configEditItem);
    }
    ,
    watch:{
       configEditItem:{
         handler(newItem,oldItem) {
               this.init(newItem);
         },
         deep:true
       },
        'envMsg':{
           handler(newEnv,oldEnv){
             if(newEnv.value.indexOf('PC')>-1){
               this.$nextTick(()=>{
                 this.optionID = this.optionPc;
               })
             }else{
               this.$nextTick(()=>{
                 this.optionID = this.optionApp;
               })
             }
           },
          deep:true
        },
        'UrlBtn':{
          handler(newValue,oldValue){
            if(newValue){
              this.UrlBtnText = '有链接';
              this.linkUrl = this.EditQuery.redirUrl;

            }else{
              this.UrlBtnText = '无链接';
              this.linkUrl = 'Empty';
            }
          }
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
      emptyImgUrl(){
          console.log('清除啦');
          this.Url = '';
      },
      init(paramsItem){
        const that = this;
        if((paramsItem.appEnvName.indexOf('PC') > -1 && paramsItem.btnPosId<=3) || (paramsItem.appEnvName.indexOf('PC') <= -1 &&　paramsItem.btnPosId==14)){
          that.ifAjax = true;
          that.ajaxUrl = paramsItem.ajaxUrl;
        }else {
          that.ifAjax = false;
        }
        this.EditQuery = paramsItem;
//        this.userAuth = this.EditQuery.userAuth==null?[]:this.EditQuery.userAuth;
//        if(paramsItem.userAuth.length == this.cities.length){
//            console.log('ccccs');
//          this.checkAll = true;
//        }
        this.fileList = this.Host+'/'+this.EditQuery.btnIconDir+'?'+ +new Date();
        this.posMsg = this.EditQuery.btnPosDes;
        this.Url = this.EditQuery.btnIconDir;
        this.picName = this.EditQuery.btnIconName;
        this.linkUrl = this.EditQuery.redirUrl;
        if(this.EditQuery.redirUrl=='Empty'){
            this.UrlBtn = false;
            this.UrlBtnText = '无链接';

        }else {
          this.UrlBtn = true;
          this.UrlBtnText = '有链接';
        }
        this.params = this.EditQuery.otherParam;
        if(this.EditQuery.appEnvName.indexOf('PC')>-1){
          this.optionID = this.optionPc
        }else {
          this.optionID = this.optionApp
        }
        //找出与选中结果一样的选项；
        this.CurrentEditEnvObj = this.options.find((value,index,arr) => {
          return value.value ==this.EditQuery.appEnvName;
        });
        this.CurrentEditActiveObj = this.options2.find((value,index,arr) => {
          return value.value ==this.EditQuery.isActived;
        });
        this.CurrentEditPosIDObj = this.optionID.find((value,index,arr) => {
          return value.label ==this.EditQuery.btnPosId;
        });
        this.posID = this.CurrentEditPosIDObj;
        this.envMsg = this.CurrentEditEnvObj;
        this.ifActive = this.CurrentEditActiveObj;
        if(this.EditQuery.subCompName){
          this.compNameSubComp = this.EditQuery.compCode+' / '+this.EditQuery.subCompName;
        }else {
          this.compNameSubComp = this.EditQuery.compCode;
        }
            },
      selectActive(key){
//          console.log(key);
//          console.log(this.ifActive);
      },
      selectComp(key){
//        console.log(this.compID,key);
      },
      editImg(res){
//          console.log(res);
          this.Url = res;
      },
      EditSuccess(){
        const that = this;

        if(!this.Url){
          that.$message({
            message: '图片数据不能为空',
            type: 'warning',
            duration:that.$duration,
            showClose:true,
          });
          return;
        };
        if(!this.linkUrl.trim() && that.UrlBtn){
          that.$message({
            message: '链接地址不能为空',
            type: 'warning',
            duration:that.$duration,
            showClose:true,
          });
          return;
        };
        if(this.linkUrl.trim() && that.UrlBtn && this.linkUrl == 'Empty'){
          that.$message({
            message: '链接地址不能为 Empty ',
            type: 'warning',
            duration:that.$duration,
            showClose:true,
          });
          this.linkUrl = '';
          return;
        };
        let paramsObj = {
          id:that.EditQuery.id,
          appEnvName:that.envMsg.value,
          isActived:that.ifActive.value,
          btnPosId:that.posID.label,
          btnPosDes:that.posMsg,
          btnIconDir:that.Url.trim(),
          btnIconName:that.picName,
          redirUrl:this.UrlBtn?that.linkUrl.trim():'Empty',
          otherParam:that.params.trim(),
          compId:that.EditQuery.compId,
//          userAuth:JSON.stringify(that.userAuth)
        };
        if(that.EditQuery.subCompCode){
          paramsObj["subCompName"] = that.EditQuery.subCompName
        }
        if((that.EditQuery.appEnvName.indexOf('PC') > -1 && that.EditQuery.btnPosId<=3) || (that.EditQuery.appEnvName.indexOf('PC') <= -1 &&　that.EditQuery.btnPosId==14)){
            if(that.ajaxUrl==null){
              that.ajaxUrl = '';
            }
            paramsObj["ajaxUrl"] = that.ajaxUrl.trim();
        };
        that.$Ajax
          .post(that.Host+'/appController/updateApplication',paramsObj)
          .then(function (res) {
//            console.log(res.data);
            that.$message({
              message: res.data.msg,
              type: res.data.code==0?'warning':'success',
              duration:that.$duration,
              showClose:true,
              onClose: function () {
                if(res.data.code==1){
                  that.$emit('configEditSuccess',{code:1});
                }
              }
            });


          })
          .catch(function (error) {
            console.log(error);
          });
      },
      editCancel(){
        this.$emit('configEditSuccess',{code:0});

      },
      urlKeyUp(){
        console.log(this.linkUrl);
        if(this.linkUrl.trim().toUpperCase()=='EMPTY'){
          this.UrlBtn = false;
        }else {
          this.UrlBtn = true;
        }
      }
    },props:['configEditItem']
    }
</script>
<style lang="scss" scoped>
  .configAddHeader {
    text-align: left;
    margin-left: 10px;
    margin-bottom: 10px;
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

      > div:first-of-type {
        min-width: 100px;
        text-align: left;
        padding-left: 30px;
      }
      > div:last-of-type {
        width: 300px;
        > div {
          width: 100%;
        }
        > span {
          width: 100%;
        }
      }
      >.urlSelect {
        text-align: left;
        width: 200px !important;
      }
    }
  }
  .block {
    text-align: left;
    margin-left: 40px;
    margin-top: 10px;
  }
</style>
