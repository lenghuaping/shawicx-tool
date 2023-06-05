<template>
  <el-container class="resume">
    <el-header>
      <el-text class="el-header-title">
        肖昌旭 - 前端开发（4年）
      </el-text>
    </el-header>
    <card title="基本信息">
      <el-descriptions border column="3">
        <el-descriptions-item label="电话" span="1">
          <el-text>13576714915</el-text>
        </el-descriptions-item>
        <el-descriptions-item label="学历" span="1">
          <el-text>全日制本科</el-text>
        </el-descriptions-item>
        <el-descriptions-item label="邮箱" span="1">
          <el-text>shawicx@skiff.com</el-text>
        </el-descriptions-item>
      </el-descriptions>
    </card>
    <card body-style="padding:0" extra="2021-04 ~ 2023-06" title="杭州宇泛智能">
      <div class="work-content">
        <list
          :list="[
            '负责 七牛云国标视频、鲁班BIM、小程序身份证读卡设备、萤石云直播设备、TPLink 路由器 等外部设备/技术 接入。',
            '负责袋鼠云自定义组件库开发，负责日常开发、问题记录、文档维护。协助组内其他成员开发自定义组件以及解决问题。',
            '大屏项目 立项、技术选型、架构，使用 Vitejs + chakra-ui + react-router + less，部门重点项目。',
            '企业微信小程序项目 立项、技术选型、架构，使用 Taro + taroify + taro-hooks。',
            '部门前端组件开发维护，16个/17个(总)。前端技术、业务文档编写维护，17篇/34篇(总)。自定义Hooks编写，14个/21个(总)',
            '负责前端项目的私有化部署维护，输出文档，解决客户问题。'
          ]"
        />
      </div>
    </card>
    <card body-style="padding:0" extra="2019-07 ~ 2021-03" title="杭州友成科技">
      <list
        :list="[
          'ERP/MES的PC管理平台与MES的 APP 操作平台的新功能评审开发维护与原功能的维护优化，3个月时间对旧页面进行 TS　重构',
          '一些小工具的开发与维护，提升开发速度与效率（例如根据接口自动生成TypeScript相关代码与文件等）（node ）。',
          '推动团队使用TypeScript，总结制定了TSLint的规则与相关文档，完善前端规范文档。',
        ]"
      />
    </card>
    <card title="个人项目">
      <list list=""></list>
    </card>
  </el-container>
</template>

<script setup>
import Card from "./Card.vue"
import List from "./List.vue"
</script>

<style lang="less" scoped>
.resume {
  width: 794px;
  height: 1123px;
  padding: 24px;
  border: 2px solid salmon;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.work-content {
  margin: 0 auto;

  & li {
    margin: 8px 0;
    font-size: 16px;
    font-weight: 400;
  }
}

.work-yusei {
  margin-top: 12px;
}

.el-header-title {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: 700;
}

.main-header {
  display: flex;
  align-items: center;
}

</style>
