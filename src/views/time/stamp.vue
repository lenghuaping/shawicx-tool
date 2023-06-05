<template>
  <el-form
    ref="formRef"
    :label-position="'right'"
    :model="form"
    label-width="20px"
  >
    <el-row>
      <el-col :span="3">
        时间戳转日期
      </el-col>
      <el-col :span=8>
        <el-form-item
          label=""
          prop="stamp"
        >
          <el-input v-model.number="form.stamp" placeholder="请输入时间戳"/>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="" prop="stampType">
          <el-select v-model="form.stampType" placeholder="please select your zone">
            <el-option label="秒" value="1"/>
            <el-option label="毫秒" value="2"/>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" @click="stampToTime">转换</el-button>
      </el-col>
      <el-col :span="5">
        <Copy :title="String(form.stampResult || '点击复制')"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="3">
        日期转时间戳
      </el-col>
      <el-col :span="8">
        <el-form-item label="">
          <el-input v-model="form.time" placeholder="请输入时间"/>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="">
          <el-select v-model="form.timeType" placeholder="please select your zone">
            <el-option label="秒" value="1"/>
            <el-option label="毫秒" value="2"/>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" @click="timeToStamp">转换</el-button>
      </el-col>
      <el-col :span="5">
        <Copy :title="String(form.timeResult || '点击复制')"/>
      </el-col>
    </el-row>
  </el-form>
</template>

<script lang="ts" setup>
import {reactive, ref} from 'vue';
import dayjs from "dayjs";
import type {FormInstance} from 'element-plus'
import {DATE_TIME_FORMAT} from "@/constant";
import Copy from '@/components/Copy/index.vue'

const formRef = ref<FormInstance>()

// do not use same name with ref
const form = reactive<{
  stamp: number | undefined,
  stampType: string | undefined,
  stampResult: string | undefined,
  time: string | undefined,
  timeType: string | undefined,
  timeResult: number | undefined,
}>({
  stamp: undefined,
  stampType: "1",
  stampResult: undefined,
  time: dayjs().format(DATE_TIME_FORMAT),
  timeType: '1',
  timeResult: undefined,
})

// 时间戳转时间
const stampToTime = () => {
  if (!dayjs(form.stamp).isValid()) {
    return
  }
  // 是否转换为秒
  const transferType = form.stampType === "1";
  if (transferType) {
    form.stampResult = dayjs.unix(form.stamp as number).format(DATE_TIME_FORMAT)
  } else {
    form.stampResult = dayjs(form.stamp as number).format(DATE_TIME_FORMAT)
  }
}

const timeToStamp = () => {
  if (!dayjs(form.time).isValid()) {
    return
  }
  console.log(form.time as string, 't')
  // 是否转换为秒
  const transferType = form.timeType === "1";
  if (transferType) {
    form.timeResult = dayjs(form.time).unix();
  } else {
    form.timeResult = dayjs(form.time).valueOf()
  }
}
</script>
