<template>
  <div class="container">
    <div class="row video-add">
      <div class="g-flex">
        <span>图片：</span>
        <el-upload
          class="cameraUpload"
          :action="HOST+'/FileUpload/uploadFile'"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture"
          :disabled="canUpload"
          :on-success="uploadSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <el-button size="small" type="primary" :disabled="canUpload">点击上传</el-button>
        </el-upload>
      </div>
      <div class="g-flex" style="height: 40px;" v-show="!readyOnly">
        <el-button type="info" @click="confirm" style="height: 40px;">确定</el-button>
        <el-button @click="close" style="height: 40px;">取消</el-button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ["viewData"],
    data () {
      return {
        fileList:[],
        readyOnly:false,
        canUpload: false,
        HOST:''
      }
    },
    watch: {
      fileList(val, oldVal){
        this.canUpload = val.length === 1;
      },
      'viewData.data': {
        handler(val, oldVal) {
          this.initData(val);
        },
        deep: true
      }
    },
    mounted(){
      this.initData();
    },
    methods: {
      initData(data){
        const that = this;
        if (that.viewData.data) {
          that.fileList = [{url:data ? data.imageUrl : that.viewData.data.imageUrl}];
        } else {
          this.emptyData();
        }
      },
      confirm(){
        const that = this;
        if(!that.fileList.length){
          that.$message({
            type: 'error',
            message: '请添加图片',
            duration: 1500
          });
            return;
        }
        if(that.viewData.data){
          let config = {
            method: 'post',
            url: that.HOST + '/depart/updateDeptImage',
            data: {
              "compId": that.COMPID,
              "departId": that.viewData.data.id,
              "newImageUrl": that.fileList[0].url
            }
          };
          that.axios(config).then(function (res) {
            if (res.data.code) {
              that.close();
            } else {
              that.$message({
                type: 'error',
                message: res.data.msg,
                duration: 1500
              });
            }
          }).catch(function (error) {
            alert(error);
          });
        }else {
        }
      },
      close(){
        this.emptyData();
        this.$emit('viewStatus', false)
      },
      emptyData(){
        this.fileList = [];
      },
      handleRemove(file, fileList){
        this.fileList = [];
      },
      uploadSuccess(res, file, fileList){
        this.fileList = [{url: res.data}]
      },
      beforeAvatarUpload(file) {
        const isImg = file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png' || file.type === 'image/gif';
        const isLt2KB = file.size /1024 < 200;
        if (!isImg) {
          this.$message.error('上传头像图片只能是 jpeg/jpg/png/gif 格式!');
        }
        if (!isLt2KB) {
          this.$message.error('上传头像图片大小不能超过 200KB!');
        }
        return isImg && isLt2KB;
      }
    }
  }
</script>
<style lang="scss">
  .g-flex {
    zoom: 1;
    clear: both;
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    justify-items: center;
    padding: 10px 0;
    .el-input {
      width: 300px;
    }
  }

  .video-add > div > span {
    float: left;
    margin-right: 30px;
    width: 120px;
    margin-top: 10px;
  }

  .cameraUpload {
    .el-upload {
      display: block;
      text-align: start !important;
    }
    .el-upload-list--picture .el-upload-list__item {
      height: auto;
      padding: 10px 30px 10px 90px;
    }
    .el-upload-list--picture .el-upload-list__item-thumbnail {
      width: 170px;
      height: 170px;
    }

    .el-upload-list__item-name {
      display: none !important;
    }
  }
</style>
