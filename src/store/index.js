import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    isLoad: true,
  },
  getters: {
    products(state) {
      return state.products
    },
    isLoad(state){
      return state.isLoad
    }
  },
  mutations: {
    setSort(state, payload){
      state.sortBy = payload
    },
    setProductsToState(state, payload) {
      state.products = payload;
    },
    loadingToggle(state) {
      state.isLoad = !state.isLoad
    }
  },
  actions: {
      getProducts(state, payload) {
        setTimeout(()=>{
          state.commit('loadingToggle');
          state.commit('setProductsToState',payload);
        },150)
      },
  },
  modules: {
  }
})
