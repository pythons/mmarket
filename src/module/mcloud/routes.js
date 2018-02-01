import NotFound from 'components/core/core_page/404.vue';
import Manager from './views/Manager.vue';
// 子组件全部写这里
import Home from './views/Home/Home.vue';
import ProductDetail from './views/product/ProductDetail.vue';
import ECS from './views/components/net/ECS';
import VDC from './views/components/net/VDC';
import SLB from './views/components/net/SLB';
import VHD from './views/components/DATEBASE/VHD';
import RDS from './views/components/DATEBASE/RDS';
import OCS from './views/components/DATEBASE/OCS';
import OSS from './views/components/DATEBASE/OSS';
import Inspace from './views/components/plat/Inspace';
import ESB from './views/components/plat/ESB';
import MVoD from './views/components/plat/MVoD';
import MS from './views/components/plat/MS';
import MAE from './views/components/plat/MAE';
import MCD from './views/components/plat/MCD';
import MD from './views/components/plat/MD';
import MPS from './views/components/plat/MPS';
import MIR from './views/components/Intelligence/MIR';
import AIP from './views/components/Intelligence/AIP';
import CMS from './views/components/safe/CMS';
import about from './views/components/aboutmcloud/about';
import history from './views/components/aboutmcloud/history';
import luntan from './views/components/aboutmcloud/luntan';
import blog from './views/components/aboutmcloud/blog';
import contact from './views/components/aboutmcloud/contact';
import join from './views/components/aboutmcloud/join';
import PrivatePolicy from './views/components/superlinks/PrivatePolicy.vue';
import ServiceTerm from './views/components/superlinks/ServiceTerm.vue';
let routes = [{
		path: '/404',
		component: NotFound,
		name: '404',
		hidden: true
	},{
		path:'/',
		redirect:'/home'
  },{
		path: '*',
		hidden: true,
		redirect: {
			path: '/404'
		}
  },{
    path:'/home',
    component: Manager,
    name: '首页',
    children:[
      {
        path: '/home',
        name: '主页',
        component: Home,
      },
      {
            path: '/mcloud/productdetail/net/ECS',
            name: "计算机与网络",
            component: ProductDetail,
            children:[
                  {
                    path:'/mcloud/productdetail/net/ECS',
                    name:'云主机（ECS)',
                    component: ECS
                  },
                  {
                    path:'/mcloud/productdetail/net/VDC',
                    name:'虚拟网络（VDC)',
                    component: VDC
                  },
                  {
                    path:'/mcloud/productdetail/net/SLB',
                    name:'负载均衡（SLB)',
                    component: SLB
                  }
            ]
      },
      {
            path: '/mcloud/productdetail/database/VHD',
            name: "存储与数据库",
            component: ProductDetail,
            children:[
                  {
                    path:'/mcloud/productdetail/database/VHD',
                    name:'云硬盘（VHD)',
                    component: VHD
                  },
                  {
                    path:'/mcloud/productdetail/database/RDS',
                    name:'云数据库（RDS)',
                    component: RDS
                  },
                  {
                    path:'/mcloud/productdetail/database/OCS',
                    name:'云缓存（OCS)',
                    component: OCS
                  },
                  {
                    path:'/mcloud/productdetail/database/OSS',
                    name:'对象存储（OSS)',
                    component: OSS
                  }
            ]
      },
      {
            path: '/mcloud/productdetail/plat/Inspace',
            name: "平台服务",
            component: ProductDetail,
            children:[
                  {
                    path:'/mcloud/productdetail/plat/Inspace',
                    name:'工业云平台（Inspace）',
                    component: Inspace
                  },
                  {
                    path:'/mcloud/productdetail/plat/ESB',
                    name:'ESB',
                    component: ESB
                  },
                  {
                    path:'/mcloud/productdetail/plat/MVoD',
                    name:'视频点播（MVoD）',
                    component: MVoD
                  },
                  {
                    path:'/mcloud/productdetail/plat/MS',
                    name:'美易搜（MS）',
                    component: MS
                  },
                  {
                    path:'/mcloud/productdetail/plat/MAE',
                    name:'应用引擎（MAE）',
                    component: MAE
                  },
                  {
                    path:'/mcloud/productdetail/plat/MCD',
                    name:'美的云网盘（MCD）',
                    component: MCD
                  },
                  {
                    path:'/mcloud/productdetail/plat/MD',
                    name:'数传通道（MD）',
                    component: MD
                  },
                  {
                    path:'/mcloud/productdetail/plat/MPS',
                    name:'推送服务（MPS）',
                    component: MPS
                  }
            ]
      },
      {
            path: '/mcloud/productdetail/Intelligence/MIR',
            name: "人工智能",
            component: ProductDetail,
            children:[
                  {
                    path:'/mcloud/productdetail/Intelligence/MIR',
                    name:'图像识别（MIR）',
                    component: MIR
                  },
                  {
                    path:'/mcloud/productdetail/Intelligence/AIP',
                    name:'AI计算平台（AIP）',
                    component: AIP
                  }
            ]
      },
      {
            path: '/mcloud/productdetail/safe/CMS',
            name: "安全与运维",
            component: ProductDetail,
            children:[
                  {
                    path:'/mcloud/productdetail/safe/CMS',
                    name:'云监控（CMS）',
                    component: CMS
                  }
            ]
      },
      {
            path: '/mcloud/productdetail/about',
            name: "关于美的云",
            component: ProductDetail,
            children:[
              {
                path: '/mcloud/productdetail/about',
                name:'关于我们',
                component: about
              },{
                    path: '/mcloud/productdetail/history',
                    name:'发展历程',
                    component: history
              },
              {
                    path: '/mcloud/productdetail/luntan',
                    name:'美的云论坛',
                    component: luntan
              },
              {
                    path: '/mcloud/productdetail/blog',
                    name:'美的云博客',
                    component: blog
              },
              {
                    path: '/mcloud/productdetail/contact',
                    name:'联系我们',
                    component: contact
              },{
                    path: '/mcloud/productdetail/join',
                    name:'加入我们',
                    component: join
              }
            ]
      },{
            path: '/websiteinfo/privatepolicy',
            component: PrivatePolicy
      },{
            path: '/websiteinfo/serviceterm',
            component: ServiceTerm
      }
    ]
  }
];

export default routes;
