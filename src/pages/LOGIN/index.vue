<template>
  <div class="wrapper">
  <el-tabs :tab-position="tabPosition" style="height: 200px;">
    <el-tab-pane label="用户管理">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理">配置管理</el-tab-pane>
    <el-tab-pane label="文书模板需要维护">  
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">文书模板管理</el-menu-item>
        <el-menu-item index="2">语法模板管理</el-menu-item>
        <el-menu-item index="3">语句模板管理</el-menu-item>
        </el-menu>
    </el-tab-pane>
    <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
  </el-tabs>
  <div class="searchInput">
    全局搜索:<input>
  </div>
  <div class="wsmbgl">
    <span class="rightMenu"  v-if="x"  >
      <li>添加</li>
      <li>删除</li>
      <li>编辑</li>
    </span>
    <button @click="todrap">123</button>
 <div ref="treeDiv" class="tree-container">
    <el-tree id="tree" class="tree" 
             :data="tableData" 
             :indent="0" 
             node-key="id" 
             >
    </el-tree>
  </div>
  
  <el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :before-remove="beforeRemove"
  multiple
  :limit="3"
  :on-exceed="handleExceed"
  :file-list="fileList">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
</div>
   </div>
</template>

<script>
export default {
    name:'LOGIN',
    data(){
    return {
        x:0,
        tabPosition: 'left',
        menus:['文书模板管理','语法模板管理','语句模板管理'],
        activeIndex: '1',
        tableData:[{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }],
          defaultProps: {
          children: 'children',
          label: 'label'
        },
        fileList: [{name: 'food.jpeg', url: 'C:/Users/Lenovo/Desktop/load'}]

    }
    },
     methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleNodeClick(data) {
        console.log(data);
      },
       rightClick() {
        this.x = 1
        document.addEventListener('click',this.menusClose)
    },
    menusClose(){
      this.x = 0
    },
     handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      todrap(){
        this.$router.push('')
      }
     }
    
}
    


</script>

 <style>
	.tree .el-tree-node {
    position: relative;
    padding-left: 16px;
  }
  .tree-container .el-tree>.el-tree-node:after {
    border-top: none;
}
  .tree .el-tree-node__children {
    padding-left: 16px;
  }
    .tree .el-tree-node :last-child:before {
    height: 38px;
  }
    .tree .el-tree-node:before {
    content: "";
    left: -8px;
    position: absolute;
    right: auto;
    border-width: 1px;
     border-left: 1px dashed black;
    bottom: 0px;
    height: 100%;
    top: -25px;
    width: 1px;
  }
    .tree .el-tree-node:after {
    content: "";
    left: -4px;
    position: absolute;
    right: auto;
    border-width: 1px;
     border-top: 1px dashed black;
    height: 20px;
    top: 12px;
    width: 24px;
  }
   .tree .el-tree> .el-tree-node:before {
    border-left: none;
  }
  .el-tree > .el-tree-node:before {
    border-left: none;
  }
  .el-tree> .el-tree-node:after {
    border-top: none;
  }
  
</style>
