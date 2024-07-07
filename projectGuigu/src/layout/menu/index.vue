<template>
<h1>
  {{menuList }}
</h1>
  <template v-for="(item,index)in menuList" :key="item.path">
<!--    <el-menu-item v-if="item.children">-->
<!--        <template #title>-->
<!--          <span>{{item.path}}</span>-->
<!--        </template>-->
<!--    </el-menu-item>-->
  </template>

</template>

<script setup lang="ts" >
//获取父组件传递过来的全部路由数组
defineProps(['menuList'])
</script>

<style scoped>

</style>