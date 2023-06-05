<template>
  <div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="menu-list"
      text-color="#fff"
    >
      <div v-for="item in menuList">
        <el-sub-menu
          v-if="item.children?.length"
          :key="item.path"
          :index="item.path"
        >
          <template #title>
            <span v-if="item.children?.length">{{ item.name }}</span>
          </template>
          <el-menu-item
            v-for="subItem in item.children"
            v-if="item.children?.length"
            :key="subItem.path"
            :index="subItem.path"
            :route="subItem.path"
            @click="handleRoute(subItem.path)"
          >
            {{
              subItem.name
            }}
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item
          v-else
          :key="item.path"
          :index="item.path"
          :route="item.path"
          @click="handleRoute(item.path)"
        >
          {{
            item.name
          }}
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script lang="ts">

import routes                from "@/routes";
import {useRoute, useRouter} from 'vue-router';


export default {
  setup() {
    const router = useRouter();
    const route = useRoute();

    return {
      router,
      route
    }
  },
  data() {
    return {
      menuList: routes,
    }
  },
  methods: {
    handleRoute(path: string) {
      // console.log(router.hasRoute(path), 'handleRoute')
      this.router.push({
        path,
        query: {
          // ...route.query,
        },
      })
    },
  }
}
</script>

<style lang="less" scoped>
.menu-list {
  height: 100vH;
}
</style>
