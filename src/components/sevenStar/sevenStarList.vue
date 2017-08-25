<template>
  <div class="company" v-loading.body="loading">
    <el-select v-model="compOption" placeholder="请选择集团" class="configSelect1">
      <el-option
        v-for="item in optionComp"
        :key="item.compId"
        :label="item.compName"
        :value="item">
      </el-option>
    </el-select>

    <el-select v-model="version" placeholder="请选择版本">
      <el-option
        v-for="(item,index) in optionVersion"
        :key="item.index"
        :label="item.index"
        :value="item">
      </el-option>
    </el-select>

    <el-select v-model="envMsg" placeholder="请选择环境">
      <el-option
        v-for="item in optionsEnvMsg"
        :key="item.value"
        :label="item.label"
        :value="item">
      </el-option>
    </el-select>
    <div class="block configCheck">
      <span class="wrapper">
        <el-button type="info" @click="init">查询</el-button>
      </span>
    </div>

    <el-table
      :data="sevenStarListItem"
      border
      :empty-text="' '"
      style="width: 100%">
      <el-table-column
        label="集团编码"
        width="150">
        <template scope="scope">
          <!--<el-icon name="time"></el-icon>-->
          <span>{{ scope.row.orgName }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="产业轴ID"
        width="150">
        <template scope="scope">
          <!--<el-popover trigger="hover" placement="top">-->
          <!--<div slot="reference" class="name-wrapper">-->
          <!---->
          <!--</div>-->
          <!--</el-popover>-->
          <span>{{ scope.row.industryId }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="位置顺序"
        width="150">
        <template scope="scope">
          <!--<el-popover trigger="hover" placement="top">-->
          <!--<p>{{ scope.row.confType=='Company'?scope.row.posId:'标题头部' }}</p>-->
          <!--<div slot="reference" class="name-wrapper">-->
          <!--<el-tag>{{ scope.row.confType=='Company'?scope.row.posId:'标题头部' }}</el-tag>-->
          <!--</div>-->
          <!--</el-popover>-->
          <span>{{ scope.row.confType=='Company'?scope.row.posId:'标题头部' }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="名称"
        width="150">
        <template scope="scope">
          <!--<el-popover trigger="hover" placement="top">-->
            <!--<p>{{ scope.row.confType=='Company'?scope.row.subCompName:scope.row.popName }}</p>-->
            <!--<div slot="reference" class="name-wrapper">-->
              <!--<el-tag>{{ scope.row.confType=='Company'?scope.row.subCompName:scope.row.popName }}</el-tag>-->
            <!--</div>-->
          <!--</el-popover>-->
          <span>{{ scope.row.confType=='Company'?scope.row.subCompName:scope.row.popName }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="类型"
        width="150">
        <template scope="scope">
          <el-tag>{{ scope.row.confType | convertPattern }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        label="子公司编码"
        width="150">
        <template scope="scope">
          <!--<el-popover trigger="hover" placement="top">-->
            <!--<p>{{ scope.row.subCompCode?scope.row.subCompCode:'暂无' }}</p>-->
            <!--<div slot="reference" class="name-wrapper">-->
              <!--<el-tag>{{ scope.row.subCompCode?scope.row.subCompCode:'暂无' }}</el-tag>-->
            <!--</div>-->
          <!--</el-popover>-->
          <span>{{ scope.row.subCompCode?scope.row.subCompCode:'暂无' }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="版本"
        width="130">
        <template scope="scope">
          <!--<el-popover trigger="hover" placement="top">-->
            <!--<p>{{ scope.row.version?scope.row.version:'Default' }}</p>-->
            <!--<div slot="reference" class="name-wrapper">-->
              <!--<el-tag>{{ scope.row.version?scope.row.version:'Default' }}</el-tag>-->
            <!--</div>-->
          <!--</el-popover>-->
          <span>{{ scope.row.version?scope.row.version:'Default' }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="环境"
        width="130">
        <template scope="scope">
          <el-tag>{{ scope.row.env | convertEnv }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button
            size="small"
            type="primary"
            @click="editConfigItem(scope.$index, scope.row)">{{scope.row.subCompCode?'查看':'编辑'}}</el-button>

          <el-button
            size="small"
            type="danger"
            @click="deleConfigItem(scope.$index, scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="" :visible.sync="dialogTableVisible" :lock-scroll='showclose' @close="close1">
      <configedit :configEditItem="itemChild" @configEditSuccess="editFinish"></configedit>
    </el-dialog>

    <!--<router-view></router-view>-->
  </div>
</template>

<script>
  import ConnectState from '../../state/VueConnect'
  import configedit from './sevenStarEdit.vue'
  export default {
    data() {
      return {
        version:'',
        optionVersion:[],
        envMsg:{},
        optionsEnvMsg:this.envOption,
        showclose:false,
        compOption:{},
        pageShow:false,
        currentPage: 1,
        pageSize:6,
        total:null,
        loading: true,
        optionComp:[],
        sevenStarListItem:[],
        dialogTableVisible:false,
        itemNew:{},
        itemtitle:'',
        envArr:this.envOption,
        itemChild:{}
      };
    },
    mounted(){//一来dom 的存在就放在mounted ，配合this.$nextTick（）
//        this.listOff=false;
    },
    created(){
      const that = this;
      that.listOff=true;
      that.loading = false;
//      that.compOption = ConnectState.compOption;
      //并发请求；/sevenStarController/getAllCompany
      that.getMsg();
    },
    methods: {
      close1(){
          console.log('close1');
        this.init();
      },
      getComp(){
        const that = this;
        if(that.$store.getters.user.grade==1){
          this.compOption = {
            compCode:that.$store.getters.user.company.comp_code,
            compId:that.$store.getters.user.company.id,
            compName:that.$store.getters.user.company.comp_name
          };
          that.optionComp[0] = this.compOption;
          return false;
        }else if(that.$store.getters.user.grade==0){
          return that.$Ajax.post(that.Host+'/sevenStarController/getAllCompany',{})
        }
      },
      getVersion(){
        const that = this;
        return that.$Ajax.post(that.Host+'/sevenStarController/getSevenStarVersion',{})
      },
      getMsg(){
        const that = this;
        //并发请求；
        that.$Ajax.all([that.getComp(), that.getVersion()])
          .then(that.$Ajax.spread(function (resComp, resVersion) {
            //这里的接受参数是按照顺序来的；
            if(that.$store.getters.user.grade==0){
              that.optionComp = resComp.data.data;
            }
            that.optionVersion = resVersion.data.data;
          }));
      },
      init(){
        const that = this;
        if(!that.compOption.compCode){
          this.$message({
            message: '请先选择集团公司',
            type: 'warning',
            duration:that.$duration,
            showClose:true,
          });
          return;
        }
        if(!that.version){
          this.$message({
            message: '请先选择版本信息',
            type: 'warning',
            duration:that.$duration,
            showClose:true,
          });
          return;
        }
        if(!that.envMsg.value){
          this.$message({
            message: '请先选择环境信息',
            type: 'warning',
            duration:that.$duration,
            showClose:true,
          });
          return;
        }
        this.$Ajax
          .post(this.Host+'/sevenStarController/getSevenStarByOrgName',{
            orgName:that.compOption.compCode,
            env:that.envMsg.value,
            version:that.version
          })
          .then((response) => {
            console.log(response.data,'查询列表321');
            if(response.data.code==1){
              this.sevenStarListItem = response.data.data;
            }else {
              this.$message({
                message: response.data.msg,
                type: 'warning',
                duration:that.$duration,
                showClose:true,
                });
              this.sevenStarListItem = [];
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      editFinish(success){
        if(success.code==1){
          this.dialogTableVisible = false;
//          this.msgCheck(this.pageSize,this.currentPage);
        }else {
          this.dialogTableVisible = false;
        }
//        this.init();
      },

      deleConfigItem(index,id){
        const that = this;
//        console.log(id,compId);
        that.$confirm('确定删除?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          that.$Ajax
            .post(that.Host+"/sevenStarController/delSevenStarById",{
              id:id,
            })
            .then(function (res) {
              that.$message({
                type: res.data.code==1?'success':'error',
                message: res.data.msg,
                duration:that.$duration,
                onClose: function () {
//                that.msgCheck(that.pageSize,that.currentPage);
                  that.init();
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
          //这里的编辑传值过去不能直接传入，得通过这个编辑按钮的点击事件来；
        this.dialogTableVisible = true;
        this.itemChild = item;
      },
      selectCompName(key){
          console.log(key);
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
        .el-tag {
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
          width: 100%;
          background-color: #c0c5cc;
        }

      }
    }
  }
</style>
