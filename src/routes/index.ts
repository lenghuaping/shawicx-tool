import type {RouteRecordRaw} from "vue-router";

const Home = () => import('@/views/home/index.vue')
const Resume = () => import('@/views/resume/index.vue');
const Timestamp = () => import('@/views/time/index.vue');
const Network = () => import('@/views/network/index.vue');

const routes: RouteRecordRaw [] = [
  {
    path: '/first',
    component: Home,
    name: '一级菜单1',
    meta: {
      icon: 'el-icon-location',
    },
    children: []
  }, {
    path: '/network',
    component: Network,
    name: '网络工具',
    meta: {
      icon: 'el-icon-location',
    },
    children: []
  },
  {
    path: '/time',
    component: Timestamp,
    name: '日期工具',
    meta: {
      icon: 'el-icon-location',
    },
  },
  {
    path: '/resume',
    component: Resume,
    name: '简历',
    meta: {
      icon: 'el-icon-location',
    },
  },
  {
    path: '/time',
    name: '一级菜单2',
    meta: {
      icon: 'el-icon-menu',
    },
    children: [
      {path: '/time/1123', component: Home, name: '二级菜单2-1', meta: {}},
      {path: '/second/menu2-2', component: Home, name: '二级菜单2-2', meta: {}}
    ]
  }
]

export default routes
