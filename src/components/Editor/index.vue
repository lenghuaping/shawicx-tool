<template>
  <div style="border: 1px solid #ccc">
    <Editor
      :initialValue="editorText"
      :options="editorOptions"
      height="500px"
      initialEditType="wysiwyg"
      previewStyle="vertical"
    />
  </div>
</template>

<script setup>
// import {onBeforeUnmount, onMounted, ref, shallowRef} from 'vue'
import {Editor} from '@toast-ui/vue-editor';
import {onMounted, reactive, ref} from "vue";

const defaultOptions = {
  minHeight: '200px',
  language: 'en-US',
  useCommandShortcut: true,
  usageStatistics: true,
  hideModeSwitch: false,
  toolbarItems: [
    ['heading', 'bold', 'italic', 'strike'],
    ['hr', 'quote'],
    ['ul', 'ol', 'task', 'indent', 'outdent'],
    ['table', 'image', 'link'],
    ['code', 'codeblock'],
    ['scrollSync'],
  ]
};

const editorOptions = reactive(defaultOptions);

const editorText = ref('')

const editor = ref();
onMounted(() => {
  const e = new Editor({
    el: editor.value,
    height: '500px',
    initialEditType: 'markdown',
    previewStyle: 'vertical',
    events: {
      change: () => emit('update:modelValue', e.getMarkdown()),
    },
  });
});
</script>

<style>
@import '@toast-ui/editor/dist/toastui-editor.css';
</style>
