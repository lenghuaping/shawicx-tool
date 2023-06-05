import {createApp} from "vue";
import routes from "@/routes";
import * as VueRouter from "vue-router";

import App from "./App.vue";

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 创建并挂载根实例
const app = createApp(App)
const router = VueRouter.createRouter({
  // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: VueRouter.createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
//确保 _use_ 路由实例使
//整个应用支持路由。
app.use(router)

app.mount('#app')
