import Vue from 'vue';
import Vuex from 'vuex';
import { productGetters, manufacturerGetters } from './getters';
import { productMutations, manufacturerMutations, cartMutations } from './mutations';
import { productActions, manufacturerActions } from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    cart: [],
    showLoader: false,
    product: {},
    products: [],
    manufacturers: [],
    isLogged: !!localStorage.getItem('token'),
  },
  // GETTERS
  getters: Object.assign({}, productGetters, manufacturerGetters),
  actions: Object.assign({}, productActions, manufacturerActions),
  mutations: Object.assign({}, productMutations, manufacturerMutations, cartMutations),
});
