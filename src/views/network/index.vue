<template>
  <el-tabs type="border-card">
    <el-tab-pane label="WebSocket">
      <Websocket/>
    </el-tab-pane>
  </el-tabs>

</template>

<script lang="ts" setup>
import Websocket from './websocket.vue';
</script>
