<template>

  <div class="company" v-loading.body="loading">
    <el-select v-model="compOption" placeholder="请选择集团" class="configSelect1" @change="selectCompName">
      <el-option
        v-for="item in optionComp"
        :key="item.compId"
        :label="item.compName"
        :value="item.compCode">
      </el-option>
    </el-select>
    <el-select v-model="ChildRenCompany" placeholder="请选择子公司信息" clearable>
      <el-option
        v-for="item in ChildRenCompanyItem"
        :key="item.compId"
        :label="item.compName"
        :value="item.compCode">
      </el-option>
    </el-select>
    <div class="block configCheck">
      <span class="wrapper">
        <el-button type="info" @click="check">查询</el-button>
      </span>
    </div>
    <el-table
      :data="sevenStarListItem"
      border
      max-height="530"
      :empty-text="' '"
      style="width: 100%">
      <el-table-column
        label="集团编码"
        fixed
        width="140">
        <template scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>{{ scope.row.orgName }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag>{{ scope.row.orgName }}</el-tag>
            </div>
          </el-popover>
          <!--<el-icon name="time"></el-icon>-->
          <!--<span>{{ scope.row.orgName }}</span>-->
        </template>
      </el-table-column>
      <el-table-column
        label="版本ID"
        sortable
        prop="version"
        :sort-method="changeSortVersion"
        width="120">
        <template scope="scope">
          <!--<el-popover trigger="hover" placement="top">-->
          <!--<div slot="reference" class="name-wrapper">-->
          <!---->
          <!--</div>-->
          <!--</el-popover>-->
          <span>{{ scope.row.version }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="环境信息"
        width="120">
        <template scope="scope">
          <!--<el-popover trigger="hover" placement="top">-->
          <!--<p>{{ scope.row.env | convertEnv }}</p>-->
          <!--<div slot="reference" class="name-wrapper">-->
          <!--<el-tag>{{ scope.row.env | convertEnv }}</el-tag>-->
          <!--</div>-->
          <!--</el-popover>-->
          <span>{{ scope.row.env | convertEnv }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="官网Url"
        width="110">
        <template scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>{{ scope.row.homeUrl }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag>{{ scope.row.homeUrl }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        label="商城Url"
        width="110">
        <template scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>{{ scope.row.mallUrl }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag>{{ scope.row.mallUrl }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        label="微链Url"
        width="110">
        <template scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>{{ scope.row.weilianlUrl }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag>{{ scope.row.weilianlUrl }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        label="服务商Url"
        width="110">
        <template scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>{{ scope.row.providerUrl }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag>{{ scope.row.providerUrl }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        label="登录Url"
        width="110">
        <template scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>{{ imgUrlPre+scope.row.loginLogoDir }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag>{{ imgUrlPre+scope.row.loginLogoDir }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        label="鉴权Url"
        width="110">
        <template scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>{{ imgUrlPre+scope.row.authLogoDir }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag>{{ imgUrlPre+scope.row.authLogoDir }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        label="首页logo"
        width="110">
        <template scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>{{ imgUrlPre+scope.row.indexLogoDir }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag>{{ imgUrlPre+scope.row.indexLogoDir }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        label="关于页logo"
        width="110">
        <template scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>{{ imgUrlPre+scope.row.aboutLogoDir }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag>{{ imgUrlPre+scope.row.aboutLogoDir }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        label="版本号"
        width="80">
        <template scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>{{ scope.row.versionAbout }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag>{{ scope.row.versionAbout }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作" class="btn" fixed="right" width="140">
        <template scope="scope" class="div">
          <el-button
            size="small"
            type="primary"
            @click="editConfigItem(scope.$index, scope.row)">编辑</el-button>

          <el-button
            size="small"
            type="danger"
            @click="deleConfigItem(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--这个组件不要放在for循环里面，要放在外面，不然列表有多少个就会执行多少个-->
    <el-dialog title="" :visible.sync="dialogTableVisible" modal-append-to-body @close="close1(false)">
      <configedit :configEditItem="authItem" @configEditSuccess="editFinish"></configedit>
    </el-dialog>
  </div>
</template>

<script>
  import ConnectState from '../../state/VueConnect'
  import configedit from './authAdd.vue'
  export default {
    data() {
      return {
        ChildRenCompany:'',
        ChildRenCompanyItem:[],
        showclose:true,
        compOption:'',
        pageShow:false,
        currentPage: 1,
        pageSize:6,
        total:null,
        loading: true,
        optionComp:[],
        sevenStarListItem:[],
        dialogTableVisible:false,
        itemtitle:'',
        authItem:{},
        imgUrlPre:this.Host+'/',
        editSelectMsg:''
      };
    },
    mounted(){//一来dom 的存在就放在mounted ，配合this.$nextTick（）
//        this.listOff=false;
    },
    created(){
//        let a =1;
//        let b =1;
//        let arr = [];
//        const [1,2] = arr;
//        console.log(arr)
      const that = this;
      that.listOff=true;
      that.loading = false;
      that.hasAuth(
          ()=>{
        if(ConnectState.compCode){
          console.log('authhhh');
          that.compOption = ConnectState.compCode;
//          that.compOption = that.optionComp.find((value,index,arr)=>{
//            return value.compCode == ConnectState.compCode;
//          });
          that.init();
        }
      }
      );
    },
    methods: {
      changeSortVersion(a,b){
        if(a.version-b.version>0){
          return true;
        }else{
          return false;
        }
      },
      hasAuth(callBack){
          const that = this;
          if(that.$store.getters.user.grade==1){
            that.$nextTick(()=>{
              this.compOption = that.$store.getters.user.company.comp_code;
//              this.compOption = {
//                compCode:that.$store.getters.user.company.comp_code,
//                compId:that.$store.getters.user.company.id,
//                compName:that.$store.getters.user.company.comp_name
//              };
              that.optionComp[0] = {
                compCode:that.$store.getters.user.company.comp_code,
                compId:that.$store.getters.user.company.id,
                compName:that.$store.getters.user.company.comp_name
              };
            })
          }else if(that.$store.getters.user.grade==0){
            that.$Ajax
              .post(that.Host+'/sevenStarController/getAllCompany',{})
              .then(function (res) {
                console.log(res.data,777);
                that.$nextTick(()=>{
                  that.optionComp = res.data.data;
                })
                callBack && callBack();
              })
              .catch(function (error) {
                console.log(error);
              });
          }
        },
      check(){
        this.init();
      },
      close1(ttt){
        console.log('close123', ttt);
        let self = this
        self.dialogTableVisible = ttt
        self.init();
      },
      init(){
        this.$Ajax
          .post(this.Host+'/authController/getAuthenticationByOrgName',{
            orgName:this.ChildRenCompany?this.ChildRenCompany:this.compOption
          })
          .then((response) => {
            if(response.data.code==0){
                this.$message.warning(response.data.msg);
                this.sevenStarListItem = [];
                return;
            }
            ConnectState.compCode = this.compOption;
            this.editSelectMsg = this.compOption;
            console.log(response.data,'查询列表');

            this.sevenStarListItem = response.data.data;
            for(let i = 0;i<this.sevenStarListItem.length;i++){
              this.sevenStarListItem[i].compId = this.optionComp.find((value)=>{
                 return  this.compOption==value.compCode
              }).compId;
              this.sevenStarListItem[i]["weilianlUrl"] = this.sevenStarListItem[i]["weilianlUrl"]==null?'':this.sevenStarListItem[i]["weilianlUrl"];

            }
          })
          .catch(function (error) {
            console.log(error);
        });
      },
      editFinish(success){
        if(success.code==1){
          this.dialogTableVisible = false;
        }else {
          this.dialogTableVisible = false;
        }
//        this.init();
      },
      deleConfigItem(index,item){
        const that = this;
//        console.log(id,compId);
        that.$confirm('确定删除?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          that.$Ajax
            .post(that.Host+"/authController/delAuthenticationById",{
              id:item.id,
              compId:item.compId
            })
            .then(function (res) {
              that.$message({
                type: res.data.code==1?'success':'error',
                message: res.data.msg,
                duration:that.$duration,
                onClose: function () {
//                that.msgCheck(that.pageSize,that.currentPage);
                  if(res.data.code==1){
                    that.init();
                  }
                }
              });
            })
            .catch(function (error) {
              console.log(error);
            });
        }).catch(() => {
          that.$message({
            type: 'info',
            message: '已取消删除',
            duration:that.$duration
          });
        });
      },
      editConfigItem(index, rowItem){
        this.authItem= rowItem;
        this.dialogTableVisible = true;
//        this.$router.push({
//          name:'configEdit',
//          query:item
//        })
      },
      selectCompName(key){
        console.log(key);
        this.ChildRenCompany = '';
        this.ChildRenCompanyItem = [];
        ///sevenStarController/getAllSubCompany
        let parentmsg = this.optionComp.find((value)=>{
            return key==value.compCode
        })
        this.confirm(this.Host+'/sevenStarController/getAllSubCompany',{
          compId:parentmsg.compId
        },(res)=>{
          console.log(res.data);
          this.$nextTick(()=>{
            this.ChildRenCompanyItem = res.data.data;
          })
        })
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
    },
    components:{
      configedit
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  /*.el-table--enable-row-transition .el-table__body td*/
  .el-table--enable-row-transition {
    .el-table__body {

      tr {
        td {
          .cell {
            span {
              .el-tag {
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
                width: 100%;
                background-color: #c0c5cc;
                /*background-color: #cc98b2;*/
              }

            }
          }
        }
        .el-table_1_column_13 {

          .cell,div {
            /*padding-left:0 !important;*/
            /*padding-right: 0 !important;*/
            width: 100%;
            button {
              padding:4px 6px !important;
            }
          }
        }
    }

    }

    /*td:last-of-type {*/
      /*.el-table .cell:last-of-type {*/
        /*padding-left: 0 !important;*/
      /*}*/
    /*}*/
  }


  .configCheck {
    display: inline-block;
    margin-bottom: 20px;
    margin-left: 0;
  }
</style>
