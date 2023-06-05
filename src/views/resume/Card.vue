<template>
  <el-card :body-style="props.bodyStyle || {}">
    <template #header>
      <div class="card-header">
        <el-text>{{ props.title }}</el-text>
        <el-text>{{ props.extra }}</el-text>
      </div>
    </template>
    <slot/>
  </el-card>
</template>

<script lang="ts" setup>
import type {CSSProperties} from "vue";

type Props = {
  title: string;
  extra?: string;
  bodyStyle?: CSSProperties;
}

const props = defineProps<Props>()
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
