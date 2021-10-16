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
             @node-contextmenu='rightclick'
             @node-click='clicktree'
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

    <right-menu id="rightmenu" v-show="rightmenuappeal"></right-menu>
   </div>
</template>

<script>
import rightMenu from '../../components/rightMenu/rightMenu.vue'
export default {
    name:'LOGIN',
    components:{
      // eslint-disable-next-line vue/no-unused-components
      rightMenu
    },
    data(){
    return {
        x:0,
        rightmenuappeal:false,
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
      // eslint-disable-next-line no-unused-vars
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      todrap(){
        this.$router.push('')
      },
      rightclick(e){
         let that = this
        this.rightmenuappeal = true
        console.log(e.target)
        let rightmenus = document.getElementById('rightmenu')
        rightmenus.style.position = 'absolute'
        rightmenus.style.top = e.clientY + 'px'
        rightmenus.style.left = e.clientX + 'px'
       
        document.addEventListener('click',(e)=>{
          console.log(e.target)
          if(e.target != document.getElementById('rightmenu')){
             that.rightmenuappeal = false
          }
        }
        )
      },
      clicktree(){
         this.rightmenuappeal = false
      }
     }
    
}
    


</script>

 <style>
	@import url('./index.css');
</style>
