/**
 * Created by CHENRC2 on 2017-10-10.
 */
import Vue from 'vue';
import App from './App';
import ElementUI from 'element-ui';
import 'babel-polyfill';
import Vuex from 'vuex';
import store from './common/js/vuex/store';
import 'src/assets/theme/theme-midea/index.css';
import 'src/styles/base.less';
import VueRouter from 'vue-router';
import routes from './routes'
import moment from 'moment';
import _ from 'lodash';
import './common/js/clamp.js';

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vuex);


Object.defineProperty(Vue.prototype, '$moment', { value: moment });
Object.defineProperty(Vue.prototype, '$_', { value: _ });

const router = new VueRouter({
  routes
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

export default Vue;
