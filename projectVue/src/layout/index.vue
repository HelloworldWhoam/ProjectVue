<template>
  <el-container class="layout_container-demo" style="height: 100vh">
    <el-aside
        width="200px"
    >
      <el-scrollbar>
        <el-menu
            active-text-color="#fff"
            background-color="#001529"
            text-color="#959ea6"
            :router="true">
          <Logo />
          <!--          展示菜单 -->
          <!--   根据路由组件动态显示菜单  -->
          <Menu :menuList="userStore.menuRoutes" />


        </el-menu>

      </el-scrollbar>
    </el-aside>



    <el-container class="container">
      <TabBar style="width: 100%"/>



    </el-container>


  </el-container>

</template>

<script lang="ts" setup>
// 引入组件
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import TabBar from './tabbar/index.vue'
//获取用户相关的小仓库
import useUserStore from '../store/modules/user'
let userStore = useUserStore()


</script>

<style scoped>

.layout-container-demo {
  height: 100%;
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  position: absolute;
  padding: 20px;
  left: 200px;
  top: 60px;
  transition: all 0.3s;
  width: calc(100% - 200px);
  height: calc(100vh - 60px);
}

.el-aside {
  background-color: #001529 !important;
  transition: all 0.3s;
}
.el-header {
  background-color: #fff !important;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  z-index: 999;
}
.isCollapse {
  width: 56px;
}


</style>