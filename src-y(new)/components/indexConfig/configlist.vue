<template>
  <div class="company" v-loading.body="loading">
    <el-select v-model="compOption" placeholder="请选择企业" class="configSelect1" @change="selectCompName">
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

    <el-select v-model="version" placeholder="请选择版本" class="configSelect1" @change='selectEnv'>
      <el-option
        v-for="(item,index) in optionVersion"
        :key="item.index"
        :label="item.index"
        :value="item">
      </el-option>
    </el-select>

    <el-select v-model="envMsg" placeholder="请选择环境" class="configSelect1" @change='selectEnv'>
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>

    <el-select v-model="ifActive" placeholder="请选择激活状态" class="configSelect1" @change='selectActive'>
      <el-option
        v-for="item in options2"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>

    <div class="block configCheck">
      <span class="wrapper">
        <el-button type="info" @click="msgCheck(pageSize,1)">查询</el-button>
      </span>
    </div>

    <el-table
      :data="congigListItem"
      border
      max-height="490"
      :empty-text="' '"
      style="width: 100%">
      <el-table-column
        label="企业编码"
        fixed
        width="130">
        <template scope="scope">
          <el-popover trigger="hover" placement="top">
          <p>{{ scope.row.subCompName?scope.row.subCompName:scope.row.compCode }}</p>
          <div slot="reference" class="name-wrapper">
          <span>{{ scope.row.subCompName?scope.row.subCompName:scope.row.compCode }}</span>
          </div>
          </el-popover>
          <!--<el-icon name="time"></el-icon>-->
        </template>
      </el-table-column>
      <el-table-column
        label="版本"
        width="70">
        <template scope="scope">
          <span>{{ scope.row.appVersion }}</span>
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
          <span>{{ listCurrentEnvObj.label }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="是否激活"
        width="70">
        <template scope="scope">
          <span>{{scope.row.isActived==0?'否':'是'}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="位置"
        sortable
        prop="position"
        :sort-method="changeSort"
        width="100">
        <template scope="scope">
          <!--<el-popover trigger="hover" placement="top">-->
            <!--<p>{{ scope.row.mallUrl }}</p>-->
            <!--<div slot="reference" class="name-wrapper">-->
              <!--<el-tag>{{ scope.row.mallUrl }}</el-tag>-->
            <!--</div>-->
          <!--</el-popover>-->
          <span>{{scope.row.btnPosId}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="位置说明"
        width="100">
        <template scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>{{ scope.row.btnPosDes?scope.row.btnPosDes:'暂无' }}</p>
            <div slot="reference" class="name-wrapper">
              <span>{{ scope.row.btnPosDes?scope.row.btnPosDes:'暂无' }}</span>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        label="图片地址"
        width="100">
        <template scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>{{ imgUrlPre+scope.row.btnIconDir }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag>{{ imgUrlPre+scope.row.btnIconDir }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        label="图标位置名称"
        width="130">
        <template scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>{{ scope.row.btnIconName }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag>{{ scope.row.btnIconName }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        label="URL链接"
        width="120">
        <template scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>{{ scope.row.redirUrl }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag>{{ scope.row.redirUrl }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        label="接口配置"
        width="100">
        <template scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>{{ scope.row.ajaxUrl?scope.row.ajaxUrl:'暂无' }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag>{{ scope.row.ajaxUrl?scope.row.ajaxUrl:'暂无' }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        label="参数"
        width="90">
        <template scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>{{ scope.row.otherParam?scope.row.otherParam:'暂无' }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag>{{ scope.row.otherParam?scope.row.otherParam:'暂无' }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>

      <!--<el-table-column-->
        <!--label="用户权限"-->
        <!--width="100">-->
        <!--<template scope="scope">-->
          <!--<el-popover trigger="hover" placement="top">-->
            <!--<p v-for="(item1,index1) in scope.row.userAuth" key="item1">{{ item1 }}<br></p>-->
            <!--<div slot="reference" class="name-wrapper">-->
              <!--<el-tag v-for="(item1,index1) in scope.row.userAuth" key="item1" class="userAuth">{{ item1 }}<br></el-tag>-->
            <!--</div>-->
          <!--</el-popover>-->
        <!--</template>-->
      <!--</el-table-column>-->


      <el-table-column label="操作" fixed="right" min-width="140">
        <template scope="scope">
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
    <el-dialog title="" :visible.sync="dialogTableVisible" @close="close1">
      <configedit :configEditItem="itemNew" @configEditSuccess="editFinish"></configedit>
    </el-dialog>
    <div class="block configListPage" v-if='pageShow'>
      <el-pagination
        class="pageChange"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-sizes="[6, 10, 20, 50]"
        :page-size="pageSize"
        layout="total,sizes, prev, pager, next"
        :total="total">
      </el-pagination>
    </div>
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
  import ConnectState from '../../state/VueConnect'
  import configedit from './configEdit.vue'
  export default {
    data() {
      return {
        version:'',
        compOption:{},
        pageShow:false,
        currentPage: 1,
        pageSize:10,
        total:null,
        loading: true,
        options: this.envOption,
        options2: [{
          value: '1',
          label: '是'
        }, {
          value: '0',
          label: '否'
        }],
        envMsg: '',
        ifActive: '',
        optionComp:[],
        optionVersion:[],
        congigListItem:[],
        imgUrlPre:this.Host+'/',
        dialogTableVisible:false,
        itemNew:{},
        itemtitle:'',
        ChildRenCompany:{},
        ChildRenCompanyItem:[],
      };
    },
    mounted(){//一来dom 的存在就放在mounted ，配合this.$nextTick（）
//        this.listOff=false;
    },
    created(){
      const that = this;
      that.listOff=true;
      that.loading = false;
//      that.version = ConnectState.version?ConnectState.version:'1.5';
      that.version = ConnectState.version?ConnectState.version:'';
      that.ifActive = ConnectState.ifActive;
      that.compOption = ConnectState.compOption;
      that.envMsg = ConnectState.envMsg;
      //当记录后

      //并发请求；
      that.$Ajax.all([that.getComp(), that.getVersion()])
        .then(that.$Ajax.spread(function (resComp, resVersion) {
          //这里的接受参数是按照顺序来的；
          if(that.$store.getters.user.grade==0){

            that.optionComp = resComp.data.data;
            if(ConnectState.compOption&&ConnectState.compOption.compCode){
                console.log('jin集团公司');
              that.compOption = that.optionComp.find((value)=>{
                return value.compCode == ConnectState.compOption.compCode;
              });
            }
          }
          that.optionVersion = resVersion.data.data;
          if(that.version&&that.ifActive&&that.compOption.compId&&that.envMsg){
            console.log(that.compOption,'进入select');
            that.selectCompName(that.compOption,()=>{
              if(ConnectState.Subcomp.compCode){
                that.ChildRenCompany = ConnectState.Subcomp;
                that.$Ajax
                  .post(that.Host + '/sevenStarController/getAllSubCompany', {
                    compId: that.compOption.compId
                  })
                  .then((response) => {
                    that.ChildRenCompanyItem = response.data.data;
                    that.ChildRenCompany = that.ChildRenCompanyItem.find((value)=>{
                        return value.compCode == ConnectState.Subcomp.compCode;
                    });
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
              }
              that.msgCheck(that.pageSize,that.currentPage);
            });
          }
        }));

  },
    methods: {
      changeSort(a,b){
          //btnPosId
        if(a.btnPosId-b.btnPosId>0){
          return true;
        }else{
          return false;
        }
      },
      close1(){
        this.msgCheck(this.pageSize,this.currentPage);
      },
      editFinish(success){
        if(success.code==1){
            this.dialogTableVisible = false;

        }else {
          this.dialogTableVisible = false;
        }
//        this.msgCheck(this.pageSize,this.currentPage);
      },
      msgCheck(page,pageIndex){
        const that = this;
        that.currentPage = pageIndex;
        if(!this.compOption.compId){
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

        //当有条件时
        ConnectState.compOption = that.compOption;
        ConnectState.version = that.version;
        ConnectState.envMsg = that.envMsg;
        ConnectState.Subcomp = that.ChildRenCompany;
        ConnectState.ifActive = that.ifActive;
        let indexparamsObj = {};
        if(that.ChildRenCompany.compCode){
          indexparamsObj = {
            appVersion:that.version,
            appEnvName: that.envMsg,
            compId:that.compOption.compId,
            isActived:that.ifActive,
            pageIndex:pageIndex,
            pageSize:page,
            subCompCode:that.ChildRenCompany.compCode
          }
        }else {
          indexparamsObj = {
            appVersion:that.version,
            appEnvName: that.envMsg,
            compId:that.compOption.compId,
            isActived:that.ifActive,
            pageIndex:pageIndex,
            pageSize:page,
          }
        }
        this.$Ajax
          .post(this.Host+'/appController/queryPageApplication',indexparamsObj)
          .then(function (response) {
              if(response.data.code==0){
                that.$message({
                  message: response.data.msg,
                  type: response.data.code == 0 ? 'warning' : 'success',
                  duration: 1000,
                  showClose: true
                })
                that.congigListItem = [];
              }else {
                if(response.data.data){
//                  for(let i = 0,len = response.data.data.list.length;i<len;i++){
//                      response.data.data.list[i]["userAuth"] = JSON.parse(response.data.data.list[i]["userAuth"]);
//                  }
                  that.congigListItem = response.data.data.list;
//                    console.log(that.congigListItem);

                  that.total = response.data.data.totalCount;
//                    console.log(that.total);
                  that.pageShow = true;
//                    that.listCurrentCompName = that.envMsg.find(value,index,that.options);
                  //找出与选中结果一样的选项；
                  that.listCurrentEnvObj = that.options.find(function (value,index,arr) {
                    return value.value ==that.envMsg;
                  });
                  that.listCurrentCompObj = that.optionComp.find(function (value,index,arr) {
                    return value.compId ==that.compOption.compId;
                  });
                }else{
                  that.congigListItem = [];
                  that.pageShow = false;
                }
              }
          })
          .catch(function (error) {
            console.log(error);
          });

      },
      handleSizeChange(val) {
//      console.log('aaa',`每页 ${val} 条`);
        this.pageSize = val;
//        console.log('每页显示多少条',this.pageSize,val);
        this.msgCheck(val,this.currentPage);
      },
      handleCurrentChange(val) {
//          console.log('bbb',`当前页: ${val}`);
//          console.log('显示第几页',val,this.currentPage);
        this.msgCheck(this.pageSize,val);

      },
      selectEnv(val){
//        console.log(val);
      },
      selectActive(val){
//        console.log(val);
      },
      deleConfigItem(index,item){
        const that = this;
        that.$confirm('确定删除?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          that.$Ajax
                .post(that.Host+"/appController/delApplicationById",{
                  id:item.id,
                  compId:item.compId
              })
                .then(function (res) {
//                    console.log(res.data);
                    that.$message({
                        type: res.data.code==1?'success':'error',
                        message: res.data.msg,
                        duration:that.$duration,
                        onClose: function () {
//                            console.log('删除啦');
                          that.msgCheck(that.pageSize,that.currentPage);
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
      editConfigItem(index,item){
        this.itemNew = item;
        this.dialogTableVisible = true;
      },
      getComp(){
        const that = this;
        if(that.$store.getters.user.grade==1){
          this.compOption = {
            compCode:that.$store.getters.user.company.comp_code,
            compId:that.$store.getters.user.company.id,
            compName:that.$store.getters.user.company.comp_name
          };
          that.optionComp[0] = that.compOption;
          that.selectCompName(that.compOption);
          return false;
        }else if(that.$store.getters.user.grade==0){
          return that.$Ajax.post(that.Host+'/sevenStarController/getAllCompany',{})
        }
      },
      getVersion(){
        const that = this;
        return that.$Ajax.post(that.Host+'/appController/getAllVersion',{})
      },
      selectCompName(key,callback){
        const that = this;
//          that.$nextTick(()=> {
            that.$Ajax
              .post(that.Host + '/sevenStarController/getAllSubCompany', {
                compId: key.compId
              })
              .then((response) => {
                if (response.data.code == 1 && response.data.data.length != 0) {

                  callback && callback();
                }
                that.ChildRenCompanyItem = response.data.data;
                console.log(that.ChildRenCompanyItem,that.ChildRenCompany,7878);

                that.ChildRenCompany = {};
              })
              .catch(function (error) {
                console.log(error);
              });
//          })
      }
    },
    components:{
      configedit
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .configCheck {
    display: inline-block;
    margin-bottom: 20px;
  }
  td {
    .cell {
      span {
        .el-tag:not(.userAuth) {
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
          width: 100%;
          background-color: #c0c5cc;
        }
        .el-tag.userAuth {
          display: block;
          margin-top: 2px;
          margin-bottom: 1px;
        }
        div {
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
          width: 100%;
        }
      }
    }
  }
  .configListPage {
    margin-top: 20px;
    text-align: center;
  }
</style>
