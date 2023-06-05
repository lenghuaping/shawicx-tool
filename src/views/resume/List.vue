<template>
  <ol>
    <li v-for="item in list">{{ item }}</li>
  </ol>
</template>

<script lang="ts" setup>

type Props = {
  list: string[];
}

const props = defineProps<Props>();
</script>
