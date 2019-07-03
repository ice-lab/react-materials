// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import NotFound from '@/components/NotFound';
import Dashboard from '@/pages/Dashboard';
import BlankLayout from '@/layouts/BlankLayout';

const routerConfig = [
  {
    path: '/',
    component: BlankLayout,
    children: [{
      path: '/dashboard',
      component: Dashboard,
    }, {
      component: NotFound,
    }],
  },
];

export default routerConfig;
