<template>
  <el-container class="layout_container-demo" style="height: 100vh">
    <el-aside width="200px">
      <el-scrollbar>
        <el-menu >
            <Logo />
<!--          展示菜单 -->
<!--   根据路由组件动态显示菜单  -->
          <Menu :menuList="userStore.menuRoutes" />
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">数据大屏</el-menu-item>
          <el-sub-menu index="3">
<!--            插槽-->
            <template #title>
              <span>权限管理</span>
            </template>
            <el-menu-item index="3-1">用户管理</el-menu-item>
            <el-menu-item index="3-2">角色管理</el-menu-item>
          </el-sub-menu>
        </el-menu>

      </el-scrollbar>
    </el-aside>

    <el-container class="container">

    </el-container>
  </el-container>

</template>

<script lang="ts" setup>
// 引入组件
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
//获取用户相关的小仓库
import useUserStore from '../store/modules/user'
let userStore = useUserStore()
import { ref } from 'vue'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 20 }).fill(item))
</script>

<style scoped>

/*

*/
  .layout-container-demo .el-header {
    position: relative;
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
  }
  .layout-container-demo .el-aside {
    color: var(--el-text-color-primary);
    background: var(--el-color-primary-light-8);
  }
  .layout-container-demo .el-menu {
    border-right: none;
  }
  .layout-container-demo .el-main {
    padding: 0;
  }
  .layout-container-demo .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
  }
</style>