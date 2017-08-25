<template>
    <div class="i-copy">
      <div class="prev">
        <!--<h2 v-html="'&gt;'"></h2>-->
        <span>原始配置信息信息： </span>
        <el-select v-model="compOption" placeholder="请选择企业" class="configSelect1" @change="selectCompany">
          <el-option
            v-for="(item,index) in optionComp"
            :key="index.compId"
            :label="item.compName"
            :value="item">
          </el-option>
        </el-select>
        <el-select v-model="ChildRenCompany" placeholder="请选择子公司信息" clearable>
          <el-option
            v-for="item in ChildRenCompanyItem"
            :key="item.compId"
            :label="item.compName"
            :value="item">
          </el-option>
        </el-select>
        <el-select v-model="version" placeholder="请选择版本" class="v-s">
          <el-option
            v-for="(item,index) in optionVersion"
            :key="item.index"
            :label="item.index"
            :value="item">
          </el-option>
        </el-select>
        <!--<el-input v-model="version" placeholder="请输入对应版本" class="v-s"></el-input>-->

        <el-select v-model="envMsg" placeholder="请选择环境" class="configSelect1" >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item">
          </el-option>
        </el-select>

        <el-select v-model="ifActive" placeholder="请选择激活状态" class="configSelect1">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="current">
        <span>生成配置信息信息： </span>
        <el-select v-model="CopycompOption" placeholder="请选择企业" class="configSelect1" @change="selectCopyCompany">
          <el-option
            v-for="(item,index) in optionComp"
            :key="index.compId"
            :label="item.compName"
            :value="item">
          </el-option>
        </el-select>

        <el-select v-model="CopyChildRenCompany" placeholder="请选择子公司信息" clearable>
          <el-option
            v-for="item in CopyChildRenCompanyItem"
            :key="item.compId"
            :label="item.compName"
            :value="item">
          </el-option>
        </el-select>

        <el-input v-model="Copyversion" placeholder="请输入对应版本" class="v-s"></el-input>

        <el-select v-model="CopyenvMsg" placeholder="请选择环境" class="configSelect1" >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item">
          </el-option>
        </el-select>

        <el-select v-model="CopyifActive" placeholder="请选择激活状态" class="configSelect1">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-button type="success" class="index-copy" @click.native="startCopy" >开始一键复制</el-button>
      </div>
      <div class="tips">
        <i class="el-icon-information"> 友情提示： </i>
        <ul>
          <li> 1、一键复制时 原配置的信息不会被更改，只是复制一份，生成的配置信息可修改，在保存之后才有效</li>
          <li> 2、一键复制时 对应的位置时固定的</li>
          <li> 3、原始配置信息有可能是小于13条信息，所以一键复制后缺少的信息请去配置添加项 单独进行添加信息</li>
          <li> 4、在生成配置信息 对应的数据库必须为空数据</li>
          <li> 5、在生成配置信息中的Url地址如果输入 empty 的字母字样，保存时会默认保存为 Empty</li>
        </ul>
      </div>
      <el-table
          max-height='600'
          v-loading.fullscreen.lock="fullscreenLoading"
          element-loading-text="正在复制中"
          :data="copyMsgItem"
          border
          :stripe='true'
          :empty-text="' '"
          :highlight-current-row='true'
          style="width: 100%">
          <el-table-column
            label="位置"
            >
            <template scope="scope">
              <el-tag>{{scope.row.btnPosId | convertPosition(replaceEnvMsg)}}</el-tag>
            </template>
          </el-table-column>
          <el-table-column
            label="位置说明"
            >
            <template scope="scope">
              <el-popover trigger="hover" placement="top">
              <p>{{ scope.row.btnPosDes }}</p>
              <div slot="reference" class="name-wrapper">
                <el-input v-model="scope.row.btnPosDes" placeholder="请输入位置名称"></el-input>
              </div>
              </el-popover>
              <!--<span>{{ scope.row.btnPosDes }}</span>-->
            </template>
          </el-table-column>
          <el-table-column
            label="图片地址"
            >
            <template scope="scope">

              <imgupload  class="index-copy" :imgUrlFileList="scope.row.btnIconDir?imgPre+scope.row.btnIconDir:''" @EmptyImgUrl="emptyImgUrl(scope.row.btnPosId)" @SendToImgUrl="receptImg(scope.row.btnPosId)"></imgupload>
            </template>
          </el-table-column>
          <el-table-column
            label="图片名称"
            >
            <template scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>{{ scope.row.btnIconName }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-input v-model="scope.row.btnIconName" placeholder="请输入图片名称"></el-input>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            label="Url地址"
            >
            <template scope="scope">
              <el-popover trigger="hover" placement="top">
              <p>{{ scope.row.redirUrl }}</p>
              <div slot="reference" class="name-wrapper">
                <el-input v-model="scope.row.redirUrl" placeholder="请输入Url地址"></el-input>
              </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            label="相关参数"
            >
            <template scope="scope">
              <el-popover trigger="hover" placement="top">
              <p>{{ scope.row.otherParam }}</p>
              <div slot="reference" class="name-wrapper">
                <el-input v-model="scope.row.otherParam" placeholder="请输入相关参数"></el-input>
              </div>
              </el-popover>

            </template>
          </el-table-column>

        </el-table>
      <div class="btn-on-off">
        <el-button type="info" @click.native="copySubmit">保存</el-button>
        <el-button @click.native="copyBack">取消</el-button>
      </div>
    </div>
</template>
<script>
  import imgupload from '../common/imgUpload.vue'
    export default {
      components: {
          imgupload
      },
      data() {
            return {
              Copyversion:'',
              CopycompOption:{},
              CopyChildRenCompany:{},
              CopyifActive:'',
              CopyChildRenCompanyItem:[],

              version:'',
              optionVersion:[],
              compOption:{},
              //d
              optionComp:[],
              ChildRenCompany:{},
              ChildRenCompanyItem:[],
              envMsg:{},
              CopyenvMsg:{},
              options: this.envOption,
              ifActive: '',
              options2: [
                {
                  value: '1',
                  label: '是'
                }, {
                  value: '0',
                  label: '否'
                }
              ],

              copyMsgItem:[],
              imgPre:this.Host+'/',
//              imgReplaceArr:[]
              fullscreenLoading: false
            }
        },
      created() {
            const that = this;
            that.$Ajax
              .post(that.Host+'/appController/getAllVersion',{})
              .then(function (res) {
    //                console.log(res.data);
                that.optionVersion = res.data.data;
              })
              .catch(function (error) {
                console.log(error);
              });
            //判断管理员级别
           // 1代表集团公司 0 代表超级管理员
          if(that.$store.getters.user.grade==0){
            that.$Ajax
              .post(that.Host+'/sevenStarController/getAllCompany',{})
              .then(function (res) {
//                console.log(res.data);
                that.optionComp = res.data.data;
              })
              .catch(function (error) {
                console.log(error);
              });
          }else if(that.$store.getters.user.grade==1){
            that.optionComp[0] = {
              compCode:that.$store.getters.user.company.comp_code,
              compId:that.$store.getters.user.company.id,
              compName:that.$store.getters.user.company.comp_name
            };
          }

        },
      methods: {
            selectCompany(key){
              const that = this;
              that.ChildRenCompany = {};
              that.$Ajax
                .post(that.Host+'/sevenStarController/getAllSubCompany',{
                  compId:key.compId
                })
                .then(function (response) {
                  console.log(response.data,1111111);
                  if(response.data.code==1){
                    that.ChildRenCompanyItem = response.data.data;
                  }
                })
                .catch(function (error) {
                  console.log(error);
                });
            },
            selectCopyCompany(key){
              const that = this;
              that.CopyChildRenCompany = {};

              that.$Ajax
                .post(that.Host+'/sevenStarController/getAllSubCompany',{
                  compId:key.compId
                })
                .then(function (response) {
                  console.log(response.data,1111111);
                  if(response.data.code==1){
                    that.CopyChildRenCompanyItem = response.data.data;
                  }
                })
                .catch(function (error) {
                  console.log(error);
                });
            },
            startCopy(){
              const that = this;
              if(!this.compOption.compId){
                this.$message({
                  message: '请先选择原始配置企业信息',
                  type: 'warning',
                  duration:that.$duration,
                });
                return;
              }
              else if(!that.version.trim()){
                this.$message({
                  message: '请先输入原始配置版本号',
                  type: 'warning',
                  duration:that.$duration,
                });
                return;

              }
              else if(!that.envMsg.value){
                this.$message({
                  message: '请先选择原始配置环境信息',
                  type: 'warning',
                  duration:that.$duration,
                });
                return;

              }
              else if(!that.ifActive){
                this.$message({
                  message: '请先选择原始配置是否激活状态',
                  type: 'warning',
                  duration:that.$duration,
                });
                return;

              }


              if(!this.CopycompOption.compId){
                this.$message({
                  message: '请先选择生成配置企业信息',
                  type: 'warning',
                  duration:that.$duration,
                });
                return;
              }
              else if(!that.Copyversion.trim()){
                this.$message({
                  message: '请先输入生成配置版本号',
                  type: 'warning',
                  duration:that.$duration,
                });
                return;

              }
              else if(!that.CopyenvMsg.value){
                this.$message({
                  message: '请先选择生成配置环境信息',
                  type: 'warning',
                  duration:that.$duration,
                });
                return;

              }
              else if(!that.CopyifActive){
                this.$message({
                  message: '请先选择生成配置是否激活状态',
                  type: 'warning',
                  duration:that.$duration,
                });
                return;
              }
              // 复制信息时，环境要一致，PC 与Pad； IOS与Android

              let envPrev = that.envMsg.value.slice(0,that.envMsg.value.length-1);
              let envCopy = that.CopyenvMsg.value.slice(0,that.CopyenvMsg.value.length-1);
              console.log(envPrev,envCopy,'copyyyyyyy');
              if( ((envPrev == 'PC' || envPrev=='Pad') && (envCopy == 'Pad' || envCopy=='PC')) || ((envPrev == 'Android' || envPrev=='IOS') && (envCopy == 'IOS' || envCopy=='Android')) ) {

              }else {
                this.$message({
                  message: '环境信息不匹配，只能是 PC 与 Pad或者PC；以及IOS与Android或者IOS',
                  type: 'warning',
                  duration:that.$duration,
                });
                this.copyMsgItem = [];
                return;
              }
              that.fullscreenLoading = true;
              //原始信息
              let paramsPrev = {
                compId:that.compOption.compId,
//                subCompCode:that.ChildRenCompany.compCode,
                appVersion:that.version,
                appEnvName:that.envMsg.value,
                isActived:that.ifActive,
                pageIndex:1,
                pageSize:30
              };
              if(that.ChildRenCompany&&that.ChildRenCompany.compCode){
                paramsPrev['subCompCode'] = that.ChildRenCompany.compCode
              }
              //  生成信息
              let paramsCopy = {
                compId:that.CopycompOption.compId,
//                subCompCode:that.CopyChildRenCompany.compCode,
                appVersion:that.Copyversion,
                appEnvName:that.CopyenvMsg.value,
                isActived:that.CopyifActive,
                pageIndex:1,
                pageSize:30
              };
              if(that.CopyChildRenCompany&&that.CopyChildRenCompany.compCode){
                paramsCopy['subCompCode'] = that.CopyChildRenCompany.compCode
              };
              that.$Ajax.all([that.$Ajax.post(that.Host+'/appController/queryPageApplication',paramsPrev), that.$Ajax.post(that.Host+'/appController/queryPageApplication',paramsCopy)])
                .then(that.$Ajax.spread(function (resPrev, resCopy) {
                    if(resPrev.data.code==0){
                      that.$message({
                        message: resPrev.data.msg,
                        type: 'warning',
                        duration:that.$duration,
                      });
                      setTimeout(()=>{
                        that.fullscreenLoading = false;
                      },1000)
                      return;
                    }
                    if(resCopy.data.data&&resCopy.data.data.list.length!=0){
                      that.$message({
                        message: '生成配置信息已有配置信息，请去配置列表查看',
                        type: 'warning',
                        duration:that.$duration,
                      });
                      setTimeout(()=>{
                        that.fullscreenLoading = false;
                      },1000)
                      return;
                    }
                      setTimeout(()=>{
                        that.fullscreenLoading = false;
                      },1000)
                    that.replaceEnvMsg = that.CopyenvMsg.value;
                    that.copyMsgItem = resPrev.data.data.list;
//                    for(let i=0,len=resPrev.data.data.list.length;i<len;i++){
//                        that.imgReplaceArr[i] = resPrev.data.data.list[i].btnIconDir;
//                    }
                })).catch((res)=>{
                  console.log(res,'断网了');
                  setTimeout(()=>{
                    that.fullscreenLoading = false;
                  },1000)
              });
            },
            copySubmit(){
              const that = this;
              console.log(this.copyMsgItem);
              if(!this.copyMsgItem.length){
                that.$message({
                  message: '请先 一键复制信息',
                  type: 'warning',
                  duration:that.$duration,
                });
                return;
              }
              //先检测数据库有没有为空；
              let params = {
                compId:that.CopycompOption.compId,
//                subCompCode:that.CopyChildRenCompany.compCode,
                appVersion:that.Copyversion,
                appEnvName:that.CopyenvMsg.value,
                isActived:that.CopyifActive,
                pageIndex:1,
                pageSize:30
              };
              if(that.CopyChildRenCompany&&that.CopyChildRenCompany.compCode){
                params['subCompCode'] = that.CopyChildRenCompany.compCode
              };
              this.$Ajax
                .post(that.Host+'/appController/queryPageApplication',params)
                .then(function (res) {
                  console.log(res.data);
                  if(res.data.code==1 && res.data.data &&res.data.data.list && res.data.data.list.length>=0){
                    that.$message({
                      message: '生成配置信息已有配置信息，一键复制失败',
                      type: 'warning',
                      duration:that.$duration,
                    });
                    return;
                  }else if(res.data.code==0 && !res.data.data){
                    //排除生成配置数据库没有数据情况下可以进行复制;
                    //在这里进行数据操作，减少for循环，优化
                    for(let i=0,len=that.copyMsgItem.length;i<len;i++){
                      // 处理 redirUrl 的empty 问题 toUpperCase
                        if(!that.copyMsgItem[i]["redirUrl"].trim()){
                           that.$message({
                              message: '第'+(i+1)+'个数据的Url地址不能为空',
                              type: 'warning',
                              duration:that.$duration,
                            });
                          return
                        }
                        if(that.copyMsgItem[i]["redirUrl"].trim().toUpperCase() =='EMPTY'){
                          that.copyMsgItem[i]["redirUrl"] = 'Empty';
                        }
                        delete that.copyMsgItem[i]["id"];
                        delete that.copyMsgItem[i]["createTime"];
                        delete that.copyMsgItem[i]["updateTime"];
                        that.copyMsgItem[i]["compId"] = that.CopycompOption.compId
                        that.copyMsgItem[i]["compCode"] = that.CopycompOption.compCode
                        that.copyMsgItem[i]["appVersion"] = that.Copyversion
                        that.copyMsgItem[i]["isActived"] = that.CopyifActive
                        that.copyMsgItem[i]["appEnvName"] = that.CopyenvMsg.value
                        if(that.CopyChildRenCompany&&that.CopyChildRenCompany.compCode){
                          that.copyMsgItem[i]["subCompCode"] = that.CopyChildRenCompany.compCode;
                          that.copyMsgItem[i]["subCompName"] = that.CopyChildRenCompany.compName;
                        }
                    }
                    that.$Ajax
                      .post(that.Host+'/appController/addMutiApplication',{
                        mutiAppJson:JSON.stringify(that.copyMsgItem)
                      })
                      .then(function (res) {
                          console.log(res.data);
                          if(res.data.code==1){
                            that.$router.push('/configlist')
                          }else if(res.data.code ==0){
                            that.$message({
                              message: res.data.msg,
                              type: 'warning',
                              duration:that.$duration,
                            });
                          }
                      })
                      .catch(function (error) {
                        console.log(error);
                      });
                  }
                })
                .catch(function (error) {
                  console.log(error);
                });
            },
            selectEnvMsg(key){
              console.log(key);
              if(key.indexOf('PC')>-1){
                this.optionID = this.optionPc
              }else{
                this.optionID = this.optionApp
              }
            },
            receptImg(key){
//                console.log(key);
//                console.log(this.$store.getters.changeCopyImgUrl);
                let repacleImgIndex = this.copyMsgItem.findIndex(function(value,index,arr){
                  return value.btnPosId == key
                });
                this.copyMsgItem[repacleImgIndex]["btnIconDir"] = this.$store.getters.changeCopyImgUrl;
            },
            emptyImgUrl(imgNum){
                const that = this;
                console.log(imgNum);
              let repacleImgIndex = that.copyMsgItem.findIndex(function(value,index,arr){
                return value.btnPosId == imgNum
              });
              that.copyMsgItem[repacleImgIndex]["btnIconDir"] = '';
            },
            copyBack(){
                this.$router.go(-1);
            },
      }
    }
</script>
<style scoped lang="scss">
  .i-copy {
    padding-left: 20px;
    padding-top: 20px;
    .prev {
      text-align: left;
      padding-bottom: 10px;
      .v-s {
        display: inline-block;
        width: 150px !important;
      }
    }
    .current {
      text-align: left;
      padding-bottom: 20px;
      .v-s {
        display: inline-block;
        width: 150px !important;
      }
    }
    .tips {
      text-align: left;
      padding-bottom: 20px;
      font-size: 14px;
      line-height: 26px;
      .el-icon-information {
        color:red !important;
        font-size: 16px;
        font-weight: 600;
      }
    }
    .btn-on-off {
      margin-top: 20px;
      /*.cancel {*/
        /*background-color: #d2dad6;*/
        /*border-color: #d2dad6;*/
      /*}*/
      text-align: left;
    }
  }

</style>
