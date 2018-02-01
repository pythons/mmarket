/**
 * Created by wenZerrrrrr on 2017/10/25.  DEMO DEMO DEMO DEMO DEMO
 */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  count: 1
}

const mutations = {
  add(state) {
    state.count += 1;
  },
  reduce(state) {
    state.count -= 1;
  }
}

export default new Vuex.Store({
  state
})
