<template>
  <el-header style="text-align:right; font-size: 20px;background: #535bf2;">
    <div class="toolbar">
      <div class="toolbar_left">
        <el-icon style="margin-right: 10px; cursor: pointer">
          <Expand></Expand>
        </el-icon >
        <!--左侧面包屑-->
        <el-breadcrumb :separator-icon="ArrowRight">
          <el-breadcrumb-item>权限管理</el-breadcrumb-item>
          <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!--右侧设置-->
      <div class="toolbar_right">
        <el-button circle size="small" :icon="Refresh"  />
        <el-button circle size="small" :icon="FullScreen"  />
        <el-button circle size="small" :icon="Setting" />
        <img src="../../assets/images/Logo.png" style="width: 24px;height: 24px;margin: 0px 10px">
        <el-dropdown>
    <span class="el-dropdown-link">
      admin
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>退出登录</el-dropdown-item>

            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </el-header>
</template>

<script setup lang="ts">
import { ArrowRight ,Expand} from '@element-plus/icons-vue'
import {
  Refresh,
  Setting,
  FullScreen,
  ArrowDown,
} from '@element-plus/icons-vue'
// import BreadCrumb from './breadcrumb/index.vue'
// import Setting from './setting/index.vue'
</script>

<style lang="scss" scoped>
.toolbar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  .toolbar_left{
    display: flex;
    align-items: center;
    margin-left: 10px;
    //background: #646cff;
  }
  .toolbar_right{
    display: flex;
    align-items: center;
    //background: red;
  }
}
</style>