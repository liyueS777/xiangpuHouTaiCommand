<template>
  <div>
    <configheader title="添加配置"></configheader>
    <ul class="configAdd">
      <li class="clearfix">
        <div>集团名称</div>
        <div>
          <el-select v-model="compID" placeholder="请选择集团名称" @change="selectCompMsg">
            <el-option
              v-for="item in compOption"
              :key="item.compId"
              :label="item.compName"
              :value="item">
            </el-option>
          </el-select>
        </div>
      </li>
      <li class="clearfix">
        <div>产业轴</div>
        <div>
          <el-select v-model="IndustryAxis" placeholder="请选择产业轴">
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
        <div>环境信息</div>
        <div>
          <el-select v-model="envMsg" placeholder="请选择环境信息" :disabled="EnvDisabled" @change="selectEnv">
            <el-option
              v-for="item in envOption"
              :key="item.value"
              :label="item.label"
              :value="item">
            </el-option>
          </el-select>
        </div>
      </li>
      <li class="clearfix">
        <div>类型</div>
        <div>
          <el-select v-model="pattern" placeholder="请选择类型" @change="selectPattern">
            <el-option
              v-for="item in patternOption"
              :key="item.value"
              :label="item.label"
              :value="item">
            </el-option>
          </el-select>
        </div>
      </li>
      <li class="clearfix">
        <div>版本信息</div>
        <div>
          <el-input v-model="version" placeholder="请输入对应版本" @focus='versionFocus' :disabled="VersionDisabled"></el-input>
        </div>
      </li>
      <li class="clearfix">
        <div>位置顺序</div>
        <div>
          <el-input-number v-model="intialNum" @change="selectPositionID" :min="1"></el-input-number>
        </div>
      </li>
      <li class="clearfix" v-if="noCompany">
        <div>标题</div>
        <div>
          <el-input v-model="titleMsg" placeholder="请输入标题名称" @focus="urlFocus" :disabled="TitleDisabled"></el-input>
        </div>
      </li>
      <li class="clearfix" v-if="!noCompany">
        <div>子公司</div>
        <div>
          <!--<el-input v-model="Url" placeholder="请输入子公司编码" @focus="urlFocus" :disabled="UrlDisabled"></el-input>-->
          <el-select v-model="subComp" clearable placeholder="请选择子公司" :disabled="UrlDisabled">
            <el-option
              v-for="item in subCompOption"
              :key="item.compId"
              :label="item.compName"
              :value="item">
            </el-option>
          </el-select>
        </div>
      </li>


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
  import configheader from '../common/configHeader.vue'
  export default {
    data()
    {
      return {
        noCompany:true,
        subComp:{},
        subCompOption:[],
        pattern:{},
        PotionIdCode:null,
        IndustryAxis:{},
        PositionID:{},
        titleMsg:'',
        version:'',
        compID:{},
        compOption:{},
        patternOption:[
//          {
//            value:'URL',
//            label:'链接'
//          },
          {
            value:'Company',
            label:'公司'
          },
          {
            value:'Label',
            label:'标题'
          }
        ],
        envMsg: {},
        Url:'',
        intialNum:1,
        options: this.axisSeven,
        envOption:this.envOption,
        UrlDisabled:false,
        VersionDisabled:false,
        EnvDisabled:false,
        patternTilte:'名称',
        TitleDisabled:false
      }
    }
    ,
    created()
    {
      const that = this;
      if(that.$store.getters.user.grade==1){
        this.compID = {
          compCode:that.$store.getters.user.company.comp_code,
          compId:that.$store.getters.user.company.id,
          compName:that.$store.getters.user.company.comp_name
        };
        that.compOption[0] = this.compID;
      }else if(that.$store.getters.user.grade==0){
        that.$Ajax
          .post(that.Host+'/sevenStarController/getAllCompany',{})
          .then(function (response) {
            console.log(response.data);
            that.compOption = response.data.data;
          })
          .catch(function (error) {
            console.log(error);
        });
      }
    }
    ,
    methods: {
      selectComp(key){
//        console.log(this.compID,key);
      },
      selectCompMsg(key){
          if(this.pattern.value == 'Company'){
            this.$Ajax
              .post(this.Host+'/sevenStarController/getAllSubCompany',{
                compId:key.compId
              })
              .then((response) => {
                console.log(response.data);
                this.subCompOption = response.data.data;
                this.subComp = {};
              })
              .catch(function (error) {
                console.log(error);
              });
          }
      },
      selectPositionID(key,callback){
        const that = this;
        if(!this.compID.compCode){
          this.$message({
            message: '请先选择企业信息',
            type: 'warning',
            duration:this.$duration,
            onClose: function () {
              that.intialNum = 1;
            }
          })
        }
        else if(!this.IndustryAxis.value){
          this.$message({
            message: '请先选择产业轴位置',
            type: 'warning',
            duration:this.$duration,
            onClose: function () {
              that.intialNum = 1;
            }
          })
        }
        else if(!this.version){
          this.$message({
            message: '请先输入版本',
            type: 'warning',
            duration:this.$duration,
          });
          return;
        }
        else{
          this.$Ajax
            .post(this.Host+'/sevenStarController/isPosIdExist',{
              orgName:this.compID.compCode,
              posId:key,
              industryId:this.IndustryAxis.value,
              confType:this.pattern.value,
              env:this.envMsg.value,
              version:this.version
            })
            .then(response =>{
              if(response.data.code==0){
                that.$message({
                  message: response.data.msg,
                  type: response.data.code==0?'warning':'success',
                  duration:that.$duration,
                });
                that.PotionIdCode=0;
              }
              else{
                that.PotionIdCode=1;
                callback &&　callback();
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      },
      selectPattern(key){
//          console.log(key);
          if(key.value=='URL'){
            this.UrlDisabled = false;
            this.VersionDisabled = true;
            this.EnvDisabled = true;
          }else if(key.value=='Company'){
            this.UrlDisabled = false;
            this.VersionDisabled = false;
            this.EnvDisabled = false;
            this.noCompany = false;
            this.$Ajax
              .post(this.Host+'/sevenStarController/getAllSubCompany',{
                compId:this.compID.compId
              })
              .then((response) => {
                  console.log(response.data);
                  this.subCompOption = response.data.data;
              })
              .catch(function (error) {
                console.log(error);
              });
          }else if(key.value=='Label'){
            this.UrlDisabled = true;
            this.VersionDisabled = false;
            this.EnvDisabled = false;
            this.noCompany = true;
            this.TitleDisabled = false;
            //清空子公司的过程
            this.subComp = {};
            this.subCompOption = []
          }
      },
      urlFocus(){
        const that = this;
        if(!that.pattern.value){
          this.$message({
            message: '请先选择类型',
            type: 'warning',
            duration:1000,
            onClose: function () {
                that.TitleDisabled = true;
                that.titleMsg = '';
            }
          })
        }
      },
      versionFocus(){
        const that = this;
        if(!that.pattern.value){
          this.$message({
            message: '请先选择类型',
            type: 'warning',
            duration:1000,
            onClose: function () {
              that.version = '';
              that.VersionDisabled = true;
            }
          })
        }
      },
      selectEnv(){
//        const that = this;
//        if(!that.pattern.value){
//          this.$message({
//            message: '请先选择类型',
//            type: 'warning',
//            duration:1000,
//            onClose: function () {
//              that.envMsg = null;
//              that.EnvDisabled = true;
//            }
//          });
//        }
      },
      configConfirm(){
        const that = this;
        if(!this.compID.compName){
          this.$message({
            message: '请先选择集团信息',
            type: 'warning',
            duration:that.$duration,
          });
          return;
        }
        else if(!that.IndustryAxis.value){
          this.$message({
            message: '请先输入产业轴ID',
            type: 'warning',
            duration:that.$duration,
          });
          return;

        }
        else if(!that.pattern.value){
          this.$message({
            message: '请先选择类型',
            type: 'warning',
            duration:that.$duration,
          });
          return;
        }
        else if(that.pattern.value=='Label' &&!that.titleMsg ){
          this.$message({
            message: '请先填入标题',
            type: 'warning',
            duration:that.$duration,
          });
          return;
        }
        else if(that.pattern.value=='Company' && !that.subComp.compName){
          this.$message({
            message: '请先选择子公司',
            type: 'warning',
            duration:that.$duration,
          });
          return;
        }
        else if(!that.version.trim()){
          this.$message({
            message: '请先填入版本',
            type: 'warning',
            duration:that.$duration,
          });
          return;
        }
        else if(that.titleMsg.length > 10){
          this.$message({
            message: '填入的名称过长，不能超过10位',
            type: 'warning',
            duration:that.$duration,
          });
          return;
        }
//        else if(that.PotionIdCode==0){
//          this.$message({
//            message: '请先选择位置顺序或位置被占用',
//            type: 'warning',
//            duration:that.$duration,
//          });
//          return;
//        }
        if(that.pattern.value=='Label'){
          this.$Ajax
            .post(this.Host+'/sevenStarController/isOnlyLabelExist',{
              orgName:this.compID.compCode,
              industryId:this.IndustryAxis.value,
              confType:this.pattern.value,
              env:this.envMsg.value,
              version:that.version
            })
            .then((response) => {
              console.log(response.data);
              if(response.data.code==0){
                this.$message({
                  message: response.data.msg,
                  type: 'warning',
                  duration:that.$duration,
                })
              }else{
                that.selectPositionID(that.intialNum,()=>{
                    that.getAddSevenSuccess()
                });
              }
            })
            .catch(function (error) {
              alert(error);
            });
        }else if (that.pattern.value=='Company'){
          that.selectPositionID(that.intialNum,()=>{
            that.getAddSevenSuccess();
          });
        }


      },
      getAddSevenSuccess(){
        const that = this;
        that.$Ajax
          .post(that.Host+'/sevenStarController/addSevenStar', {
            orgName:that.compID.compCode,
            industryId:that.IndustryAxis.value,
            posId:that.intialNum,
            popName:that.titleMsg,
            subCompName:that.pattern.value=='Company'?that.subComp.compName:'Default',
            confType:that.pattern.value,
            subCompCode:that.pattern.value=='Company'?that.subComp.compCode:'Default',
            version:that.version,
            env:that.envMsg.value,
          })
          .then(function (response) {
            that.$message({
              message:response.data.msg,
              type: response.data.code==0?'warning':'success',
              duration:that.$duration,
              onClose: function () {
                if(response.data.code==1){
                  console.log(response.data);
                  that.$router.push({
                    path:'/sevenStarList'
                  });
                }
              }
            })
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      cancel(){
        this.$router.push({
          path:'/sevenStarList'
        });
      }
    },components:{
      configheader,
    },
    watch:{

    }
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
      }
    }
  }
  .block {
    text-align: left;
    margin-left: 40px;
    margin-top: 10px;
  }
</style>
