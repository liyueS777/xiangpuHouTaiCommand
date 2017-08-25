<template>
    <div>
      <el-upload
        ref="uploadBox"
        class="bixbix"
        :action="configUpload"
        list-type="picture-card"
        :multiple='mult'
        drag
        :file-list="fileList"
        :on-preview="handlePictureCardPreview"
        :before-upload="beforeAvatarUpload"
        :on-remove="handleRemove" :on-success="handleSuccessUpload">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog v-model="dialogVisible" size="tiny">
        <img width="100%" :src="dialogImageUrl" class="img1" alt="">
      </el-dialog>
    </div>
</template>
<script>
    export default {
        data() {
            return {
              configUpload:'',
              mult:false,
              //给上传图片默认值--编辑使用
              fileList: [{url:''}],
//              imgUrlFileList:[],
              dialogImageUrl:'',
//              fileList: [{url: 'http://172.19.6.104:8091/NVRCT/upload/20170622/9d315850-3830-48dc-b91b-1b4b6b5c713e.png'}],
              dialogVisible: false
            }
        }, created() {
          this.configUpload = this.Host+this.$FileUpload;
          if(this.imgUrlFileList){
              this.fileList = [{url:this.imgUrlFileList}];
          }else {
            this.fileList=[]
//            this.$nextTick(()=> {
//            this.$el.querySelector('.bixbix').querySelector('ul').innerHTML = '';
//            })
          }
        },
        mounted(){
          const that = this;
          that.$nextTick(function () {
            console.log(that.$refs['uploadBox'].$children[0].$el.children);
            if(that.$refs['uploadBox'].$children[0].$el.children.length>=1){
              that.$refs['uploadBox'].$children[1].$el.style.display = 'none';
            }
          });
        }
        , methods: {
            handleRemove(file, fileList) {
              const that = this;
              that.$emit('EmptyImgUrl','');
              console.log('remove432');
              that.$nextTick(function () {
                that.$refs['uploadBox'].$children[1].$el.style.display = 'inline-block';
                //这里为了清除 一键复制带来bug，如果清楚后有元素，那么让其Ul为空
//                if(that.$refs['uploadBox'].$children[0].$children[0].$el.children.length>=1){
//                  that.$refs['uploadBox'].$children[0].$children[0].$el.innerHTML = '';
//                }
//                that.$refs['uploadBox'].$children[0].$children[0].$el.style.dis;
//                setTimeout(()=>{
//                  that.$refs['uploadBox'].$children[0].$children[0].$el.style.display = 'none';
//                },1000)
              });
            },
            handlePictureCardPreview(file) {
              this.dialogImageUrl = file.url;
              this.dialogVisible = true;
            },
            handleSuccessUpload(file){
              let that = this;
              console.log(this.$route.fullPath,123);
              //处理 一键复制时 向上传递数组 传递不了bug
              if(this.$route.fullPath=='/indexCopy'){
                  that.$store.dispatch('onActionChangeIndexCopyImgUrl',file.slice(1))
              }
              console.log(file,'success');
              that.$emit('SendToImgUrl',file.slice(1));
              that.$nextTick(function () {
                if(that.$refs['uploadBox'].$children[0].$el.children.length>=1){
                  that.$refs['uploadBox'].$children[1].$el.style.display = 'none';
                  that.$refs['uploadBox'].$children[0].$el.style.display = 'inline-block';
                }
              });

              that.btnIconDir = file.slice(1);
              that.dialogImageUrl = that.Host+file;
            },
            beforeAvatarUpload(file) {
              const isImg = file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png' || file.type === 'image/gif';
              const isLt2KB = file.size /1024/1024< 20;
              if (!isImg) {
                this.$message.error('上传环境地址图片只能是 jpeg/jpg/png/gif 格式!');
              }
              if (!isLt2KB) {
                this.$message.error('上传环境地址图片大小不能超过 20M!');
              }
              return isImg && isLt2KB;
            }
          },props:['imgUrlFileList']
        ,watch:{
            imgUrlFileList:{
                handler(newFileList,oldF){
                    console.log('Remmm',newFileList);
                  this.fileList = [{url:newFileList}];
                  if(!newFileList){
                    this.$nextTick(()=> {
                      this.$refs['uploadBox'].$children[1].$el.style.display = 'inline-block';
                      this.$refs['uploadBox'].$children[0].$children[0].$el.style.display = 'none'
                    });
                  }else{
                    this.$nextTick(()=> {
                      if(this.$refs['uploadBox'].$children[0].$el.children.length>=1){
                          //如果有src,也就是newFileList
                        this.$refs['uploadBox'].$children[0].$el.style.display = 'inline-block';
                        this.$refs['uploadBox'].$children[1].$el.style.display = 'none';
                      }
                    });
                  }

                },
                deep:true
            }
        }
      }
</script>
<style>
  .el-upload-dragger{
    width: 100% !important;
    height: 100% !important;
  }
  .auth-img div.el-upload--picture-card {
     width: 100px !important;
     height: 100px !important;
     line-height: 100px;
   }
  .auth-img li.el-upload-list__item.is-success {
    width: 100px !important;
    height: 100px !important;
    line-height: 100px;
  }

  .index-copy div.el-upload--picture-card {
    width: 60px !important;
    height: 60px !important;
    line-height: 60px;
  }
  .index-copy li.el-upload-list__item.is-success {
    width: 60px !important;
    height: 60px !important;
    line-height: 60px;
  }
  .el-dialog.el-dialog--tiny {
    top: 30% !important;
    position: fixed !important;
    /*width: 30% !important;*/
    transform:translate(-50%) !important;
  }
  /*!*.el-dialog.el-dialog--tiny:nth-of-type(1){*!*/
    /*!*top: 10% !important;*!*/
  /*!*}*!*/
  /*.el-dialog.el-dialog--tiny:nth-of-type(n-1){*/
    /*top: 30% !important;*/
  /*}*/
  /*.el-dialog.el-dialog--tiny:nth-of-type(n-4){*/
    /*top: 50% !important;*/
  /*}*/
  /*.el-dialog.el-dialog--tiny:nth-of-type(n-3){*/
    /*top: 40% !important;*/
  /*}*/
  /*.el-dialog.el-dialog--tiny:nth-of-type(n-4){*/
    /*top: 70% !important;*/
  /*}*/
</style>
