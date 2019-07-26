<template>
  <div id="app">
    <div>
    
    <router-link to="/insert"><el-button>新增</el-button></router-link>
    <router-link to="/update"><el-button>修改</el-button></router-link>
    <router-link to="/delete"><el-button>刪除</el-button></router-link>
    <router-link to="/select"><el-button>查詢</el-button></router-link>

    </div>
   
    <router-view></router-view>
   
  </div>
</template>

<script>
export default {
    name: 'App',
} 

</script>