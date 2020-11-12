import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    isLoad: true,
    cart: []
  },
  getters: {
    products(state) {
      return state.products
    },
    isLoad(state){
      return state.isLoad
    },
    cart(state) {
      return state.cart
    },
    cartLength(state) {
      return state.cart.length
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
    },
    setCart(state, product) {
      if (state.cart.length) {

        let isProductExists = false;

        state.cart.map(item=>{
          if (item.id === product.id) {
            isProductExists = true;
            item.quantity++;
          }
        });
        if (!isProductExists){
          state.cart.push(product);
          product.quantity++;
        }
      } else {
        state.cart.push(product);
        product.quantity++;
      }
    },
    removeFromCart(state, id){
      let cart = state.cart.filter(item =>{
        if (item.id !== id) {
          return item
        }}
      );
      state.cart = cart;
    },
    cartMinus(state,id) {
      state.cart.filter(item=>{
        if (item.id === id) {
          if(item.quantity > 1){
            item.quantity--
          }
        }
      })
    },
    cartPlus(state,id) {
      state.cart.filter(item=>{
        if (item.id === id) {
          item.quantity++
        }
      })
    },
    clearCart(state) {
      state.cart = []
    }
  },
  actions: {
      getProducts(state, payload) {
        setTimeout(()=>{
          state.commit('loadingToggle');
          state.commit('setProductsToState',payload);
        },2000)
      },
      addToCart(state, product) {
        state.commit('setCart', product)
      },
      deleteFromCart(state, id){
        state.commit('removeFromCart', id)
      },
      itemCartMinus(state, id){
        state.commit('cartMinus', id)
      },
      itemCartPlus(state, id){
        state.commit('cartPlus', id)
      },
      getCartClear(state){
        state.commit('clearCart')
      }
  },
  modules: {
  }
})
