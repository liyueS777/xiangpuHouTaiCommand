<template>
  <div>
    <configheader :title="titleConfig"></configheader>
    <ul class="configAdd">
      <li class="clearfix">
        <div>{{!ifEdit?'企业名称':'企业编码'}}</div>
        <div v-if="!ifEdit">
          <el-select v-model="compID" placeholder="请选择企业" :disabled='ifEdit' @change="selectChildrenCompany">
            <el-option
              v-for="item in compOption"
              :key="item.compId"
              :label="item.compName"
              :value="item.compId">
            </el-option>
          </el-select>
        </div>
        <div v-if="!ifEdit">
          <el-select v-model="ChildRenCompany" placeholder="请选择子公司信息" :clearable="!ifEdit" :disabled='ifEdit'>
            <el-option
              v-for="item in ChildRenCompanyItem"
              :key="item.compId"
              :label="item.compName"
              :value="item.compId">
            </el-option>
          </el-select>
        </div>
        <div v-if="ifEdit">
          <el-input v-model="Everycode" placeholder="请输入公司编码" disabled></el-input>
        </div>
      </li>
      <li class="clearfix">
        <div>版本信息</div>
        <div>
          <el-input v-model="version" placeholder="请输入对应版本" :disabled='ifEdit'></el-input>
        </div>
      </li>
      <li class="clearfix">
        <div>环境信息</div>
        <div>
          <el-select v-model="envMsg" placeholder="请选择环境信息" :disabled='ifEdit' @change="chengeee">
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
        <div>官网链接</div>
        <div>
          <el-input v-model="mUrlOffical" placeholder="请输入链接地址"></el-input>
        </div>
      </li>
      <li class="clearfix">
        <div>商城链接</div>
        <div>
          <el-input v-model="mUrlMall" placeholder="请输入链接地址"></el-input>
        </div>
      </li>
      <li class="clearfix">
        <div>微链地址</div>
        <div>
          <el-input v-model="mUrlweilian" placeholder="请输入链接地址"></el-input>
        </div>
      </li>
      <li class="clearfix">
        <div>服务商地址</div>
        <div>
          <el-input v-model="mUrlAgent" placeholder="请输入服务商地址"></el-input>
        </div>
      </li>
      <li class="clearfix">
        <div>版本号</div>
        <div>
          <el-input v-model="mUrlVersion" placeholder="请输入版本号"></el-input>
        </div>
      </li>
      <li class="clearfix">
        <div>登录logo</div>
        <imgupload class="auth-img" @SendToImgUrl="receptImgMLogin" :imgUrlFileList="fileListMLogin" @EmptyImgUrl="emptyImgMLogin"></imgupload>
        <div>
          <i class="el-icon-information"></i>
        </div>
        <div class="tips-exp">
          <p> <strong>PC：</strong>165*27px的尺寸</p>
          <p><strong>Android：</strong>470*76的尺寸</p>
          <p><strong>IOS：</strong>540*88的尺寸</p>
        </div>
      </li>

      <li class="clearfix">
        <div>鉴权logo</div>
        <imgupload class="auth-img" @SendToImgUrl="receptImgMAuth" :imgUrlFileList="fileListMAuth" @EmptyImgUrl="emptyImgMAuth"></imgupload>
        <div>
          <i class="el-icon-information"></i>
        </div>
        <div class="tips-exp">
          <p><strong>PC：</strong>358*96px的尺寸</p>
          <p><strong>Android：</strong>506*130的尺寸</p>
          <p><strong>IOS：</strong>580*150的尺寸</p>
        </div>
      </li>

      <li class="clearfix">
        <div>首页logo</div>
        <imgupload class="auth-img" @SendToImgUrl="receptImgMMain" :imgUrlFileList="fileListMMain" @EmptyImgUrl="emptyImgMMain"></imgupload>
        <div>
          <i class="el-icon-information"></i>
        </div>
        <div class="tips-exp">
          <p><strong>PC：</strong>163*28px的尺寸</p>
          <p><strong>Android：</strong>979*184的尺寸</p>
          <p><strong>IOS：</strong>979*240的尺寸</p>
        </div>
      </li>

      <li class="clearfix">
        <div>关于页logo</div>
        <imgupload class="auth-img" @SendToImgUrl="receptImgMAbout" :imgUrlFileList="fileListMAbout" @EmptyImgUrl="emptyImgMAbout"></imgupload>
        <div>
          <i class="el-icon-information"></i>
        </div>
        <div class="tips-exp">
          <p><strong>PC：</strong>295*79px的尺寸</p>
          <p><strong>Android：</strong>662*156的尺寸</p>
          <p><strong>IOS：</strong>760*180的尺寸</p>
        </div>
      </li>

    </ul>
    <div class="block">
        <span class="wrapper">
          <el-button type="success" @click="configConfirm">确定</el-button>
          <el-button type="info" @click="cancelConfig">取消</el-button>
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
        Everycode:'',
        mUrlAgent:'',
        mUrlweilian:'',
        mUrlVersion:"",
        version:'',
        compID:'',
        ChildRenCompany:'',
        ChildRenCompanyItem:[],
        compOption:[],
        input:'',
        envMsg: {},
        envID:null,


        mUrlOffical:'',
        mUrlMall:'',

        ImgMLogin:'',
        ImgMAuth:'',
        ImgMMain:'',
        ImgMAbout:'',

        //给上传图片默认值--编辑使用
        fileListMLogin: '',
        fileListMAuth: '',
        fileListMMain: '',
        fileListMAbout:'',

        options: this.envOption,
        titleConfig:'',
        imgUrlPre:this.Host,
//        result:{}
      }
    }
    ,
    created()
    {
      const that = this;
      //权限判断
      this.hasAuth();
      that.titleConfig = that.configEditItem?'编辑配置':'添加配置';
      that.ifEdit = that.configEditItem?true:false;
      that.version = Connect.version?Connect.version:'';
      if(that.configEditItem&&that.configEditItem.id){
          that.hasAuth(()=>{
            that.init(that.configEditItem);
          })
      }else {
        that.$notify.info({
          title: '消息',
          message: '图片可以拖拽上传'
        });
      }
    }
    ,
    methods: {
      selectChildrenCompany(key){
          console.log(key,'addd');
//        this.ChildRenCompanyItem = [];
        this.ChildRenCompany = '';
          ///sevenStarController/getAllSubCompany
        this.confirm(this.Host+'/sevenStarController/getAllSubCompany',{
          compId:key
        },(res)=>{
            console.log(res.data);
            this.ChildRenCompanyItem = res.data.data;
            console.log(this.ChildRenCompany,this.ChildRenCompanyItem,123)
        })
      },
      hasAuth(callBack){
          const that = this;
          if(that.$store.getters.user.grade==1){
//            this.compID = {
//              compCode:that.$store.getters.user.company.comp_code,
//              compId:that.$store.getters.user.company.id,
//              compName:that.$store.getters.user.company.comp_name
//            };
            //这里先不给赋值是因为要选择，那么只给他一个选项就可以了；
//            this.compID = that.$store.getters.user.company.id;
            that.compOption[0] = {
              compCode:that.$store.getters.user.company.comp_code,
              compId:that.$store.getters.user.company.id,
              compName:that.$store.getters.user.company.comp_name
            };
            callBack && callBack();
          }else if(that.$store.getters.user.grade==0){
            that.$Ajax
              .post(that.Host+'/sevenStarController/getAllCompany',{})
              .then(function (res) {
                console.log(res.data,'000000');
                that.$nextTick(()=>{
                  that.compOption = res.data.data;
                })
                console.log(that.compOption,that.compID,'init');
                callBack && callBack();
              })
              .catch(function (error) {
                console.log(error);
              });
          }
        },
      chengeee(key){console.log(key);},
      init(item){
        const that = this;
        console.log(item,'edit');
        let result = item;
        that.Everycode = item.orgName;
//        that.compID = that.compOption.find(function (value,index,arr) {
//          return value.compCode == result.orgName;
//        });
        that.version = result.version;
        that.envMsg = that.options.find(function (value,index,arr) {
          return value.value == result.env;
        });
//            that.envMsg = result.env;

        that.mUrlOffical = result.homeUrl;


        that.mUrlVersion = result.versionAbout==null?'':result.versionAbout;
        that.mUrlAgent = result.providerUrl==null?'':result.providerUrl;
        that.mUrlMall = result.mallUrl;
        //为了处理数据结构类型
        if(!result.mUrlweilian || result.mUrlweilian == null){
          result.mUrlweilian = '';
        }
        that.mUrlweilian = result.weilianlUrl,
        that.ImgMLogin = result.loginLogoDir;
        that.ImgMAuth = result.authLogoDir;
        that.ImgMMain = result.indexLogoDir;
        that.ImgMAbout = result.aboutLogoDir;
        // 这里在传给图片时加一个时间搓，保证每次传给子组件的都是不一样的url地址，让其刷新；
        that.fileListMAuth =that.imgUrlPre+'/'+result.authLogoDir+'?'+ +new Date() ;
        that.fileListMMain =that.imgUrlPre+'/'+result.indexLogoDir+'?'+ +new Date() ;
        that.fileListMAbout =that.imgUrlPre+'/'+result.aboutLogoDir+'?'+ +new Date();
        that.fileListMLogin =that.imgUrlPre+'/'+result.loginLogoDir+'?'+ +new Date();
      },
      receptImgMLogin(res){
        this.ImgMLogin = res;
      },
      receptImgMAuth(res){
        this.ImgMAuth = res;
      },
      receptImgMMain(res){
        this.ImgMMain = res;
      },
      receptImgMAbout(res){
        this.ImgMAbout = res;
      },

      emptyImgMLogin(){
        this.ImgMLogin = '';
      },
      emptyImgMAuth(){
        this.ImgMAuth = '';
      },
      emptyImgMMain(){
        this.ImgMMain = '';
      },
      emptyImgMAbout(){
        this.ImgMAbout = '';
      },
      configConfirm(){
        const that = this;
        if(that.configEditItem&&that.configEditItem.id){
            if(!this.ImgMLogin || !this.ImgMAuth || !this.ImgMMain || !this.ImgMAbout){
              that.$message({
                message: '图片上传不能为空',
                type: 'warning',
                duration: that.$duration,
                showClose: true,
              });
              return;
            };
            let paramsObj = {
              id:that.configEditItem.id,
              orgName: that.configEditItem.orgName,
              version: that.version,
              env: that.envMsg.value,
              homeUrl: that.mUrlOffical.trim(),
              mallUrl: that.mUrlMall.trim(),
              weilianlUrl: that.mUrlweilian.trim(),
              providerUrl: that.mUrlAgent.trim(),
              loginLogoDir: that.ImgMLogin,
              authLogoDir: that.ImgMAuth,
              indexLogoDir: that.ImgMMain,
              aboutLogoDir:that.ImgMAbout,
              compId: that.configEditItem.compId,
              versionAbout:that.mUrlVersion.trim()
            };
//            if(that.mUrlweilian&&that.mUrlweilian.trim()){
//              paramsObj["weilianlUrl"] = that.mUrlweilian.trim();
//            }
          that.confirm(that.Host + '/authController/updateAuthentication',paramsObj, function (response) {
              if (response.data.code == 1) {
//                  Connect.compCode = that.compID.compCode;
//                  Connect.compCode = that.configEditItem.orgName;
                that.$emit('configEditSuccess',{code:1});
              }
          })
        }
        else {
          if(!that.compID){
            this.$message({
              message: '请先选择企业信息',
              type: 'warning',
              duration:that.$duration,
            });
            return;
          }
          else if(!that.version){
            this.$message({
              message: '请先输入版本信息',
              type: 'warning',
              duration:that.$duration,
            });
            return;
          }
          else if(!that.envMsg.value){
            this.$message({
              message: '请先选择环境信息',
              type: 'warning',
              duration:that.$duration,
            });
            return;
          }
          else if(!that.mUrlOffical){
            this.$message({
              message: '请先填入移动端官网链接',
              type: 'warning',
              duration:that.$duration,
            });
            return;
          }
          else if(!that.mUrlMall){
            this.$message({
              message: '请先填入移动端商城链接',
              type: 'warning',
              duration:that.$duration,
            });
            return;
          }
//          else if(!that.mUrlweilian){
//            this.$message({
//              message: '请先填入微链地址',
//              type: 'warning',
//              duration:that.$duration,
//            });
//            return;
//          }
          else if(!that.ImgMLogin){
            this.$message({
              message: '请先上传移动端登陆logo',
              type: 'warning',
              duration:that.$duration,
            });
            return;
          }
          else if(!that.ImgMAuth){
            this.$message({
              message: '请先上传移动端鉴权logo',
              type: 'warning',
              duration:that.$duration,
            });
            return;
          }
          else if(!that.ImgMMain){
            this.$message({
              message: '请先上传移动端首页logo',
              type: 'warning',
              duration:that.$duration,
            });
            return;
          }
          else if(!that.ImgMAbout){
            this.$message({
              message: '请先上传移动端关于页logo',
              type: 'warning',
              duration:that.$duration,
            });
            return;
          }
          //子公司
          let childCmsg = that.ChildRenCompany && that.ChildRenCompanyItem.find((value)=>{
              return that.ChildRenCompany==value.compId
          });
          let parentMsg = that.compOption.find((value)=>{
            return that.compID==value.compId
          });
          let paramsID = {
            orgName:that.ChildRenCompany?childCmsg.compCode:parentMsg.compCode,
            version:that.version,
            env:that.envMsg.value
          };
          that.confirm(that.Host + '/authController/getAuthenIsExist',paramsID,(res)=>{
            console.log(res.data,'查询鉴权环境');
            if(res.data.code ==0){
              that.$message({
                message: res.data.msg+'请去鉴权配置列表中查看并可以编辑',
                type: 'warning',
                duration: that.$duration,
                showClose: true,
              });
            }else {
                let orgName ='';
                let compId ='';
                if(that.ChildRenCompany){
                  orgName = childCmsg.compCode;
                  compId = that.ChildRenCompany;
                }else {
                  orgName = parentMsg.compCode;
                  compId = that.compID;
                }
                let params = {
                  orgName: orgName,
                  compId: compId,
                  version: that.version,
                  env: that.envMsg.value,
                  homeUrl: that.mUrlOffical.trim(),
                  mallUrl: that.mUrlMall.trim(),
                  weilianlUrl: that.mUrlweilian.trim(),
                  providerUrl: that.mUrlAgent.trim(),
                  loginLogoDir: that.ImgMLogin,
                  authLogoDir: that.ImgMAuth,
                  indexLogoDir: that.ImgMMain,
                  aboutLogoDir:that.ImgMAbout,
                  versionAbout:that.mUrlVersion.trim()
                };
              that.confirm(that.Host + '/authController/addAuthentication',
                params,
                function (response) {
                console.log(response.data);
                that.$message({
                  message: response.data.msg,
                  type: response.data.code == 0 ? 'warning' : 'success',
                  duration: that.$duration,
                  showClose: true,
                  onClose: function () {
                    if (response.data.code == 1) {
                      //在成功的时候把版本号信息保留下来；
                      Connect.version = that.version;
                      that.$router.push({
                        path: '/authList'
                      });
                    }
                  }
                });
              })
            }
          });

        }
        },
      confirm(url,paramsObj,successCallBack){
        const that = this;
        that.$Ajax
          .post(url,paramsObj,successCallBack)
          .then(function (response) {
            successCallBack && successCallBack(response);
          })
          .catch(function (error) {
            console.log(error);
        });
      },
      cancelConfig(){
        if(this.configEditItem&&this.configEditItem.id){
//          Connect.compCode = this.compID.compCode;
          console.log('取消进入编辑');
//          this.$router.push({
//            path:'/replace1',
//            query:{
//              msg:'auth'
//          }
//        });
          this.$emit('configEditSuccess',{code:0});
        }else {
          this.$router.push({
            path: '/authList'
          });
        }
      },
    },components:{
      configheader,
      imgupload,
    },props:['configEditItem']
    ,watch:{
      'configEditItem':{
        deep:true,
        handler(newItem,olditem){
          this.init(newItem);
        }
      }
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
      .tips-exp {
        width: 300px !important;
        >p {
          text-align: left;

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
      }

    }
  }
  .block {
    text-align: left;
    margin-left: 40px;
    margin-top: 10px;
  }
</style>
