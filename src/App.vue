<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/account"><el-button>會員帳號管理</el-button></router-link>
    </div>

    <div>
      <router-link to="/CtoF"><el-button>生命週期範例</el-button></router-link>
    </div>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
 
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.el-button{
  margin-bottom:20px
}
form{
  margin-top: 20px;
}
.el-radio-group {
    font-size: 0;
    margin-left: -260px;
}
</style>
