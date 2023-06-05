<template>
  <div>
    <el-container class="container">
      <el-aside class="aside">
        <menu-list></menu-list>
      </el-aside>
      <el-container>
        <!--        <el-header class="header">Header</el-header>-->
        <el-main class="main">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script lang="ts">

import routes   from "@/routes";
import MenuList from "@/layouts/MenuList.vue"

export default {
  components: {
    'menu-list': MenuList
  },
  data() {
    return {
      menuList: routes
    }
  },
  methods: {}
}
</script>

<style>
@import "normalize.css";

/* 宽度和高度 */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

/* 滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: #f5222d;
}
</style>
