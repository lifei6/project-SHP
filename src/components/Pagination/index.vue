<template>
    <div class="pagination">
        <button :disabled="pageNo == 1" @click="pageHandler(pageNo-1)">上一页</button>
      <button v-if="startNumAndEndNum.start>1" @click="pageHandler(1)" :class="{'active':pageNo==1}">1</button>
      <button v-if="startNumAndEndNum.start>2">···</button>
  
      <button v-for="(page,index) in startNumAndEndNum.end" :key="index" v-if="page>=startNumAndEndNum.start" @click="pageHandler(page)"
        :class="{'active':pageNo==page}">{{ page }}</button>

      
      <button v-if="startNumAndEndNum.end<totalPage-1">···</button>
      <button v-if="startNumAndEndNum.end<totalPage" @click="pageHandler(totalPage)" :class="{'active':pageNo==total}">{{ totalPage }}</button>
      <button :disabled="pageNo == total" @click="pageHandler(pageNo+1)">下一页</button>
      
      <button style="margin-left: 30px">共 {{ total }} 条</button>
      <!-- <span>{{ startNumAndEndNum }}--{{ pageNo }}</span> -->
    </div>
  </template>
  
  <script>
    export default {
      name: "Pagination",
      props:['pageNo','pageSize','total','continues'],
      computed:{
        totalPage(){
            return Math.ceil(this.total/this.pageSize)
        },
        startNumAndEndNum(){
            const {pageNo,continues,totalPage} = this
            let start = 0,end=0;
            if(continues>totalPage){
                start = 1
                end = totalPage
            }else{
                start = pageNo - parseInt(continues/2)
                end = pageNo + parseInt(continues/2)
                if(start<1){
                    start = 1
                    end = continues
                }else if(end>totalPage){
                    start = totalPage - continues + 1
                    end = totalPage
                }
            }
            return {start,end}
        }
      },
      methods:{
        pageHandler(page){
            this.$emit('getPageNo',page)
        }
      }
    }
  </script>
  
  <style lang="less" scoped>
    .pagination {
        text-align: center;
      button {
        margin: 0 5px;
        background-color: #f4f4f5;
        color: #606266;
        outline: none;
        border-radius: 2px;
        padding: 0 4px;
        vertical-align: top;
        display: inline-block;
        font-size: 13px;
        min-width: 35.5px;
        height: 28px;
        line-height: 28px;
        cursor: pointer;
        box-sizing: border-box;
        text-align: center;
        border: 0;
  
        &[disabled] {
          color: #c0c4cc;
          cursor: not-allowed;
        }
  
        &.active {
          cursor: not-allowed;
          background-color: #409eff;
          color: #fff;
        }
      }
    }
    .active{
        background-color: skyblue;
    }

</style>