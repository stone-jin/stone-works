import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/setting', component: '@/pages/setting' },
    { path: '/feedback', component: '@/pages/feedback' },
    { path: '/application', component: '@/pages/application' },
    { path: '/createApp', component: '@/pages/createApp'},
    { path: '/createAppProgress', component: '@/pages/createAppProgress'},
    { path: '/appInfo', component: '@/pages/appInfo'}
  ],
  mfsu: {},
  fastRefresh: {},
});
