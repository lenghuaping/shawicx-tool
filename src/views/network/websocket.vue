<template>
  <el-form
    :label-position="'right'"
    :model="form"
  >
    <el-form-item
      :rules="[{
        required: true,
        message: '请输入Websocket地址'
      }]"
      label="WebSocket地址"
    >
      <el-input v-model="form.socketurl" placeholder="请输入WebSocket地址"></el-input>
    </el-form-item>
    <el-button type="primary">断开</el-button>
    <el-button type="primary" @click="handleConnect">连接</el-button>
    <el-button type="primary">发送数据</el-button>
  </el-form>
  <!--  <el-container>-->
  <!--    <el-row>-->
  <!--      <el-text>当前状态</el-text>-->
  <!--    </el-row>-->
  <!--  </el-container>-->
</template>
<script lang="ts" setup>
import {reactive} from "vue";
// import WebSocketUtil from "@/utils/websocket";

// interface IWebsocketOptions {
//   pingInterval?: number;
//   pingMessage?: string;
// }
//
// const DEFAULT_PING_INTERVAL: number = 5000;
// const DEFAULT_PING_MESSAGE: string = 'ping';

const form = reactive<{
  socketurl: string | undefined,
}>({
  socketurl: 'wss://sc.uni-ubi.com/websocket/ws/monitor/1210/84E0F42008FBFF04/1',
});


const handleConnect = () => {
  if (form.socketurl) {
    // socket.connect(form.socketurl);
  }
}
</script>
