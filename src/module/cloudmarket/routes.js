import Manager from './views/Manager.vue';
import NotFound from 'components/core/core_page/404.vue';

// 子组件全部写这里
import Home from './views/Home/Home.vue';
import ProductDetail from './views/product/ProductDetail.vue';
import ProductManagement from './views/components/ProductManagement.vue';
import ProductPublish from './views/components/ProductPublish.vue';
// import Ratings from './views/comment/Ratings.vue';
import Login from './views/login/Login.vue';
import ContactUs from './views/components/superlinks/ContactUs.vue';
import PrivatePolicy from './views/components/superlinks/PrivatePolicy.vue';
import ServiceTerm from './views/components/superlinks/ServiceTerm.vue';
let routes = [{
		path: '/404',
		component: NotFound,
		name: '',
		hidden: true
	},{
		path:'/',
		// name:'首页',
		redirect:'/home'
	}, {
		path: '/home',
		name: '云市场',
		component: Manager,
		iconCls: 'el-icon-search',
		children: [
      /* 子路由写里面 */
      {
        path:'/home',
        name:'首页',
        component: Home,
        children: [
          {
            path: '/home/login',
            name: "首页登陆",
            component: Login,
          },
        ]
      },
      {
        path: '/cloudmarket/productdetail/:productId',
        name: "产品详情",
        component: ProductDetail,
        children: [
          // {
          //   path: '/cloudmarket/ratings',
          //   name: "评论",
          //   component: Ratings,
          // },
          {
            path: '/cloudmarket/login',
            name: "登陆",
            component: Login,
          },
        ]
      },
      {
        path: '/cloudmarket/productmanagement',
        name: "产品管理",
        component: ProductManagement,
      },
      {
        path: '/cloudmarket/productpublish',
        name: "产品发布",
        component: ProductPublish,
      },
      {
        path: '/websiteinfo/contactus',
        component: ContactUs
      },
      {
        path: '/websiteinfo/privatepolicy',
        component: PrivatePolicy
      },
      {
        path: '/websiteinfo/serviceterm',
        component: ServiceTerm
      },
    ]
	},{
		path: '*',
		hidden: true,
		redirect: {
			path: '/404'
		}
	}
];

export default routes;
