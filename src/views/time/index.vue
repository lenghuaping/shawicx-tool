<template>
  <el-tabs type="border-card">
    <el-tab-pane label="时间戳转换">
      <Stamp/>
    </el-tab-pane>
    <el-tab-pane label="日期差值计算">
      <Diff/>
    </el-tab-pane>
  </el-tabs>

</template>

<script lang="ts" setup>
import Stamp from './stamp.vue';
import Diff from './diff.vue';
</script>
