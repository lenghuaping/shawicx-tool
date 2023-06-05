<template>
  <el-container class="copy">
    <el-text type="primary">
      {{ props.title }}
    </el-text>
    <el-icon class="copy_icon" @click="handleCopy(props.title)">
      <CopyDocument/>
    </el-icon>
  </el-container>
</template>

<script lang="ts">
import {writeText} from '@tauri-apps/api/clipboard';

const handleCopy = async (text: string) => {
  console.log('点击复制')
  const result = await writeText(text);
  console.log(result, 'a')
}
</script>

<script lang="ts" setup>
import {CopyDocument} from "@element-plus/icons-vue";

type Props = {
  title: string | number;
}

const props = withDefaults(defineProps<Props>(), {
  title: 'copy',
});
</script>

<style scoped>
.copy {
  display: flex;
  align-items: center;
}

.copy_icon {
  margin-left: 12px;
  cursor: pointer;
}
</style>
