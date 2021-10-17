<template>
  <div class="rightmenu">
      <ul class="menu">
          <li>查看</li>
          <li>添加</li>
          <li>删除</li>
          <li>修改</li>
      </ul>
  </div>
</template>

<script>
export default {
    name:'rightmenu',
    props:{

    },
    data(){
        return{

        }
    },
    method:{

    }
}
</script>

<style>
    .rightmenu{
          width: 100%;
          position: absolute;
          
    }
    .rightmenu ul li{
          width: 100%;
          margin-left: -20px;
    }
    .menu{
        width: 10%;
        background: rgb(34, 18, 95);
        list-style: none;
        text-align: center;
        font-size: 15px;
        cursor: pointer;
        color: white;
        position: a;
    }
</style>