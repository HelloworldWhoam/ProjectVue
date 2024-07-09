<template>
<!--  <h1>App根组件</h1>-->
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { ref } from 'vue'
const locale = ref(zhCn)
// import { onMounted } from "vue";
// import {reqLogin} from "@/api/user";
// //当组件挂载完毕时，发送请求
// onMounted(() => {
// reqLogin({username: 'admin', password:'111111'})
// });
</script>

<style scoped></style>
