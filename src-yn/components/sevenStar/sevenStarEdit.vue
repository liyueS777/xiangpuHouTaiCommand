<template>
  <div>
    <configheader :title="hasSubCop==false?'查看配置':'编辑配置'"></configheader>
    <ul class="configAdd">
      <li class="clearfix">
        <div>集团编码</div>
        <div>
          <el-input v-model="compID" placeholder="请输入公司编码" disabled></el-input>
        </div>
      </li>
      <li class="clearfix">
        <div>产业轴</div>
        <div>
          <el-input v-model="IndustryAxis.label" placeholder="请选择产业轴" disabled></el-input>
        </div>
      </li>
      <li class="clearfix">
        <div>位置顺序</div>
        <div>
          <el-input v-model="posId" placeholder="请选择位置顺序" disabled></el-input>
        </div>
      </li>
      <li class="clearfix">
        <div>类型</div>
        <div>
          <el-select v-model="pattern" placeholder="请选择类型" @change="selectPattern" disabled>
            <el-option
              v-for="item in patternOption"
              :key="item.value"
              :label="item.label"
              :value="item">
            </el-option>
          </el-select>
        </div>
      </li>
      <li class="clearfix" v-if="checkTitle">
        <div>标题</div>
        <div>
          <el-input v-model="titleMsg" placeholder="请输入名称"></el-input>
        </div>
      </li>
      <li class="clearfix" v-if="!checkTitle">
        <div>子公司信息</div>
        <div>
          <el-input v-model="code" placeholder="请输入公司信息" @focus="urlFocus" disabled></el-input>
        </div>
      </li>
      <li class="clearfix">
        <div>版本信息</div>
        <div>
          <!--<el-input v-model="version" placeholder="请输入对应版本" @focus='versionFocus' :disabled="VersionDisabled"></el-input>-->
          <el-input v-model="version" placeholder="请输入对应版本" @focus='versionFocus' disabled></el-input>
        </div>
      </li>
      <li class="clearfix">
        <div>环境信息</div>
        <div>
          <el-select v-model="envMsg" placeholder="请选择环境信息" disabled @change="selectEnv">
            <el-option
              v-for="item in envOption"
              :key="item.value"
              :label="item.label"
              :value="item">
            </el-option>
          </el-select>
        </div>
      </li>
    </ul>
    <div class="block">
        <span class="wrapper">
          <el-button type="success" @click="EditSuccess" v-if="hasSubCop">确定</el-button>
          <el-button type="info" @click="editCancel">{{subComp.compName?'确定':'取消'}}</el-button>
        </span>
    </div>
  </div>
</template>
<script>
  import configheader from '../common/configHeader.vue'
  export default {
    components:{
      configheader,
    },
    data()
    {
      return {
        checkTitle:false,
        hasSubCop:true,
        compID:'',
        IndustryAxis:{
            value:null,
            label:''
        },
        posId:'',
        titleMsg:'',
        pattern:{},
        patternOption:[
          {
            value:'Company',
            label:'公司'
          },{
            value:'Label',
            label:'标题'
          }
        ],
        code:'',
        subComp:{
          compName:'',
          compCode:''
        },
        version:'',
        envMsg:{},
        envOption:this.envOption,
        UrlDisabled:false,
        VersionDisabled:false,
        EnvDisabled:false,
//        patternTitle:'公司名称',
        repalcePosId:null,
        titleHeader:{
            name:"标题头部",
            type:false
        }
      }
    }
    ,
    created()
    {
      this.init(this.configEditItem);
    }
    ,
    watch:{
      'configEditItem':{
        handler(newItem,oldItem) {
          console.log(newItem,oldItem,13232);
          this.init(newItem);
        },
        deep:true
      },
    },
    methods: {
      init(paramsItem){
        const that = this;
        //先清空
        // 将 返回的 子公司信息清空，防止在进入的时候数据有误；
        that.subComp = {
          compCode:'',
          compName:''
        };
        that.titleMsg = '';
        let result = paramsItem;
        console.log(result,'bianji');
        that.compID = result.orgName;
        that.IndustryAxis = that.axisSeven.find((value)=>{
            return result.industryId==value.value
        });

        if(result.confType=='Company'){
          that.posId = result.posId;
          // 子公司名称 编码
          that.hasSubCop = false;
          that.subComp.compName =  result.subCompName;
          that.subComp.compCode =  result.subCompCode;
          that.code = result.subCompName + ' / ' + result.subCompCode;
          that.checkTitle = false;
        }else if(result.confType=='Label'){
          that.hasSubCop = true;
          that.repalcePosId = result.posId,
          that.posId = this.titleHeader.name;
          that.titleHeader.type=true;
          that.titleMsg = result.popName;
          that.checkTitle = true;
        }
        that.pattern = that.patternOption.find(function (value,index,arr) {
          return value.value==result.confType;
        });
//            if(that.pattern.value=='Company'){
//                that.patternTitle = '公司名称';
//            }else if(that.pattern.value=='Label'){
//              that.patternTitle = '标题';
//            }else if(that.pattern.value=='URL'){
//              that.patternTitle = '链接名称';
//            }
//            that.code = result.subCompCode;
        that.version = result.version;
        if(result.env){
          that.envMsg = that.envOption.find(function (value,index,arr) {
            return value.value==result.env;
          });
        }
      },
      selectPattern(key){
        if(key.value=='URL'){
          this.UrlDisabled = false;
          this.VersionDisabled = true;
          this.EnvDisabled = true;
        }else if(key.value=='Company'){
          this.UrlDisabled = false;
          this.VersionDisabled = false;
          this.EnvDisabled = false;
          this.patternTilte = '子公司名称'
        }else if(key.value=='Label'){
          this.UrlDisabled = true;
          this.VersionDisabled = true;
          this.EnvDisabled = true;
          this.patternTilte = '标题'
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
              that.code = '';
              that.UrlDisabled = true;
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
      EditSuccess(){
        const that = this;
        that.$Ajax
          .post(that.Host+'/sevenStarController/updateSevenStar',{
            orgName:that.compID,
            id:that.configEditItem.id,
            industryId:that.IndustryAxis.value,
            posId:that.titleHeader.type?that.repalcePosId:that.posId,
            popName:that.titleMsg,
            subCompName:that.subComp.compName,
            confType:that.pattern.value,
            //that.subComp.compName =  result.subCompName;
            //that.subComp.compCode =  result.subCompCode;
            subCompCode:that.subComp.compCode,
            version:that.version,
            env:that.envMsg.value,
          })
          .then(function (res) {
            console.log(res.data);
            that.$message({
              message: res.data.msg,
              type: res.data.code==0?'warning':'success',
              duration:1500,
              showClose:true,
              onClose: function () {
                if(res.data.code==1){
//                  that.$router.push({
//                    name:'configlist'
//                  });

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
//        this.$router.push({
//          name:'configlist'
//        });
      }
    },props:['configEditItem'],
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
        text-align: left;
        padding-left: 30px;
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
